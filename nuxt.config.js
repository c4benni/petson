import colors from 'vuetify/es5/util/colors'

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
            },
            dark: false,
            themes: {
                light: {
                    anchor: '#1976D2',
                    primary: {
                        base: '#4EC690',
                        lighten5: '#EDF5F1',
                        darken4: '#00A669',
                    },
                    accent: colors.grey.darken3,
                    secondary: {
                        base: '#F09E00',
                        lighten5: '#291b00',
                        darken4: '#C66100',
                    },
                    info: '#2196F3',
                    warning: colors.amber.base,
                    error: {
                        base: '#F44336',
                    },
                    success: {
                        base: '#4CAF50',
                    },
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