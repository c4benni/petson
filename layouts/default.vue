<template>
  <v-app>
    <Header />

    <v-main>
      <v-slide-x-transition>
        <Nuxt />
      </v-slide-x-transition>
    </v-main>

    <Footer />

    <LazyDialogAuth />

    <LazyDialogUserSettings />

    <LazySnackbar />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DefaultLayout',

  async fetch() {
    // build main page here in default layout, so no mater what page is visited, the main page will always be ready to display its sections.
    await this.buildMainPage()
  },

  methods: {
    ...mapActions('mainPage', {
      buildMainPage: 'build',
    }),
  },
}
</script>
