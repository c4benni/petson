export default {
    initials(state) {
        const { info } = state

        if (info) {
            const { firstName, lastName } = info

            return `${firstName.slice(0, 1)}${lastName.slice(0, 1)}`.toUpperCase()
        }

        return ''
    },
}