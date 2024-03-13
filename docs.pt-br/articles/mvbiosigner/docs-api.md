# API de Consulta de Documentos

## Download do documento  
```js
[GET]
'/api/document/token/{token}'
'/api/document/hash/{hash}'  
 
Response (application/pdf): 'Conteúdo do PDF'
```

## API de informação dos documentos
```js
[GET]  
'/api/document/token/{token}/info'
'/api/document/hash/{hash}/info'

URL query parameters
  validate: boolean // flag para validar a assinatura além de retornar os dados da assinatura

Response (application/json):
{
  id?: string,  // Id do documento
  name: string, // nome do documento
  hash: string, // hash do documento
  token: string, // token do documento
  isCancelled: boolean, // se o documento foi cancelado
  signers: SignerModel[] // lista de assinantes
}

SignerModel:
{
  name: string, // nome do assinante
  isValid?: boolean, // resultado da validação da assinatura (caso usada a flag 'validate' via URL query parameter)
  
  // assinante Pessoa Juridica
  cnpj: string, // CNPJ somente numeros (00000000000000)
  cnpjFormatted: string, // CNPJ com separadores (00.000.000/0000-00)
  
  // assinante Pessoa Fisica
  conselho: string, // ex: CRM
  conselhoUF: string, // ex: DF
  conselhoId: string, // ex: 123456
}
```

## Retorno de erros

Caso ocorra algum erro tratável da API, é retornado o código HTTP:
`422` (Unprocessable Entity)
Com conteúdo:
```js
Body (application/json):
{
  code: string, // código de erro
  message: string, // detalhes do erro
}

Códigos de erros possíveis:
DocumentNotFound     // Documento não encontrado no banco
DocumentBlobNotFound // Arquivo do documento não encontrado no storage
BlobStorageOpenError // Erro no storage ao tentar ler o arquivo do documento
DocumentCancelled    // Retorna este erro caso o documento esteja cancelado e esteja
                       //   habilitada a opção de ocultar documentos cancelados
```

