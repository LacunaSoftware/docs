# Cancelamento de pedido - Amplia Reg

> [!TIP]
> Certifique-se de que já realizou os [Primeiros passos](get-started.md)

Para cancelar um pedido existente, utilize a API de cancelamento informando o número do pedido e uma descrição do motivo do cancelamento.

> [!NOTE]
> Nem todos os pedidos podem ser cancelados. Pedidos que já foram emitidos ou que já se encontram em estado terminal não podem ser cancelados.
> Nesses casos, a API retornará o código de erro `CannotCancelOrder`.

Em .NET:

```cs
await ampliaRegService.CancelOrderAsync("100-000-010", new OrderCancelRequest() {
	Description = "Solicitação de cancelamento pelo cliente", // Motivo do cancelamento (obrigatório, máx. 500 caracteres)
});
```

Por API:

```js
POST /api/orders/{numero}/cancellation
{
	"description": "Solicitação de cancelamento pelo cliente" // Motivo do cancelamento (obrigatório, máx. 500 caracteres)
}
```

O campo `description` é obrigatório e deve conter uma descrição do motivo do cancelamento, com no máximo 500 caracteres. Essa descrição é registrada no histórico
de transições de status do pedido.

A operação não retorna conteúdo em caso de sucesso (HTTP 200 sem corpo).

## Veja também

* [Primeiros passos para integração](get-started.md)
* [Criação de pedido](create-order.md)
* [Códigos de erro](error-codes.md)
