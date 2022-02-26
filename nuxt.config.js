import vuetifyConfig from './vuetify.config'

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
            {
                hid: 'twitter-app-country',
                property: 'twitter:app:country',
                content: 'NG',
            },
            {
                hid: 'twitter-site',
                property: 'twitter:site',
                content: '@c4benn',
            },
            {
                hid: 'twitter-image',
                property: 'twitter:image',
                content: '~static/icon.png',
            },
            {
                hid: 'twitter-card',
                property: 'twitter:card',
                content: 'summary_large_image',
            },
            {
                hid: 'twitter-title',
                property: 'twitter:title',
                content: description,
            },
            {
                hid: 'twitter-desc',
                property: 'twitter:description',
                content: description,
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '~static/icon.png' }],
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
        // cookie-universal module
        'cookie-universal-nuxt',
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
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                    Pragma: 'no-cache',
                    Expires: '0',
                },
            },
        },
        getFile: process.env.GET_MEDIA,
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
            name: 'Petson',
            shortName: 'Petson',
            short_name: 'Petson',
            description,
            background_color: '#4EC690',

            useWebmanifestExtension: true,
            start_url: '/?mode=pwa',
            display: 'standalone',
            theme_color: '#4EC690',
            dir: 'ltr',
            orientation: 'portrait',
            categories: ['lifestyle', 'finance'],
        },
        meta: {
            author: 'Chidi Benedict',
            themeColor: '#4EC690',
            nativeUI: true,
            mobileAppIOS: true,
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

    router: {
        base: '/petson/',
        middleware: 'auth',
    },

    loading: {
        color: 'var(--v-info-base)',
    },

    storybook: {
        decorators: ['<v-app><story/></v-app>'],
    },

    server: {
        port: 2022,
        host: '0.0.0.0',
    },
}