<template>
  <v-btn
    outlined
    dark
    large
    class="h-48 py-[8px] px-[22px]"
    :nuxt="!!to"
    :to="to"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'HeaderActionBtn',
  props: {
    to: {
      type: [String, Object],
      default: undefined,
    },
  },
}
</script>
