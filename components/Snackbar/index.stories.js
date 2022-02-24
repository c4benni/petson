import Snackbar from './index.vue'

export default {
    title: 'Components/Snackbar',
    component: Snackbar,
}

export const Default = () => ({
    methods: {
        notify() {
            this.$notify.open('Hello world', 3000)
        },
    },
    template: `
    <Page>
        <Snackbar />

        <div class="w-full h-full flex justify-center items-center content-center">
            <v-btn color='primary' @click="notify">
                Notify
            </v-btn>
        </div>
    </Page>
    `,
    decorator: () => ({ template: `<v-app><v-main></v-main></v-app>` }),
})

export const Custom = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    methods: {
        notify() {
            this.$notify.open(args.message, 1500)
        },
    },
    template: `
    <Page>
        <Snackbar />

        <div class="w-full h-full flex justify-center items-center content-center">
            <v-btn color='primary' @click="notify">
                Notify
            </v-btn>
        </div>
    </Page>
    `,
    decorator: () => ({ template: `<v-app><v-main></v-main></v-app>` }),
})
Custom.args = {
    message: 'Custom message',
}