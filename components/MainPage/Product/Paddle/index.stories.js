import MainPageProductPaddle from './index.vue'

export default {
    title: 'Components/Main Page/Product/Paddle',
    component: MainPageProductPaddle,
}

export const Default = () => ({
    template: `
    <Page>
        <UiText variant='h6' class='text-center'> Left </UiText>
        <div class="h-[400px] w-[48px]">
            <MainPageProductPaddle left />
        </div>

        <UiText variant='h6' class='text-center mt-[48px]'> Right </UiText>
        <div class="h-[400px] w-[48px]">
            <MainPageProductPaddle />
        </div>
    </Page>
    `,
})