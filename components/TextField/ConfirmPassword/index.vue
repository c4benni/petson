<template>
  <TextFieldPassword v-model="vModel" :label="label" :rules="selfRules" />
</template>

<script>
import { requiredStringProp } from '~/components/utils'
import TextFieldMixin from '@/components/mixins/TextField'

export default {
  name: 'TextFieldConfirmPassword',
  mixins: [TextFieldMixin],
  props: {
    label: {
      type: String,
      default: 'Confirm password *',
    },
    password: requiredStringProp,
  },

  computed: {
    selfRules() {
      console.log(3)
      return [(v) => v === this.password || 'Passwords must match']
    },
  },
}
</script>
