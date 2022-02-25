<template>
  <v-fade-transition>
    <v-alert v-if="error" text type="error" color="error" class="mb-[36px]">
      <UiText
        :label="error.message"
        variant="subtitle-1"
        opacity="custom"
        class="error-text--text"
      />

      <template v-if="error.errors">
        <ul
          v-for="(messages, errTitle) in error.errors"
          :key="errTitle"
          :aria-label="`${errTitle} error`"
        >
          <UiText
            v-for="(message, err) in messages"
            :key="err"
            tag="li"
            variant="caption"
            opacity="secondary"
            :label="message"
            class="list-disc"
          />
        </ul>
      </template>
    </v-alert>
  </v-fade-transition>
</template>

<script>
import { undefinedProp } from '~/components/utils'
export default {
  name: 'FormAlert',

  props: {
    error: undefinedProp(Object),
  },
}
</script>
