export default {
    loading(state) {
        return state.key === null
    },

    error(state) {
        return state.key === 'error'
    },
}