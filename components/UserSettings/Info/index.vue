<template>
  <v-row tag="section" aria-label="Profile information" no-gutters>
    <v-col class="flex-grow-0">
      <v-avatar color="primary" size="141">
        <v-img :src="avatar" alt="Profile image" class="text-transparent" />
      </v-avatar>
    </v-col>

    <v-divider vertical class="mx-[56px]" />

    <v-col>
      <v-row>
        <v-col
          v-for="(infoBody, infoTitle) in sortUserInfo"
          :key="infoTitle"
          tag="section"
          cols="4"
        >
          <UiText tag="h3" :label="infoTitle" variant="secondary" size="xxs" />

          <UiText tag="h4" :label="infoBody" variant="primary" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { requiredProp, requiredStringProp } from '~/components/utils'

export default {
  props: {
    avatar: requiredStringProp,
    userInfo: requiredProp(Object),
  },

  computed: {
    // sort `userInfo` prop so values can be properly aligned to match the UI requirement
    sortUserInfo() {
      // sorted titles
      const titles = [
        'name',
        'phone number',
        'address',
        'date joined',
        'email',
        'marketing preference',
      ]

      // initialize object to be populated
      const sorted = {}

      // loop titles to populate sorted with `userInfo` equivalent;
      for (const title of titles) {
        const capitalizeTitle = title.slice(0, 1).toUpperCase() + title.slice(1)

        sorted[capitalizeTitle] = this.userInfo[title]
      }

      return sorted
    },
  },
}
</script>
