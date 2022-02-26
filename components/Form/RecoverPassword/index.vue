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

  emits: ['on-request', 'show-dialog'],

  data: () => ({
    email: '',
  }),

  methods: {
    async apiCall() {
      this.loading = true

      await this.$nextTick()

      const { email } = this

      const { error, data } = await forgotPassword.call(this, {
        email,
      })

      this.$emit('on-request', { error, data })

      if (error) {
        scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth',
        })
      }

      if (data && data.reset_token) {
        const shortLink = `/change-password?token=${data.reset_token}`

        await this.$nextTick()

        this.$emit('show-dialog', {
          title: `${location.origin}${shortLink}`,
          link: `${shortLink}&email=${email}`,
        })
      }

      this.loading = false
    },
  },
}
</script>
