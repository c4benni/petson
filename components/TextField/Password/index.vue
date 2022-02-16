<template>
  <BaseTextField
    v-model="modelSync"
    :type="show ? 'text' : 'password'"
    :label="label"
    :append-icon="appendIcon"
    :autofocus="autofocus"
    required
    :rules="rules"
    @click:append="show = !show"
    @focus="onFocus"
  />
</template>

<script>
import TextFieldMixin from '@/components/mixins/TextField'

export default {
  name: 'TextFieldPassword',
  mixins: [TextFieldMixin],
  props: {
    label: {
      type: String,
      default: 'Password *',
    },
  },

  data: () => ({
    show: false,
  }),

  computed: {
    appendIcon() {
      if (!this.modelSync?.length) {
        return undefined
      }

      return this.show ? 'mdi-eye-off' : 'mdi-eye'
    },
  },

  methods: {
    onFocus() {
      if (!this.modelSync) {
        this.show = false
      }
    },
  },
}
</script>
