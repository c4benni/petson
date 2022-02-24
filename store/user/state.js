export default function state() {
    return {
        // user info to be displayed in user-settings dialog;
        // this object should be cloned on update to maintain reactivity and to override existing values; so setting info could be with just 1 key: value, or all possible key: values;
        info: null,

        // user-settings latest orders;
        // `key` will be updated anytime there's a mutation on this object.
        latestOrder: {
            key: null,
            items: [],
            // total number of orders from the server
            total: 0,
        },
    }
}