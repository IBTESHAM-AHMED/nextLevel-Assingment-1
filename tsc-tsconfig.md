# What Happens When We Run tsc

Browsers and Node.js can't run TypeScript directly. So we use the TypeScript compiler, `tsc`, to convert it into JavaScript.

## What happens inside

When I run `tsc`, it mainly does these steps:

1. Reads my code and builds a syntax tree.
2. Checks the types and shows errors if something is wrong.
3. Removes TypeScript-only things like types and interfaces.
4. Writes the final JavaScript file.

```ts
// before
const greet = (name: string): string => `Hi ${name}`;
```

```js
// after
const greet = (name) => `Hi ${name}`;
```

So types exist only while coding. They are gone at runtime.

## What does tsconfig.json do?

It is the settings file for the compiler.

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "dist",
    "strict": true
  },
  "include": ["src"]
}
```

`target` sets the JavaScript version, `outDir` is where the output goes, and `strict` turns on stronger type checks.

## Conclusion

`tsc` checks the code and converts it, and `tsconfig.json` tells it how. I always keep `strict` on because it catches many mistakes early.