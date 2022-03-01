import { mount } from '@vue/test-utils'

import AnimateInView from './index.vue'

let wrapper

const Component = (options) => {
    wrapper = mount(AnimateInView, options)
}

describe('<AnimateInView />', () => {
    const defaultSlot = '<h1 data-test-id="slot"> Hello world </h1>'

    test('Mounts its child', () => {
        Component({
            slots: {
                default: defaultSlot,
            },
        })

        expect(wrapper.find('h1[data-test-id=slot]')).toBeTruthy()
    })

    test('Renders dynamic HTMLElement', () => {
        Component({
            slots: {
                default: defaultSlot,
            },
            attrs: {
                'data-test-id': 'root',
            },
            propsData: {
                tag: 'article',
            },
        })

        expect(wrapper.find('article[data-test-id=root]')).toBeTruthy()
    })
})