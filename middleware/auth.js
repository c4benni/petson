export default function({ store, redirect, route }) {
    // redirect modalQueries;

    // if there's no session, and client is trying to access ?modal=user-settings, show login.
    const {
        user: { info },
    } = store.state

    const modalQuery = route.query.modal

    const changeModal = (modal = '') => {
        // change queryModal, ignore args to close
        redirect({
            query: {
                ...route.query,
                modal: modal || undefined,
            },
        })
    }

    if (!info && modalQuery === 'user-settings') {
        changeModal('log-in')
    }

    // if logged in client is trying to access ?modal=log-in or ?modal=sign-up,
    // bail.
    else if (info && ['log-in', 'sign-up'].includes(modalQuery)) {
        changeModal()
    }
}