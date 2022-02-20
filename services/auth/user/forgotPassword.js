import { errorResponse, successResponse, throwUncaughtError } from '../../utils'

export default async function forgotPassword(credentials) {
    if (typeof credentials === 'object') {
        const { email } = credentials

        try {
            const res = await this.$axios.$post('user/forgot-password', {
                email,
            })

            return successResponse(res)
        } catch (err) {
            return errorResponse(err)
        }
    } else {
        return throwUncaughtError.call(this)
    }
}