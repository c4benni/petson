export default function state() {
    return {
        // user info to be displayed in user-settings dialog;
        // this object should be cloned on update to maintain reactivity and to override existing values; so setting info could be with just 1 key: value, or all possible key: values;
        info: null,

        // rows per page in user-settings;
        latestOrdersRowsPerPage: 5,
    }
}