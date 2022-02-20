import { errorResponse, successResponse } from '../utils'

export default async function userInfo() {
    try {
        const res = await this.$axios.$get('user')

        return successResponse(res)
    } catch (err) {
        return errorResponse(err)
    }
}