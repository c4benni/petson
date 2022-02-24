<template>
  <v-form ref="form" v-model="valid" lazy-validation :disabled="loading">
    <v-row>
      <v-col cols="12">
        <BaseTextField
          v-model="email"
          type="email"
          label="Email address *"
          required
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
          Get recovery link
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import recoverPassword from '@/components/mixins/recoverPassword'
import forgotPassword from '~/services/auth/user/forgotPassword'

export default {
  name: 'RecoverPasswordForm',

  mixins: [recoverPassword],

  data: () => ({
    email: '',
  }),

  computed: {
    submitPayload() {
      return { email: this.email }
    },
  },

  methods: {
    async apiCall({ email }) {
      this.loading = true

      this.error = null

      await this.$nextTick()

      const { data, error } = await forgotPassword.call(this, { email })

      this.error = error

      if (error) {
        scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth',
        })
      }

      if (data && data.reset_token) {
        const shortLink = `/change-password?token=${data.reset_token}`

        this.changePasswordLink = {
          title: `${location.origin}${shortLink}`,
          link: `${shortLink}&email=${email}`,
        }

        await this.$nextTick()

        this.dialog = true
      }

      this.loading = false
    },
  },
}
</script>
