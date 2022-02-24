export default async function userOrders() {
    const {
        page = 1,
            limit = 5,
            sortBy = 'uuid',
            desc = false,
    } = this.$route.query

    try {
        const { data, total } = await this.$axios.$get('user/orders', {
            params: {
                page,
                limit: parseFloat(limit),
                sortBy,
                desc: Boolean(parseFloat(desc)),
            },
        })

        const sortedData = data.map((item) => {
            // orderStatus is an array. Pick the last item
            const { uuid, order_status: orderStatus } = item

            return {
                uuid,
                status: orderStatus.slice(-1)[0].title,
            }
        })

        return {
            data: {
                items: sortedData,
                total,
            },
        }
    } catch (error) {
        return { error }
    }
}