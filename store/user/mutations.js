import { camelCase } from 'lodash'

export default {
    SET_INFO(state, info) {
        if (!info) {
            return (state.info = null)
        }

        const userInfo = {}

        // convert snake_case to camelCase
        for (const key in info) {
            userInfo[camelCase(key)] = info[key]
        }

        state.info = userInfo
    },

    // update latestOrder
    SET_LATEST_ORDER(state, data) {
        // set key to null if items is null. This is to refresh the store state, so <user-settings-data-table/> can show proper loader;
        // if no items ars is passed, that means a get request was made, but the current state of state.latestOrder.items's length is 0

        const { items, total } = data || {}

        state.latestOrder = {
            key: items ? `${performance.now()}` : null,
            items: items || [],
            total,
        }
    },
}