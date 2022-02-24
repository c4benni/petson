<template functional>
  <MainPageContainer>
    <AnimateInView>
      <div class="flex items-center">
        <ApiImg
          :uuid="props.image"
          :alt="`${props.title} blog image`"
          :height="400"
          class="flex-shrink-1 min-w-[550px]"
          :class="{
            'mr-[58px]': props.imagePosition === 'left',
            'ml-[58px] order-2': props.imagePosition === 'right',
          }"
        />

        <div>
          <UiText tag="h2" :label="props.title" title class="mb-[16px]" />

          <v-btn
            :to="`blog/${props.uuid}`"
            depressed
            color="primary"
            nuxt
            class="text-decoration-underline h-[40px] px-[13px] py-[4px] normal-case text-20"
            tile
          >
            Read our blog
          </v-btn>
        </div>
      </div>
    </AnimateInView>
  </MainPageContainer>
</template>

<script>
import { requiredStringProp, trimmedLowerCase } from '~/components/utils'

export default {
  name: 'MainPageBlogPost',
  props: {
    imagePosition: {
      type: String,
      default: 'left',
      validator: (prop) => ['left', 'right'].includes(trimmedLowerCase(prop)),
    },
    title: requiredStringProp,
    uuid: requiredStringProp,
    image: requiredStringProp,
  },
}
</script>
