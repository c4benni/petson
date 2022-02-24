import FormAlert from './index.vue'

export default {
    title: 'Components/Form/FormAlert',
    component: FormAlert,
}

export const Simple = () => ({
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
    },

    template: `
    <div class="w-full h-full grid content-center items-center justify-center">
        <FormAlert :error="error"/>

        <v-btn color="primary" @click="toggleError">
            {{error ? 'Hide' : 'Show'}} error
        </v-btn>
    </div>
    `,
})

export const Robust = () => ({
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
                    errors: {
                        name: ['The first name must be at least 3 characters.'],
                        email: ['The email must be a valid email address.'],
                        password: [
                            'The password must be at least 8 characters.',
                            'The password confirmation does not match.',
                        ],
                    },
                }
            }
        },
    },

    template: `
    <div class="w-full h-full grid content-center items-center justify-center">
        <FormAlert :error="error"/>

        <v-btn color="primary" @click="toggleError">
            {{error ? 'Hide' : 'Show'}} error
        </v-btn>
    </div>
    `,
})