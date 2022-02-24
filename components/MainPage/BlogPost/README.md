# MainPageBlogPost

Component that renders each blog post on the main page (`/` route)

## Feat

- Shows image on left or right

## Syntax

```vue
<!-- Right aligned image -->
<MainPageBlogPost image-position="right" />

<!-- default -->
<MainPageBlogPost />
```

## Props

### `image-position`

- Type: `String as 'left'|'right'`

- Default: `'left'`

### `title`

- Type: `String`

- Required: `true`

### `uuid`

- Type: `String`

- Required: `true`

### `image`

- Type: `String`

- Required: `true`
