<template>
  <v-app>
    <Page>
      <div class="grid place-items-center place-content-center gap-y-24 h-full">
        <UiText
          variant="h1"
          opacity="custom"
          class="error--text"
          :label="statusCode"
        />

        <UiText
          variant="subtitle-1"
          opacity="secondary"
          :label="errorMessage"
        />

        <NuxtLink to="/" class="mt-[36px]"> Go to Home page </NuxtLink>
      </div>
    </Page>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  head() {
    return {
      title: this.errorMessage,
    }
  },

  computed: {
    statusCode() {
      return `${this.error.statusCode}`
    },

    errorMessage() {
      if (this.error.message) {
        return this.error.message
      }

      return this.statusCode === 404 ? '404 Not Found' : 'An error occured'
    },
  },
}
</script>
