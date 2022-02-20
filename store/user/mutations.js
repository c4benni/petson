import { camelCase } from 'lodash'

export default {
    SET_INFO(state, info) {
        const userInfo = {}

        // convert snake_case to camelCase
        for (const key in info) {
            userInfo[camelCase(key)] = info[key]
        }

        state.info = userInfo
    },

    // set the rows per page and update local storage
    SET_ORDERS_ROWS_PER_PAGE(state, payload) {
        state.latestOrdersRowsPerPage = payload
    },
}