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
              variant="primary"
              size="lg"
              class="text-center mb-[44px] mt-[-24px]"
            />
          </v-col>

          <v-col cols="12" class="px-[24px]">
            <UserSettingsInfo v-bind="info" />
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

  data: () => ({
    info: {
      avatar: '',
      userInfo: {
        name: 'John Rollingston',
        'phone number': '(559) 979-6096',
        address: '1285 Fallen Pioneer Heights, Dallas, TX',
        'date joined': '14. 9. 2020.',
        email: 'j.sharp@hotmail.com',
        'marketing preference': 'No',
      },
    },
  }),

  head() {
    return {
      title:
        this.$route.query.modal === 'user-settings' ? 'Settings' : undefined,
    }
  },

  computed: {
    modelSync: {
      get() {
        if (typeof this.modalQuery === 'string') {
          return this.modalQuery === 'user-settings'
        }

        return false
      },

      set(val) {
        const setModal = (modal) =>
          this.$router.push({
            query: {
              ...this.$route.query,
              modal,
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
