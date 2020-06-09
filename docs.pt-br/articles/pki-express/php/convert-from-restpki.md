# Como converter do REST PKI para o PKI Express em PHP
Este artigo explica as alterações necessárias para converter uma aplicação PHP utilizando [REST PKI](../../rest-pki/index.md) para uma aplicação PHP que utilize [PKI Express](../index.md).

## Equivalência de políticas
Ao migrar sua aplicação PHP que utiliza o PKI Express para utilizar o REST PKI, é importante se atentar aos nomes das políticas usadas na aplicação.  
Na tabela a seguir, é possível encontrar as equivalências entre os nomes das políticas em ambas bibliotecas. Na primeira coluna temos os nomes das políticas na biblioteca PKI Express, e na segunda coluna temos os nomes das mesmas políticas só que na biblioteca REST PKI.

| REST PKI                                | PKI Express                                                              |
|-----------------------------------------|--------------------------------------------------------------------------|
| PADES_BASIC                             | PADES_BASIC_WITH_LTV                                                     |
| PADES_BASIC_WITH_ICPBR_CERTS            | PADES_BASIC_WITH_LTV                                                     |
| PADES_BASIC_WITHOUT_LTV                 | PADES_BASIC                                                              |
| PADES_T_WITH_ICPBR_CERTS                | PADES_T                                                                  |
| PADES_ICPBR_ADR_BASICA                  | Política ainda não existente (a constante equivalente seria "adrb-ltv")  |
| PADES_ICPBR_ADR_TEMPO                   | Política ainda não existente (a constante equivalente seria "adrt")      |
| PADES_ADOBE_READER                      | Política ainda não existente                                             |
| CADES_BES                               | CADES_BES_WITH_REVOCATION_VALUES                                         |
| CADES_BES_WITH_SIGNING_TIME_AND_NO_CRLS | CADES_BES                                                                |
| CADES_ICPBR_ADR_BASICA_WITHOUT_CRLS     | PKI_BRAZIL_CADES_ADR_BASICA                                              |
| CADES_ICPBR_ADR_BASICA                  | PKI_BRAZIL_CADES_ADR_BASICA_WITH_REVOCATION_VALUES                       |
| CADES_ICPBR_ADR_TEMPO                   | PKI_BRAZIL_CADES_ADR_TEMPO                                               |
| CADES_ICPBR_ADR_COMPLETA                | PKI_BRAZIL_CADES_ADR_COMPLETA                                            |
| XML_XADES_BES                           | XADES_BES                                                                |
| XML_DSIG_BASIC                          | XML_DSIG_BASIC                                                           |
| XML_ICPBR_ADR_BASICA                    | PKI_BRAZIL_XML_ADR_BASICA                                                |
| XML_ICPBR_ADR_TEMPO                     | PKI_BRAZIL_XML_ADR_TEMPO                                                 |
| XML_ICPBR_NFE_PADRAO_NACIONAL           | NFE_PADRAO_NACIONAL                                                      |
| XML_COD_SHA1                            | Política ainda não existente (a constante equivalente seria "cod-sha1")  |
| XML_COD_SHA256                          | Política ainda não existente (a constante equivalente seria "cod-sh256") |

> [!WARNING]
> A política de validação PADES_ADOBE_READER não apresenta equivalência no PKI Express.
