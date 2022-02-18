<template>
  <Page>
    <v-container class="max-w-[766px]">
      <TextFieldSearch
        v-model="search"
        class="w-[628px] max-w-[80vw] mx-auto mt-[36px] mb-[48px]"
      />

      <Breadcrumbs :items="breadcrumbs" />

      <UiText tag="h2" title label="Your Cart" class="mt-[16px] mb-[72px]" />

      <v-row justify="center">
        <v-col v-for="i in 4" :key="i" cols="12" class="mb-[16px]">
          <AnimateInView>
            <CartItem />
          </AnimateInView>
        </v-col>

        <v-col cols="12" class="mt-[84px] mb-[126px]">
          <AnimateInView>
            <v-btn block large class="h-[48px]" elevation="2" color="primary">
              Proceed to checkout
            </v-btn>
          </AnimateInView>
        </v-col>
      </v-row>
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
      { title: 'Your cart', to: '/2', disabled: true },
    ],
  }),

  head() {
    return {
      title: this.pageTitle,
    }
  },

  computed: {
    pageTitle() {
      return `Cart`
    },
  },
}
</script>

<style></style>
