import {
    errorResponse,
    setCookie,
    successResponse,
    throwUncaughtError,
} from '../../utils'

export default async function login(credentials) {
    if (typeof credentials === 'object') {
        const { email, password, remember } = credentials

        try {
            const res = await this.$axios.$post('user/login', {
                email,
                password,
            })

            const {
                data: { token },
            } = res

            // set token
            if (token) {
                this.$axios.setHeader('Authorization', `Bearer ${token}`)
            }

            // add token to cookie so user can be automatically logged in when app mounts;
            setCookie('token', token, remember ? 36000 : 0)

            return successResponse(res)
        } catch (err) {
            return errorResponse.call(this, err)
        }
    } else {
        return throwUncaughtError.call(this)
    }
}