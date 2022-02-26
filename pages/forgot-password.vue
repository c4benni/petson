<template>
  <Page>
    <v-row
      justify="center"
      class="w-[396px] h-full mx-auto mt-[89px] content-start"
    >
      <v-col cols="12">
        <UiText
          tag="h2"
          label="Recover password"
          variant="h5"
          class="text-center mb-[20px]"
        />
      </v-col>

      <v-col cols="12">
        <UiText
          tag="h3"
          label="Enter the email associated with your account and we'll send an email with instructions to reset your password."
          opacity="secondary"
          class="mb-[8px]"
        />
      </v-col>

      <v-col cols="12">
        <FormAlert :error="error" />

        <FormRecoverPassword
          @on-request="onRequest"
          @show-dialog="showDialog"
        />
      </v-col>
    </v-row>

    <DialogRecoverPassword v-model="dialog" :token="changePasswordLink" />
  </Page>
</template>

<script>
export default {
  name: 'ForgotPasswordPage',

  data: () => ({
    dialog: false,
    changePasswordLink: {
      title: '',
      link: '',
    },
    error: null,
    loading: false,
  }),

  head: {
    title: 'Forgot password',
  },

  methods: {
    // handle the resolved request for a password link.
    // if error, show an error alert by changing this.error to a truthy value (error object).
    onRequest({ error }) {
      this.error = error || null
    },

    // set the links, and show recovery link dialog.
    async showDialog(changePasswordLink) {
      this.changePasswordLink = changePasswordLink

      await this.$nextTick()

      this.dialog = true
    },
  },
}
</script>
