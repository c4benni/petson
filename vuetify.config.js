export default {
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

                grey: '#9FA2B4',
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
}