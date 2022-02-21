<template>
  <tbody>
    <tr>
      <td colspan="3">
        <div
          class="h-[56px] w-full flex justify-center items-center space-x-12"
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
        </div>
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
}
</script>
