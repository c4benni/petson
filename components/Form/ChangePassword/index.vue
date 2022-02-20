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

export default {
  name: 'ChangePasswordForm',

  mixins: [recoverPassword],

  data: () => ({
    password: '',
    confirmPassword: '',
  }),

  computed: {
    submitPayload() {
      const { password, confirmPassword } = this

      return { password, confirmPassword }
    },
  },

  methods: {
    resetForm() {
      this.password = ''

      this.confirmPassword = ''

      this.$refs.form.resetValidation()
    },
  },
}
</script>
