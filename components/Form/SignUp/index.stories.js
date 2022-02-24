import FormSignUp from './index.vue'

export default {
    title: 'Components/Form/FormSignUp',
    component: FormSignUp,
}

export const Default = () => ({
    template: `
    <div class="w-screen h-full grid justify-center items-center">
        <FormSignUp class="md:min-w-[400px]"/>
    </div>
    `,
})