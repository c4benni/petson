import vModel from './vModel'
export default {
    mixins: [
        vModel({
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