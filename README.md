![screenshot](https://res.cloudinary.com/c4benn/image/upload/v1645722718/petson/Screenshot_164_babd4e.png)

# Petson

## Components 👀

Custom components are created and automatically imported using NuxtJS Component structure;
This means a path like *components/Button/index.vue* will yield `<Button/>` and a path like *components/Tables/Head/index.vue* will yield `<TableHead/>`. To lazily load a component, simply prefix it with 'lazy'. E.g `<LazyButton/>`, `<LazyTableHead/>`
Read more about it [here](https://nuxtjs.org/docs/2.x/directory-structure/components).

> Vuetify core components are kebab-cased e.g `<v-btn/>` while custom components are PascalCased eg `<Button/>`

## Route Query Modal 👀‼

Route Query Modal or Query Modal as you'll see in some directories, are modals/dialogs that are triggered by the `'modal'` property on the route query `$route.query.modal`.

### Feat

- Open state is handled by the route. This means a refresh won't change the state.

- Easily open specific dialog immediately from any where in the app. Eg log in dialog.

### Possible values

#### `?modal=log-in`

- Shows the log in dialog when a client isn't logged in.

- Auto shows log in on a `401` error request.

#### `?modal=sign-up`

- Shows the sign up dialog when a client isn't logged in.

#### `?modal=user-settings`

- Shows the user settings dialog to logged in clients

## Active Routes and Pages 👀

### `/`

- user/customer main page or home page

### `/forgot-password`

- Page to trigger forgot password recovery link

### `/change-password`

- Page to set a new password.

## In Progress Routes\*

### `/cart`

- Shows items in cart

### `/product/${uuid}`

- Shows a product with add to bag button, order quantity, and product description

### `/categories/${uuid}`

- Shows a particular category to shop from


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).


## Story Book

```bash
npx nuxt storybook
```

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
