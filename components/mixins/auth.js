export default {
    data: () => ({
        email: '',

        password: '',

        error: null,

        loading: false,
    }),

    methods: {
        onSuccess() {},

        onError() {
            this.password = ''
        },

        reset() {
            this.error = null

            this.loading = true

            this.$notify.close()
        },

        async submit(checkbox) {
            this.reset()

            await this.$nextTick()

            const { error } = await this.apiCall(checkbox)

            this.loading = false

            this.error = error

            if (!error) {
                this.onSuccess()
            } else {
                this.onError()

                // scroll to top so alert can be visible
                this.$el.closest('.v-dialog').scrollTo({
                    left: 0,
                    top: 0,
                    behavior: 'smooth',
                })
            }
        },
    },
}