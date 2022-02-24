<template>
  <BaseTextField
    v-model="modelSync"
    prepend-inner-icon="mdi-magnify"
    clearable
    :label="label"
    :placeholder="placeholder"
    v-on="$listeners"
  />
</template>

<script>
import TextField from '~/components/mixins/TextField'

export default {
  mixins: [TextField],
  props: {
    label: {
      type: String,
      default: 'Search products',
    },
    placeholder: {
      type: String,
      default: 'Press enter to search',
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
