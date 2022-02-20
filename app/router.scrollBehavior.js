export default function(to, from, saved) {
    const validHash = /^#\w+/.test(to.hash) && !!document.querySelector(to.hash)
    if (to.hash && validHash) {
        return {
            selector: to.hash,
        }
    }

    if (to.path === from.path) {
        return {}
    }

    const top = saved ? saved.y || 0 : 0

    const left = saved ? saved.x || 0 : 0

    window.scrollTo(left, top)
}