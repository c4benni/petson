<template>
  <AnimateInView appear-from="opacity-0 -translate-x-12">
    <v-row class="max-w-[278px]">
      <v-col>
        <v-expansion-panels v-model="panel" multiple flat>
          <CategoryPageFilterPrice />

          <v-expansion-panel
            v-for="filter in brandsAndCategory"
            :key="filter.title"
          >
            <CategoryPageFilterPanelHeader :label="filter.title" />

            <v-expansion-panel-content>
              <ul class="pl-0 grid gap-y-[8px]">
                <li
                  v-for="content in filter.content"
                  :key="content.title"
                  v-ripple
                  tabindex="0"
                  class="outline-none flex justify-between items-center relative cursor-pointer group"
                  @keydown.space.prevent
                >
                  <UiText
                    opacity="secondary"
                    :label="content.title"
                    class="truncate relative inline-block after:border-b-[2px] border-[#000] after:opacity-[0.26] after:scale-0 after:transform-gpu group-focus:after:scale-100 after:origin-left after:transition-transform after:w-full after:h-full after:absolute after:inset-0"
                  />

                  <UiText opacity="secondary" :label="content.count" />
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </AnimateInView>
</template>

<script>
const category = Array.from(
  {
    length: 10,
  },
  (_, i) => ({
    title: `Category ${i + 1}`,
    count: `(${Math.floor(Math.random() * 50)})`,
  })
)

const brands = Array.from(
  {
    length: 6,
  },
  (_, i) => ({
    title: `Brand ${i + 1}`,
    count: `(${Math.floor(Math.random() * 10)})`,
  })
)

export default {
  name: 'CategoryPageFilter',

  data: () => ({
    panel: [0, 1, 2],
    price: 100,

    brands,
    category,
  }),

  computed: {
    brandsAndCategory() {
      // TODO
      return [
        {
          title: 'Brands',
          content: this.brands,
        },
        {
          title: 'Category',
          content: this.category,
        },
      ]
    },
  },
}
</script>
