# services/mainPage/products

Fetches the 5 products from 2 random categories;

## How?

### _supposed actions_

- First, 2 random categories will be fetched from the categories listing api.
- The categories will be randomized using one of `['uuid', 'title', 'created_at']` as a `sortBy` value.
- On error fetching categories, it bails.
- The categories will then be used to send another request to fetch 5 products for both of them.
- Those products will then be stores in a **2d Array** in `store.state.mainPage.products`

> Items gotten in categories list dont always return items when _that_ category is used as a `category` params to list products.

### Fix - _longer method, but it'll always return products items._

- Get 10 products initially, then sort them by categories and remove duplicate categories.
- Send fetch requests from the sorted value.

> #### Trade off
>
> Using this method, there's an unnecessary fetching of products being made, even with an unnecessary length of 10.
> Could still return 1 category because it seems only `pet-clean-up-and-odor-control` category is populated. `category_uuid=43f085a7-35c1-3dfc-b943-68ee0a243053`
