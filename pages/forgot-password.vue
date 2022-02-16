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
          variant="title"
          size="lg"
          class="text-center mb-[20px]"
        />
      </v-col>

      <v-col cols="12">
        <UiText
          tag="h3"
          label="Enter the email associated with your account and we'll send an email with instructions to reset your password."
          variant="caption"
          class="mb-[8px]"
        />
      </v-col>

      <v-col cols="12">
        <FormRecoverPassword @on-submit="resetPassword" />
      </v-col>
    </v-row>

    <DialogRecoverPassword v-model="dialog" :href="changePasswordLink" />
  </Page>
</template>

<script>
export default {
  name: 'ForgotPasswordPage',

  data: () => ({
    email: '',
    dialog: false,
    changePasswordLink: '',
  }),

  head: {
    title: 'Forgot password',
  },

  methods: {
    async resetPassword() {
      this.changePasswordLink =
        'http://localhost:2022/change-password?token=1441307151_4492f25946a2e8e1414a8bb53dab8a6ba1cf4615'

      await this.$nextTick()

      this.dialog = true
    },
  },
}
</script>
