<template>
  <v-avatar
    v-if="info"
    :color="color"
    :size="size"
    aria-label="Avatar"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <UiText
      v-if="!info.avatar"
      :tag="to ? 'NuxtLink' : 'span'"
      :props="uiTextProps"
      :variant="variant"
      opacity="secondary"
      :label="initials"
      class="w-full h-full flex justify-center items-center select-none"
    />

    <ApiImg
      v-else
      :width="size"
      :height="size"
      class="rounded-full"
      :src="info.avatar"
      alt="User avatar"
      :uuid="info.avatar"
    />
  </v-avatar>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { requiredProp, requiredStringProp, undefinedProp } from '../utils'

export default {
  name: 'Avatar',

  props: {
    size: requiredProp([Number, String]),
    color: {
      type: String,
      default: 'primary-background',
    },
    to: undefinedProp([Object, String]),
    variant: requiredStringProp,
  },

  computed: {
    ...mapState('user', ['info']),
    ...mapGetters('user', ['initials']),

    uiTextProps() {
      return this.to
        ? {
            to: this.to,
          }
        : undefined
    },
  },
}
</script>
