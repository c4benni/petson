<template functional>
  <v-breadcrumbs :items="props.items" class="p-0">
    <template #item="{ item: { to, href, disabled, title } }">
      <v-breadcrumbs-item
        :to="to"
        :href="href"
        :target="href ? '_blank' : undefined"
        :nuxt="!!to"
        :disabled="disabled"
      >
        <UiText
          tag="span"
          :label="title"
          :variant="disabled ? 'primary' : 'secondary'"
        />
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
import { requiredProp } from '../utils'
export default {
  name: 'Breadcrumbs',
  props: {
    items: requiredProp(Array),
  },
}
</script>
