## API de Assinatura

```js
[POST]
'/dinamo/sign'

Request:
{
  // CAdES signature type: ATTACHED or DETACHED
  signatureType: string,
  // Signature policy (CAdES AD-RB only supported) 
  signaturePolicy: string,
  // CPF do assinante
  cpf: string,
  // Senha do assinante no HSM
  password: string,
  // Lote de documentos para serem assinados
  documents: DocumentModel[]
}

DocumentModel:
{
  // Nome do documento
  name: string,
  // Bytes do documento em Base64
  content: string
}

//////

Response: SignatureResponseModel[]

SignatureResponseModel:
{
  // Status do resultado da assinatura
  status: StatusModel,
  // Campo Subject do certificado do assinante
  subject: string,
  // Campo Issuer do certificado do assinante
  issuer: string,
  // Nome do documento original (vindo do request)
  name: string,
  // Bytes do documento original em Base64 (vindo do request)
  content: string,
  // Bytes do documento assinado em Base64
  signature: string,
  // CAdES signature type (vindo do request)
  signatureType: string
}

StatusModel:
{
  // Ver documentação de Códigos de Retorno abaixo
  id: number,
  // OK ou ERRO
  status: string,
  // Descrição do status
  message: string,
}
```


## Códigos de Retorno


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