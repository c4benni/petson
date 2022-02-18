<template functional>
  <v-carousel-item>
    <v-sheet height="100%" class="px-[40px] py-[32px] primary">
      <div class="grid gap-y-7 align-start items-start justify-start">
        <UiText
          tag="h2"
          variant="h2"
          :label="props.title"
          opacity="custom"
          class="bg-disabled inline-block w-fit pt-[12px] pb-[9px] pr-[16px] pl-[13px] white--text"
        />

        <UiText
          tag="h3"
          variant="h6"
          :label="props.subtitle"
          opacity="custom"
          class="bg-disabled inline-block w-fit py-[4px] pl-[13px] pr-[8px] white--text"
        />
      </div>
    </v-sheet>
  </v-carousel-item>
</template>

<script>
import { requiredStringProp } from '~/components/utils'
export default {
  name: 'MainPageCarouselItem',
  props: {
    title: requiredStringProp,
    subtitle: requiredStringProp,
  },
}
</script>
