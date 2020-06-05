# Como converter do REST PKI para o PKI Express em Java
Este artigo explica as alterações necessárias para converter do [REST PKI](../../rest-pki/index.md) para o [PKI Express](../index.md) em Java.

## Equivalência de políticas

| REST PKI                         | PKI Express                                                             |
|----------------------------------|-------------------------------------------------------------------------|
| PadesBasic                       | PadesBasicWithLTV                                                       |
| PadesBasicWithPkiBrazilCerts     | PadesBasicWithLTV                                                       |
| PadesTWithPkiBrazilCerts         | PadesT                                                                  |
| PkiBrazilPadesAdrBasica          | Política ainda não existente (a constante equivalente seria "adrb-ltv") |
| PkiBrazilPadesAdrTempo           | Política ainda não existente (a constante equivalente seria "adrt")     |
| CadesBes                         | CadesBesWithRevocationValues                                            |
| CadesBesWithSigningTimeAndNoCrls | CadesBes                                                                |
| PkiBrazilAdrBasica               | PkiBrazilCadesAdrBasicaWithRevocationValues                             |
| PkiBrazilAdrTempo                | PkiBrazilCadesAdrTempo                                                  |
| PkiBrazilAdrCompleta             | PkiBrazilCadesAdrCompleta                                               |
| XadesBasic                       | XadesBes                                                                |
| XmlDSigBasic                     | XmlDSigBasic                                                            |
| PkiBrazilXadesAdrBasica          | PkiBrazilXadesAdrBasica                                                 |
| PkiBrazilXadesAdrTempo           | PkiBrazilXadesAdrTempo                                                  |
| NFePadraoNacional                | NFePadraoNacional                                                       |
| CodSha1                          | CodWithSHA1                                                             |
| CodSha256                        | CodWithSHA256                                                           |