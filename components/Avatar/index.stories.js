import { quickLogin } from '../utils/auth'
import Avatar from './index.vue'

export default {
    title: 'Components/Avatar',
    component: Avatar,
}

export const Customize = (args, { argTypes }) => ({
    props: argTypes,
    beforeCreate: quickLogin,
    template: `
    <div class="w-screen h-full grid justify-center items-center">
        <Avatar v-bind="$props" />
    </div>
    `,
})
Customize.args = {
    size: '60',
    variant: 'h6',
}