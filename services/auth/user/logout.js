import { errorResponse, setCookie, successResponse } from '../../utils'

export default async function logout() {
    try {
        const res = await this.$axios.$get('user/logout')

        // remove Bearer token;
        this.$axios.setHeader('Authorization', '')

        // clear token cookie;
        setCookie('token', '')

        return successResponse(res)
    } catch (err) {
        return errorResponse(err)
    }
}