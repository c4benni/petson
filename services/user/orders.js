import { errorResponse, successResponse } from '../utils'

export default async function userOrders(query) {
    const { page = 1, limit = 5, sortBy = 'uuid', desc = false } = query

    try {
        const res = await this.$axios.$get('user/orders', {
            params: {
                page,
                limit,
                sortBy,
                desc,
            },
        })

        return successResponse(res)
    } catch (err) {
        return errorResponse(err)
    }
}