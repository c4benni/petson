<template>
  <FormAuth
    checkbox-label="I want to recieve inspiration, marketing promotions and updates via email."
    action-text="Sign up"
    :loading="loading"
    :error="error"
    @on-submit="submit"
    @clear-error="error = null"
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
import auth from '~/components/mixins/auth'
import { modalQuery } from '~/components/utils'
import signUp from '~/services/auth/user/signUp'

export default {
  name: 'SignUpForm',

  mixins: [auth],

  data: () => ({
    firstName: '',
    lastName: '',
    confirmPassword: '',
  }),

  computed: {
    logInRoute() {
      return modalQuery.call(this, 'log-in')
    },
  },

  methods: {
    // called in auth mixin's submit method
    onSuccess() {
      // switch forms and show log in form.
      this.$router.replace(modalQuery.call(this, 'log-in'))
    },

    // called in auth mixin's submit method
    onError() {
      // clear password fields;

      this.password = ''

      this.confirmPassword = ''
    },

    async apiCall(isMarketing) {
      const { firstName, lastName, email, password, confirmPassword } = this

      const { error } = await signUp.call(this, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        isMarketing,
      })

      if (error) {
        return {
          error,
          data: null,
        }
      }

      return {
        error: null,
        data: {
          message: `Account successfully created! Login.`,
        },
      }
    },
  },
}
</script>
