<template>
  <v-fade-transition mode="out-in">
    <HeaderActionBtn v-if="!info" :to="showLogin"> Login </HeaderActionBtn>

    <div v-else>
      <HeaderActionBtn :loading="logginOut" @click="endSession">
        Logout
      </HeaderActionBtn>

      <Tooltip label="Settings">
        <v-avatar
          v-ripple
          color="primary-background"
          size="48"
          aria-label="avatar"
          class="ml-[22px] cursor-pointer border border-[#fff]"
        >
          <UiText
            v-if="!info.avatar"
            tag="NuxtLink"
            :props="{
              to: userSetting,
            }"
            variant="h6"
            opacity="secondary"
            :label="initials"
            class="w-full h-full flex justify-center items-center"
          />

          <v-img
            v-else
            width="48"
            height="48"
            class="rounded"
            :src="info.avatar"
            alt="avatar"
          />
        </v-avatar>
      </Tooltip>
    </div>
  </v-fade-transition>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { modalQuery } from '~/components/utils'

export default {
  data: () => ({
    logginOut: false,
  }),

  computed: {
    ...mapState('user', ['info']),
    ...mapGetters('user', ['initials']),

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
