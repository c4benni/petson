import smoothscroll from 'smoothscroll-polyfill'
import { getCookie, setCookie } from '~/services/utils'

// initialize app; Add any configuration that should take place before app is mounted.
export default async function init({ store, $axios, redirect, route }, inject) {
    // init smoothscroll polyfill
    smoothscroll.polyfill()

    const notify = {
        async open(message, timeout) {
            await store.dispatch('app/openSnackbar', message, timeout)
        },
        close() {
            store.dispatch('app/closeSnackbar')
        },
    }

    inject('notify', notify)

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

    // catch all unauthorized requests and send client to login modal;
    $axios.onError((err) => {
        if (err.response.status === 401) {
            // redirect to main page and open login modal.
            redirect('/?modal=log-in')
        }
    })
}