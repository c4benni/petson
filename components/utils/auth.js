import signUpCall from '~/services/auth/user/signUp'

// Helper function to quickly log in for testing purposes, and storybook
export async function quickLogin() {
    // try to log in. If it gets an error, create an account, then log in

    const credentials = {
        email: 'joenas@gmail.com',
        password: 'qqqqqqqq',
        remember: true,
    }

    const login = async() => {
        return await this.$store.dispatch('user/login', credentials)
    }

    const { error, data } = await login()

    // login successful
    if (!error) {
        return { data }
    }

    // try to create an account if error isn't 500+
    if ((error.status || error.statusCode) >= 500) {
        return { error }
    }

    const { email, password } = credentials

    const signUp = async() => {
        await signUpCall.call(this, {
            firstName: 'joe',
            lastName: 'nas',
            email,
            password,
            confirmPassword: password,
        })
    }

    await signUp()

    await login()

    return { data: 1 }
}

export async function quickLogout() {
    await this.$store.dispatch('user/logout')
}