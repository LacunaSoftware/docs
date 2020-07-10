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