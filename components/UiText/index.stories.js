import UiText from './index.vue'

export default {
    title: 'Components/UiText',
    component: UiText,
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: `
    <Page>
        <div class="w-full h-full grid justify-center items-center">
            <UiText v-bind="$props">
        </div>
    </Page>
    `,
    decorator: () => ({ template: `<v-app><v-main></v-main></v-app>` }),
})
Default.args = {
    label: 'A quick brown fox jumped over the lazy dog.',
    variant: 'h6',
    opacity: 'secondary',
}

export const LineCLamp = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: `
    <Page>
        <div class="w-200 mx-auto h-200 grid justify-center items-center">
            <UiText v-bind="$props">
        </div>
    </Page>
    `,
    decorator: () => ({ template: `<v-app><v-main></v-main></v-app>` }),
})
LineCLamp.args = {
    label: 'A quick brown fox jumped over the lazy dog. '.repeat(10),
    variant: 'h6',
    opacity: 'secondary',
    lineClamp: '2',
}