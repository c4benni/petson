import MainPageProduct from './index.vue'
import { buildMainPage } from '~/components/utils'

export default {
    title: 'Components/Main Page/Product',
    component: MainPageProduct,
}

export const Default = () => ({
    beforeCreate: buildMainPage,
    computed: {
        product() {
            return this.$store.state.mainPage.product[0]
        },
    },
    template: `
    <Page>
        <MainPageContainer>
            <MainPageProduct v-bind="product" />
        </MainPageContainer>
    </Page>
    `,
})