import { quickLogin, quickLogout } from '../utils/auth'
import Header from './index.vue'

export default {
    title: 'Components/Header',
    component: Header,
}

export const LoggedOut = () => ({
    data: () => ({ loading: false }),
    async beforeCreate() {
        this.loading = true
        await quickLogout.call(this)
        this.loading = false
    },
    template: `
    <div class="w-screen h-full grid justify-center items-center">
        <Header class="md:min-w-[400px]"/>

        {{loading ? 'Loggin out...' : '' }}
    </div>
    `,
})

export const LoggedIn = () => ({
    data: () => ({ loading: false }),
    async beforeCreate() {
        this.loading = true
        await quickLogin.call(this)
        this.loading = false
    },
    template: `
    <div class="w-screen h-full grid justify-center items-center">
        <Header class="md:min-w-[400px]"/>

        {{loading ? 'Loggin in...' : '' }}
    </div>
    `,
})