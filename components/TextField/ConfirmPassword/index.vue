<template>
  <TextFieldPassword v-model="modelSync" :label="label" :rules="selfRules" />
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
      return [
        ...this.rules,
        (v) => v === this.password || 'Passwords must match',
      ]
    },
  },
}
</script>
