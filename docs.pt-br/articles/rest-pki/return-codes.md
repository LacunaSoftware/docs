# Códigos de Retorno do REST PKI

O REST PKI retorna os seguintes códigos HTTP:

## 401 - Unauthorized

O token de acesso fornecido não é válido.

## 422 - Unprocessable Entity

As operações do REST PKI apresentam um conjunto de códigos de retorno que podem ser vistos a seguir, bem como o significado de cada código.

| Códigos de retorno            | Significado                                                                    |
|-------------------------------|--------------------------------------------------------------------------------|
| EntityNotFound                | Cultura, fuso horário ou política de assinatura invalido ou desconhecido       |
| EntityAlreadyExists           | Já existe um contexto de segurança ou política com esse nome. Ou já foi registrado o AC intermediário ou raíz confiável |
| EntityUnusable                | Política de assinatura ou contexto de segurança inválido ou mal configurado    |
| EntityIsReadOnly              | Política ou carimbo de tempo fornecido é apenas para leitura (read-only)       |
| SecurityContextRequired       | Contexto de segurança não fornecido                                            |
| PKCertificateMalformed        | Conteúdo do certificado fornecido é malformado                                 |
| ValidationError               | No momento da assinatura ou da autenticação, o certificado do assinante não está válido. Para mais informações nesse erro veja a tabela [abaixo](#val-errors) |
| ClientSignatureNotSet         | Quando o processo de autenticação ou assinatura tenta finalizar, mas nenhuma assinatura foi fornecida pelo WebPKI |
| ClientSignatureAlreadySet     | Assinatura realizada pelo WebPKI foi fornecida mais de uma vez                 |
| ToSignHashNotAvailable        | Hash a ser assinado está indisponível                                          |
| CertificateMismatch           | Conteúdo do certificado difere do que iniciou a assinatura                     |
| InvalidRequest                | Requisição não é válida                                                        |
| TimestampingUnavailable       | Serviço de carimbo de tempo está indisponível                                  |
| EndUserCertificate            | Certificado final não pode ser adicionado como raíz confiável ou AC intermediário |
| CACertificate                 | Certificados de AC intermediária não podem ser adicionado como raíz confiável  |
| SelfSignedCertificate         | Certificados auto-assinados não podem ser adicionados como AC intermediária    |
| TimestampPlanRequired         | Plano de carimbo de tempo não fornecido                                        |
| InvalidPdf                    | PDF fornecido não é válido                                                     |
| InvalidVisualRepresentation   | Representação visual fornecida é inválida                                      |
| MissingDataHash               | Data hash não fornecido                                                        |
| CannotApplyPdfMarks           | PDF já está assinado digitalmente e o parâmetro AbortIfSigned está setado como True |
| BadDigest                     | Digest fornecido não corresponde ao conteúdo recebido                          |
| InvalidXml                    | XML fornecido não é válido                                                     |
| TransactionLimitAlreadyExists | Limite de transação já definido, para atualizá-lo use request com método PUT   |
| InvalidSortField              | Parâmetro de ordenação não foi encontrado na consulta ao banco de dados        |
| FontSizeZero                  | Tamanho da fonte deve ser maior que 0                                          |
| InvalidPage                   | O número do página da representação visual fornecida é inválido                |
| FileDownloadFailed            | Download de arquivo falhou                                                     |
| InvalidElementType            | O tipo do elemento do pdk mark fornecido é desconhecido                        |
| UnsupportedCMSContentType     | O conteúdo CMS fornecido não é suportado                                       |
| UnsupportedDigestAlgorithm    | O algoritmo de *digest* fornecido não é suportado                              |
| UnsupportedSignatureAlgorithm | O algoritmo de assinatura fornecido não é suportado                            |
| PadesPositionNotFilled        | PadesPositionModel deve ter ao menos um dos campos, Auto ou Manual, preenchido |
| InvoiceNotCreated             | Fatura pesquisada ainda não foi criada                                         |
| InvalidCades                  | Arquivo p7s fornecido não é válido                                             |
| InvalidToken                  | Token de assinatura fornecido não é válido                                     |

<a name="val-errors" />
### Erros de validação

Erros de validação ocorrem durante assinaturas ou autenticações ou podem ser retornados nos *endpoints* de validação de assinatura.

| Erros de Validação                      | Significado                                                                        |
|-----------------------------------------|------------------------------------------------------------------------------------|
| CertificateNotYetValid                  | Na data de referência, o certificado não é aindo válido                            |
| CertificateExpired                      | Na data de referência, o certificado está expirado                                 |
| CertificateRevoked                      | Na data de referência, o certificado estava revogado                               |
| CertificateIssuerNotFound               | Emissor do certificado não foi encontrado                                          |
| CertificateRevocationStatusUnknown      | Estado de revogação do certificado não pode ser verificado. Provavelmente, o REST PKI não conseguiu acessar os certificados CRLs |
| CertificateChainRootNotTrusted          | A raiz da cadeia de certificado não é confiável                                    |
| InvalidCertificateSignature             | Assinatura não é válida, baseado na chave pública fornecida para o certificado     |
| DecodeError                             | Não foi possível decodificar parte do objeto sendo validado                        |
| RequiredSignedAttributeMissing          | Assinatura não contém todos os atributos assinados que são requeridos              |
| ForbiddenSignedAttributePresent         | Assinatura contém um ou mais atributos assinados que são proibidos                 |
| RequiredUnsignedAttributeMissing        | Assinatura não contém todos os atributos não assinados que são requeridos          |
| ForbiddenUnsignedAttributePresent       | Assinatura contém um ou mais atributos não assinados que são proibidos             |
| ContentTypeMismatch                     | Atributo content-type especifica um tipo de conteúdo diferente do CMS              |
| MessageDigestMismatch                   | Atributo message digest especifica um digest diferente do digest do dado assinado  |
| SigningCertificateDigestMismatch        | Atributo signing certificate especifica um digest diferente do digest do certificado do assinante |
| SignatureAlgorithmValidationFailed      | Validação do algoritmo da assinatura falhou                                        |
| RevocationDataIssuedBeforeGracePeriod   | Dados de revogação emitidos antes do fim do período de carência                    |
| UncertifiedDateReference                | The date reference used to validate the signature is not certified                 |
| SignaturePolicyMismatch                 | Na validação a política de assinatura difere da política fornecida                 |
| SigningTimeOutOfCertificateValidity     | Assinatura realizada fora do período de validade do certificado                    |
| UnknownSignedAttributesPresent          | Assinatura contém um ou mais atributos assinados não reconhecidos                  |
| UnknownUnsignedAttributesPresent        | Assinatura contém um ou mais atributos não assinados não reconhecidos              |
| TimestampWithMoreThanOneSigner          | Carimbo de tempo contém mais de um assinante                                       |
| TimestampMessageImprintMismatch         | The timestamp message-imprint is not the same as the computed message-imprint      |
| CompleteReferencesMismatch              | Referências completas de certificados não são válidas                              |
| InvalidSignatureTimestamp               | Carimbo de tempo da assinatura não é válido                                        |
| InvalidReferencesTimestamp              | Nenhum carimbo de tempo de referenência válido foi encontrado                      |
| InvalidArchiveTimestamp                 | Carimbo de tempo do arquivo não é válido                                           |
| InvalidKeyUsage                         | Certificado assinante não tem permissão para realizar esse tipo de operação        |
| InvalidOcspResponse                     | Resposta OCSP não é válida                                                         |
| UnauthorizedIssuer                      | Emissor do certificado não é uma AC                                                |
| UnknownRootTrustStatus                  | Estado de confiança da raiz não conhecido                                          |
| InvalidTsl                              | TSL não é válido                                                                   |
| InvalidCrl                              | Certificado LCR não é válido                                                       |
| CertificateIssuerValid                  | Emissor do certificado é confiável                                                 |
| CertificateIssuerInvalid                | Emissor do certificado não é confiável                                             |
| CertificateValidationFailed             | Validação do certificado falhou                                                    |
| SignatureVulnerableToSignerSubstitution | Assinatura é vulnerável a ataques de substituição de signatário                    |
| InvalidXmlSignatureSchema               | Validação do schema da assinatura (XSD)falhou                                      |
| XmlDSigCoreValidationFailed             | Validação primária (core validation) da assinatura falhou (o digest ou assinatura estão incorretos) |
| SignatureTimestampIgnored               | Um carimbo de tempo de assinatura foi ignorado                                     |
| InvalidCertificationPathLen             | Caminho de certificação das ACs é inválido                                         |
| SigningCertificateNotFound              | Certificado do signatário não foi encontrado                                       |
| UnauthorizedACIssuer                    | Emissor do certificado é uma AC, portanto não pode ser usado como emissor de certificados de atributo |
| AlgorithmNotAllowed                     | Algoritmo não é permitido                                                          |
| UnacceptableSignaturePolicy             | Política de assinatura não permitida                                               |

## 500 - Internal Server Error

Ocorreu um erro inesperado no servidor.