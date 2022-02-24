import FormAuth from './index.vue'

export default {
    title: 'Components/Form/FormAuth',
    component: FormAuth,
}

export const ToggleError = () => ({
    data: () => ({
        error: undefined,
    }),

    methods: {
        toggleError() {
            if (this.error) {
                this.error = undefined
            } else {
                this.error = {
                    message: 'An error occured',
                    errors: [],
                }
            }
        },

        submit({ checkbox }) {
            alert(`Checkbox: ${checkbox}`)
        },
    },

    template: `
    <div class="w-full h-full grid justify-center">
        <FormAuth :error="error" checkbox-label="Remember me" action-text="Log in" @on-submit="submit">
            <div> Body! </div>
            
            <template #footer>
                <div> Footer! </div>
            </template>
        </FormAuth>

        <v-btn color="primary" @click="toggleError">
            {{error ? 'Hide' : 'Show'}} error
        </v-btn>
    </div>
    `,
})