<script>
import { undefinedStringProp } from '../utils'
export default {
  name: 'Skeleton',

  functional: true,

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

  render(h, c) {
    // render a skeleton that can be customized further with classes when props.loading is true, else show the first default slot content;
    const { data, props } = c

    return props.loading
      ? h('div', {
          key: 'root',
          attrs: {
            role: 'alert',
            'aria-busy': 'true',
            'aria-live': 'polite',
            ...data.attrs,
          },
          staticClass: props.color,
          class: [props.loadingClass],
        })
      : c.children[0]
  },
}
</script>
