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

        <FormRecoverPassword />
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
}
</script>
