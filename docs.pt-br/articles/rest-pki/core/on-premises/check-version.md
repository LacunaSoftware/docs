# Verificando a versão instalada do Rest PKI Core

Para verificar a versão que está instalada da sua instância [*on premises*](index.md) do [Rest PKI Core](../index.md),
acesse o seguinte endereço a partir de um navegador:

```
https://endereco-do-seu-restpki-core/api/system/info
```

Exemplo: https://core.pki.rest/api/system/info

O retorno é um JSON contendo a versão do sistema, por exemplo:

```json
{"productName":"Lacuna Rest PKI Core","productVersion":"1.*.* RTM","spaVersion":"2.*.0","timestamp":"..."}
```
