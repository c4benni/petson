<template>
  <v-form ref="form" v-model="valid" lazy-validation :disabled="loading">
    <v-row>
      <v-col cols="12">
        <TextFieldPassword v-model="password" label="New password" autofocus />
      </v-col>

      <v-col cols="12">
        <TextFieldConfirmPassword
          v-model="confirmPassword"
          :password="password"
          label="Re-enter your new password"
        />
      </v-col>

      <v-col>
        <v-btn
          elevation="1"
          color="primary"
          block
          :loading="loading"
          @click="submit"
        >
          Change password
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import recoverPassword from '~/components/mixins/recoverPassword'
import resetPassword from '~/services/auth/user/resetPassword'

export default {
  name: 'ChangePasswordForm',

  mixins: [recoverPassword],

  emits: ['on-request'],

  data: () => ({
    password: '',
    confirmPassword: '',
  }),

  methods: {
    resetForm() {
      this.password = ''

      this.confirmPassword = ''

      this.$refs.form.resetValidation()
    },

    async apiCall() {
      // redirect back to forgot-password if no email or no token in $route.query;
      const { email, token } = this.$route.query

      if (!email || !token) {
        await this.$notify.open('Please request for another token.', 3000)

        return this.$router.replace('/forgot-password')
      }

      this.loading = true

      await this.$nextTick()

      const { password, confirmPassword } = this

      const { error, data } = await resetPassword.call(this, {
        password,
        confirmPassword,
        email,
        token,
      })

      this.$emit('on-request', { error, data })

      if (error) {
        scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth',
        })
      } else if (data) {
        await this.$notify.open('Password successfully changed!', 3000)
      }

      this.resetForm()

      this.loading = false
    },
  },
}
</script>
