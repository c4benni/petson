export default {
    data: () => ({
        valid: true,

        loading: false,
    }),

    methods: {
        async submit() {
            // validate form
            const formRef = this.$refs.form

            if (formRef) {
                formRef.validate()
            }

            await this.$nextTick()

            // make request
            if (this.valid) {
                this.loading = true

                await this.apiCall()

                this.loading = false
            }
        },
    },
}