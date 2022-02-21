import Vue from 'vue'

import smoothscroll from 'smoothscroll-polyfill'
import { getCookie, setCookie } from '~/services/utils'

// initialize app; Add any configuration that should take place before app is mounted.
export default async function init({ store, $axios }) {
    // init smoothscroll polyfill
    smoothscroll.polyfill()

    Vue.prototype.$notify = {
        async open(message, timeout) {
            await store.dispatch('app/openSnackbar', message, timeout)
        },
        close() {
            store.dispatch('app/closeSnackbar')
        },
    }

    // automatic login
    // get cookie, if it exists, set axios header, then dispatch 'user/getInfo'
    const token = getCookie('token')

    if (token) {
        $axios.setHeader('Authorization', `Bearer ${token}`)

        // try to update the user/info state.
        // if it fails, clear cookies and Bearer token
        const { error } = await store.dispatch('user/getInfo')

        if (error) {
            setCookie('token', '')

            $axios.setHeader('Authorization', '')
        }
    }

    // set user/latestOrdersRowsPerPage state from localStorage
    const latestOrdersRowsPerPage = localStorage.getItem(
        'latestOrdersRowsPerPage'
    )

    if (latestOrdersRowsPerPage) {
        store.commit(
            'user/SET_ORDERS_ROWS_PER_PAGE',
            parseInt(latestOrdersRowsPerPage) || 5
        )
    }
}