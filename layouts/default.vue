<template>
  <v-app>
    <Header />

    <v-main>
      <v-slide-x-transition>
        <Nuxt />
      </v-slide-x-transition>
    </v-main>

    <Footer />

    <ClientOnly>
      <LazyDialogUserSettings v-if="loggedIn" />

      <DialogAuth />

      <LazySnackbar />
    </ClientOnly>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smoothscroll from 'smoothscroll-polyfill'

export default {
  name: 'DefaultLayout',

  computed: {
    ...mapGetters('user', ['loggedIn']),
  },

  async created() {
    // build main page here in default layout, so no matter what page is visited, the main page will always be ready to display its sections.
    await this.buildMainPage()
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
