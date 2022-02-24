// utitlity function to get key value pairs of classes;
function getEntries(length, map) {
    return Object.fromEntries(
        Array.from({
                length,
            },
            (_, index) => {
                return map(index)
            }
        )
    )
}

module.exports = {
    screens: {
        xs: '0px',
        sm: '600px',
        md: '960px',
        lg: '1264px',
        xl: '1904px',
    },
    fontFamily: {
        sans: ['Roboto', 'sans-serif'],
    },
    fontSize: {
        13: [
            '13px',
            {
                lineHeight: '17.94px',
                letterSpacing: '0.15px',
            },
        ],
        20: [
            '20px',
            {
                lineHeight: '32px',
                letterSpacing: '0.15px',
            },
        ],
    },
    colors: {
        current: 'currentColor',
        inherit: 'inherit',
        transparent: 'transparent',

        // last resort to make global rgba colors as Vuetify doesn't recognize rgba. Great.
        disabled: 'rgba(0, 0, 0, 0.26)',
    },
    borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        lg: '8px',
        xl: '12px',
        full: '9999px',
    },
    spacing: {
        //   generate spacings from (-500 to 500)px
        ...getEntries(501, (index) => [index, `${index}px`]),
        ...getEntries(500, (index) => [`-${index + 1}`, `-${index + 1}px`]),
    },
    zIndex: {
        ...getEntries(20, (index) => [index, `${index}`]),
    },
}