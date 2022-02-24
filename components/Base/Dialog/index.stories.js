import BaseDialog from './index.vue'

export default {
    title: 'Components/BaseDialog',
    component: BaseDialog,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    data: () => ({
        dialog: false,
    }),
    template: `<div class="flex h-full w-full justify-center items-center">
            <v-btn color="primary" @click="dialog=true">
                Open dialog
            </v-btn>

            <BaseDialog v-model="dialog" v-bind="$props">
                <div class="h-[100px] w-full flex justify-center">
                    Hello world
                </div>
            </BaseDialog>
        </div>`,
})

export const Default = Template.bind({})
Default.args = {
    transition: 'slide-y-transition',
    contentClass: 'max-w-[400px]',
}