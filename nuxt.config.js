const description =
    'Pseudo pet store. Get all your faux pet food and toys in a few clicks.'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - Petson',
        title: 'Faux pet store',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: description },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@assets/css/main.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [{ path: '~/components', extensions: ['vue'] }],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        'nuxt-vite',
        '@nuxt/postcss8',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],

        theme: {
            options: {
                themeCache: process.env.NODE_ENV === 'production' ?
                    {
                        get: (key) => localStorage.getItem(key),
                        set: (key, value) => localStorage.setItem(key, value),
                    } :
                    undefined,
                customProperties: true,
                variations: false,
            },
            dark: false,
            themes: {
                light: {
                    anchor: '#1976D2',
                    divider: '#d1d1d1',

                    'primary-50': '#EDF5F1',
                    primary: '#4EC690',
                    'primary-800': '#00A669',
                    'primary-900': '#008655',
                    'primary-border': '#3ec186',
                    'primary-background': '#e0f5ec',

                    secondary: '#F09E00',
                    'secondary-900': '#C66100',
                    'secondary-border': '#bf9540',
                    'secondary-background': '#fff1d6',

                    info: '#2196F3',
                    'info-dark': '#1976D2',
                    'info-text': '#00111f',
                    'info-background': '#cce8ff',

                    warning: '#FF9800',
                    'warning-text': '#1f1200',
                    'warning-background': '#ffebcc',

                    success: '#4CAF50',
                    'success-text': '#09150a',
                    'success-background': '#dcefdc',

                    error: '#F44336',
                    'error-text': '#1d0302',
                    'error-background': '#fcd2cf',

                    'grey-50': '#FAFAFA',
                    'grey-100': '#F4F6F5',
                    'grey-300': '#DDE3E2',
                    'grey-400': '#B6C4C1',
                    'grey-700': '#566C67',
                    'grey-A100': '#D5D5D5',

                    black: '#000',
                    white: '#fff',

                    'text-primary': '#212121',
                    'text-secondary': '#757575',
                    'text-disabled': '#9e9e9e',

                    star: '#FFB400',
                    snackbar: '#323232',
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },

    server: {
        port: 2022,
        host: '0.0.0.0',
    },
}