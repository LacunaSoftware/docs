# Solicitando carimbos de tempo ao Rest PKI

Você pode utilizar o [Rest PKI](index.md) como provedor de carimbos de tempo ICP-Brasil fornecidos através
do protocolo TSP (*Timestamp Protocol* - RFC 3161) ou API REST.

Para isso, siga os passos abaixo para obter as credenciais de acesso:

1. Autentique-se no site do Rest PKI (https://pki.rest/)
1. No Painel de Controle, clique no botão **Gerar novo token de acesso**
1. Copie o valor gerado

Em seguida, utilize uma das formas abaixo para comunicação com o Rest PKI.

## Comunicação via *Timestamp Protocol*

Utilize seguintes parâmetros para comunicação com o Rest PKI via TSP:

* Protocolo: HTTPS
* Method: POST
* Url: `https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310`
* Autenticação: por header HTTP conforme abaixo:
  * `Authorization` : `Bearer <token de acesso ao Rest PKI>`

## Comunicação via API REST

Utilize seguintes parâmetros para comunicação com o Rest PKI via API REST:

* Url: `https://pki.rest/Api/TimestampPlans/a402df41-8559-47b2-a05c-be555bf66310/Issue`
* Method: POST
* Request headers
  * `Authorization` : `Bearer <token de acesso ao Rest PKI>`
  * `Content-Type` : `application/json`
* Request
  * `algorithm` : nome do algoritmo (veja algoritmos suportados abaixo)
  * `value` : valor do hash a ser carimbado, codificado em Base64 **ou**
  * `hexValue` : valor do hash a ser carimbado, codificado em hexadecimal (*case insensitive*)
* Response
  * `encodedValue` : carimbo de tempo, codificado em Base64
  * `info` : informações sobre o carimbo de tempo

Exemplo de request com algoritmo SHA-256 e hash em Base64:

```json
{
	"algorithm": "SHA256",
	"value": "L80RIvFw2jwpiObzFQN+tuEQQ4E9qnGeYYYd+4DrM8M="
}
```

Exemplo de request com algoritmo SHA-1 e hash em hexadecimal:

```json
{
	"algorithm": "SHA1",
	"hexValue": "3ade2832feafe081f246aa2fb89cb9c7929ac911"
}
```

## Algoritmos suportados

Atualmente, os seguintes algoritmos são suportados:

* SHA-1
  * TSP: 1.3.14.3.2.26
  * API: "SHA1"
* SHA-256
  * TSP: 2.16.840.1.101.3.4.2.1
  * API: "SHA256"
