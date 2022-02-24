<template>
  <v-btn
    icon
    tile
    :disabled="loading"
    :loading="fetchingLink"
    class="rounded grey-300 text-secondary--text mr-[12px]"
    @click="downloadOrder"
  >
    <v-icon>mdi-tray-arrow-down</v-icon>
  </v-btn>
</template>

<script>
import { requiredProp } from '~/components/utils'
import requestDownload from '~/services/user/orders/download'

export default {
  name: 'UserSettingsDataTableInvoice',

  props: {
    item: requiredProp(Object),
    loading: Boolean,
  },

  data: () => ({
    // to show loader
    fetchingLink: false,
  }),

  methods: {
    async downloadOrder() {
      this.blobUrl = null
      this.fetchingLink = true

      const { error } = await requestDownload.call(this, this.item.uuid)

      if (error) {
        // show a notification if download fails
        this.$notify.open(`${error.message}`, 1500)
      }

      this.fetchingLink = false
    },
  },
}
</script>
