# Como converter do PKI Express para o REST PKI em Java
Este artigo explica as alterações necessárias para converter do [PKI Express](../../pki-express/index.md) para o [REST PKI](../index.md) em Java.

## Equivalência de políticas

| PKI Express                                 | REST PKI                         |
|---------------------------------------------|----------------------------------|
| PadesBasicWithLTV                           | PadesBasic                       |
| PadesBasicWithLTV                           | PadesBasicWithPkiBrazilCerts     |
| PadesBasic                                  | Política ainda não existente     |
| PadesT                                      | PadesTWithPkiBrazilCerts         |
| CadesBesWithRevocationValues                | CadesBes                         |
| CadesBes                                    | CadesBesWithSigningTimeAndNoCrls |
| CadesT                                      | Política ainda não existente     |
| PkiBrazilCadesAdrBasicaWithRevocationValues | PkiBrazilAdrBasica               |
| PkiBrazilCadesAdrBasica                     | Política ainda não existente     |
| PkiBrazilCadesAdrTempo                      | PkiBrazilAdrTempo                |
| PkiBrazilCadesAdrCompleta                   | PkiBrazilAdrCompleta             |
| XadesBes                                    | XadesBasic                       |
| XmlDSigBasic                                | XmlDSigBasic                     |
| PkiBrazilXadesAdrBasica                     | PkiBrazilXadesAdrBasica          |
| PkiBrazilXadesAdrTempo                      | PkiBrazilXadesAdrTempo           |
| NFePadraoNacional                           | NFePadraoNacional                |
| CodWithSHA1                                 | CodSha1                          |
| CodWithSHA256                               | CodSha256                        |