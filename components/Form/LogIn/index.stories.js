import FormLogIn from './index.vue'

export default {
    title: 'Components/Form/FormLogin',
    component: FormLogIn,
}

export const Default = () => ({
    template: `
    <div class="w-screen h-full grid justify-center items-center">
        <FormLogIn class="md:min-w-[400px]"/>
    </div>
    `,
})