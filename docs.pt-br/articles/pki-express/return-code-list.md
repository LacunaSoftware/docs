# Listagem dos códigos de retorno do PKI Express

As operações do PKI Express apresentam um conjunto de códigos de retorno que podem ser vistos a seguir, bem como o significado de cada código.

| Códigos de retorno             | Significado                                                                  |
|--------------------------------|------------------------------------------------------------------------------|
| Ok                             | Sucesso na execução da operação                                              |
| BadSyntax                      | Parâmetros passados não seguem o formato esperado                            |
| UnknownError                   | Erro desconhecido                                                            |
| FileNotFound                   | Arquivo não encontrado                                                       |
| BadCertificate                 | Falha na decodificação do certificado                                        |
| BadThumbprint                  | Thumbprint inválido                                                          |
| BadHash                        | To Sign Hash inválido ou algoritmo de hash não reconhecido                   |
| BadData                        | To Sign Data inválido                                                        |
| BadSignature                   | Assinatura inválida                                                          |
| BadAlgorithm                   | Algoritmo inválido                                                           |
| BadPolicy                      | Política inválida                                                            |
| BadVisualRep                   | Falha no parser do arquivo de representação visual                           |
| UndefinedFileReference         | Referência indefinida a arquivo                                              |
| CertNotFound                   | Certificado não encontrado                                                   |
| ValidationFailed               | Falha na validação                                                           |
| IOError                        | Erro na leitura de arquivos                                                  |
| NoCertsWithKey                 | Arquivo PFX não contém certificado com chave privada                         |
| NotActivated                   | PKI Express não ativado                                                      |
| ActivationError                | Falha na ativação do PKI Express                                             |
| BadLicense                     | Base-64 inválida (da licença de ativação)                                    |
| LicenseNeeded                  | Nenhum arquivo de licença fornecido                                          |
| InvalidLicense                 | Licença inválida                                                             |
| AccessDenied                   | Falta permissão para modificar a configuração do PKI Express                 |
| CertThumbNeeded                | Nenhum thumbprint fornecido                                                  |
| BadPdfChanges                  | Falha na execução das alterações no PDF                                      |
| UpdateNeeded                   | Operação necessita de versão mais recente do PKI Express                     |
| DataFileNeeded                 | Nenhum Data File fornecido                                                   |
| NoEncapsulatedContent          | Conteúdo encapsulado faltando                                                |
| NonceNotFound                  | Nonce não encontrado                                                         |
| DirectoryNotFound              | Diretório não encontrado                                                     |
| TimestampAuthorityNotAvailable | Falha na requisição do carimbo de tempo                                      |
| PolicyRequiresNetwork          | Política escolhida precisa de acesso a internet (modo offline não suportado) |
| TimestampOptionsRequired       | Nenhum endereço URL de autoridade carimbadora fornecido                      |
| CultureNotFound                | Cultura não encontrada                                                       |
| TimeZoneNotFound               | Fuso horário não encontrado                                                  |
| InvalidUtcOffset               | Formato inválido (de Offset UTC)                                             |
| KeySizeNotSupported            | Tamanho de chave não suportado                                               |
| BadKeyFormat                   | Formato não reconhecido (de chave)                                           |
| BadKey                         | Chave inválida                                                               |
| InvalidTimeoutValue            | Valor de timeout inválido                                                    |
| CertificateMismatch            | Certificado não corresponde a chave armazenada                               |
| KeyNotFound                    | Chave não encontrada                                                         |
| NoCertificateFile              | Nenhum certificado fornecido                                                 |
| BadCertificationLevel          | Nível de certificação inválido                                               |