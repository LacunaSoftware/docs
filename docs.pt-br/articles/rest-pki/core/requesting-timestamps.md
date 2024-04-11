# Solicitando carimbos de tempo ao Rest PKI Core

Você pode utilizar uma instância do [Rest PKI Core](index.md) como provedor de carimbos de tempo
fornecidos através do protocolo TSP (*Timestamp Protocol* - RFC 3161) ou API REST.

Para isso, siga os passos abaixo para obter as credenciais de acesso:

1. Autentique-se na interface de gerenciamento da sua instância (ex: *https://restpkicore.suaempresa.com*)
1. Clique em **Aplicações** no menu lateral, em seguida em **Adicionar**
1. Preencha um nome e selecione uma organização (a sua instância provavelmente tem uma única subscription, então selecione-a)
1. Marque o papel **Worker**
1. Clique em **Criar**
1. Clique em **Chaves**, depois em **Adicionar**
1. Preencha alguma descrição e, no campo *Expiração*, escolha **Nunca expira**
1. Clique em **Criar**
1. Copie a **chave de API** gerada (esse valor não pode ser recuperado posteriormente)

> [!NOTE]
> Para solicitar carimbos à instância SaaS do Rest PKI Core, o endereço da interface de gerenciamento é [https://core.pki.rest/](https://core.pki.rest/)

Em seguida, utilize uma das formas abaixo para comunicação com o Rest PKI Core.

## Comunicação via *Timestamp Protocol*

Utilize seguintes parâmetros para comunicação com o Rest PKI Core via TSP:

* Protocolo: HTTPS
* Method: POST
* Url: `https://restpkicore.suaempresa.com/tsp`
* Autenticação: header HTTP `Authorization: ApiKey SUA_CHAVE_DE_API`

> [!NOTE]
> Caso seja necessário especificar um identificador de plano, a URL é `https://restpkicore.suaempresa.com/tsp/PLANO`

Caso esteja solicitando carimbos à instância SaaS do Rest PKI Core, é preciso especificar um dos seguintes planos:

* Carimbo de tempo ICP-Brasil: `PkiBrazil` (ou `a402df41-8559-47b2-a05c-be555bf66310`)
* Carimbo de tempo para testes: `LacunaTest`

## Comunicação via API REST

Utilize os seguintes parâmetros para comunicação com o Rest PKI Core via API REST:

* Url: `https://restpkicore.suaempresa.com/api/tsp` (opcionalmente com sufixo `/PLANO`)
* Method: POST
* Request headers
  * `Authorization` : `ApiKey SUA_CHAVE_DE_API`
  * `Content-Type` : `application/json`
* Request
  * `algorithm` : nome do algoritmo (veja algoritmos suportados abaixo)
  * `value` : valor do hash a ser carimbado, codificado em Base64 **ou**
  * `hexValue` : valor do hash a ser carimbado, codificado em hexadecimal (*case insensitive*)
* Response
  * `encodedValue` : carimbo de tempo, codificado em Base64
  * `info` : informações sobre o carimbo de tempo

> [!NOTE]
> A URL da API REST é muito similar à URL para requisições via TSP, a diferença sendo o segmento `/api/`

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
