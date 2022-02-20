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
            <v-btn
              block
              large
              class="h-[48px]"
              elevation="2"
              color="primary"
              @click="checkout"
            >
              Proceed to checkout
            </v-btn>
          </AnimateInView>
        </v-col>
      </v-row>
    </v-container>

    <!-- pseudo loader -->
    <OverlayLoader :show="loading" />
  </Page>
</template>

<script>
let loadingTimeout

export default {
  name: 'ProductPage',

  data: () => ({
    search: '',
    breadcrumbs: [
      { title: 'Homepage', to: '/' },
      { title: 'Your cart', to: '/cart', disabled: true },
    ],

    loading: false,
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

  beforeDestroy() {
    clearTimeout(loadingTimeout)
  },

  methods: {
    checkout() {
      this.loading = true

      loadingTimeout = setTimeout(() => {
        this.loading = false

        if (this.$route.name === 'cart') {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }

        clearTimeout(loadingTimeout)
      }, 3000)
    },
  },
}
</script>
