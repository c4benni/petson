const theme = require('./tailwind.theme')

module.exports = {
    mode: 'jit',
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    safelist: [{
        pattern: /(?:text-\w)/,
    }, ],
    theme,
    plugins: [],
    important: true,
}