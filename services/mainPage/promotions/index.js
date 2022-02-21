import { errorResponse, successResponse } from '~/services/utils'

export default async function mainPagePromotions() {
    try {
        const res = await this.$axios.$get('/main/promotions')

        const data = res.data.map((item) => {
            const {
                title,
                content,
                metaData: { image },
            } = item

            return {
                title,
                content,
                image,
            }
        })

        return successResponse({ data })
    } catch (err) {
        return errorResponse(err)
    }
}