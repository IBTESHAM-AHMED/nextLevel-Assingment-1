# Type Aliases vs Interfaces in TypeScript

## Introduction

In TypeScript, we can describe the shape of data using a `type` alias or an `interface`. They look very similar, so it is easy to get confused. In this blog, I will explain the main differences in a simple way.

## The Main Differences

Let's look at what each one does.

**Interface:** It is mainly used for objects and classes. It can be extended with `extends`, and if we write the same interface twice, TypeScript merges them.

**Type alias:** It can give a name to any type, like a union, a tuple, or a primitive. But it cannot be merged.

Here are some simple examples:

```ts
interface User {
  name: string;
}
interface User {
  age: number;
}
// User now has both name and age

type Id = string | number; // only a type alias can do this
type Admin = User & { role: string };
```

## When Should We Use Which?

If we are describing an object or a class, an `interface` is a good choice. It is clean and works well with `implements`.

But if we need a union, a tuple, or a more complex type, we should use a `type` alias. For example, `type Id = string | number` is not possible with an interface.

## Conclusion

In simple words, `interface` is best for objects and classes, and `type` is best when we need more flexibility. For simple objects, both work fine, so the most important thing is to stay consistent in our code.
