# Como converter do PKI Express para o REST PKI em PHP
Este artigo explica as alterações necessárias para converter uma aplicação PHP utilizando [PKI Express](../../pki-express/index.md) para uma aplicação PHP que utilize [REST PKI](../index.md).

## Equivalência de políticas
Ao migrar sua aplicação PHP que utiliza o PKI Express para utilizar o REST PKI, é importante se atentar aos nomes das políticas usadas na aplicação.  
Na tabela a seguir, é possível encontrar as equivalências entre os nomes das políticas em ambas bibliotecas. Na primeira coluna temos os nomes das políticas na biblioteca PKI Express, e na segunda coluna temos os nomes das mesmas políticas só que na biblioteca REST PKI.

| PKI Express                                        | REST PKI                                |
|----------------------------------------------------|-----------------------------------------|
| PKI_BRAZIL_CADES_ADR_BASICA                        | CADES_ICPBR_ADR_BASICA_WITHOUT_CRLS     |
| PKI_BRAZIL_CADES_ADR_BASICA_WITH_REVOCATION_VALUES | CADES_ICPBR_ADR_BASICA                  |
| PKI_BRAZIL_CADES_ADR_TEMPO                         | CADES_ICPBR_ADR_TEMPO                   |
| PKI_BRAZIL_CADES_ADR_COMPLETA                      | CADES_ICPBR_ADR_COMPLETA                |
| CADES_BES                                          | CADES_BES_WITH_SIGNING_TIME_AND_NO_CRLS |
| CADES_BES_WITH_REVOCATION_VALUES                   | CADES_BES                               |
| CADES_T                                            | Política ainda não existente            |
| PADES_BASIC                                        | PADES_BASIC_WITHOUT_LTV                 |
| PADES_BASIC_WITH_LTV                               | PADES_BASIC                             |
| PADES_BASIC_WITH_LTV                               | PADES_BASIC_WITH_ICPBR_CERTS            |
| PADES_T                                            | PADES_T_WITH_ICPBR_CERTS                |
| NFE_PADRAO_NACIONAL                                | XML_ICPBR_NFE_PADRAO_NACIONAL           |
| XADES_BES                                          | XML_XADES_BES                           |
| XML_DSIG_BASIC                                     | XML_DSIG_BASIC                          |
| PKI_BRAZIL_XML_ADR_BASICA                          | XML_ICPBR_ADR_BASICA                    |
| PKI_BRAZIL_XML_ADR_TEMPO                           | XML_ICPBR_ADR_TEMPO                     |

> [!NOTE]
> A política desejada ainda não existe no REST PKI? [Fale com a gente](https://www.lacunasoftware.com/pt/home/purchase).