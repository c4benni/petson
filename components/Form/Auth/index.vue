<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <slot />

    <div
      class="mb-[26px] grid grid-flow-col gap-x-4 items-center justify-start"
    >
      <v-checkbox :id="checkboxId" v-model="checkbox" />

      <label :for="checkboxId" class="cursor-pointer">
        {{ checkboxLabel }}
      </label>
    </div>

    <v-btn depressed color="primary" block @click="submit">
      {{ actionText }}
    </v-btn>

    <v-row justify="space-between" class="mt-[32px]">
      <slot name="footer" />
    </v-row>
  </v-form>
</template>

<script>
import { requiredStringProp } from '@/components/utils'

export default {
  name: 'AuthFormWrapper',
  props: {
    checkboxLabel: requiredStringProp,
    actionText: requiredStringProp,
  },

  data: () => ({
    valid: true,
    checkbox: false,
  }),

  computed: {
    checkboxId() {
      return `auth-checkbox-${this._uid}`
    },
  },

  watch: {
    '$route.query.modal': 'resetForm',
  },

  methods: {
    async submit() {
      this.$refs?.form?.validate?.()

      await this.$nextTick()

      if (this.valid) {
        this.$emit('on-submit', {
          checkbox: this.checkbox,
        })
      }
    },

    resetForm(val) {
      if (val && ['log-in', 'sign-up'].includes(val)) {
        // v-form reset to clear warnings and previous input on focus;
        this.$refs.form?.reset()
      }
    },
  },
}
</script>
