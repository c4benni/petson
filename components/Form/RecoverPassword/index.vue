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
}
</script>
