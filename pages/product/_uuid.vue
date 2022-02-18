<template>
  <Page>
    <v-container class="max-w-[1300px]">
      <TextFieldSearch
        v-model="search"
        class="w-[628px] max-w-[80vw] mx-auto mt-[36px] mb-[48px]"
      />

      <Breadcrumbs :items="breadcrumbs" />

      <AddToCartCard class="my-[96px]" />

      <AddToCartDescription />
    </v-container>
  </Page>
</template>

<script>
export default {
  name: 'ProductPage',

  data: () => ({
    search: '',
    breadcrumbs: [
      { title: 'Homepage', to: '/1' },
      { title: 'Dogs', to: '/2' },
      { title: 'Dog food', to: '/3' },
      { title: 'Dry dog food', to: '/' },
      { title: 'Brit Care Endurance', to: '/', disabled: true },
    ],
  }),

  head() {
    return {
      title: this.pageTitle,
    }
  },

  computed: {
    pageTitle() {
      return `Shop Brit Care`
    },
  },
}
</script>

<style></style>
