# How to convert from REST PKI to PKI Express in Java
This articles explains the modifications necessary to convert a Java application using [REST PKI](../../rest-pki/index.md) to a Java application using [PKI Express](../index.md).

## Policies Equivalence
When converting your Java application from using REST PKI to PKI Express, you must pay atention to the policy names used in the application.  
The following table shows the equivalence in policy names between REST PKI (1st column) and PKI Express (2nd column). 

| REST PKI                         | PKI Express                                                            |
|----------------------------------|------------------------------------------------------------------------|
| PadesBasic                       | PadesBasicWithLTV                                                      |
| PadesBasicWithPkiBrazilCerts     | PadesBasicWithLTV                                                      |
| PadesTWithPkiBrazilCerts         | PadesT                                                                 |
| PkiBrazilPadesAdrBasica          | Policy not yet avaliable (the equivalent constant would be "adrb-ltv") |
| PkiBrazilPadesAdrTempo           | Policy not yet avaliable (the equivalent constant would be "adrt")     |
| CadesBes                         | CadesBesWithRevocationValues                                           |
| CadesBesWithSigningTimeAndNoCrls | CadesBes                                                               |
| PkiBrazilAdrBasica               | PkiBrazilCadesAdrBasicaWithRevocationValues                            |
| PkiBrazilAdrTempo                | PkiBrazilCadesAdrTempo                                                 |
| PkiBrazilAdrCompleta             | PkiBrazilCadesAdrCompleta                                              |
| XadesBasic                       | XadesBes                                                               |
| XmlDSigBasic                     | XmlDSigBasic                                                           |
| PkiBrazilXadesAdrBasica          | PkiBrazilXadesAdrBasica                                                |
| PkiBrazilXadesAdrTempo           | PkiBrazilXadesAdrTempo                                                 |
| NFePadraoNacional                | NFePadraoNacional                                                      |
| CodSha1                          | CodWithSHA1                                                            |
| CodSha256                        | CodWithSHA256                                                          |