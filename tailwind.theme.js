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
        xxs: [
            '12px',
            {
                lineHeight: '19.92px',
            },
        ],
        xs: [
            '13px',
            {
                lineHeight: '17.94px',
                letterSpacing: '0.15px',
            },
        ],
        sm: [
            '14px',
            {
                lineHeight: '20px',
                letterSpacing: '0.15px',
            },
        ],
        base: [
            '16px',
            {
                lineHeight: '24px',
                letterSpacing: '0.15px',
            },
        ],
        md: [
            '18px',
            {
                lineHeight: '28px',
            },
        ],
        mdlg: [
            '20px',
            {
                lineHeight: '32px',
                letterSpacing: '0.15px',
            },
        ],
        lg: [
            '24px',
            {
                lineHeight: '32px',
            },
        ],
        xl: [
            '30px',
            {
                lineHeight: '38px',
            },
        ],
        '2xl': [
            '36px',
            {
                lineHeight: '44px',
                letterSpacing: '-2%',
            },
        ],
        '3xl': [
            '48px',
            {
                lineHeight: '56px',
            },
        ],
        '4xl': [
            '60px',
            {
                lineHeight: '60px',
                letterSpacing: '-0.5px',
            },
        ],
    },
    colors: {
        current: 'currentColor',
        inherit: 'inherit',
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