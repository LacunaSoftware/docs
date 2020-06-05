# How to convert from PKI Express to REST PKI in Java
This articles explains the modifications necessary to convert a Java application using [PKI Express](../../pki-express/index.md) to a Java application using [REST PKI](../index.md).

## Policies Equivalence
When converting your Java application from using PKI Express to REST PKI, you must pay atention to the policy names used in the application.  
The following table shows the equivalence in policy names between PKI Express (1st column) and REST PKI (2nd column). 

| PKI Express                                 | REST PKI                         |
|---------------------------------------------|----------------------------------|
| PadesBasicWithLTV                           | PadesBasic                       |
| PadesBasicWithLTV                           | PadesBasicWithPkiBrazilCerts     |
| PadesBasic                                  | Policy not yet avaliable         |
| PadesT                                      | PadesTWithPkiBrazilCerts         |
| CadesBesWithRevocationValues                | CadesBes                         |
| CadesBes                                    | CadesBesWithSigningTimeAndNoCrls |
| CadesT                                      | Policy not yet avaliable         |
| PkiBrazilCadesAdrBasicaWithRevocationValues | PkiBrazilAdrBasica               |
| PkiBrazilCadesAdrBasica                     | Policy not yet avaliable         |
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
> The desired policy is not yet avaliable in REST PKI? [Contact us](https://www.lacunasoftware.com/en/home/purchase).