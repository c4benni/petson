<template>
  <BaseDialog
    v-model="modelSync"
    :transition="transition"
    content-class="w-[1093px]"
  >
    <v-sheet class="p-[48px] pt-0">
      <v-container ref="root" class="mb-[49px]">
        <v-row justify="center" no-gutters>
          <v-col cols="12">
            <UiText
              id="dialog-title"
              tag="h2"
              label="User settings"
              opacity="primary"
              variant="h5"
              class="text-center mb-[44px] mt-[-24px]"
            />
          </v-col>

          <v-col cols="12" class="px-[24px]">
            <UserSettingsInfo />
          </v-col>
        </v-row>
      </v-container>

      <UserSettingsDataTable />
    </v-sheet>
  </BaseDialog>
</template>

<script>
import { queryModal } from '~/components/mixins/routeQueryModal'

export default {
  name: 'UserSettingsDialog',

  mixins: [queryModal],

  data: () => ({}),

  head() {
    return {
      title: this.pageTitle,
    }
  },

  computed: {
    pageTitle() {
      return this.$route.query.modal === 'user-settings'
        ? 'Settings'
        : undefined
    },

    modelSync: {
      get() {
        if (typeof this.modalQuery === 'string') {
          return this.modalQuery === 'user-settings'
        }

        return false
      },

      set(val) {
        // clear queries when dialog closes
        const filterQueries = val
          ? {}
          : {
              page: undefined,
              sortBy: undefined,
              limit: undefined,
              desc: undefined,
            }

        const setModal = (modal) =>
          this.$router.push({
            query: {
              ...this.$route.query,
              modal,
              ...filterQueries,
            },
          })

        if (val === false) {
          setModal(undefined)
        }
      },
    },
  },
}
</script>
