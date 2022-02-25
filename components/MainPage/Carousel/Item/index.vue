<template>
  <v-carousel-item>
    <v-sheet
      height="100%"
      class="px-[40px] py-[32px] relative isolate"
      :class="{ 'primary-background': loading }"
    >
      <ApiImg
        v-if="!loading"
        :uuid="image"
        :alt="`${title} background image`"
        eager
        class="absolute inset-0 rounded-[inherit] w-full h-full"
      />

      <div
        class="grid gap-y-7 align-start items-start justify-start z-1 relative w-full"
      >
        <AnimateInView appear-active="duration-[350ms]">
          <Skeleton
            :loading="loading"
            color="bg-disabled"
            loading-class="w-[350px] h-[81px]"
          >
            <UiText
              tag="h2"
              variant="h2"
              :label="title"
              opacity="custom"
              class="bg-disabled inline-block w-fit pt-[12px] pb-[9px] pr-[16px] pl-[13px] white--text"
            />
          </Skeleton>
        </AnimateInView>

        <AnimateInView>
          <Skeleton
            color="bg-disabled"
            :loading="loading"
            loading-class="w-[500px] h-[64px]"
          >
            <UiText
              tag="h3"
              variant="h6"
              :label="content"
              opacity="custom"
              class="bg-disabled inline-block w-fit py-[4px] pl-[13px] pr-[8px] white--text"
            />
          </Skeleton>
        </AnimateInView>
      </div>
    </v-sheet>
  </v-carousel-item>
</template>

<script>
import { requiredStringProp } from '~/components/utils'
export default {
  name: 'MainPageCarouselItem',
  props: {
    image: requiredStringProp,
    title: requiredStringProp,
    content: requiredStringProp,
    loading: Boolean,
  },
}
</script>
