<template>
  <div class="flex justify-start items-center">
    <v-img
      height="300"
      width="300"
      class="primary-background max-w-[300px] mr-[64px]"
    />

    <div>
      <NuxtLink to="/">
        <UiText variant="h5" label="Brit Care Endurance" />
      </NuxtLink>

      <UiText variant="h6" opacity="secondary" label="Animonda" />

      <UiText variant="h4" label="200 kn" class="mt-[20px] mb-[45px]" />

      <div class="flex justify-start items-center space-x-24">
        <OrderQuantity v-model="quantity" dense :max="100" />

        <v-btn color="secondary" outlined>
          <v-icon left>mdi-cart-off</v-icon>

          Remove from cart
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',

  data: () => ({
    quantity: 1,
  }),
}
</script>
