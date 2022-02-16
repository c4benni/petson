<template>
  <FormAuth
    checkbox-label="I want to recieve inspiration, marketing promotions and updates via email."
    action-text="Sign up"
  >
    <v-row>
      <v-col>
        <BaseTextField
          v-model="firstName"
          label="First name *"
          autofocus
          required
        />
      </v-col>

      <v-col>
        <BaseTextField v-model="lastName" label="Last name *" required />
      </v-col>
    </v-row>

    <BaseTextField
      v-model="email"
      label="Email Address *"
      type="email"
      required
    />

    <TextFieldPassword v-model="password" />

    <TextFieldConfirmPassword v-model="confirmPassword" :password="password" />

    <template #footer>
      <div class="text-center w-full">
        <NuxtLink :to="logInRoute"> Already have an account? Log in </NuxtLink>
      </div>
    </template>
  </FormAuth>
</template>

<script>
import { modalQuery } from '~/components/utils'

export default {
  name: 'SignUpForm',

  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),

  computed: {
    logInRoute() {
      return modalQuery.call(this, 'log-in')
    },
  },
}
</script>
