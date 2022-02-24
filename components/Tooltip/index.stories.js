import Tooltip from './index.vue'

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: `
    <Page>
        <div class="w-full h-full grid justify-center items-center">
            <Tooltip v-bind="$props">
                <v-icon> mdi-plus </v-icon>
            </Tooltip>
        </div>
    </Page>
    `,
    decorator: () => ({ template: `<v-app><v-main></v-main></v-app>` }),
})
Default.args = {
    label: 'Tooltip label',
    position: 'left',
}