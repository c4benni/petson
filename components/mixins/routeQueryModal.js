export const queryModal = {
    computed: {
        transition() {
            if (this.vModel) {
                return 'slide-y-transition'
            }
            return 'slide-y-reverse-transition'
        },

        modalQuery() {
            return this.$route.query.modal
        },
    },
}