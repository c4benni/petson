<template>
  <MainPageContainer>
    <v-hover v-slot="{ hover }" :close-delay="750">
      <Transition v-bind="appearProps">
        <v-carousel
          :interval="10000"
          cycle
          height="400"
          hide-delimiter-background
          :hide-delimiters="!hover"
          show-arrows-on-hover
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
export default {
  name: 'MainPageCarousel',
  data: () => ({
    items: Array.from(
      {
        length: 4,
      },
      (_, i) => ({
        title: `Up to ${i + 1}0% sale`,
        subtitle: 'On select dog food and toys',
      })
    ),
  }),
  computed: {
    appearProps() {
      return {
        appear: true,
        appearClass: 'opacity-0 translate-x-12',
        appearActiveClass:
          'delay-[16ms] transition-[opacity,transform] will-change-transform duration-[350ms]',
      }
    },
  },
}
</script>
