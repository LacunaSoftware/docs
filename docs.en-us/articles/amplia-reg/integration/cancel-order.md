# Cancel an order - Amplia Reg

> [!TIP]
> Make sure you have completed the [Getting started](get-started.md) steps

To cancel an existing order, use the cancellation API providing the order number and a description of the reason for cancellation.

> [!NOTE]
> Not all orders can be cancelled. Orders that have already been issued or are already in a terminal state cannot be cancelled.
> In these cases, the API will return the error code `CannotCancelOrder`.

In .NET:

```cs
await ampliaRegService.CancelOrderAsync("100-000-010", new OrderCancelRequest() {
	Description = "Cancellation requested by customer", // Cancellation reason (required, max 500 characters)
});
```

Via API:

```js
POST /api/orders/{number}/cancellation
{
	"description": "Cancellation requested by customer" // Cancellation reason (required, max 500 characters)
}
```

The `description` field is required and must contain a description of the reason for cancellation, with a maximum of 500 characters. This description is recorded in the order's status transition history.

The operation does not return any content on success (HTTP 200 with no body).

## See also

* [Getting started with integration](get-started.md)
* [Create an order](create-order.md)
* [Error codes](error-codes.md)
