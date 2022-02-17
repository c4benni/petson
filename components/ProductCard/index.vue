<template functional>
  <v-hover v-slot="{ hover }">
    <v-card
      v-ripple
      tag="figure"
      class="rounded-[6px] inline-block transition-shadow relative"
      :class="[
        data.class,
        {
          'px-[34px] pt-[40px] pb-[30px]': !props.showAddToCart,
          'p-[40px]': props.showAddToCart,
        },
      ]"
      :style="data.style"
      :elevation="hover ? 1 : 0"
      v-bind="data.attrs"
      v-on="data.on"
    >
      <v-img height="220" width="220" class="mb-[16px] primary" />

      <UiText
        tag="h3"
        variant="primary"
        size="mdlg"
        class="text-inherit text-decoration-underline"
        :label="props.title"
      />

      <UiText tag="figcaption" :label="props.caption" variant="secondary" />

      <UiText
        tag="h4"
        :label="`${props.weight} kn`"
        variant="primary"
        size="mdlg"
        :weight="500"
      />

      <v-btn
        v-if="props.showshowAddToCart"
        class="mt-[10px] h-[30px]"
        depressed
        color="primary"
      >
        <v-icon left> mdi-cart </v-icon>

        Add to cart
      </v-btn>

      <NuxtLink
        v-else
        :aria-label="props.title"
        :to="props.to"
        class="absolute inset-0"
      />
    </v-card>
  </v-hover>
</template>

<script>
import { requiredProp, requiredStringProp } from '../utils'

export default {
  name: 'ProductCard',
  props: {
    to: requiredStringProp,
    title: requiredStringProp,
    caption: requiredStringProp,
    weight: requiredProp(Number),
    showshowAddToCart: Boolean,
  },
}
</script>
