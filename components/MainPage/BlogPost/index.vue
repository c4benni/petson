<template functional>
  <MainPageContainer>
    <AnimateInView>
      <div class="flex items-center">
        <v-img
          :height="400"
          class="primary"
          :class="{
            'mr-[58px]': props.imagePosition === 'left',
            'ml-[58px] order-2': props.imagePosition === 'right',
          }"
        />

        <div>
          <UiText tag="h2" :label="props.title" title class="mb-[16px]" />

          <v-btn
            :to="props.action.to"
            depressed
            color="primary"
            nuxt
            class="text-decoration-underline h-[40px] px-[13px] py-[4px] normal-case text-mdlg"
            tile
          >
            {{ props.action.title }}
          </v-btn>
        </div>
      </div>
    </AnimateInView>
  </MainPageContainer>
</template>

<script>
import {
  requiredProp,
  requiredStringProp,
  trimmedLowerCase,
} from '~/components/utils'

export default {
  name: 'MainPageBlogPost',
  props: {
    imagePosition: {
      type: String,
      default: 'left',
      validator: (prop) => ['left', 'right'].includes(trimmedLowerCase(prop)),
    },
    title: requiredStringProp,
    action: requiredProp(Object),
  },
}
</script>
