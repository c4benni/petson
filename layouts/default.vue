<template>
  <v-app dark>
    <Header />

    <v-main>
      <Nuxt />
    </v-main>

    <Footer />

    <DialogAuth />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
