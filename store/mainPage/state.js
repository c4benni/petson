export default function state() {
    // when key === null, means mainPage hasn't been populated yet;
    // if key === 'error' means an error occured. Probably a network error;
    return {
        key: null,
        product: [],
        blogPost: [],
        promotion: [],
    }
}