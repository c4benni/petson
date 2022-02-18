<template>
  <BaseTextField
    v-model="modelSync"
    prepend-inner-icon="mdi-magnify"
    clearable
    :label="placeholder"
  />
</template>

<script>
import TextField from '~/components/mixins/TextField'

export default {
  mixins: [TextField],
  props: {
    placeholder: {
      type: String,
      default: 'Search products',
    },
  },
}
</script>

<style scoped>
.v-input >>> fieldset,
.v-input >>> .v-icon,
.v-input >>> .v-label {
  color: var(--v-primary-base) !important;
}
</style>
