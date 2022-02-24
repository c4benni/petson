export default function state() {
    // when key === null, means mainPage hasn't been populated yet;
    // if key === 'error' means an error occured. Probably a network error;
    return {
        key: null,
        product: [{
            loading: true,
            title: '',
            uuid: '',
            items: [{
                title: '',
                uuid: '',
                price: 0,
                brandTitle: '',
                brandUuid: '',
                image: '',
            }, ],
        }, ],
        blogPost: [{
            title: '',
            uuid: '',
            image: '',
        }, ],

        promotion: [{
            loading: true,
            title: '',
            image: '',
            content: '',
        }, ],
    }
}