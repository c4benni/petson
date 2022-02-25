<template>
  <v-hover v-slot="{ hover }">
    <v-card
      v-ripple
      tag="figure"
      :title="title"
      class="rounded-[6px] inline-block transition-shadow relative px-[34px] pt-[40px] pb-[30px] isolate w-fit"
      :elevation="hover ? 1 : 0"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <ApiImg
        :uuid="image"
        :alt="`${title} image`"
        height="220"
        width="220"
        class="mb-[16px]"
      />

      <UiText
        tag="h3"
        variant="custom"
        underline
        line-clamp="1"
        class="text-inherit text-20 max-w-fit"
        :label="title"
      />

      <UiText
        tag="figcaption"
        variant="subtitle-1"
        line-clamp="1"
        opacity="secondary"
        :label="brandTitle"
      />

      <UiText tag="h4" :label="`${price} kn`" variant="h6" :weight="500" />

      <v-btn
        v-if="showAddToCart"
        class="mt-[10px] h-[30px] z-1"
        depressed
        color="primary"
        @click.stop
      >
        <v-icon left> mdi-cart </v-icon>

        Add to cart
      </v-btn>

      <NuxtLink
        :aria-label="title"
        :to="`/product/${uuid}`"
        class="absolute inset-0 text-transparent"
      />
    </v-card>
  </v-hover>
</template>

<script>
import { requiredProp, requiredStringProp } from '../utils'

export default {
  name: 'ProductCard',
  props: {
    uuid: requiredStringProp,
    title: requiredStringProp,
    image: requiredStringProp,
    brandTitle: {
      type: String,
      default: '',
    },
    price: requiredProp(Number),
    showAddToCart: Boolean,
  },
}
</script>
