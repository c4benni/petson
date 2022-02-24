import TextFieldPassword from './index.vue'

export default {
    title: 'Components/TextField/Password',
    component: TextFieldPassword,
}

export const Default = () => ({
    data: () => ({
        password: '',
    }),
    template: `
    <Page>
        <TextFieldPassword v-model="password" />
    </Page>
    `,
    decorator: () => ({ template: `<v-app><v-main></v-main></v-app>` }),
})

export const Autofocus = () => ({
    data: () => ({
        password: '',
    }),
    template: `
    <Page>
        <TextFieldPassword v-model="password" autofocus />
    </Page>
    `,
    decorator: () => ({ template: `<v-app><v-main></v-main></v-app>` }),
})