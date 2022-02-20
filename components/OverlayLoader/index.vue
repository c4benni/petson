<template functional>
  <v-overlay
    :value="props.show"
    color="#000"
    opacity="0.5"
    v-bind="data.attrs"
    class="touch-none"
    @wheel.stop.prevent
  >
    <v-progress-circular
      indeterminate
      size="64"
      color="secondary"
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: 'OverlayLoader',

  props: {
    show: Boolean,
  },
}
</script>

<style></style>
