export function errorResponse(err) {
    const createError = (error = {}) => ({
        error,
        data: null,
    })

    if (err.response) {
        const { status, data } = err.response

        const { error, errors } = data

        return createError({
            status,
            message: error,
            errors,
        })
    } else {
        return createError({
            message: err.message,
        })
    }
}

export function successResponse(res) {
    return {
        success: 1,
        data: res.data,
        error: null,
    }
}

export function throwUncaughtError(
    statusCode = 500,
    message = 'Oops! An error occured'
) {
    return new Promise((resolve) => {
        this.$nuxt.error({ statusCode, message })

        resolve({
            error: 1,
            data: null,
        })
    })
}