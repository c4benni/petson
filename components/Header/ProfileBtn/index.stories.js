import Header from './index.vue'
import { quickLogin, quickLogout } from '~/components/utils/auth'

export default {
    title: 'Components/Header/ProfileBtn',
    component: Header,
}

export const LoggedOut = () => ({
    async beforeCreate() {
        await quickLogout.call(this)
    },
    template: `
    <div class="w-screen h-full grid justify-center items-center primary">
        <HeaderProfileBtn class="md:min-w-[400px]"/>
    </div>
    `,
})

export const LoggedIn = () => ({
    async beforeCreate() {
        await quickLogin.call(this)
    },
    template: `
    <div class="w-screen h-full grid justify-center items-center primary">
        <HeaderProfileBtn class="md:min-w-[400px]"/>
    </div>
    `,
})