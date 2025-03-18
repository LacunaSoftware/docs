# Webhooks - Amplia Reg

Você pode cadastrar uma URL para ser chamada (método `POST`) a cada transição que acontecer com pedidos criados pela sua aplicação.

## Exemplos de payloads

> [!NOTE]
> Os exemplo abaixo estão formatados apenas para melhor entendimento, o JSON é enviado sem formatação.

### Pedido criado

```json
{
  "type": "OrderStatusChanged",
  "orderStatusTransitionModel": {
    "orderId": "0195a9dc-c0f0-4f5c-83d3-bf562ae98ed9",
    "orderNumber": "800-005-520",
    "orderSaleNumber": null,
    "previousStatus": null,
    "status": "WaitingValidation",
    "date": "2025-03-18T15:26:11.704304+00:00",
    "validationAgent": null,
    "confirmationAgent": null
  }
}
```

### Pedido em validação

```json
{
  "type": "OrderStatusChanged",
  "orderStatusTransitionModel": {
    "orderId": "0195a9dc-c0f0-4f5c-83d3-bf562ae98ed9",
    "orderNumber": "800-005-520",
    "orderSaleNumber": null,
    "previousStatus": "WaitingValidation",
    "status": "InValidation",
    "date": "2025-03-18T15:27:28.358558+00:00",
    "validationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1988-04-01T00:00:00"
    },
    "confirmationAgent": null
  }
}
```

### Pedido na fila de confirmação

```json
{
  "type": "OrderStatusChanged",
  "orderStatusTransitionModel": {
    "orderId": "0195a9dc-c0f0-4f5c-83d3-bf562ae98ed9",
    "orderNumber": "800-005-520",
    "orderSaleNumber": null,
    "previousStatus": "InValidation",
    "status": "WaitingConfirmation",
    "date": "2025-03-18T15:28:54.772066+00:00",
    "validationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1988-04-01T00:00:00"
    },
    "confirmationAgent": null
  }
}
```

### Pedido em confirmação

```json
{
  "type": "OrderStatusChanged",
  "orderStatusTransitionModel": {
    "orderId": "0195a9dc-c0f0-4f5c-83d3-bf562ae98ed9",
    "orderNumber": "800-005-520",
    "orderSaleNumber": null,
    "previousStatus": "WaitingConfirmation",
    "status": "InConfirmation",
    "date": "2025-03-18T15:29:45.393819+00:00",
    "validationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1988-04-01T00:00:00"
    },
    "confirmationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1988-04-01T00:00:00"
    }
  }
}
```

### Pedido aprovado (aguardando emissão)

```json
{
  "type": "OrderStatusChanged",
  "orderStatusTransitionModel": {
    "orderId": "0195a9dc-c0f0-4f5c-83d3-bf562ae98ed9",
    "orderNumber": "800-005-520",
    "orderSaleNumber": null,
    "previousStatus": "InConfirmation",
    "status": "WaitingIssue",
    "date": "2025-03-18T15:30:14.052941+00:00",
    "validationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1988-04-01T00:00:00"
    },
    "confirmationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1988-04-01T00:00:00"
    }
  }
}
```

### Certificado emitido

```json
{
  "type": "OrderStatusChanged",
  "orderStatusTransitionModel": {
    "orderId": "0195aa59-f1b8-4154-b709-7149fcf37c70",
    "orderNumber": "800-005-546",
    "orderSaleNumber": null,
    "previousStatus": "WaitingIssue",
    "status": "Issued",
    "date": "2025-03-18T17:44:36.301203+00:00",
    "validationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1986-02-15T00:00:00"
    },
    "confirmationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1986-02-15T00:00:00"
    }
  }
}
```

### Certificado revogado

```json
{
  "type": "OrderStatusChanged",
  "orderStatusTransitionModel": {
    "orderId": "0195aa59-f1b8-4154-b709-7149fcf37c70",
    "orderNumber": "800-005-546",
    "orderSaleNumber": null,
    "previousStatus": "Issued",
    "status": "Revoked",
    "date": "2025-03-18T17:45:44.817709+00:00",
    "validationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1986-02-15T00:00:00"
    },
    "confirmationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1986-02-15T00:00:00"
    }
  }
}
```

### Pedido reprovado

```json
{
  "type": "OrderStatusChanged",
  "orderStatusTransitionModel": {
    "orderId": "0195a9e1-01af-434b-bcf2-5518820098c4",
    "orderNumber": "800-005-538",
    "orderSaleNumber": null,
    "previousStatus": "InConfirmation",
    "status": "Declined",
    "date": "2025-03-18T15:33:17.829905+00:00",
    "validationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1988-04-01T00:00:00"
    },
    "confirmationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1988-04-01T00:00:00"
    }
  }
}
```

### Pedido cancelado

```json
{
  "type": "OrderStatusChanged",
  "orderStatusTransitionModel": {
    "orderId": "0195a9dc-c0f0-4f5c-83d3-bf562ae98ed9",
    "orderNumber": "800-005-520",
    "orderSaleNumber": null,
    "previousStatus": "WaitingIssue",
    "status": "Canceled",
    "date": "2025-03-18T15:31:04.346843+00:00",
    "validationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1988-04-01T00:00:00"
    },
    "confirmationAgent": {
      "id": "0bcc8325-7122-4e5d-80b4-720beec03ede",
      "name": "Fulano de Tal",
      "identifier": "16545693050",
      "birthDate": "1988-04-01T00:00:00"
    }
  }
}
```

## Veja também

* [Primeiros passos para integração](get-started.md)
* [Códigos de erro](error-codes.md)
