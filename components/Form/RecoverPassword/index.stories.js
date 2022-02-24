import FormRecoverPassword from './index.vue'

export default {
    title: 'Components/Form/FormRecoverPassword',
    component: FormRecoverPassword,
}

export const Default = () => ({
    template: `
    <div class="w-screen h-full grid justify-center items-center">
        <FormRecoverPassword class="md:min-w-[400px]"/>
    </div>
    `,
})