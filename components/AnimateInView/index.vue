<script>
import { undefinedStringProp } from '../utils'
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
      default: 'transition-[opacity,transform] duration-[700ms]',
    },

    // same as appear-class in <Transition/>
    appearFrom: {
      type: String,
      default: 'opacity-0',
    },

    // transition-delay
    delay: undefinedStringProp,
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
            style: {
              transitionDelay: this.delay,
            },
          },
          [this.$slots.default]
        ),
      ]
    )
  },
}
</script>
