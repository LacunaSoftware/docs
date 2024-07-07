## Trust Service Provider API

### Consulta de usuário

API para verificar se um usuário (CPF) possui certificado digital no HSM

```js
[POST]
'/v0/oauth/user-discovery'

Request:
{
  // CPF do usuário
  val_cpf_cnpj: string
}

//////

Response:
{
  // Resultado indicando "S" para resultado positivo ou "N" caso contrário
  status: string,
  slots: SlotModel[]

SlotModel:
{
  // Status do resultado da assinatura
  slot_alias: string,
  // Campo Subject do certificado do assinante
  label: string
}
```

### Obter certificado digital

API para obter o certificado digital do usuário

```js
[GET]
'/v0/oauth/certificate-discovery/{cpf}'
Route Parameters
cpf // CPF do usuário

//////

Response:
{
  // Resultado indicando "S" para resultado positivo ou "N" caso contrário
  status: string,
  certificates: CertificateModel[]
}

CertificateModel:
{
  // Nome do certificado
  alias: string,
  // Certificado no formato PEM
  certificate: string
}
```


### Assinar hash com chave do usuário

API para assinar digitalmente um hash com a chave privada correspondente ao certificado do usuário

```js
[POST]
'/v0/oauth/signature'

Request:
{
  // Nome do certificado (obtido pela API 'certificate-discovery')
  certificate_alias: string,
  // Hashes a serem assinados
  hashes: HashModel[]
}

HashModel:
{
  // (Opcional) identificador do hash a ser assinado
  id?: string,
  // (Opcional) forma legível do identificador do hash
  alias?: string,
  // OID ou nome do algoritmo de hash
  hash_algorithm: string,
  // Conteúdo do hash em Base64
  hash: string
}

//////

Response:
{
  // Nome do certificado, conforme recebido no request
  certificate_alias: string,
  // Assinaturas
  signatures: SignatureModel[]
}

SignatureModel:
{
  // identificador do hash a ser assinado (conforme passado no HashModel do request)
  id: string,
  // Resultado da assinatura digital em Base64
  raw_signature: string
}
```

## Códigos de erro

Caso ocorra um erro tratado, será retornado um HTTP status `422 (Unprocessable Entity)`
com o seguinte conteúdo:
```js
ErrorModel:
{
  // Código do erro (lista de erros na tabela abaixo)
  code: string,
  // Mensagem com detalhes sobre o erro
  message: string
}
```

| Id | ShortName | Message
|--|--|--|
|  0 | Success  |
|  2 | Unknown | Erro desconhecido
|  3 | ExternalQuery | Erro ao consultar banco de dados externo
|  4 | Hsm | Erro ao acessar HSM
|  5 | HsmNoCredentials | O PIN não foi inserido
|  6 | HsmIncorrectPin | PIN incorreto
|  7 | HsmAccessDenied | Acesso negado ao HSM
|  8 | HsmUserBlocked | Usuário bloqueado no HSM
|  9 | HsmNoCertificate | Usuário sem certificado digital
| 10 | DocumentNotFound | Documento não encontrado
| 11 | Unauthorized | Não autorizado
| 12 | UnknownConselho | Erro ao definir dados do conselho
| 13 | BioAuthFail | Erro na validação da biometria
| 14 | NoUserBioData | Usuário sem biometria cadastrada
| 15 | UserCancelled | O usuário cancelou a operação
| 16 | OperationTimeout | Timeout: a operação não foi completada
| 17 | UserNotFound | Usuário não encontrado
| 18 | CertificateValidationError | Erro na validação de certificação
| 19 | CertificateChainRootNotTrusted | A raiz do certificado não é confiável
| 20 | CertificateExpired | O certificado está expirado
| 21 | CertificateIssuerNotFound | O emissor do certificado não foi encontrado
| 22 | CertificateRevocationStatusUnknown | Estado de revogação do certificado desconhecido
| 23 | CertificateRevoked | O certificado foi revogado
| 24 | DocumentNotSigned | O documento não possui assinantes
| 25 | LoginSessionError | Erro na sessão de login
| 26 | RedisError | Erro de sincronia entre os servidores. Verificar o Redis
| 27 | InternalError | Erro interno. Verificar os logs do sistema
| 28 | InstitutionNoCertificate | Instituição sem certificado digital para assinatura
| 29 | InstitutionSignerError | Erro na assinatura da Instituição
| 30 | MissingInstitutionInfo | Dados da Instituição incompletos
| 31 | MissingInstitutionUF | Instituição sem UF preenchida
| 32 | UserWithoutConselhoUF | Profissional sem inscrição nesta UF
| 33 | DocumentBlobNotFound | Arquivo do documento não encontrado no storage
| 34 | BlobStoragePutError | Erro ao salvar documento no storage
| 35 | BlobStorageOpenError | Erro ao ler documento do storage
| 36 | OperationTimeoutNoAgent | Tempo esgotado: sem ação do agente
| 37 | TrustServiceError | Erro ao comunicar com PSC
| 38 | NoCloudCertificate | Usuário sem certificado ICP-Brasil
| 39 | NoTspSignatureeSession | Usuário sem autenticação com PSC
| 40 | DocumentCancelled | Documento cancelado
| 41 | NotSupportedAlgorithm | Algoritmo não suportado ou desconhecido