<template>
  <BaseTextField
    v-model="modelSync"
    class="Search"
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
      default: 'Search',
    },
  },
}
</script>

<style scoped>
.Search >>> fieldset,
.Search >>> .v-icon,
.Search >>> .v-label {
  color: var(--v-primary-base) !important;
}
</style>
