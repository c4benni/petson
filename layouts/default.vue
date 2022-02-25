<template>
  <v-app>
    <Header />

    <v-main>
      <v-slide-x-transition>
        <Nuxt />
      </v-slide-x-transition>
    </v-main>

    <Footer />

    <DialogAuth />

    <LazyDialogUserSettings />

    <LazySnackbar />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import smoothscroll from 'smoothscroll-polyfill'
import { getCookie, setCookie } from '~/services/utils'

export default {
  name: 'DefaultLayout',

  async fetch() {
    // build main page here in default layout, so no mater what page is visited, the main page will always be ready to display its sections.
    await this.buildMainPage()
  },

  async beforeMount() {
    // init smoothscroll polyfill
    smoothscroll.polyfill()

    // automatic login
    // get cookie, if it exists, set axios header, then dispatch 'user/getInfo'
    const token = getCookie('token')

    if (token) {
      this.$axios.setHeader('Authorization', `Bearer ${token}`)

      // try to update the user/info state.
      // if it fails, clear cookies and Bearer token
      const { error } = await this.$store.dispatch('user/getInfo')

      if (error) {
        setCookie('token', '')

        this.$axios.setHeader('Authorization', '')
      }
    }
  },

  methods: {
    ...mapActions('mainPage', {
      buildMainPage: 'build',
    }),
  },
}
</script>
