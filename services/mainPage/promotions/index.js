import { errorResponse, successResponse } from '~/services/utils'

export default async function mainPagePromotions() {
    try {
        const { data } = await this.$axios.$get('/main/promotions')

        const sortedRes = data.map((item) => {
            const {
                title,
                content,
                metadata: { image },
            } = item

            return {
                title,
                content,
                image,
            }
        })

        return successResponse({ data: sortedRes })
    } catch (err) {
        return errorResponse(err)
    }
}