<template>
  <BaseDialog
    v-model="modelSync"
    transition="scale-transition"
    content-class="w-[545px] auth-dialog"
  >
    <h2 id="dialog-title" class="sr-only">Recovery link</h2>
    <v-container class="mt-[18px] w-[424px] pb-[68px] px-0">
      <v-row>
        <v-col>
          <v-alert text type="info" color="info-background">
            <template #prepend>
              <v-icon color="info" left> mdi-information-outline </v-icon>
            </template>
            <UiText
              label="For demo purposes, we are using a URL token"
              size="sm"
              class="info-text--text"
            />
          </v-alert>
        </v-col>

        <v-col>
          <UiText
            tag="h3"
            label="Click on the URL and change password"
            variant="secondary"
          />

          <NuxtLink :to="href">{{ href }}</NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </BaseDialog>
</template>

<script>
import modelSync from '~/components/mixins/modelSync'
import { requiredStringProp } from '~/components/utils'

export default {
  name: 'RecoverPasswordDialog',
  mixins: [modelSync(Boolean)],

  props: {
    href: requiredStringProp,
  },
}
</script>
