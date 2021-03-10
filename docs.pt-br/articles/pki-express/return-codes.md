# Códigos de retorno do PKI Express

As operações do PKI Express apresentam um conjunto de códigos de retorno que podem ser vistos a seguir, bem como o significado de cada código.

| Códigos de retorno                  | Significado                                                                  |
|-------------------------------------|------------------------------------------------------------------------------|
| 00 - Ok                             | Sucesso na execução da operação                                              |
| 01 - BadSyntax                      | Parâmetros passados não seguem o formato esperado                            |
| 02 - UnknownError                   | Erro desconhecido                                                            |
| 03 - FileNotFound                   | Arquivo não encontrado                                                       |
| 04 - BadCertificate                 | Falha na decodificação do certificado                                        |
| 05 - BadThumbprint                  | Thumbprint inválido                                                          |
| 06 - BadHash                        | To Sign Hash inválido ou algoritmo de hash não reconhecido                   |
| 07 - BadData                        | To Sign Data inválido                                                        |
| 08 - BadSignature                   | Assinatura inválida                                                          |
| 09 - BadAlgorithm                   | Algoritmo inválido                                                           |
| 10 - BadPolicy                      | Política inválida                                                            |
| 11 - BadVisualRep                   | Falha no parser do arquivo de representação visual                           |
| 12 - UndefinedFileReference         | Referência indefinida a arquivo                                              |
| 13 - CertNotFound                   | Certificado não encontrado                                                   |
| 14 - ValidationFailed               | Falha na validação                                                           |
| 15 - IOError                        | Erro na leitura de arquivos                                                  |
| 16 - NoCertsWithKey                 | Arquivo PFX não contém certificado com chave privada                         |
| 17 - NotActivated                   | PKI Express não ativado                                                      |
| 18 - ActivationError                | Falha na ativação do PKI Express                                             |
| 19 - BadLicense                     | Base-64 inválida (da licença de ativação)                                    |
| 20 - LicenseNeeded                  | Nenhum arquivo de licença fornecido                                          |
| 21 - InvalidLicense                 | Licença inválida                                                             |
| 22 - AccessDenied                   | Falta permissão para modificar a configuração do PKI Express                 |
| 23 - CertThumbNeeded                | Nenhum thumbprint fornecido                                                  |
| 24 - BadPdfChanges                  | Falha na execução das alterações no PDF                                      |
| 25 - UpdateNeeded                   | Operação necessita de versão mais recente do PKI Express                     |
| 26 - DataFileNeeded                 | Nenhum Data File fornecido                                                   |
| 27 - NoEncapsulatedContent          | Conteúdo encapsulado faltando                                                |
| 28 - NonceNotFound                  | Nonce não encontrado                                                         |
| 29 - DirectoryNotFound              | Diretório não encontrado                                                     |
| 30 - TimestampAuthorityNotAvailable | Falha na requisição do carimbo de tempo                                      |
| 31 - PolicyRequiresNetwork          | Política escolhida precisa de acesso a internet (modo offline não suportado) |
| 32 - TimestampOptionsRequired       | Nenhum endereço URL de autoridade carimbadora fornecido                      |
| 33 - CultureNotFound                | Cultura não encontrada                                                       |
| 34 - TimeZoneNotFound               | Fuso horário não encontrado                                                  |
| 35 - InvalidUtcOffset               | Formato inválido (de Offset UTC)                                             |
| 36 - KeySizeNotSupported            | Tamanho de chave não suportado                                               |
| 37 - BadKeyFormat                   | Formato não reconhecido (de chave)                                           |
| 38 - BadKey                         | Chave inválida                                                               |
| 39 - InvalidTimeoutValue            | Valor de timeout inválido                                                    |
| 40 - CertificateMismatch            | Certificado não corresponde a chave armazenada                               |
| 41 - KeyNotFound                    | Chave não encontrada                                                         |
| 42 - NoCertificateFile              | Nenhum certificado fornecido                                                 |
| 43 - BadCertificationLevel          | Nível de certificação inválido                                               |

## Erros de validação

Erros de validação ocorrem durante assinaturas, autenticações ou inspeções com validação.

| Erros de Validação                      | Significado                                                                    |
|-----------------------------------------|--------------------------------------------------------------------------------|
| Success                                 | Validação bem sucedida                                                         |
| CertificateNotYetValid                  | Na data de referência, o certificado ainda não é válido                        |
| CertificateExpired                      | Na data de referência, o certificado está expirado                             |
| CertificateRevoked                      | Na data de referência, o certificado estava revogado                           |
| CertificateIssuerNotFound               | Emissor do certificado não foi encontrado                                      |
| CertificateRevocationStatusUnknown      | Estado de revogação do certificado não pode ser verificado. Provavelmente, o PKI Express não conseguiu acessar os certificados CRLs (veja [LAPP](config/lapp.md)) |
| CertificateChainRootNotTrusted          | A raiz da cadeia de certificado não é confiável                                |
| InvalidCertificateSignature             | Assinatura não é válida, baseado na chave pública fornecida para o certificado |
| DecodeError                             | Não foi possível decodificar parte do objeto sendo validado                    |
| RequiredSignedAttributeMissing          | Assinatura não contém todos os atributos assinados que são requeridos          |
| ForbiddenSignedAttributePresent         | Assinatura contém um ou mais atributos assinados que são proibidos             |
| RequiredUnsignedAttributeMissing        | Assinatura não contém todos os atributos não assinados que são requeridos      |
| ForbiddenUnsignedAttributePresent       | Assinatura contém um ou mais atributos não assinados que são proibidos         |
| ContentTypeMismatch                     | Atributo content-type especifica um tipo de conteúdo diferente do CMS          |
| MessageDigestMismatch                   | Atributo message digest especifica um digest diferente do digest do dado assinado |
| SigningCertificateDigestMismatch        | Atributo signing certificate especifica um digest diferente do digest do certificado do assinante |
| SignatureAlgorithmValidationFailed      | Validação do algoritmo da assinatura falhou                                     |
| RevocationDataIssuedBeforeGracePeriod   | Dados de revogação emitidos antes do fim do período de carência                 |
| UncertifiedDateReference                | A referência de tempo utilizada na validação da assinatura não é certificada    |
| SignaturePolicyMismatch                 | Na validação a política de assinatura difere da política fornecida              |
| SigningTimeOutOfCertificateValidity     | Assinatura realizada fora do período de validade do certificado                 |
| UnknownSignedAttributesPresent          | Assinatura contém um ou mais atributos assinados não reconhecidos               |
| UnknownUnsignedAttributesPresent        | Assinatura contém um ou mais atributos não assinados não reconhecidos           |
| TimestampWithMoreThanOneSigner          | Carimbo de tempo contém mais de um assinante                                    |
| TimestampMessageImprintMismatch         | Message-imprint do timestamp não é igual a computada                            |
| CompleteReferencesMismatch              | Referências completas de certificados não são válidas                           |
| InvalidSignatureTimestamp               | Carimbo de tempo da assinatura não é válido                                     |
| InvalidReferencesTimestamp              | Carimbo de tempo de referenência não é válido                                   |
| InvalidSigAndRefsTimestamp              | Carimbo de tempo da assinatura e de referência são inválidos                    |
| InvalidArchiveTimestamp                 | Carimbo de tempo do arquivo não é válido                                        |
| InvalidKeyUsage                         | Certificado assinante não tem permissão para realizar esse tipo de operação     |
| InvalidOcspResponse                     | Resposta OCSP não é válida                                                      |
| UnauthorizedIssuer                      | Emissor do certificado não é uma AC                                             |
| UnknownRootTrustStatus                  | Estado de confiança da raiz não conhecido                                       |
| InvalidTsl                              | TSL não é válido                                                                |
| InvalidCrl                              | Certificado LCR não é válido                                                    |
| CertificateIssuerValid                  | Emissor do certificado é confiável                                              |
| CertificateIssuerInvalid                | Emissor do certificado não é confiável                                          |
| CertificateValidationFailed             | Validação do certificado falhou                                                 |
| SignatureVulnerableToSignerSubstitution | Assinatura é vulnerável a ataques de substituição de signatário                 |
| InvalidXmlSignatureSchema               | Validação do schema da assinatura (XSD)falhou                                   |
| XmlDSigCoreValidationFailed             | Validação primária (core validation) da assinatura falhou (o digest ou assinatura estão incorretos) |
| SignatureTimestampIgnored               | Um carimbo de tempo de assinatura foi ignorado                                  |
| InvalidCertificationPathLen             | Caminho de certificação das ACs é inválido                                      |
| SigningCertificateNotFound              | Certificado do signatário não foi encontrado                                    |
| UnauthorizedACIssuer                    | Emissor do certificado é uma AC, portanto não pode ser usado como emissor de certificados de atributo |
| AlgorithmNotAllowed                     | Algoritmo não é permitido                                                       |
| UnacceptableSignaturePolicy             | Política de assinatura não permitida                                            |
| TslNotAvailable                         | TSL não disponível                                                              |

<!-- TimestampValidationException: foi apagado da listagem pois não é utilizado -->