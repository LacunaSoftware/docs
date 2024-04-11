# Solicitando carimbos de tempo ao Rest PKI Core

Você pode utilizar uma instância do [Rest PKI Core](index.md) como provedor de carimbos de tempo
fornecidos através do protocolo TSP (*Timestamp Protocol* - RFC 3161) ou API REST.

Para isso, siga os passos abaixo para obter as credenciais de acesso:

1. Autentique-se na interface de gerenciamento da sua instância (ex: *https://restpkicore.suaempresa.com*)
1. Opcionalmente, clique no seu nome no canto superior direito, em seguida em **Organização** e selecione uma organização (caso não veja essa opção, significa que você só tem acesso a uma organização, então apenas ignore esse passo)
1. No menu lateral, clique em **Aplicações**, em seguida em **Adicionar**
1. Preencha um **nome** para a aplicação
1. Marque o papel `Operador`
1. Clique em **Criar**
1. Na página de detalhes da aplicação, clique em **Chaves**, em seguida em **Adicionar**
1. Preencha uma descrição qualquer para a chave e escolha uma expiração (recomenda-se escolher **Nunca expira**) e clique em **Criar**
1. **Tome nota da chave de API exibida** pois não será possível recuperá-la mais tarde

> [!NOTE]
> Para solicitar carimbos à instância SaaS do Rest PKI Core, o primeiro passo é feito acessando [https://core.pki.rest/](https://core.pki.rest/)

Em seguida, utilize uma das formas abaixo para comunicação com o Rest PKI Core.

## Comunicação via *Timestamp Protocol*

Utilize seguintes parâmetros para comunicação com o Rest PKI Core via TSP:

* Protocolo: HTTPS
* Method: POST
* Url: `https://restpkicore.suaempresa.com/api/tsp` (ou `https://restpkicore.suaempresa.com/api/tsp/<PLANO>` para solicitar um carimbo de tempo de um plano específico)
* Autenticação: por header HTTP conforme abaixo:
  * `Authorization` : `ApiKey <chave de api do Rest PKI Core>`

O argumento `<PLANO>` é opcional, sendo utilizado o plano padrão caso seja omitido. Consulte o administrador da instância para saber quais são os planos disponíveis.

Caso esteja solicitando carimbos à instância SaaS do Rest PKI Core, os planos disponíveis são:

* Carimbo de tempo ICP-Brasil: `PkiBrazil` (ou `a402df41-8559-47b2-a05c-be555bf66310`)
* Carimbo de tempo para testes: `LacunaTest`

## Comunicação via API REST

Utilize os seguintes parâmetros para comunicação com o Rest PKI Core via API REST:

* Url: `https://restpkicore.suaempresa.com/api/tsp` (ou `https://restpkicore.suaempresa.com/api/tsp/<PLANO>` para solicitar um carimbo de tempo de um plano específico)
* Method: POST
* Request headers
  * `Authorization` : `ApiKey <chave de api do Rest PKI Core>`
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
