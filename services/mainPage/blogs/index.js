import { capitalize, sample } from 'lodash'
import { errorResponse, successResponse } from '~/services/utils'

export default async function mainPageBlogPost() {
    try {
        // get 2 random blog posts. Use a random value for the sortBy filter on each request.
        const { data } = await this.$axios.$get('main/blog', {
            params: {
                limit: 2,
                sortBy: sample(['uuid', 'title', 'created_at', 'updated_at']),
            },
        })

        // get the fields needed
        const sortedData = data.map((item) => {
            const { metadata, title, uuid } = item

            return {
                title: capitalize(title),
                uuid,
                image: metadata.image,
            }
        })

        return successResponse({ data: sortedData })
    } catch (err) {
        return errorResponse(err)
    }
}