export const menuItem = (title, links) => ({
    title,
    links,
})

export const link = (title, type = 'default', to = '#') => ({
    title,
    type,
    to,
})