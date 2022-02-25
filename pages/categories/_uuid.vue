<template>
  <Page>
    <TextFieldSearch
      v-model="search"
      class="w-[628px] max-w-[80vw] mx-auto mt-[36px] mb-[48px]"
    />

    <v-row>
      <v-spacer />

      <v-col cols="9">
        <UiText tag="h2" title :label="title" class="mb-[36px]" />

        <v-row justify="space-between" align="center">
          <v-col>
            <Breadcrumbs :items="breadcrumbs" />
          </v-col>

          <v-col cols="3">
            <v-select :items="sortBy" label="Sort by" class="w-200"></v-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3" tag="aside">
        <CategoryPageFilter />
      </v-col>

      <v-col>
        <CategoryPageContent />
      </v-col>
    </v-row>
  </Page>
</template>

<script>
export default {
  name: 'CategoriesIndexPage',

  data: () => ({
    search: '',
    breadcrumbs: [
      { title: 'Homepage', to: '/' },
      { title: 'Dogs', to: '/' },
      { title: 'Dog food', to: '/' },
      { title: 'Dry dog food', to: '/', disabled: true },
    ],
    sortBy: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),

  head() {
    return {
      title: `${this.title} category`,
    }
  },

  computed: {
    title() {
      // TODO: get title from api call
      return this.$route.params.uuid
    },
  },
}
</script>

<style></style>
