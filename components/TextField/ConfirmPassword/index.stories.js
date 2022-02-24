import TextFieldConfirmPassword from './index.vue'

export default {
    title: 'Components/TextField/ConfirmPassword',
    component: TextFieldConfirmPassword,
}

export const Default = () => ({
    data: () => ({
        password: '',
        confirm: '',
    }),
    template: `
    <Page>
        <TextFieldPassword v-model="password" />

        <TextFieldConfirmPassword v-model="confirm" :password="password" />
    </Page>
    `,
    decorator: () => ({ template: `<v-app><v-main></v-main></v-app>` }),
})