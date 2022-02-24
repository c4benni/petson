import MainPageBlogPost from './index.vue'
import { buildMainPage } from '~/components/utils'

export default {
    title: 'Components/Main page/BlogPost',
    component: MainPageBlogPost,
}

export const Default = () => ({
    // build main page so we can have an image to display
    beforeCreate: buildMainPage,

    computed: {
        blogPost() {
            return this.$store.state.mainPage.blogPost[0]
        },
    },

    template: `
    <Page class="w-screen overflow-x-auto">
        <h2 class="text-center text-subtitle-2"> Default </h2> 
        <MainPageBlogPost v-bind="blogPost" />

        <h2 class="mt-[56px] text-center text-subtitle-2"> Right aligned </h2> 
        <MainPageBlogPost v-bind="blogPost" image-position="right" />
    </Page>
    `,
})