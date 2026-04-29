# Validação de número de telefone - Amplia Reg

> [!TIP]
> Certifique-se de que já realizou os [Primeiros passos](get-started.md)

Antes de informar um número de telefone no campo `Contact` de um pedido, recomenda-se validar o número com a API de validação. O número deve estar no formato
internacional (ex.: `+5511999990000`).

Em .NET:

```cs
bool isValid = await ampliaRegService.ValidatePhoneNumberAsync("+5511999990000");
if (!isValid) {
	throw new Exception("Número de telefone inválido!");
}
```

Por API:

```
GET /api/users/phone-number/validation?phoneNumber=%2B5511999990000
```

> [!NOTE]
> O símbolo `+` do prefixo internacional deve ser codificado como `%2B` na query string.

A resposta é `true` se o número for válido, `false` caso contrário.

## Veja também

* [Primeiros passos para integração](get-started.md)
* [Criação de pedido](create-order.md)
* [Códigos de erro](error-codes.md)
