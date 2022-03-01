<template>
  <v-fade-transition mode="out-in">
    <HeaderActionBtn v-if="!info" :to="showLogin"> Login </HeaderActionBtn>

    <div v-else>
      <HeaderActionBtn :loading="logginOut" @click="endSession">
        Logout
      </HeaderActionBtn>

      <ClientOnly>
        <v-tooltip bottom>
          <template #activator="{ attrs, on }">
            <Avatar
              v-ripple
              size="48"
              :to="userSetting"
              variant="h6"
              class="ml-[22px] cursor-pointer border border-[#fff]"
              v-bind="attrs"
              v-on="on"
            />
          </template>

          <span>Settings</span>
        </v-tooltip>
      </ClientOnly>
    </div>
  </v-fade-transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { modalQuery } from '~/components/utils'

export default {
  data: () => ({
    logginOut: false,
  }),

  computed: {
    ...mapState('user', ['info']),

    showLogin() {
      return modalQuery.call(this, 'log-in')
    },

    userSetting() {
      return modalQuery.call(this, 'user-settings')
    },
  },

  methods: {
    ...mapActions('user', ['logout']),

    async endSession() {
      this.logginOut = true

      await this.logout()

      this.logginOut = false
    },
  },
}
</script>
