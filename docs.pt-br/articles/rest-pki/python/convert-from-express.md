# Como converter do PKI Express para o REST PKI em Python
Este artigo explica as alterações necessárias para converter do [PKI Express](../../pki-express/index.md) para o [REST PKI](../index.md) em Python.

## Equivalência de políticas

| PKI Express                                       | REST PKI                                |
|---------------------------------------------------|-----------------------------------------|
| PADES_BASIC_WITH_LTV                              | PADES_BASIC                             |
| PADES_BASIC_WITH_LTV                              | PADES_BASIC_WITH_PKI_BRAZIL_CERTS       |
| PADES_BASIC                                       | Política ainda não existente            |
| PADES_T                                           | PADES_T_WITH_PKI_BRAZIL_CERTS           |
| PKI_BRAZIL_PADES_ADR_BASICA_WITH_LTV              | PKI_BRAZIL_PADES_ADR_BASICA             |
| PKI_BRAZIL_PADES_ADR_BASICA                       | Política ainda não existente            |
| PKI_BRAZIL_PADES_ADR_TEMPO                        | PKI_BRAZIL_PADES_ADR_TEMPO              |
| CADES_BES_WITH_REVOCATION_VALUES                  | CADES_BES                               |
| CADES_BES                                         | CADES_BES_WITH_SIGNING_TIME_AND_NO_CRLS |
| CADES_T                                           | Política ainda não existente            |
| PKI_BRAZIL_CADES_ADR_BASICA_WITH_REVOCATION_VALUE | PKI_BRAZIL_CADES_ADR_BASICA             |
| PKI_BRAZIL_CADES_ADR_BASICA                       | Política ainda não existente            |
| PKI_BRAZIL_CADES_ADR_TEMPO                        | PKI_BRAZIL_CADES_ADR_TEMPO              |
| PKI_BRAZIL_CADES_ADR_COMPLETA                     | PKI_BRAZIL_CADES_ADR_COMPLETA           |
| XADES_BES                                         | XADES_BES                               |
| XML_DSIG_BASIC                                    | XML_DSIG_BASIC                          |
| PKI_BRAZIL_XML_ADR_BASICA                         | PKI_BRAZIL_XADES_ADR_BASICA             |
| PKI_BRAZIL_XML_ADR_TEMPO                          | PKI_BRAZIL_XADES_ADR_TEMPO              |
| NFE_PADRAO_NACIONAL                               | NFE_PADRAO_NACIONAL                     |
| COD_WITH_SHA1                                     | Política ainda não existente            |
| COD_WITH_SHA256                                   | Política ainda não existente            |