export const trimmedLowerCase = (string) => string.toLowerCase().trim()

export const requiredProp = (type) => ({
    type,
    required: true,
})

export const requiredStringProp = requiredProp(String)

export const undefinedProp = (type) => ({
    type,
    undefined: true,
})

export const undefinedStringProp = undefinedProp(String)

export function modalQuery(modal) {
    return {
        query: {
            ...(this.$route.query || {}),
            modal,
        },
    }
}