# FormAlert

Shows error message when its parent `form` makes and api call that returns an error.

## Syntax

```vue
<FormAlert :error="errors">
```

## Props

### `error`

- Type: `Object`

- Required: `true`

#### Example

##### Simple error

```js
{
    message: 'An error occured',
    errors: []
}
```

##### Robust error

```js
{
    message: 'An error occured',
    errors: {
        name: [
            "The first name must be at least 3 characters."
        ],
        email: [
            "The email must be a valid email address."
        ],
        password: [
            "The password must be at least 8 characters.",
            "The password confirmation does not match."
        ]
  }
}
```
