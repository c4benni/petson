import { getApp } from '../utils'

export default {
    async openSnackbar({ commit }, message, timeout) {
        commit('SET_SNACKBAR', {
            message,
            timeout,
            key: `${performance.now()}`,
        })

        const app = getApp.call(this)

        await app.$nextTick()

        commit('SET_SNACKBAR', {
            active: true,
        })
    },

    closeSnackbar({ commit }) {
        commit('SET_SNACKBAR', {
            active: false,
        })
    },
}