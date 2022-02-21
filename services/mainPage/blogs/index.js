import { errorResponse, successResponse } from '~/services/utils'

export default async function mainPageBlogPost() {
    try {
        const res = await this.$axios.$get('main/blog', {
            params: {
                limit: 2,
                sortBy: 'created_at',
            },
        })

        return successResponse(res)
    } catch (err) {
        return errorResponse(err)
    }
}