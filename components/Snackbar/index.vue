<template>
  <v-snackbar
    :key="snackbar.key"
    v-model="modelSync"
    :timeout="snackbar.timeout"
    transition="slide-x-reverse-transition"
    app
    top
    right
  >
    {{ snackbar.message }}
  </v-snackbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Snackbar',

  computed: {
    ...mapState('app', ['snackbar']),

    modelSync: {
      get() {
        return this.snackbar.active
      },

      // setter can only be called for a `close` event
      set() {
        this.$notify.close()
      },
    },
  },
}
</script>
