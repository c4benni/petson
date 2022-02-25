<script>
import { undefinedStringProp } from '../utils'
export default {
  name: 'Skeleton',

  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    loadingClass: undefinedStringProp,
    color: {
      type: String,
      default: 'grey-300',
    },
  },

  render(h) {
    // render a skeleton that can be customized further with classes when props.loading is true, else show the first default slot content;

    return this.loading
      ? h('div', {
          key: 'root',
          attrs: {
            role: 'alert',
            'aria-busy': 'true',
            'aria-live': 'polite',
            ...this.$attrs,
          },
          staticClass: this.color,
        })
      : this.$slots.default
  },
}
</script>
