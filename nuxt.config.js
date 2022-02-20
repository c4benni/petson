import vuetifyConfig from './vuetify.config'

const PORT = 2022

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
    plugins: ['~/plugins/init'],

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

    axios: {
        baseURL: process.env.API_BASE_URL,
    },

    publicRuntimeConfig: {
        axios: {
            baseURL: process.env.API_BASE_URL,
            https: true,
            retry: true,
            credentials: true,
            debug: process.env.NODE_ENV === 'development',
            headers: {
                common: {
                    Accept: 'application/json, text/plain, */*',
                },
            },
        },
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: vuetifyConfig,

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
        port: PORT,
        host: '0.0.0.0',
    },
}