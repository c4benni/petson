<template>
  <v-form>
    <v-row>
      <v-col cols="12">
        <BaseTextField v-model="email" type="email" label="Email address *" />
      </v-col>

      <v-col>
        <v-btn elevation="1" color="primary" block @click="submit">
          Get recovery link
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'RecoverPasswordForm',

  data: () => ({
    email: '',
  }),

  methods: {
    submit() {
      // TODO: add api call
      this.$emit('on-submit', this.email)
    },
  },
}
</script>
