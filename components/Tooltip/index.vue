<script>
import { requiredStringProp, trimmedLowerCase } from '../utils'
// Helper component to create a universal tooltip that must contain a `label` prop;

export default {
  name: 'Tooltip',
  functional: true,
  props: {
    label: requiredStringProp,
    position: {
      type: String,
      default: 'bottom',
      validator: (prop) =>
        ['top', 'right', 'bottom', 'left'].includes(trimmedLowerCase(prop)),
    },
  },
  render(h, c) {
    const props = c.props

    return h(
      'v-tooltip',
      {
        props: {
          [props.position]: true,
        },
        scopedSlots: {
          activator: ({ on, attrs }) => {
            const vNode = c.children[0]

            // not a text node
            if (typeof vNode.tag !== 'undefined' && !vNode.text) {
              // add activator's payload to vNode;
              // this is the equivalent of v-slot:activator="{attrs, on}" binding
              // however, using templates removes the reactivity.
              vNode.data = {
                ...vNode.data,
                attrs: {
                  ...(vNode.data?.attrs || {}),
                  ...attrs,
                },
                on: {
                  ...(vNode.data?.on || {}),
                  ...on,
                },
              }

              return vNode
            }

            return null
          },
        },
      },
      [h('span', props.label)]
    )
  },
}
</script>
