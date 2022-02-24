# DialogAuth

Dialog for showing authentication form components (`FormLogin`, `FormSignUp`)

## Syntax

```vue
<DialogAuth />
```

## Feat

- Binded to `$route.query.modal`. This means a refresh will still maintain dialog state.

## Mixins

### `queryModal`

- Path: `'@/components/mixins/routeQueryModal'`

- Adds default look and feel for any modal that is triggered by route query.

> No props
