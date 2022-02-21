<template functional>
  <div
    role="alert"
    aria-busy="true"
    aria-live="polite"
    :class="[data.staticClass, data.class]"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: 'Skeleton',
}
</script>
