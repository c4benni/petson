export default function vModel(
    propConfig = {},
    prop = 'modelValue',
    event = 'update:modelValue',
    computedName = 'vModel'
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