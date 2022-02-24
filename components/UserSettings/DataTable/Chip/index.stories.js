import UserSettingsDataTableChip from './index.vue'
import { quickLogin } from '~/components/utils/auth'

export default {
    title: 'Components/UserSettings/DataTable/Chip',
    component: UserSettingsDataTableChip,
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    beforeCreate: quickLogin,
    template: `
    <Page>
        <div class="w-full h-full grid justify-center items-center">
            <UserSettingsDataTableChip v-bind="$props">
        </div>
    </Page>
    `,
    decorator: () => ({ template: `<v-app><v-main></v-main></v-app>` }),
})

Default.args = {
    status: 'paid',
}