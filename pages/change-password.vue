<template>
  <Page>
    <v-row
      justify="center"
      class="w-[402px] h-full mx-auto mt-[89px] content-start"
    >
      <v-col cols="12">
        <UiText
          tag="h2"
          label="Change password"
          variant="primary"
          size="lg"
          class="text-center mb-[20px]"
        />
      </v-col>

      <v-col cols="12">
        <UiText
          tag="h3"
          label="Your new password must be different from previous passwords."
          variant="secondary"
          class="mb-[8px]"
        />
      </v-col>

      <v-col cols="12">
        <FormChangePassword />
      </v-col>
    </v-row>
  </Page>
</template>

<script>
export default {
  name: 'ChangePasswordPage',
  head: {
    title: 'Change password',
  },
}
</script>
