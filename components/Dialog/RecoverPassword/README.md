# DialogRecoverPassword

Regular dialog that displays the link to change password from `/recover-password` route.

## Syntax

```vue
<DialogRecoverPassword v-model="dialog" :token="token" />
```

## Mixins

### `modelSync(Boolean)`

- Path: `'@/components/mixins/modelSync'`

- Adds `Boolean` `v-model` support.

## Props

### `token`

- Type: `Object`

- Required: `true`

> The token to be displayed.

#### Example

```js
{
    title: '',
    link: ''
}
```
