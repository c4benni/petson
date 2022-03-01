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

  created() {
    this.autoLogin()

    // build main page here in default layout, so no matter what page is visited, the main page will always be ready to display its sections.
    this.buildMainPage()
  },

  beforeMount() {
    // init smoothscroll polyfill
    smoothscroll.polyfill()
  },

  methods: {
    ...mapActions('mainPage', {
      buildMainPage: 'build',
    }),

    ...mapActions('user', ['getInfo']),

    // automatic login
    async autoLogin() {
      // get cookie, if it exists, set axios header, then dispatch 'user/getInfo'
      const token = this.$cookies.get('token')

      if (token) {
        this.$axios.setHeader('Authorization', `Bearer ${token}`)

        // try to update the user/info state.
        // if it fails, clear cookies and Bearer token
        const { error } = await this.getInfo()

        if (error) {
          this.$cookies.remove('token')

          // send back home
          this.$router.replace('/')

          this.$axios.setHeader('Authorization', '')
        }
      }
    },
  },
}
</script>
