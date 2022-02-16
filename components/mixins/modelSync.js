export default function modelSync(
    propConfig = {},
    prop = 'modelValue',
    event = 'update:modelValue',
    computedName = 'modelSync'
) {
    return {
        model: {
            prop,
            event,
        },
        props: {
            [prop]: propConfig,
        },
        computed: {
            [computedName]: {
                get() {
                    return this[prop]
                },
                set(value) {
                    this.$emit(event, value)
                },
            },
        },
    }
}