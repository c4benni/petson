export default {
    data: () => ({
        valid: true,

        loading: false,
    }),

    methods: {
        async submit() {
            const formRef = this.$refs.form

            if (formRef) {
                formRef.validate()
            }

            await this.$nextTick()

            if (this.valid) {
                this.loading = true

                await this.apiCall('on-submit', this.submitPayload)

                this.loading = false
            }
        },
    },
}