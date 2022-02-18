<template>
  <!-- eslint-disable vue/valid-v-slot -->

  <v-data-table
    :headers="headers"
    :items="orders"
    :items-per-page="5"
    class="elevation-1 data-table-root"
  >
    <template #top>
      <UiText
        tag="h3"
        label="Latest Orders"
        class="pt-[14px] pl-[20px] pb-[8px]"
      />
    </template>

    <template #item.uuid="{ item }">
      <UiText :label="item.uuid" opacity="secondary" variant="body-2" />
    </template>

    <template #item.status="{ item }">
      <UserSettingsDataTableChip :status="item.status" />
    </template>

    <template #item.invoice>
      <v-btn icon tile class="rounded grey-300 text-secondary--text mr-[12px]">
        <v-icon>mdi-tray-arrow-down</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
const headers = [
  {
    text: 'Order UUID',
    value: 'uuid',
    class: 'pl-[28px]',
    cellClass: 'pl-[28px] text',
  },
  { text: 'Status', value: 'status' },
  {
    text: 'Download Invoice',
    value: 'invoice',
    align: 'right',
    sortable: false,
  },
]

const orders = [
  { uuid: '083d0036-9616-3f1e-9b03-4fe51ad2e1c2', status: 'open' },
  { uuid: '083d0036-9616-3f1e-9b03-4fe51ad2e1c2', status: 'pending' },
  { uuid: '083d0036-9616-3f1e-9b03-4fe51ad2e1c2', status: 'paid' },
  { uuid: '083d0036-9616-3f1e-9b03-4fe51ad2e1c2', status: 'shipped' },
  { uuid: '083d0036-9616-3f1e-9b03-4fe51ad2e1c2', status: 'cancelled' },
]

export default {
  data: () => ({
    headers,
    orders,
  }),

  methods: {
    getStatusColor(status) {
      const statusColor = {
        shipped: 'green',
        paid: 'green',
        pending: 'orange',
        open: 'blue',
        cancelled: 'gray',
      }
      return statusColor[status]
    },
  },
}
</script>

<style scoped>
#__nuxt .data-table-root >>> th,
#__nuxt .data-table-root >>> td,
#__nuxt .data-table-root >>> .v-data-footer {
  border-color: rgba(0, 0, 0, 0.08);
}

#__nuxt .data-table-root >>> th:not(:hover) {
  color: var(--v-text-secondary-base);
}

#__nuxt .data-table-root >>> .v-data-table-header th:last-of-type {
  padding-right: 0;
}

#__nuxt .data-table-root >>> .v-data-table__wrapper {
  padding: 0 30px;
}

#__nuxt .data-table-root >>> .v-data-footer {
  color: var(--v-grey-base);
}
</style>
