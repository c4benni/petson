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

        <FormChangePassword
          ref="form"
          :loading="loading"
          @on-submit="changePassword"
        />
      </v-col>
    </v-row>
  </Page>
</template>

<script>
import resetPassword from '~/services/auth/user/resetPassword'

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
    async changePassword(payload) {
      // redirect back to forgot-password if no email or no token in $route.query;
      const { email, token } = this.$route.query

      if (!email || !token) {
        await this.$notify.open('Please request for another token.', 3000)

        return this.$router.replace('/forgot-password')
      }

      this.loading = true

      this.error = null

      await this.$nextTick()

      const { data, error } = await resetPassword.call(this, {
        ...payload,
        email,
        token,
      })

      this.error = error

      if (error) {
        scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth',
        })
      } else if (data) {
        await this.$notify.open('Password successfully changed!', 3000)
      }

      this.$refs.form.resetForm()

      this.loading = false
    },
  },
}
</script>
