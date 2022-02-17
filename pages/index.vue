<template>
  <Page>
    <TextFieldSearch
      v-model="search"
      class="w-[628px] max-w-[80vw] mx-auto mt-[36px] mb-[22px]"
    />

    <div class="space-y-102 mb-[102px]">
      <MainPageCarousel />

      <Component
        :is="item.tag"
        v-for="item in promotionAndBlog"
        :key="item.title"
        v-bind="item.content"
      />
    </div>
  </Page>
</template>

<script>
const products = Array.from({ length: 5 }, (_, i) => ({
  title: `Brit care endurance ${i + 1}`,
  caption: 'Animonda',
  to: '/',
  weight: 200,
}))

const promotion = [
  {
    title: 'Dry dog food',
    to: '#',
    items: products,
  },
  {
    title: 'Pet treats and chews',
    to: '#',
    items: products,
  },
]

const blogPost = [
  {
    title: 'Treat your pup',
    action: {
      to: '/',
      title: 'Discover our dog treat selection',
    },
  },
  {
    title: 'Get the best tips',
    action: {
      to: '/',
      title: 'Read our blog',
    },
    imagePosition: 'right',
  },
]

export default {
  name: 'MainPage',
  data: () => ({ search: '' }),
  computed: {
    promotionAndBlog() {
      // TODO: get promotions and blog posts from vuex;

      const posts = [promotion[0], blogPost[0], promotion[1], blogPost[1]]

      // set component tag to render each post.
      // even indexes are MainPageBlogPost while odd ones are MainPagePromotion
      return posts.map((post, index) => ({
        content: post,
        tag: (index + 1) % 2 === 0 ? 'MainPageBlogPost' : 'MainPagePromotion',
      }))
    },
  },
}
</script>
