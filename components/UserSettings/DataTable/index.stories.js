import UserSettingsDataTable from './index.vue'
import { quickLogin } from '~/components/utils/auth'

export default {
    title: 'Components/UserSettings/DataTable',
    component: UserSettingsDataTable,
}

export const Default = () => ({
    beforeCreate: quickLogin,
    template: `
    <Page>
        <div class="w-full h-full grid justify-center items-center">
            <UserSettingsDataTable>
        </div>
    </Page>
    `,
    decorator: () => ({ template: `<v-app><v-main></v-main></v-app>` }),
})