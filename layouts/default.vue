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
export default {
  name: 'DefaultLayout',
}
</script>
