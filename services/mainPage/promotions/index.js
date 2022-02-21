import { errorResponse, successResponse } from '~/services/utils'

export default async function mainPagePromotions() {
    try {
        const res = await this.$axios.$get('/main/promotions')

        return successResponse(res)
    } catch (err) {
        return errorResponse(err)
    }
}