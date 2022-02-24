export default {
    title: 'Components/TextField/Search',
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: '<TextFieldSearch v-bind="$props" />',
})

export const Props = Template.bind({})
Props.args = {
    label: 'Custom label',
    placeholder: 'Custom placeholder',
}