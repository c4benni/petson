<template>
  <tbody>
    <template v-if="loading">
      <tr v-for="(row, index) in rows" :key="index">
        <td>
          <div>
            <Skeleton loading-class="h-[20px] w-[280px] rounded-full" />
          </div>
        </td>

        <td>
          <div>
            <Skeleton loading-class="h-[24px] w-[64px] rounded-full" />
          </div>
        </td>

        <td>
          <div>
            <Skeleton
              loading-class="h-[36px] w-[36px] rounded float-right mr-[12px]"
            />
          </div>
        </td>
      </tr>
    </template>

    <tr v-else colspan="3" class="relative">
      <td v-for="i in 3" :key="i" />

      <td
        class="h-[56px] w-full flex justify-center items-center space-x-12 absolute inset-0"
      >
        <UiText
          variant="subtitle-2"
          opacity="secondary"
          :label="loading ? 'Loading...' : 'Nothing to show'"
        />

        <Tooltip v-if="!loading" label="Refresh">
          <v-btn icon @click="$emit('on-refresh')">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </Tooltip>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'UserSettingsDataTableEmpty',

  props: {
    loading: Boolean,
  },

  emits: ['on-refresh'],

  computed: {
    // pseudo rows to show when loading
    rows() {
      if (this.loading) {
        return Array.from(
          {
            length: this.$route.query.limit || 5,
          },
          () => ({})
        )
      } else {
        return [{}]
      }
    },
  },
}
</script>
