import UserSettingsInfo from './index.vue'
import { quickLogin } from '~/components/utils/auth'

export default {
    title: 'Components/UserSettings/Info',
    component: UserSettingsInfo,
}

export const Default = () => ({
    beforeCreate: quickLogin,
    template: `
    <Page>
        <div class="w-full h-full grid justify-center items-center">
            <UserSettingsInfo>
        </div>
    </Page>
    `,
    decorator: () => ({ template: `<v-app><v-main></v-main></v-app>` }),
})