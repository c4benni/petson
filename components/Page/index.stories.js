import Page from './index.vue'

export default {
    title: 'Components/Page',
    component: Page,
}

export const Default = () => ({
    template: `
    <Page>
        <div class="w-[400px] h-[400px] rounded info mx-auto" /> 
    </Page>
    `,
})