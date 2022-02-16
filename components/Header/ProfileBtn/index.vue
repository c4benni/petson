<template>
  <HeaderActionBtn :to="showLogin"> Login </HeaderActionBtn>
</template>

<script>
export default {
  computed: {
    showLogin() {
      return {
        //   TODO: Make query reactive

        query: {
          ...this.$route.query,
          // modal: 'log-in',
          modal: 'user-settings',
        },
      }
    },
  },
}
</script>
