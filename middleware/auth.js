export default function({ store, redirect, route, req }) {
    // redirect modalQueries;

    // if there's no session, and client is trying to access ?modal=user-settings, bail.
    const {
        user: { info },
    } = store.state

    const modalQuery = route.query.modal

    const closeModal = () => {
        redirect({
            query: {
                ...route.query,
                modal: undefined,
            },
        })
    }

    if (!info && modalQuery === 'user-settings') {
        closeModal()
    }

    // if logged in client is trying to access ?modal=log-in or ?modal=sign-up,
    // bail.

    if (info && ['log-in', 'sign-up'].includes(modalQuery)) {
        closeModal()
    }
}