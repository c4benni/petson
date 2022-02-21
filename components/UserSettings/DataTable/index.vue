<template>
  <!-- eslint-disable vue/valid-v-slot -->

  <v-data-table
    class="elevation-1"
    v-bind="tableProps"
    @update:items-per-page="setItemsPerPage"
  >
    <template v-if="!ordersLength" #body>
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
      <Skeleton
        :loading="latestOrder.key"
        class="h-[20px] w-[180px] rounded-full"
      >
        <UiText
          :key="latestOrder.key"
          :label="item.uuid"
          opacity="secondary"
          variant="body-2"
        />
      </Skeleton>
    </template>

    <template #item.status="{ item }">
      <Skeleton
        :loading="latestOrder.key"
        class="h-[24px] w-[56px] rounded-full"
      >
        <UserSettingsDataTableChip
          :key="latestOrder.key"
          :status="item.status"
        />
      </Skeleton>
    </template>

    <template #item.invoice>
      <v-btn
        icon
        tile
        disabled
        class="rounded grey-300 text-secondary--text mr-[12px]"
      >
        <v-icon>mdi-tray-arrow-down</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { headers } from './utils'

export default {
  name: 'UserSettingsDataTable',

  data: () => ({
    headers,
  }),

  async fetch() {
    const { error, data } = await this.getOrders()
  },

  computed: {
    ...mapState('user', ['latestOrdersRowsPerPage', 'latestOrder']),

    ordersLength() {
      if (this.loading) return 0
      return this.latestOrder.items.length
    },

    // v-data-table props
    tableProps() {
      return {
        headers: this.headers,
        items: this.orders,
        itemsPerPage: this.latestOrdersRowsPerPage,
        serverItemsLength: this.loading ? 0 : this.ordersLength,
        loading: this.loading ? 'info' : false,
        disablePagination: this.loading,
        disableItemsPerPage: this.loading,
        itemsPerPageOptions: this.itemsPerPageOptions,
        disableSort: !!(this.loading || !this.ordersLength),
      }
    },

    // table is fetching data for the first;
    loading() {
      return !this.latestOrder.key
    },

    orders() {
      return this.latestOrder.items
    },

    // return items to be shown in the rows-per-page select dropdown.
    // the last item that shows as all will show the length of user/latestOrders[]
    // also, the return value will only contain numbers that are less than user/latestOrdersRowsPerPage
    itemsPerPageOptions() {
      const lastLength = this.latestOrder.items.length || 0

      return [5, 10, 15, lastLength].filter(
        (item) => item >= this.latestOrdersRowsPerPage
      )
    },
  },

  methods: {
    ...mapActions('user', ['getOrders']),

    getStatusColor(status) {
      const statusColor = {
        shipped: 'green',
        paid: 'green',
        pending: 'orange',
        open: 'blue',
        cancelled: 'gray',
      }
      return statusColor[status]
    },

    setItemsPerPage(count) {
      this.$store.commit('user/SET_ORDERS_ROWS_PER_PAGE', count)
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
