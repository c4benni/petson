<template>
  <v-dialog
    v-model="modelSync"
    :transition="transition"
    :content-class="`${contentClass} elevation-2`"
    overlay-color="#000"
    overlay-opacity="0.5"
  >
    <v-card>
      <header class="p-[24px] flex justify-end pb-[6px]">
        <v-tooltip bottom>
          <template #activator="{ attrs, on }">
            <v-icon v-bind="attrs" v-on="on" @click="modelSync = false"
              >mdi-close</v-icon
            >
          </template>

          <span>Close</span>
        </v-tooltip>
      </header>

      <slot />
    </v-card>
  </v-dialog>
</template>

<script>
import modelSync from '@/components/mixins/modelSync'
import { undefinedStringProp } from '@/components/utils/index'

export default {
  name: 'BaseDialog',
  mixins: [modelSync(Boolean)],
  props: {
    transition: undefinedStringProp,
    contentClass: undefinedStringProp,
  },
}
</script>
