<template functional>
  <v-hover v-slot="{ hover }">
    <v-card
      v-ripple
      tag="figure"
      :title="props.title"
      class="rounded-[6px] inline-block transition-shadow relative px-[34px] pt-[40px] pb-[30px] isolate w-fit"
      :class="[data.class]"
      :style="data.style"
      :elevation="hover ? 1 : 0"
      v-bind="data.attrs"
      v-on="data.on"
    >
      <ApiImg
        :uuid="props.image"
        :alt="`${props.title} image`"
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
        :label="props.title"
      />

      <UiText
        tag="figcaption"
        variant="subtitle-1"
        line-clamp="1"
        opacity="secondary"
        :label="props.brandTitle"
      />

      <UiText
        tag="h4"
        :label="`${props.price} kn`"
        variant="h6"
        :weight="500"
      />

      <v-btn
        v-if="props.showAddToCart"
        class="mt-[10px] h-[30px] z-1"
        depressed
        color="primary"
        @click.stop
      >
        <v-icon left> mdi-cart </v-icon>

        Add to cart
      </v-btn>

      <NuxtLink
        :aria-label="props.title"
        :to="`/product/${props.uuid}`"
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
