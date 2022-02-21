<script>
export default {
  name: 'Skeleton',

  functional: true,

  props: {
    loading: {
      type: Boolean,
      default: true,
    },
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
          attrs: {
            role: 'alert',
            'aria-busy': 'true',
            'aria-live': 'polite',
            ...data.attrs,
          },
          staticClass: props.color,
          class: [data.staticClass, data.class],
        })
      : c.children[0]
  },
}
</script>
