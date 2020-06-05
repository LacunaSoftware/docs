# How to convert from PKI Express to REST PKI in PHP
This articles explains the modifications necessary to convert a PHP application using [PKI Express](../../pki-express/index.md) to a PHP application using [REST PKI](../index.md).

## Policies Equivalence
When converting your PHP application from using PKI Express to REST PKI, you must pay atention to the policy names used in the application.  
The following table shows the equivalence in policy names between PKI Express (1st column) and REST PKI (2nd column). 

| PKI Express                                        | REST PKI                                |
|----------------------------------------------------|-----------------------------------------|
| PKI_BRAZIL_CADES_ADR_BASICA                        | CADES_ICPBR_ADR_BASICA_WITHOUT_CRLS     |
| PKI_BRAZIL_CADES_ADR_BASICA_WITH_REVOCATION_VALUES | CADES_ICPBR_ADR_BASICA                  |
| PKI_BRAZIL_CADES_ADR_TEMPO                         | CADES_ICPBR_ADR_TEMPO                   |
| PKI_BRAZIL_CADES_ADR_COMPLETA                      | CADES_ICPBR_ADR_COMPLETA                |
| CADES_BES                                          | CADES_BES_WITH_SIGNING_TIME_AND_NO_CRLS |
| CADES_BES_WITH_REVOCATION_VALUES                   | CADES_BES                               |
| CADES_T                                            | Policy not yet avaliable                |
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
> The desired policy is not yet avaliable in REST PKI? [Contact us](https://www.lacunasoftware.com/en/home/purchase).