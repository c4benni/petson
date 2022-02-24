import DialogAuth from './index.vue'

export default {
    title: 'Components/Dialog/DialogAuth',
    component: DialogAuth,
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
        login() {
            return {
                query: {
                    ...this.$route.query,
                    modal: 'log-in',
                },
            }
        },
    },
    template: `<div class="grid h-full w-full justify-center content-center items-center">
            <DialogAuth/>

            <v-btn color="primary" :to="login"> log in </v-btn>
        </div>`,
})

export const LogIn = LoginTemplate.bind({})

const SignUpTemlate = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    created: closeModal,
    computed: {
        signUp() {
            return {
                query: {
                    ...this.$route.query,
                    modal: 'sign-up',
                },
            }
        },
    },
    template: `<div class="grid h-full w-full justify-center content-center items-center">
            <DialogAuth/>

            <v-btn color="primary" :to="signUp"> Sign up </v-btn>
        </div>`,
})

export const SignUp = SignUpTemlate.bind({})