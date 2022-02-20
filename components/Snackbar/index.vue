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

    <template #action="{ attrs }">
      <v-btn color="red" text v-bind="attrs" @click="modelSync = false">
        Close
      </v-btn>
    </template>
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
      set(val) {
        !val && this.$notify.close()
      },
    },
  },
}
</script>
