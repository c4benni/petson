import AnimateInView from './index.vue'

export default {
    title: 'Components/AnimateInView',
    component: AnimateInView,
}

const TweakTransitionTemplate = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: `<div class="flex justify-center items-center h-screen">
            <AnimateInView v-bind="$props">
                <div class="w-[300px] h-[300px] bg-[#007bff] rounded" />
            </AnimateInView/>
        </div>`,
})

export const TweakTransition = TweakTransitionTemplate.bind({})
TweakTransition.args = {
    appearActive: 'transition-[transform,opacity] duration-300',
    appearFrom: 'translate-y-8 opacity-0',
}

const StaggerTransitionTemplate = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: `<ul class="flex justify-center h-screen items-center space-x-12">
            <AnimateInView v-for="(items, i) in 4" :key="i" tag="li" :delay="(i * 75) + 'ms'" v-bind="$props">
                <div class="w-[100px] h-[100px] bg-[#007bff] rounded" />
            </AnimateInView/>
        </ul>`,
})

export const StaggerTransition = StaggerTransitionTemplate.bind({})
StaggerTransition.args = {
    appearActive: 'transition-[transform,opacity] duration-300',
    appearFrom: 'translate-y-8 opacity-0',
    tag: 'li',
}