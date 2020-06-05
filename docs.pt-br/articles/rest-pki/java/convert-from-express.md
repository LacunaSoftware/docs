# Como converter do PKI Express para o REST PKI em Java
Este artigo explica as alterações necessárias para converter uma aplicação Java utilizando [PKI Express](../../pki-express/index.md) para uma aplicação Java que utilize [REST PKI](../index.md).

## Equivalência de políticas
Ao migrar sua aplicação Java que utiliza o PKI Express para utilizar o REST PKI, é importante se atentar aos nomes das políticas usadas na aplicação.  
Na tabela a seguir, é possível encontrar as equivalências entre os nomes das políticas em ambas bibliotecas. Na primeira coluna temos os nomes das políticas na biblioteca PKI Express, e na segunda coluna temos os nomes das mesmas políticas só que na biblioteca REST PKI.

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

> [!NOTE]
> A política desejada ainda não existe no REST PKI? [Fale com a gente](https://www.lacunasoftware.com/pt/home/purchase).