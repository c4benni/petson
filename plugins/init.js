// initialize app; Add any configuration that should take place before app is mounted.
export default function init({ store, $axios, redirect, app }, inject) {
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

    // catch all unauthorized requests and send client to login modal;
    $axios.onError((err) => {
        if (err.response.status === 401) {
            // redirect to main page and open login modal.
            redirect('/?modal=log-in')
        }
    })
}