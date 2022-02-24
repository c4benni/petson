import BaseTextField from './index.vue'

export default {
    title: 'Components/BaseTextField',
    component: BaseTextField,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    data: () => ({
        value: '',
    }),
    template: `<div class="grid h-full w-full justify-center content-center items-center">
            <BaseTextField v-model="value" v-bind="$props"/>

            <p class="my-[24px]"> {{ value }} </p>
        </div>`,
})

export const Default = Template.bind({})
Default.args = {
    type: 'text',
    label: 'Label',
}