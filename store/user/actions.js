import { getApp } from '../utils'
import login from '~/services/auth/user/login'
import userInfo from '~/services/user/info'
import logout from '~/services/auth/user/logout'
import { modalQuery } from '~/components/utils'
import userOrders from '@/services/user/orders'

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

        const { error } = await logout.call(app)

        commit('SET_INFO', null)

        if (error) {
            return { error }
        }

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

        return {
            data: {
                message: `Welcome back ${data.first_name}!`,
            },
        }
    },

    // attempt to get item if user is logged in; else show loggin
    async getOrders({ commit, state }) {
        const app = getApp.call(this)

        if (state.info) {
            // refresh store.state.latestOrder if store.state.latestOrder.items length is 0;
            !state.latestOrder.items.length && commit('SET_LATEST_ORDER', null)

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