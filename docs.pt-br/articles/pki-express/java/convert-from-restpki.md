# Como converter do REST PKI para o PKI Express em Java
Este artigo explica as alterações necessárias para converter uma aplicação Java utilizando [REST PKI](../../rest-pki/index.md) para uma aplicação Java que utilize [PKI Express](../index.md).

## Equivalência de políticas
Ao migrar sua aplicação Java que utiliza o PKI Express para utilizar o REST PKI, é importante se atentar aos nomes das políticas usadas na aplicação.  
Na tabela a seguir, é possível encontrar as equivalências entre os nomes das políticas em ambas bibliotecas. Na primeira coluna temos os nomes das políticas na biblioteca PKI Express, e na segunda coluna temos os nomes das mesmas políticas só que na biblioteca REST PKI.

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