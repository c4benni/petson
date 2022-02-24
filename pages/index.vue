<template>
  <Page>
    <TextFieldSearch
      v-model="search"
      class="w-[628px] max-w-[80vw] mx-auto mt-[36px] mb-[22px]"
    />

    <div class="space-y-102 mb-[102px]">
      <MainPageCarousel />

      <MainPageProduct v-bind="product[0]" />

      <MainPageBlogPost v-bind="blogPost[0]" />

      <!-- repeat product group if only one category was fetched -->
      <MainPageProduct v-bind="product[1] || product[0]" />

      <MainPageBlogPost
        v-if="blogPost[1]"
        image-position="right"
        v-bind="blogPost[1]"
      />
    </div>
  </Page>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainPage',
  data: () => ({ search: '' }),

  computed: {
    ...mapState('mainPage', ['key', 'product', 'blogPost']),
  },
}
</script>
