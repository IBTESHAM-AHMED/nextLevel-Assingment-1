# Combining Union and Intersection Types in TypeScript


## Understanding the Two Operators

**Union (`|`):** A value can be one of several types. It means "this OR that".

**Intersection (`&`):** A value must have all the properties of every type. It means "this AND that".

Here is a simple example from a payment system:

```ts
type BasePayment = { amount: number };

type CardPayment = BasePayment & { cardNumber: string };
type CashPayment = BasePayment & { receivedBy: string };

type Payment = CardPayment | CashPayment;
```

Here, `CardPayment` uses `&`, so it has both `amount` and `cardNumber`. Then `Payment` uses `|`, so it can be a card payment or a cash payment.

## Using It Safely

Because `Payment` is a union, we must check which type we have before using its special properties:

```ts
function showPayment(payment: Payment): string {
  if ("cardNumber" in payment) {
    return `Card payment of ${payment.amount}`;
  }
  return `Cash payment of ${payment.amount}`;
}
```

The `in` check narrows the type, so TypeScript knows which properties are safe to use.

## Conclusion

In simple words, `&` builds a bigger type by joining types together, and `|` lets a value be one of many types. When we combine them, we can model real data in a clear and type-safe way.
