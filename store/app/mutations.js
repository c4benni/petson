export default {
    SET_SNACKBAR(state, config) {
        state.snackbar = {
            ...state.snackbar,
            ...config,
        }
    },
}