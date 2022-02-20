import { errorResponse, successResponse, throwUncaughtError } from '../../utils'

export default async function resetPassword(credentials) {
    if (typeof credentials === 'object') {
        const { token, email, password, confirmPassword } = credentials

        try {
            const res = await this.$axios.$post('user/reset-password-token', {
                token,
                email,
                password,
                password_confirmation: confirmPassword,
            })

            return successResponse(res)
        } catch (err) {
            return errorResponse(err)
        }
    } else {
        return throwUncaughtError.call(this)
    }
}