# BaseDialog

`v-dialog` wrapper component. Since all dialogs have similar look, and feel. Eg shadows, backdrop, close icon position and styling.

## Syntax

```vue
<BaseDialog v-model="dialog">
    ...
</BaseDialog>
```

## Mixins

### `modelSync(Boolean)`

- Path: `'@/components/mixins/modelSync'`

- Adds Boolean model support.

## Props

### `transition`

> Vuetify dialog transition that should be applied. [see docs](https://vuetifyjs.com/en/api/v-dialog/#props)

- Type: `String`

- Default: `undefined`

### `content-class`

> Vuetify dialog content-class that should be applied. [see docs](https://vuetifyjs.com/en/api/v-dialog/#props)

- Type: `String`

- Default: `undefined`
