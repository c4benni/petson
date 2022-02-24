<template>
  <v-chip :color="getColor" small>
    <UiText
      tag="span"
      variant="custom"
      opacity="custom"
      class="white--text text-13"
      :label="getTitle"
    />
  </v-chip>
</template>

<script>
import { capitalize } from 'lodash'

import { trimmedLowerCase } from '~/components/utils'
export default {
  name: 'UserSettingsDataTableChip',
  props: {
    status: {
      type: String,
      required: true,
      validator: (prop) =>
        ['open', 'pending', 'paid', 'shipped', 'canceled'].includes(
          trimmedLowerCase(prop)
        ),
    },
  },
  computed: {
    trimmedStatus() {
      return trimmedLowerCase(this.status)
    },
    getColor() {
      const colors = {
        open: 'info',
        pending: 'secondary',
        paid: 'primary',
        shipped: 'primary-900',
        canceled: 'grey-400',
      }

      return colors[this.trimmedStatus]
    },
    getTitle() {
      if (this.trimmedStatus === 'pending') {
        return `Pending payment`
      }

      return capitalize(this.trimmedStatus)
    },
  },
}
</script>
