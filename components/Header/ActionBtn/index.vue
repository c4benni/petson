<template functional>
  <VBtn
    outlined
    dark
    large
    class="h-48 py-[8px] px-[22px]"
    :class="[data.class, data.staticClass]"
    :nuxt="!!props.to"
    :to="props.to"
    v-bind="data.attrs"
    v-on="data.on"
  >
    <slot />
  </VBtn>
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
