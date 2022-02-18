<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-pagination
        v-model="page"
        :length="4"
        circle
        class="pagination"
      ></v-pagination>
    </v-col>

    <v-col cols="12">
      <div class="flex items-center justify-center">
        <UiText
          tag="span"
          variant="body-2"
          opacity="secondary"
          label="Items per page:"
        />

        <div class="ml-[4px] mr-[8px] w-[64px]">
          <v-select
            :items="itemsPerPage"
            flat
            dense
            solo
            class="text-sm h-[38px]"
          />
        </div>

        <UiText
          tag="span"
          variant="body-2"
          opacity="secondary"
          label="1 to 15 of 1240"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CategoryPageContentPagination',

  data: () => ({
    page: 1,
    itemsPerPage: [5, 10, 15, 20, 25, 50],
  }),
}
</script>

<style lang="postcss" scoped>
.pagination >>> button {
  box-shadow: none;
  width: 40px;
  height: 40px;
}
</style>
