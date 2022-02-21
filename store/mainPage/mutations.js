export default {
    SET_KEY(state, key) {
        state.key = key
    },

    // set different sections ['product', 'promotion', 'blogPost']
    SET_SECTION(state, { section, data }) {
        state[section] = data
    },
}