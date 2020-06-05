# Como converter do PKI Express para o REST PKI em Ruby
Este artigo explica as alterações necessárias para converter do [PKI Express](../../pki-express/index.md) para o [REST PKI](../index.md) em Ruby.

## Equivalência de políticas

| PKI Express                                       | REST PKI                      |
|---------------------------------------------------|-------------------------------|
| PADES_BASIC_WITH_LTV                              | PADES_BASIC                   |
| PADES_BASIC_WITH_LTV                              | PADES_BASIC_WITH_ICPBR_CERTS  |
| PADES_BASIC                                       | Política ainda não existente  |
| PADES_T                                           | PADES_T_WITH_ICPBR_CERTS      |
| PKI_BRAZIL_PADES_ADR_BASICA_WITH_LTV              | Política ainda não existente  |
| PKI_BRAZIL_PADES_ADR_BASICA                       | Política ainda não existente  |
| PKI_BRAZIL_PADES_ADR_TEMPO                        | Política ainda não existente  |
| CADES_BES_WITH_REVOCATION_VALUES                  | CADES_BES                     |
| CADES_BES                                         | Política ainda não existente  |
| CADES_T                                           | Política ainda não existente  |
| PKI_BRAZIL_CADES_ADR_BASICA_WITH_REVOCATION_VALUE | CADES_ICPBR_ADR_BASICA        |
| PKI_BRAZIL_CADES_ADR_BASICA                       | Política ainda não existente  |
| PKI_BRAZIL_CADES_ADR_TEMPO                        | CADES_ICPBR_ADR_TEMPO         |
| PKI_BRAZIL_CADES_ADR_COMPLETA                     | CADES_ICPBR_ADR_COMPLETA      |
| XADES_BES                                         | XML_XADES_BES                 |
| XML_DSIG_BASIC                                    | XML_DSIG_BASIC                |
| PKI_BRAZIL_XML_ADR_BASIC                          | XML_ICPBR_ADR_BASICA          |
| PKI_BRAZIL_XML_ADR_TEMPO                          | XML_ICPBR_ADR_TEMPO           |
| NFE_PADRAO_NACIONAL                               | XML_ICPBR_NFE_PADRAO_NACIONAL |
| COD_WITH_SHA1                                     | Política ainda não existente  |
| COD_WITH_SHA256                                   | Política ainda não existente  |