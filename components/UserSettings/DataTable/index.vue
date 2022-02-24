<template>
  <!-- eslint-disable vue/valid-v-slot -->

  <v-data-table
    ref="table"
    class="elevation-1"
    v-bind="tableProps"
    v-on="tableEvents"
  >
    <template v-if="loading || !latestOrderTotal" #body>
      <UserSettingsDataTableEmpty :loading="loading" @on-refresh="getOrders" />
    </template>

    <template #top>
      <UiText
        tag="h3"
        label="Latest Orders"
        class="pt-[14px] pl-[20px] pb-[8px]"
      />
    </template>

    <template #item.uuid="{ item }">
      <UiText :label="item.uuid" opacity="secondary" variant="body-2" />
    </template>

    <template #item.status="{ item }">
      <UserSettingsDataTableChip :status="item.status" />
    </template>

    <template #item.invoice="{ item }">
      <UserSettingsDataTableInvoice :item="item" />
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { headers } from './utils'
import { nextFrame } from '~/components/utils'

export default {
  name: 'UserSettingsDataTable',

  data: () => ({
    headers,
  }),

  async fetch() {
    await this.getOrders()
  },

  computed: {
    ...mapState('user', ['latestOrder']),

    ...mapGetters('user', ['loading', 'latestOrderItems', 'latestOrderTotal']),

    dialogActive() {
      return this.$route.query.modal === 'user-settings'
    },

    page: {
      get() {
        return parseFloat(this.$route.query.page) || 1
      },
      set(val) {
        if (typeof val === 'string' && this.page !== val) {
          this.replaceRouteQuery({
            page: parseFloat(val) || 1,
          })
        }
      },
    },

    sortBy: {
      get() {
        return this.$route.query.sortBy
      },
      set(val) {
        if (typeof val === 'string' && this.sortBy !== val) {
          // reset desc filter when sortBy changes
          this.replaceRouteQuery({
            sortBy: val,
            desc: 0,
          })
        }
      },
    },

    desc: {
      get() {
        return this.$route.query.desc
      },
      set(val) {
        const desc = val ? 1 : 0
        if (typeof val === 'boolean' && this.desc !== desc) {
          this.replaceRouteQuery({
            desc,
          })
        }
      },
    },

    limit: {
      get() {
        return parseFloat(this.$route.query.limit) || 5
      },
      set(val) {
        const canReplaceRoute =
          isFinite(val) && this.dialogActive && val !== this.limit

        if (canReplaceRoute) {
          this.replaceRouteQuery({
            limit: val,
          })
        }
      },
    },

    // get filters, so watcher could call this.applyFilters() when any value changes;
    filters() {
      return `${this.page}-${this.sortBy}-${this.desc}-${this.limit}`
    },

    // v-data-table props to avoid clustering template
    tableProps() {
      return {
        page: this.page,
        headers: this.headers,
        items: this.latestOrder.items,
        itemsPerPage: this.limit,
        serverItemsLength: this.loading ? 0 : this.latestOrderTotal,
        loading: this.loading ? 'info' : false,
        disablePagination: this.loading,
        disableItemsPerPage: this.loading,
        itemsPerPageOptions: this.limitOptions,
        disableSort: !!(this.loading || !this.latestOrderTotal),
      }
    },

    tableEvents() {
      return {
        updateSortBy: (val) => (this.sortBy = val),
        'update:sort-desc': (val) => (this.desc = val),
        'update:items-per-page': this.setItemsPerPage,
        'update:page': this.updatePage,
      }
    },

    // return items to be shown in the rows-per-page select dropdown.
    // the last item that shows as `All` will show `getters.latestOrderTotal`
    itemsPerPageOptions() {
      const lastLength = this.latestOrder.items.length || 0

      return [5, 10, 15, lastLength].filter((item) => item >= this.limit)
    },
  },

  watch: {
    filters: 'applyFilters',
  },

  methods: {
    ...mapActions('user', ['getOrders']),

    async replaceRouteQuery(query = {}) {
      await nextFrame()

      this.$router.replace({
        query: {
          ...this.$route.query,
          ...query,
        },
      })
    },

    async applyFilters() {
      await nextFrame()

      await this.getOrders(true)

      // scroll dialog to top after filter applies.
      const table = this.$refs.table

      const dialog = table.$el.closest('.v-dialog')

      dialog.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
      })
    },

    setItemsPerPage(count) {
      if (count > -1) {
        this.limit = count
      } else {
        this.limit = this.latestOrderTotal
      }
    },

    updatePage(count) {
      this.replaceRouteQuery({
        page: count,
      })
    },
  },
}
</script>

<style scoped>
#__nuxt .v-data-table >>> th,
#__nuxt .v-data-table >>> td,
#__nuxt .v-data-table >>> .v-data-footer {
  border-color: rgba(0, 0, 0, 0.08);
}

#__nuxt .v-data-table >>> th:not(:hover) {
  color: var(--v-text-secondary-base);
}

#__nuxt .v-data-table >>> .v-data-table-header th:last-of-type {
  padding-right: 0;
}

#__nuxt .v-data-table >>> .v-data-table__wrapper {
  padding: 0 30px;
}

#__nuxt .v-data-table >>> .v-data-footer {
  color: var(--v-grey-base);
}
</style>
