<script>
// Utitlity component to render different typography based on props passed;
// handles font-weight, font-size, and tag to be rendered;
// color will be handled externally;

import { trimmedLowerCase } from '../utils'

export default {
  name: 'UiText',

  props: {
    title: Boolean,

    underline: Boolean,

    truncate: Boolean,

    label: {
      type: String,
      default: undefined,
    },

    tag: {
      type: String,
      default: 'div',
    },

    props: {
      type: Object,
      default: () => ({}),
    },

    variant: {
      type: String,
      default: 'body-1',
      validator: (prop) =>
        /^(?:h[1-6]|subtitle-[1-2]|body-[1-2]|button|caption|overline|custom)$/i.test(
          prop
        ),
    },

    opacity: {
      type: String,
      default: 'primary',
      validator: (prop) =>
        /^(?:black|primary|secondary|disabled|hint|custom)$/i.test(prop),
    },

    case: {
      type: String,
      default: 'custom',
      validator: (prop) => /^(?:upper|lower|capitalize|custom)$/.test(prop),
    },

    lineClamp: {
      type: [String, Number],
      default: undefined,
      validator: (prop) => (prop ? /^[1-3]$/.test(prop) : true),
    },

    // html attrs to be used
    attrs: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    // returns material design typography classes based on `variant` prop value.
    variantClass() {
      if (!this.variant) return ''

      const variant = trimmedLowerCase(this.variant)

      if (variant === 'custom') return ''

      return `text-${variant}`
    },

    caseFormat() {
      const format = trimmedLowerCase(this.case)

      if (format === 'custom') return 'text-none'

      switch (format) {
        case 'capitalize':
          return `text-${format}`
        default:
          return `text-${format}case`
      }
    },

    // returns different text-color based on opacity
    opacityClass() {
      if (!this.opacity) return ''

      const opacity = trimmedLowerCase(this.opacity)

      if (opacity === 'custom') return ''

      switch (opacity) {
        case 'hint':
          return 'text-disabled--text'
        case 'black':
          return 'black--text'
        default:
          return `text-${opacity}--text`
      }
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
        // attrs is the html attributes to be used. Can be used to override the existing `title` prop
        attrs: { ...this.$attrs, ...this.attrs },
        props: { ...this.props },
        on: { ...this.$listeners },
        class: [
          this.title
            ? 'text-h2 primary--text'
            : [this.variantClass, this.caseFormat, this.opacityClass],
          {
            'text-decoration-underline': this.underline,
            truncate: this.truncate,
            [`line-clamp-${this.lineClamp}`]: this.lineClamp,
          },
        ],
      },
      [content]
    )
  },
}
</script>
