import DialogRecoverPassword from './index.vue'

export default {
    title: 'Components/Dialog/DialogRecoverPassword',
    component: DialogRecoverPassword,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    data: () => ({
        dialog: false,
    }),
    computed: {
        token() {
            const title =
                'http://localhost:3003/change-password?token=api-generated-token'

            return {
                title,
                link: `${title}&email='email@domain.com'`,
            }
        },
    },
    template: `<div class="grid h-full w-full justify-center content-center items-center">
            <DialogRecoverPassword v-model="dialog" :token="token" />

            <v-btn color="primary" @click="dialog = true"> Change password </v-btn>
        </div>`,
})

export const Default = Template.bind({})