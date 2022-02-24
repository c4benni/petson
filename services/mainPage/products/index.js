import { capitalize, shuffle } from 'lodash'
import { errorResponse, successResponse } from '~/services/utils'

// Using a more robust method to fetch products because most categories aren't populated, which might make mainPage render empty sections.

export default async function mainPageProducts() {
    try {
        const $fetch = (params = {}) => this.$axios.$get('/products', { params })

        // fetch 10 products first;
        const { data: productsToSort } = await $fetch()

        // store 2 random products categories
        const productsCategories = []

        for (const item of shuffle(productsToSort)) {
            if (productsCategories.length < 2) {
                const { category } = item

                // check to see that the last productsCategories[] item is not the same category as {category} above.
                const lastItem = productsCategories.slice(-1)[0]

                if (!lastItem || lastItem.title !== category.title) {
                    const { title, uuid } = category

                    productsCategories.push({
                        title,
                        uuid,
                    })
                }
            } else break
        }

        // utility function to fetch 5 items from the categories above;
        const promiseItem = async(category) => {
            const { title, uuid } = category

            const { data } = await $fetch({
                category: uuid,
                limit: 5,
            })

            // get the fields needed
            const sortedData = data.map((item) => {
                const { brand, metadata, price, title, uuid } = item

                return {
                    title,
                    uuid,
                    price,
                    brandTitle: brand.title,
                    brandUuid: brand.uuid,
                    image: metadata.image,
                }
            })

            return {
                items: sortedData,
                uuid,
                title: capitalize(title),
            }
        }

        // map the product categories to return Promise[];
        const categoriesToFetch = productsCategories.map(promiseItem)

        const res = await Promise.all(categoriesToFetch)

        return successResponse({
            data: res,
        })
    } catch (err) {
        return errorResponse(err)
    }
}