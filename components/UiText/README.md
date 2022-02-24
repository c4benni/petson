# UiText

Easily add typography to any component, layout, or page.

## Feat

- Uses [Vuetify typography utility classes](https://vuetifyjs.com/en/styles/text-and-typography/#typography)

## Syntax

```vue
<UiText variant="h4" label="Hello world" />

<!-- or -->

<UiText variant="h4">
    Hello world
</UiText>
```

## Props

### `title`

- Type: `Boolean`

#### Description

This prop renders a large title (`text-h2` utility class) with a primary color.

### `underline`

Type: `Boolean`

### `truncate`

Type: `Boolean`

### `label`

- Type: `String`

- Default: `undefined`

### `tag`

- Type: `String`

- Default: `'div'`

### `Props`

- Type: `Object`

- Default: `{}`

#### Description

Used when `tag` prop is a vue component. Eg `tag="NuxtLink"`

### `variant`

- Type: `String`

- Default: `'body-1'`

#### Description

Helper vuetify typography class suffix.

### `opacity`

- Type: `String`

- Default: `'primary'`

#### Description

Tint and Tone text. Check [here](https://vuetifyjs.com/en/styles/text-and-typography/#opacity) for more.

### `case`

- Type: `String`

- Default: `'custom'`

#### Description

`text-transform` utility classes

### `lineclamp`

- Type: `String`

- Default: `undefined`

#### Description

Adds `line-clamp` utility classes

### `attrs`

- Type: `Object`

- Default: `{}`

#### Description

HTML attributes. Can be used to set HTML `title` attribute, since there's already a `Boolean` `title` prop.
