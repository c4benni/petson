<template>
  <v-text-field
    v-model="modelSync"
    :type="type"
    :rules="getRules"
    :label="label"
    :required="required"
    :autofocus="autofocus"
    outlined
    v-bind="$attrs"
    @change="onChange"
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
  methods: {
    // handle min and max props on change event
    onChange(e) {
      this.$emit('change', e)

      if (typeof this.min !== 'undefined') {
        this.modelSync = Math.max(
          parseFloat(this.modelSync) || this.min,
          this.min
        )
      }

      this.$nextTick(() => {
        if (typeof this.max !== 'undefined') {
          this.modelSync = Math.min(parseFloat(this.modelSync), this.max)
        }
      })
    },
  },
}
</script>

<style scoped>
.v-input >>> input[type='number']::-webkit-inner-spin-button,
.v-input >>> input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.v-input >>> input[type='number'] {
  -moz-appearance: textfield;
}

#__nuxt .v-input,
#__nuxt .v-input >>> input {
  color: var(--v-text-secondary-base);
}
</style>
