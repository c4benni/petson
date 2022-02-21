<template>
  <AnimateInView>
    <Skeleton :loading="loading">
      <NuxtLink :to="`/category/${uuid || 'null'}`">
        <UiText
          tag="h2"
          :label="title"
          title
          class="primary--text mb-[30px] ml-[52px]"
        />
      </NuxtLink>
    </Skeleton>

    <v-slide-group show-arrows>
      <template #prev>
        <MainPageProductPaddle left />
      </template>

      <template #next>
        <MainPageProductPaddle />
      </template>

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
import {
  requiredProp,
  requiredStringProp,
  undefinedStringProp,
} from '~/components/utils'

export default {
  name: 'MainPageProduct',
  props: {
    title: requiredStringProp,
    uuid: undefinedStringProp,
    items: requiredProp(Array),
    loading: Boolean,
  },
}
</script>
