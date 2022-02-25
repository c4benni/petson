import { errorResponse, successResponse, throwUncaughtError } from '../../utils'

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

            // add token to cookie so user can be automatically logged in when app mounts if the remember checkbox is checked;
            const oneDay = 60 * 60 * 24

            const maxAge = remember ? oneDay : 0

            this.$cookies.set('token', token, {
                maxAge,
            })

            return successResponse(res)
        } catch (err) {
            return errorResponse.call(this, err)
        }
    } else {
        return throwUncaughtError.call(this)
    }
}