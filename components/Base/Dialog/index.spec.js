import { mount } from '@vue/test-utils'

import BaseDialog from './index.vue'

let wrapper

const Component = () => {
    wrapper = mount(BaseDialog, {
        slots: {
            default: '<h1 data-test-id="slot"> Hello world </h1>',
        },
    })
}

describe('<BaseDialog />', () => {
    Component()

    test('Mounts its child', () => {
        expect(wrapper.find('h1[data-test-id=slot]')).toBeTruthy()
    })

    test('Shows close button', () => {
        // find the close icon
        expect(wrapper.find('button.v-icon')).toBeTruthy()
    })
})