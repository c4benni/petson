import modelSync from './modelSync'
export default {
    mixins: [
        modelSync({
            type: String,
            default: '',
        }),
    ],
    props: {
        required: Boolean,
        disabled: Boolean,
        autofocus: Boolean,
        rules: {
            type: Array,
            default: () => [],
        },
    },
}