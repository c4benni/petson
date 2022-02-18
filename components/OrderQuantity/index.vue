<template>
  <div class="flex space-x-8">
    <template v-for="([icon, disabled, onClick], index) in icons">
      <v-btn
        :key="icon"
        :disabled="disabled"
        depressed
        class="rounded p-0"
        :class="{
          'min-h-[48px] min-w-[48px] h-[48px] max-w-[48px]': !dense,
          'min-h-[36px] min-w-[36px] h-[36px] max-w-[36px]': dense,
        }"
        :large="dense"
        :title="icon"
        @click="onClick"
      >
        <v-icon :color="disabled ? undefined : 'text-secondary'">
          mdi-{{ icon }}
        </v-icon>
      </v-btn>

      <BaseTextField
        v-if="index === 0"
        :key="icon + 'icon'"
        v-model="modelSync"
        dense
        solo
        flat
        label="Quantity"
        type="number"
        :min="min"
        :max="max"
        hide-details
        class="p-0"
        :class="{
          'min-h-[48px] min-w-[48px] h-[48px] max-w-[48px]': !dense,
          'min-h-[36px] min-w-[36px] h-[36px] max-w-[36px]': dense,
        }"
      />
    </template>
  </div>
</template>

<script>
import modelSync from '../mixins/modelSync'
import { requiredProp } from '../utils'

export default {
  name: 'OrderQuantity',

  mixins: [modelSync([Number, String])],

  props: {
    dense: Boolean,
    min: {
      type: Number,
      default: 0,
    },
    max: requiredProp(Number),
  },

  computed: {
    icons() {
      return [
        [
          'minus',
          this.modelSync <= this.min,
          () => (this.modelSync = parseFloat(this.modelSync) - 1),
        ],
        [
          'plus',
          this.modelSync >= this.max,
          () => (this.modelSync = parseFloat(this.modelSync) + 1),
        ],
      ]
    },
  },
}
</script>

<style scoped>
.v-input >>> .v-input__control,
.v-input >>> .v-input__slot {
  height: 100% !important;
  width: 100% !important;
  padding: 0 !important;
}

.v-input >>> input {
  text-align: center;
}
</style>
