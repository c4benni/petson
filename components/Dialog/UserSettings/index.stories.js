import DialogUserSettings from './index.vue'

export default {
    title: 'Components/Dialog/DialogUserSettings',
    component: DialogUserSettings,
}

function closeModal() {
    if (this.$route.query.modal) {
        this.$router.replace({
            query: {
                ...this.$route.query,
                modal: undefined,
            },
        })
    }
}

const LoginTemplate = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    created: closeModal,
    computed: {
        settings() {
            return {
                query: {
                    ...this.$route.query,
                    modal: 'user-settings',
                },
            }
        },
    },
    template: `<div class="grid h-full w-full justify-center content-center items-center">
            <DialogUserSettings/>

            <v-btn color="primary" :to="settings"> Show settings </v-btn>
        </div>`,
})

export const LogIn = LoginTemplate.bind({})