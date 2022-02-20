import Vue from 'vue'

import smoothscroll from 'smoothscroll-polyfill'
import { getCookie } from '~/services/utils'

// initialize app; Add any configuration that should take place before app is mounted.
export default function init({ store, $axios }) {
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
        $axios.setHeader('Authorization', token)

        store.dispatch('user/getInfo')
    }
}