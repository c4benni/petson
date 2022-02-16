<script>
// Utitlity component to render different typography based on props passed;
// handles font-weight, font-size, and tag to be rendered;
// color will be handled externally;

import { trimmedLowerCase } from '../utils'

export default {
  name: 'UiText',

  props: {
    label: {
      type: String,
      default: undefined,
    },
    tag: {
      type: String,
      default: 'div',
    },
    primary: Boolean,
    props: {
      type: Object,
      default: () => ({}),
    },
    lineClamp: {
      type: Number,
      default: undefined,
      validator: (prop) => prop > 0 && prop < 4,
    },
    size: {
      type: String,
      default: 'md',
      validator: (prop) =>
        [
          'xxs',
          'xs',
          'sm',
          'md',
          'mdlg',
          'lg',
          'xl',
          '2xl',
          '4xl',
          'custom',
        ].includes(trimmedLowerCase(prop)),
    },
    weight: {
      type: Number,
      default: 400,
      validator: (prop) => [200, 300, 400, 500, 600].includes(prop),
    },
    variant: {
      type: String,
      default: undefined,
      validator: (prop) => {
        if (typeof prop === 'string') {
          return ['primary', 'secondary', 'disabled', 'hint'].includes(
            trimmedLowerCase(prop)
          )
        }
        return true
      },
    },
  },

  computed: {
    // the tailwind class to be applied based on the `size` prop;
    // returns md size if size not given or passed a wrong prop value;
    sizeClass() {
      switch (trimmedLowerCase(this.size)) {
        case 'custom':
          return ''
        case 'md':
          return 'text-base'
        default:
          return `text-${this.size}`
      }
    },

    // the tailwind class to be applied based on the `weight` prop;
    // defaults to 400;
    weightClass() {
      switch (this.weight) {
        case 200:
          return 'font-extralight'
        case 300:
          return 'font-light'
        case 500:
          return 'font-medium'
        case 600:
          return 'font-semibold'
        default:
          return 'font-normal'
      }
    },

    // returns different text-color based on variant
    variantClass() {
      if (!this.variant) return ''

      const variant = trimmedLowerCase(this.variant)

      switch (variant) {
        case 'hint':
          return 'text-disabled--text'
        default:
          return `text-${variant}--text`
      }
    },

    lineClampClasses() {
      if (!this.lineClamp) return ''

      return `line-clamp-${this.lineClamp}`
    },
  },

  render(h) {
    const content = this.label || this.$slots.default

    if (typeof content === 'undefined') {
      return null
    }

    return h(
      this.tag,
      {
        attrs: { ...this.$attrs },
        props: { ...this.props },
        on: { ...this.$listeners },
        class: [
          this.variant === 'title' && this.primary
            ? 'font-light primary--text text-4xl'
            : [this.sizeClass, this.weightClass, this.variantClass],
          this.lineClampClasses,
        ],
      },
      [content]
    )
  },
}
</script>
