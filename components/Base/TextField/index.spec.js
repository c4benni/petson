import { mount } from '@vue/test-utils'

import BaseTextField from './index.vue'

let wrapper

const Component = (options) => {
    wrapper = mount(BaseTextField, options)
}

describe('<BaseTextField />', () => {
    const dynamicTypeAndLabel = (type) => {
        test('Mounts dynamic `input`', () => {
            Component({
                propsData: {
                    type,
                    label: type,
                },
            })

            expect(wrapper.find(`input[type=${type}]`)).toBeTruthy()

            expect(wrapper.find('label').text()).toBe(type)
        })
    }

    dynamicTypeAndLabel('email')

    dynamicTypeAndLabel('password')

    dynamicTypeAndLabel('text')
})