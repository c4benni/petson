<template>
  <v-row tag="section" aria-label="Profile information" no-gutters>
    <v-col class="flex-grow-0">
      <Avatar size="141" variant="h3" />
    </v-col>

    <v-divider vertical class="mx-[56px]" />

    <v-col>
      <v-row>
        <v-col
          v-for="(infoBody, infoTitle) in userSettings"
          :key="infoTitle"
          tag="section"
          cols="4"
        >
          <UiText
            tag="h3"
            opacity="secondary"
            variant="caption"
            :label="infoTitle"
          />

          <UiText tag="h4" :label="infoBody" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('user', ['userSettings']),
  },
}
</script>
