# AnimateInView

Animates an element once when it intersects.

## Syntax

```js
<AnimateInView>
  <div>...</div>
</AnimateInView>
```

## Props

### Tag

Default is `'section'`

```js
<AnimateInView tag='div'>
    <div>...</div>
</AnimateInVies>
```

### `appear-active`

- Type: `String`

- Default: `'transition-[opacity,transform] duration-[700ms]'`

> Static class that should be applied to the component. Basically to control transition duration and easings.

> This has the same functionality as `appear-active` on `<Transition/>`

```js
<AnimateInView appear-active="transition-transform duration-400"></AnimateInView>
```

### `appear-from`

- Type: `String`

- Default: `'opacity-0'`

> Class that should be applied before the component enters the view port.

> This has the same functionality as `appear-from` on `<Transition/>`

```js
<AnimateInView appear-from="opacity-0 translate-y-[10px]"></AnimateInView>
```
