## `library-name`

Single paragraph about why this library exists

## Get started

Install

```bash
yarn add creative-ui
# or
npm install --save creative-ui
```

Use

```typescript
import { noop } from 'creative-ui'

console.log(noop()) // undefined
```

[Examples](https://github.com/skulptur/creative-ui/tree/master/example)

## API

- Pure functions.
- The argument order is optimized for partial application.

Exports:

### noop

`() => void`

```typescript
const nothing = noop() // undefined
```
