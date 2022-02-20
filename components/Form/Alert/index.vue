<template functional>
  <v-fade-transition>
    <v-alert
      v-if="props.error"
      text
      type="error"
      color="error"
      class="mb-[36px]"
    >
      <UiText
        :label="props.error.message"
        variant="subtitle-1"
        opacity="custom"
        class="error-text--text"
      />

      <template v-if="props.error.errors">
        <ul
          v-for="(messages, errTitle) in props.error.errors"
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
