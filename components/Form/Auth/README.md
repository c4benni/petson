# FormAuth

Wrapper `<v-form />` that shows authentication forms (`log-in`, `sign-up`)

## Syntax

```vue
<FormAuth checkbox-label="Remember me" action-text="Log in">
    <div>...</div>

    <template #footer>
        <div>...</div>
    </template>
</FormAuth>
```

## Props

### `checkbox-label`

- Type: `String`

- Required: `true`

#### Description

Configures the checkbox labels.

### `action-text`

- Type: `String`

- Required: `true`

#### Description

The text the action buttons display.

### `loading`

- Type: `Boolean`

#### Description

Use this to disable the `<v-form />` and set the action `<v-btn />`'s loading state to `true`

### `error`

- Type: `Object`

- default: `undefined`

#### Description

Passes down the error to be shown in the `<FormAlert />`

## Events

### `clear-error`

#### Payload

None

#### Description

Used to trigger all input resets, especially when query modal changes.

### `on-submit`

#### Payload

##### `checkbox`

- Type: `Object`

###### Example

`{checkbox: true}`
