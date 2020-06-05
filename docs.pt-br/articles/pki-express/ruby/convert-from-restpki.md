# Como converter do REST PKI para o PKI Express em Ruby
Este artigo explica as alterações necessárias para converter uma aplicação Ruby utilizando [REST PKI](../../rest-pki/index.md) para uma aplicação Ruby que utilize [PKI Express](../index.md).

## Equivalência de políticas
Ao migrar sua aplicação Ruby que utiliza o PKI Express para utilizar o REST PKI, é importante se atentar aos nomes das políticas usadas na aplicação.  
Na tabela a seguir, é possível encontrar as equivalências entre os nomes das políticas em ambas bibliotecas. Na primeira coluna temos os nomes das políticas na biblioteca PKI Express, e na segunda coluna temos os nomes das mesmas políticas só que na biblioteca REST PKI.

| REST PKI                      | PKI Express                                       |
|-------------------------------|---------------------------------------------------|
| PADES_BASIC                   | PADES_BASIC_WITH_LTV                              |
| PADES_BASIC_WITH_ICPBR_CERTS  | PADES_BASIC_WITH_LTV                              |
| PADES_T_WITH_ICPBR_CERTS      | PADES_T                                           |
| PADES_ICPBR_ADR_BASICA        | PKI_BRAZIL_PADES_ADR_BASICA_WITH_LTV              |
| PADES_ICPBR_ADR_TEMPO         | PKI_BRAZIL_PADES_ADR_TEMPO                        |
| CADES_BES                     | CADES_BES_WITH_REVOCATION_VALUES                  |
| CADES_ICPBR_ADR_BASICA        | PKI_BRAZIL_CADES_ADR_BASICA_WITH_REVOCATION_VALUE |
| CADES_ICPBR_ADR_TEMPO         | PKI_BRAZIL_CADES_ADR_TEMPO                        |
| CADES_ICPBR_ADR_COMPLETA      | PKI_BRAZIL_CADES_ADR_COMPLETA                     |
| XML_XADES_BES                 | XADES_BES                                         |
| XML_DSIG_BASIC                | XML_DSIG_BASIC                                    |
| XML_ICPBR_ADR_BASICA          | PKI_BRAZIL_XML_ADR_BASIC                          |
| XML_ICPBR_ADR_TEMPO           | PKI_BRAZIL_XML_ADR_TEMPO                          |
| XML_ICPBR_NFE_PADRAO_NACIONAL | NFE_PADRAO_NACIONAL                               |