<template>
  <v-expansion-panel-header class="pb-0">
    <UiText opacity="black" variant="button" :label="label" />

    <template #actions>
      <v-icon color="black"> mdi-chevron-down </v-icon>
    </template>
  </v-expansion-panel-header>
</template>

<script>
import { requiredStringProp } from '~/components/utils'
export default {
  name: 'CategoryPageFilterPanelHeader',
  props: {
    label: requiredStringProp,
  },
}
</script>

<style></style>
