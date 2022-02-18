<template>
  <v-row>
    <v-col
      v-for="product in products"
      :key="product.title"
      cols="12"
      md="6"
      lg="4"
      class="mb-[56px]"
    >
      <AnimateInView appear-from="opacity-0">
        <ProductCard v-bind="product" show-add-to-cart />
      </AnimateInView>
    </v-col>

    <v-col class="mb-[130px]">
      <CategoryPageContentPagination />
    </v-col>
  </v-row>
</template>

<script>
const products = Array.from({ length: 15 }, (_, i) => ({
  title: `Brit care endurance ${i + 1}`,
  caption: 'Animonda',
  to: '/product/400',
  weight: 200,
}))

export default {
  name: 'CategoryPageContent',

  data: () => ({
    products,
  }),
}
</script>

<style></style>
