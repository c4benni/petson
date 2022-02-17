<script>
// utility component for a simple Animate on Scroll behavior

export default {
  name: 'AnimateInView',

  props: {
    tag: {
      type: String,
      default: 'section',
    },

    // transition definitions. same as appear-active-class in <Transition/>
    appearActive: {
      type: String,
      default: 'transition-[transform,opacity] duration-[700ms] transform-gpu',
    },

    // same as appear-class in <Transition/>
    appearFrom: {
      type: String,
      default: 'translate-y-48 opacity-0',
    },
  },

  data: () => ({
    intersected: false,
  }),

  render(h) {
    return h(
      this.tag,
      {
        attrs: {
          ...this.$attrs,
        },
        on: {
          ...this.$listeners,
        },
        directives: [
          {
            name: 'intersect',
            modifiers: {
              once: true,
            },
            value: (entries) => {
              if (entries[0].isIntersecting) {
                this.intersected = true
              }
            },
          },
        ],
      },
      [
        h(
          'div',
          {
            staticClass: this.appearActive,
            class: [
              {
                [this.appearFrom]: !this.intersected,
              },
            ],
          },
          [this.$slots.default]
        ),
      ]
    )
  },
}
</script>
