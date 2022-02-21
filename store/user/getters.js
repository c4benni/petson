export default {
    initials(state) {
        const { info } = state

        if (info) {
            const { firstName, lastName } = info

            return `${firstName.slice(0, 1)}${lastName.slice(0, 1)}`.toUpperCase()
        }

        return ''
    },

    userSettings(state) {
        const { info } = state

        if (info) {
            const dateJoined = `${new Date(info.createdAt)
        .toLocaleDateString()
        .replace(/\//g, '. ')}.`

            return {
                Name: `${info.firstName} ${info.lastName}`,
                'Phone number': info.phoneNumber,
                Address: info.address,
                'Date joined': dateJoined,
                Email: info.email,
                'Marketing preference': info.isMarketing ? 'Yes' : 'No',
            }
        }

        return {}
    },
}