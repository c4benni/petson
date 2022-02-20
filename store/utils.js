// get the Vue instance
export function getApp() {
    const {
        $router: { app },
    } = this

    return app || this
}