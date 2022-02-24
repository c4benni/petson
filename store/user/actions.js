import { getApp } from '../utils'
import login from '~/services/auth/user/login'
import userInfo from '~/services/user/info'
import logout from '~/services/auth/user/logout'
import { modalQuery } from '~/components/utils'
import userOrders from '~/services/user/orders'

export default {
    // get user info and save it to state.info;
    async getInfo({ commit }) {
        const app = getApp.call(this)

        const { error, data } = await userInfo.call(app)

        if (data) {
            commit('SET_INFO', data)

            return { data }
        }

        return { error }
    },

    async logout({ commit }) {
        const app = getApp.call(this)

        await logout.call(app)

        commit('SET_INFO', null)

        await app.$notify.open('Logged out!', 3000)

        return {
            data: 1,
        }
    },

    async login({ dispatch }, credentials) {
        const app = getApp.call(this)

        const { error } = await login.call(app, credentials)

        if (error) {
            return { error }
        }

        const { error: infoError, data } = await dispatch('getInfo')

        //   if an error occured trying to get user data, reverse the login and send error
        if (infoError) {
            await dispatch('logout')

            return { error }
        }

        await app.$notify.open(`Welcome back ${data.first_name}!`, 3000)

        return {
            data: 1,
        }
    },

    // attempt to get item if user is logged in; else show loggin
    async getOrders({ commit, state, getters }, showLoading) {
        const app = getApp.call(this)

        if (getters.loggedIn) {
            // refresh state.latestOrder so loader can be shown in user-settings dialog
            showLoading && commit('SET_LATEST_ORDER', null)

            const { error, data } = await userOrders.call(app)

            if (error) {
                return { error }
            }

            commit('SET_LATEST_ORDER', data)

            return { data: 1 }
        } else {
            app.$router.replace(modalQuery.call(app, 'log-in'))

            return {
                error: {
                    message: 'Not logged in',
                },
            }
        }
    },
}