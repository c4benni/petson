<template>
  <AnimateInView>
    <NuxtLink :to="to">
      <UiText
        tag="h2"
        :label="title"
        size="4xl"
        :weight="300"
        :line-clamp="1"
        title
        class="primary--text mb-[30px] ml-[52px]"
      />
    </NuxtLink>

    <v-slide-group show-arrows>
      <v-slide-item v-for="(item, i) in items" :key="item.title">
        <ProductCard
          :to="item.to"
          :title="item.title"
          :caption="item.caption"
          :weight="item.weight"
          :class="[
            'my-[8px]',
            {
              'mr-[17px]': i !== items.length - 1,
              'mr-[2px]': i === items.length - 1,
              'ml-[2px]': i === 0,
            },
          ]"
        />
      </v-slide-item>
    </v-slide-group>
  </AnimateInView>
</template>

<script>
import { requiredProp, requiredStringProp } from '~/components/utils'

export default {
  name: 'MainPagePromotion',
  props: {
    title: requiredStringProp,
    to: requiredStringProp,
    items: requiredProp(Array),
  },
}
</script>
