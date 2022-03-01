import { shallowMount } from '@vue/test-utils'

import Footer from './index.vue'

describe('<Footer />', () => {
    const wrapper = shallowMount(Footer)

    test('It mounts a <footer />', () => {
        expect(wrapper.find('footer')).toBeTruthy()
    })

    test('It renders footer logo', () => {
        expect(wrapper.find('svg')).toBeTruthy()
    })
})