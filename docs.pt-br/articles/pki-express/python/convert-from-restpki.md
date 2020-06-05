# Como converter do REST PKI para o PKI Express em Python
Este artigo explica as alterações necessárias para converter uma aplicação Python utilizando [REST PKI](../../rest-pki/index.md) para uma aplicação Python que utilize [PKI Express](../index.md).

## Equivalência de políticas
Ao migrar sua aplicação Python que utiliza o PKI Express para utilizar o REST PKI, é importante se atentar aos nomes das políticas usadas na aplicação.  
Na tabela a seguir, é possível encontrar as equivalências entre os nomes das políticas em ambas bibliotecas. Na primeira coluna temos os nomes das políticas na biblioteca PKI Express, e na segunda coluna temos os nomes das mesmas políticas só que na biblioteca REST PKI.

| REST PKI                                | PKI Express                                       |
|-----------------------------------------|---------------------------------------------------|
| PADES_BASIC                             | PADES_BASIC_WITH_LTV                              |
| PADES_BASIC_WITH_PKI_BRAZIL_CERTS       | PADES_BASIC_WITH_LTV                              |
| PADES_T_WITH_PKI_BRAZIL_CERTS           | PADES_T                                           |
| PKI_BRAZIL_PADES_ADR_BASICA             | PKI_BRAZIL_PADES_ADR_BASICA_WITH_LTV              |
| PKI_BRAZIL_PADES_ADR_TEMPO              | PKI_BRAZIL_PADES_ADR_TEMPO                        |
| CADES_BES                               | CADES_BES_WITH_REVOCATION_VALUES                  |
| CADES_BES_WITH_SIGNING_TIME_AND_NO_CRLS | CADES_BES                                         |
| PKI_BRAZIL_CADES_ADR_BASICA             | PKI_BRAZIL_CADES_ADR_BASICA_WITH_REVOCATION_VALUE |
| PKI_BRAZIL_CADES_ADR_TEMPO              | PKI_BRAZIL_CADES_ADR_TEMPO                        |
| PKI_BRAZIL_CADES_ADR_COMPLETA           | PKI_BRAZIL_CADES_ADR_COMPLETA                     |
| XADES_BES                               | XADES_BES                                         |
| XML_DSIG_BASIC                          | XML_DSIG_BASIC                                    |
| PKI_BRAZIL_XADES_ADR_BASICA             | PKI_BRAZIL_XML_ADR_BASICA                         |
| PKI_BRAZIL_XADES_ADR_TEMPO              | PKI_BRAZIL_XML_ADR_TEMPO                          |
| NFE_PADRAO_NACIONAL                     | NFE_PADRAO_NACIONAL                               |