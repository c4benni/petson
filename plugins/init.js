// automatic login
async function autoLogin({ app, $axios, redirect, store }) {
    // get cookie, if it exists, set axios header, then dispatch 'user/getInfo'
    const token = app.$cookies.get('token')

    if (token) {
        $axios.setHeader('Authorization', `Bearer ${token}`)

        // try to update the user/info state.
        // if it fails, clear cookies and Bearer token
        const { error } = await store.dispatch('user/getInfo')

        if (error) {
            app.$cookies.remove('token')

            // send back home
            redirect('/')

            $axios.setHeader('Authorization', '')
        }
    }
}

// initialize app; Add any configuration that should take place before app is mounted.
export default async function init({ store, $axios, redirect, app }, inject) {
    // opens the snackbar by dispatching actions to the `app` module.
    const notify = {
        async open(message, timeout) {
            await store.dispatch('app/openSnackbar', message, timeout)
        },
        close() {
            store.dispatch('app/closeSnackbar')
        },
    }

    inject('notify', notify)

    // wait for auto login to kick in, before listening for failed requests
    await autoLogin({ app, $axios, redirect, store })

    // catch all unauthorized requests and send client to login modal;
    $axios.onError((err) => {
        if (err.response.status === 401) {
            // redirect to main page and open login modal.
            redirect('/?modal=log-in')
        }
    })
}