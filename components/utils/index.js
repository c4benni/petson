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

// works like this.$nextTick, but the callback gets called after the next animation frame; also, no this is being binded.
export function nextFrame(callback) {
    if (typeof callback === 'function') {
        requestAnimationFrame(callback)
    } else {
        return new Promise((resolve) => {
            requestAnimationFrame(resolve)
        })
    }
}

// quickly build home page. Used in story books, and for testing
export async function buildMainPage() {
    await this.$store.dispatch('mainPage/build')
}