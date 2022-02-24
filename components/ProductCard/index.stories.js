import { buildMainPage } from '../utils'
import ProductCard from './index.vue'

export default {
    title: 'Components/ProductCard',
    component: ProductCard,
}

export const Default = () => ({
    beforeMount: buildMainPage,
    computed: {
        product() {
            return this.$store.state.mainPage.product[0].items[0]
        },
    },
    template: `
    <div class="grid justify-center">
        <ProductCard v-bind="product" />
    </div>
    `,
})

export const ShowAddToCart = () => ({
    beforeMount: buildMainPage,
    computed: {
        product() {
            return this.$store.state.mainPage.product[0].items[0]
        },
    },
    template: `
    <div class="flex justify-center">
        <ProductCard v-bind="product" show-add-to-cart />
    </div>
    `,
})