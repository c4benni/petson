<template>
  <MainPageContainer>
    <v-hover
      v-slot="{ hover }"
      :close-delay="750"
      :disabled="!promotion.length"
    >
      <Transition v-bind="appearProps">
        <v-carousel
          :interval="10000"
          :cycle="!hover"
          height="400"
          hide-delimiter-background
          :hide-delimiters="!hover || !promotion.length"
          :show-arrows-on-hover="!!promotion.length"
          :show-arrows="!!promotion.length"
          class="touch-manipulation"
        >
          <MainPageCarouselItem
            v-for="item in items"
            :key="item.title"
            v-bind="item"
          />
        </v-carousel>
      </Transition>
    </v-hover>
  </MainPageContainer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainPageCarousel',

  computed: {
    ...mapState('mainPage', ['key', 'promotion']),
    items() {
      if (!this.key) {
        return [
          {
            loading: true,
            title: '',
            image: '',
            content: '',
          },
        ]
      }

      return this.promotion
    },
    appearProps() {
      return {
        appear: true,
        appearClass: 'opacity-0',
        appearActiveClass:
          'delay-[16ms] transition-[opacity,transform] will-change-transform duration-[400ms]',
      }
    },
  },
}
</script>
