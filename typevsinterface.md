# Type vs Interface in TypeScript

When I first learned TypeScript, I thought `type` and `interface` were the same thing, so I used them randomly. After reading more, I found they are similar but not identical.

## What is different?

An `interface` is mainly for describing the shape of an object. It can be extended using `extends`, and it also supports declaration merging. That means if I write the same interface twice, TypeScript joins them together.

```ts
interface User { name: string }
interface User { age: number }  // merges with the one above
```

A `type` is more flexible. It can be used for unions, tuples and primitives, which an interface can't do. But if I declare the same type name twice, I get an error.

```ts
type Id = string | number;
type Point = [number, number];
```

## Which one should I use?

From what I understand, I should use `interface` for objects and classes, and `type` for unions, tuples or when I combine other types. The most important thing is to stay consistent in one project.

## Conclusion

The difference is small, but now I know why it exists. For simple objects I use `interface`, and for everything else I use `type`.