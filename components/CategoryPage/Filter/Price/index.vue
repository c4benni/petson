<template>
  <v-expansion-panel>
    <CategoryPageFilterPanelHeader label="price" />

    <v-expansion-panel-content>
      <div class="grid mt-[12px]">
        <v-slider
          v-model="price"
          min="0"
          max="100"
          track-color="rgba(0,0,0,0.26)"
          track-fill-color="primary-darken-1"
          thumb-color="white"
        />

        <BaseTextField
          v-model="price"
          dense
          solo
          flat
          label="Price"
          type="number"
          suffix="kn"
          hide-details
          class="w-[78px] justify-self-end"
        />
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'CategoryPageFilterPrice',

  data: () => ({
    price: 100,
    min: 0,
    max: 100,
  }),

  computed: {
    priceSync: {
      get() {
        return `${this.price} kn`
      },
      set(val) {
        if (val < this.min || val > this.max) return
        this.price = parseFloat(val)
      },
    },
  },
}
</script>

<style scoped>
.v-input__slider >>> .v-slider__track-container {
  height: 8px;
}

.v-input__slider >>> .v-slider__track-fill {
  border-radius: 10px 0 0 10px;
}

.v-input__slider >>> .v-slider__track-background {
  border-radius: 0 10px 10px 0;
}

.v-input__slider >>> .v-slider__thumb {
  width: 20px;
  height: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

.v-input__slider >>> .v-slider__thumb:before,
.v-input__slider >>> .v-slider__thumb:after {
  display: none;
}

.v-input >>> input[type='number'] {
  text-align: right;
}
</style>
