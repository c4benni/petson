import { undefinedProp } from '../utils'
import modelSync from './modelSync'
export default {
    mixins: [
        modelSync({
            type: [String, Number],
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
        min: undefinedProp([String, Number]),
        max: undefinedProp([String, Number]),
    },
}