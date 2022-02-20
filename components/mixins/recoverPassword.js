export default {
    props: {
        loading: Boolean,
    },

    data: () => ({
        valid: true,
    }),

    methods: {
        async submit() {
            const formRef = this.$refs.form

            if (formRef) {
                formRef.validate()
            }

            await this.$nextTick()

            if (this.valid) {
                this.$emit('on-submit', this.submitPayload)
            }
        },
    },
}