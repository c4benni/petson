<template>
  <v-img
    class="primary-background"
    :src="getSrc"
    :alt="alt"
    v-bind="$attrs"
    :eager="eager"
  />
</template>

<script>
import { requiredStringProp } from '../utils'
export default {
  name: 'Img',

  props: {
    alt: requiredStringProp,
    uuid: requiredStringProp,
    eager: Boolean,
  },

  computed: {
    getSrc() {
      return `${this.$nuxt.$config.getFile}${this.uuid}`
    },
  },
}
</script>
