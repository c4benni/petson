<template>
  <v-text-field
    v-model="vModel"
    :type="type"
    :rules="getRules"
    :label="label"
    :required="required"
    :autofocus="autofocus"
    outlined
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
import TextFieldMixin from '@/components/mixins/TextField'
import { requiredStringProp } from '~/components/utils'

export default {
  name: 'BaseTextField',
  mixins: [TextFieldMixin],
  props: {
    label: requiredStringProp,
    type: {
      type: String,
      default: 'text',
    },
  },
  computed: {
    getRules() {
      if (!this.required) {
        return this.rules || []
      }

      return [...(this.rules || []), (v) => !!v || 'Required']
    },
  },
}
</script>
