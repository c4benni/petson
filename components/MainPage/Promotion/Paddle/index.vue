<template functional>
  <div v-ripple class="h-full w-full flex place-content-center relative paddle">
    <v-icon>{{ `mdi-chevron-${props.left ? 'left' : 'right'}` }}</v-icon>
  </div>
</template>

<script>
export default {
  name: 'MainPagePromotionPaddle',
  props: {
    left: Boolean,
  },
}
</script>

<style scoped lang="postcss">
[class*='--disabled'] > .paddle > .v-icon {
  @apply text-disabled;
}
</style>
