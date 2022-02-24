import UserSettingsDataTableEmpty from './index.vue'
import { quickLogin } from '~/components/utils/auth'

export default {
    title: 'Components/UserSettings/DataTable/Empty',
    component: UserSettingsDataTableEmpty,
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    beforeCreate: quickLogin,
    template: `
    <Page>
        <div class="w-screen h-full grid justify-center items-center">
            <table class="w-[70vw]">
                <UserSettingsDataTableEmpty v-bind="$props">
            </table>
        </div>
    </Page>
    `,
    decorator: () => ({ template: `<v-app><v-main></v-main></v-app>` }),
})

Default.args = {
    loading: true,
}