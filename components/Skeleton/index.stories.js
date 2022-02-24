import { buildMainPage } from '../utils'
import Skeleton from './index.vue'

export default {
    title: 'Components/Skeleton',
    component: Skeleton,
}

export const Default = () => ({
    data: () => ({
        loading: true,
    }),
    beforeMount: buildMainPage,
    template: `
    <div class="grid justify-center h-full items-center content-center">
        <v-fade-transition mode="out-in">
            <Skeleton :loading="loading" loading-class="h-40 w-[250px] rounded">
                <UiText variant="h4"> 
                    Hello world
                </UiText>
            </Skeleton>
        </v-fade-transition>

        <v-btn color="primary" class="mt-48 w-fit mx-auto" @click="loading = !loading">
            Toggle loading
        </v-btn>
    </div>
    `,
})