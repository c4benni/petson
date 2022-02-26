<template>
  <Page>
    <v-row
      justify="center"
      class="w-[402px] h-full mx-auto mt-[89px] content-start"
    >
      <v-col cols="12">
        <UiText
          tag="h2"
          label="Change password"
          variant="h5"
          class="text-center mb-[20px]"
        />
      </v-col>

      <v-col cols="12">
        <UiText
          tag="h3"
          label="Your new password must be different from previous passwords."
          opacity="secondary"
          class="mb-[8px]"
        />
      </v-col>

      <v-col cols="12">
        <FormAlert :error="error" />

        <FormChangePassword ref="form" @on-request="onRequest" />
      </v-col>
    </v-row>
  </Page>
</template>

<script>
export default {
  name: 'ChangePasswordPage',

  data: () => ({
    loading: false,

    error: null,
  }),

  head: {
    title: 'Change password',
  },

  methods: {
    // handle the resolved request to change password.
    // if error, show an error alert by changing this.error to a truthy value (error object).
    onRequest({ error }) {
      this.error = error || null
    },
  },
}
</script>
