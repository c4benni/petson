import MainPageBlogPost from './index.vue'
import { buildMainPage } from '~/components/utils'

export default {
    title: 'Components/Main page/Carousel',
    component: MainPageBlogPost,
}

export const Default = () => ({
    // build main page so we can have an image to display
    beforeCreate: buildMainPage,

    template: `
    <Page class="w-screen">
        <MainPageCarousel/>
    </Page>
    `,
})