<template>
  <v-form>
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
        <v-btn elevation="1" color="primary" block> Change password </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'ChangePasswordForm',
  data: () => ({
    password: '',
    confirmPassword: '',
  }),
}
</script>
