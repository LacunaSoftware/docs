# Phone number validation - Amplia Reg

> [!TIP]
> Make sure you have completed the [Getting started](get-started.md) steps

Before providing a phone number in the `Contact` field of an order, it is recommended to validate the number with the validation API. The number must be in international format (e.g.: `+5511999990000`).

In .NET:

```cs
bool isValid = await ampliaRegService.ValidatePhoneNumberAsync("+5511999990000");
if (!isValid) {
	throw new Exception("Invalid phone number!");
}
```

Via API:

```
GET /api/users/phone-number/validation?phoneNumber=%2B5511999990000
```

> [!NOTE]
> The `+` symbol of the international prefix must be encoded as `%2B` in the query string.

The response is `true` if the number is valid, `false` otherwise.

## See also

* [Getting started with integration](get-started.md)
* [Create an order](create-order.md)
* [Error codes](error-codes.md)
