import { buildMainPage } from '../utils'
import ApiImg from './index.vue'

export default {
    title: 'Components/ApiImg',
    component: ApiImg,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    computed: {
        // get first promotion image
        uuid() {
            return this.$store.state.mainPage.promotion[0].image
        },
    },
    // build main page so we can have an image to display
    beforeCreate: buildMainPage,
    template: `<div class="flex justify-center items-center h-screen">
            <ApiImg v-bind="$props" :uuid="uuid" />
        </div>`,
})

export const Default = Template.bind({})
Default.args = {
    alt: 'Some image',
    width: '400',
    height: '400',
}