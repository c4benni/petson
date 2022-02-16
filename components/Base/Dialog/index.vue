<template>
  <v-dialog
    v-model="vModel"
    :transition="transition"
    :content-class="`${contentClass} elevation-2`"
    overlay-color="#000"
    overlay-opacity="0.5"
  >
    <v-card>
      <header class="p-[24px] flex justify-end pb-[6px]">
        <Tooltip label="Close">
          <v-icon @click="vModel = false">mdi-close</v-icon>
        </Tooltip>
      </header>

      <slot />
    </v-card>
  </v-dialog>
</template>

<script>
import vModel from '@/components/mixins/vModel'
import { undefinedStringProp } from '@/components/utils/index'

export default {
  name: 'BaseDialog',
  mixins: [vModel(Boolean)],
  props: {
    transition: undefinedStringProp,
    contentClass: undefinedStringProp,
  },
}
</script>
