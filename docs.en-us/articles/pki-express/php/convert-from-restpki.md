# How to convert from REST PKI to PKI Express in PHP
This articles explains the modifications necessary to convert a PHP application using [REST PKI](../../rest-pki/index.md) to a PHP application using [PKI Express](../index.md).

## Policies Equivalence
When converting your PHP application from using REST PKI to PKI Express, you must pay atention to the policy names used in the application.  
The following table shows the equivalence in policy names between REST PKI (1st column) and PKI Express (2nd column). 

| REST PKI                                | PKI Express                                                             |
|-----------------------------------------|-------------------------------------------------------------------------|
| PADES_BASIC                             | PADES_BASIC_WITH_LTV                                                    |
| PADES_BASIC_WITH_ICPBR_CERTS            | PADES_BASIC_WITH_LTV                                                    |
| PADES_BASIC_WITHOUT_LTV                 | PADES_BASIC                                                             |
| PADES_T_WITH_ICPBR_CERTS                | PADES_T                                                                 |
| PADES_ICPBR_ADR_BASICA                  | Policy not yet avaliable (the equivalent constant would be "adrb-ltv")  |
| PADES_ICPBR_ADR_TEMPO                   | Policy not yet avaliable (the equivalent constant would be "adrt")      |
| PADES_ADOBE_READER                      | Policy not yet avaliable                                                |
| CADES_BES                               | CADES_BES_WITH_REVOCATION_VALUES                                        |
| CADES_BES_WITH_SIGNING_TIME_AND_NO_CRLS | CADES_BES                                                               |
| CADES_ICPBR_ADR_BASICA_WITHOUT_CRLS     | PKI_BRAZIL_CADES_ADR_BASICA                                             |
| CADES_ICPBR_ADR_BASICA                  | PKI_BRAZIL_CADES_ADR_BASICA_WITH_REVOCATION_VALUES                      |
| CADES_ICPBR_ADR_TEMPO                   | PKI_BRAZIL_CADES_ADR_TEMPO                                              |
| CADES_ICPBR_ADR_COMPLETA                | PKI_BRAZIL_CADES_ADR_COMPLETA                                           |
| XML_XADES_BES                           | XADES_BES                                                               |
| XML_DSIG_BASIC                          | XML_DSIG_BASIC                                                          |
| XML_ICPBR_ADR_BASICA                    | PKI_BRAZIL_XML_ADR_BASICA                                               |
| XML_ICPBR_ADR_TEMPO                     | PKI_BRAZIL_XML_ADR_TEMPO                                                |
| XML_ICPBR_NFE_PADRAO_NACIONAL           | NFE_PADRAO_NACIONAL                                                     |
| XML_COD_SHA1                            | Policy not yet avaliable (the equivalent constant would be "cod-sha1")  |
| XML_COD_SHA256                          | Policy not yet avaliable (the equivalent constant would be "cod-sh256") |

> [!WARNING]
> The validation policy PADES_ADOBE_READER does not have an equivalent policy in PKI Express.
