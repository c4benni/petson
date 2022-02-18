<template>
  <v-row align="center">
    <v-col cols="6" class="h-[652px] mr-[96px] primary">
      <AnimateInView class="h-full w-full">
        <v-img class="primary" />
      </AnimateInView>
    </v-col>

    <v-col>
      <AnimateInView delay="100ms">
        <div class="grid gap-y-8 mb-[58px]">
          <UiText tag="h2" variant="h3" label="Brit care" />

          <UiText
            opacity="secondary"
            variant="h4"
            label="Endurance Duck & Rice"
          />

          <UiText opacity="secondary" variant="h4" label="Dry dog food" />
        </div>

        <UiText variant="h2" label="200kn" class="mb-[20px]" />

        <div class="flex space-x-24">
          <v-btn color="primary" elevation="2" large class="h-[48px]">
            <v-icon> mdi-cart </v-icon>

            Add to cart
          </v-btn>

          <OrderQuantity v-model="quantity" :max="100" />
        </div>
      </AnimateInView>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AddToCartCard',
  data: () => ({
    quantity: 1,
  }),
}
</script>
