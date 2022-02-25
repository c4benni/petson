<template>
  <v-app>
    <Header />

    <v-main>
      <v-slide-x-transition>
        <Nuxt />
      </v-slide-x-transition>
    </v-main>

    <Footer />

    <LazyDialogUserSettings v-if="loggedIn" />

    <DialogAuth />

    <LazySnackbar />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smoothscroll from 'smoothscroll-polyfill'

export default {
  name: 'DefaultLayout',

  async fetch() {
    // build main page here in default layout, so no mater what page is visited, the main page will always be ready to display its sections.
    await this.buildMainPage()
  },

  computed: {
    ...mapGetters('user', ['loggedIn']),
  },

  beforeMount() {
    // init smoothscroll polyfill
    smoothscroll.polyfill()
  },

  methods: {
    ...mapActions('mainPage', {
      buildMainPage: 'build',
    }),
  },
}
</script>
