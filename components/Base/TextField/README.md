# BaseTextField

`v-text-field` wrapper component to create a base style for text fields

## Syntax

```vue
<BaseTextField v-model="name" />
```

## Mixins

### `TextFieldMixin`

- Path: `'@/components/mixins/TextField'`

- Adds common `v-text-field` props, and `v-model` support.

## Props

### `label`

> Field's label

- Type: `String`

- Required: `true`

### `type`

> What type of `input` should be rendered?

- Type: `String`

- Required: `true`
