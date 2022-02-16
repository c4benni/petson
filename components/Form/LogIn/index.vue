<template>
  <FormAuth checkbox-label="Remember me" action-text="Log in">
    <BaseTextField
      v-model="email"
      label="Email Address *"
      type="email"
      required
      autofocus
    />

    <TextFieldPassword v-model="password" />

    <template #footer>
      <NuxtLink to="/forgot-password"> Forgot password? </NuxtLink>

      <NuxtLink :to="signUpRoute"> Don't have an account? Sign up </NuxtLink>
    </template>
  </FormAuth>
</template>

<script>
import { modalQuery } from '@/components/utils'

export default {
  name: 'LoginForm',

  data: () => ({
    email: '',
    password: '',
  }),

  computed: {
    signUpRoute() {
      return modalQuery.call(this, 'sign-up')
    },
  },
}
</script>
