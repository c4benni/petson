<template>
  <FormAuth
    checkbox-label="Remember me"
    action-text="Log in"
    :loading="loading"
    :error="error"
    @on-submit="submit"
    @clear-error="error = null"
  >
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
import { mapActions } from 'vuex'
import { modalQuery } from '@/components/utils'

import auth from '@/components/mixins/auth'

export default {
  name: 'LoginForm',

  mixins: [auth],

  computed: {
    signUpRoute() {
      return modalQuery.call(this, 'sign-up')
    },
  },

  methods: {
    ...mapActions({
      login: 'user/login',
    }),

    // called in auth mixin's submit method
    onSuccess() {
      // close login dialog by calling modalQuery without a modal value
      this.$router.replace(modalQuery.call(this))
    },

    async apiCall(remember) {
      const { email, password } = this

      const { error, data } = await this.login({
        email,
        password,
        remember,
      })

      return { error, data }
    },
  },
}
</script>
