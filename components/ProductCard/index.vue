<template functional>
  <v-hover v-slot="{ hover }">
    <v-card
      v-ripple
      tag="figure"
      class="rounded-[6px] inline-block transition-shadow relative px-[34px] pt-[40px] pb-[30px] isolate"
      :class="[data.class]"
      :style="data.style"
      :elevation="hover ? 1 : 0"
      v-bind="data.attrs"
      v-on="data.on"
    >
      <v-img height="220" width="220" class="mb-[16px] primary" />

      <UiText
        tag="h3"
        variant="custom"
        underline
        class="text-inherit text-20"
        :label="props.title"
      />

      <UiText
        tag="figcaption"
        variant="subtitle-1"
        opacity="secondary"
        :label="props.caption"
      />

      <UiText
        tag="h4"
        :label="`${props.weight} kn`"
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
    showAddToCart: Boolean,
  },
}
</script>
