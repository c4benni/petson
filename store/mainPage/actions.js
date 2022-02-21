import { getApp } from '../utils'
import mainPageProducts from '~/services/mainPage/products'
import mainPagePromotions from '~/services/mainPage/promotions'
import mainPageBlogPost from '~/services/mainPage/blogs'

async function fetchData({ section, request, commit }) {
    const app = getApp.call(this)

    const { error, data } = await request.call(app)

    if (data) {
        commit('SET_SECTION', { section, data })
    }

    return { error, data }
}

export default {
    async getProduct({ commit }) {
        return await fetchData.call(this, {
            section: 'product',
            request: mainPageProducts,
            commit,
        })
    },

    async getPromotion({ commit }) {
        return await fetchData.call(this, {
            section: 'promotion',
            request: mainPagePromotions,
            commit,
        })
    },

    async getBlogPost({ commit }) {
        return await fetchData.call(this, {
            section: 'blogPost',
            request: mainPageBlogPost,
            commit,
        })
    },

    // build mainPage by calling all the above commits;
    async build({ dispatch, commit }) {
        const getSection = async(section) => await dispatch(section)

        const product = getSection('getProduct')
        const promotion = getSection('getPromotion')
        const blogPost = getSection('getBlogPost')

        const res = await Promise.allSettled([product, promotion, blogPost])

        // set state.mainPage.key;
        // if error occured in all responses above (allSettled), set the key to 'error', else set it to a unique value.
        const getKey = () => {
            // map res above to get either data or error from its value;
            const responses = res.map((result) => {
                const { error, data } = result.value

                return { error, data }
            })

            const hasData = responses.find((result) => result.data)

            return hasData ? `${performance.now()}` : 'error'
        }

        commit('SET_KEY', getKey())

        return getKey() === 'error' ? { error: 1 } : { data: 1 }
    },
}