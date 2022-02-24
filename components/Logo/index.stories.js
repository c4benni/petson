import Logo from './index.vue'

export default {
    title: 'Components/Logo',
    component: Logo,
}

export const Customize = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: `
    <div class="w-screen h-full grid justify-center items-center">
        <Logo v-bind="$props" class="primary--text"/>
    </div>
    `,
})
Customize.args = {
    width: '40',
    height: '30',
}