# How to convert from REST PKI to PKI Express in Python
This articles explains the modifications necessary to convert a Python application using [REST PKI](../../rest-pki/index.md) to a Python application using [PKI Express](../index.md).

## Policies Equivalence
When converting your Python application from using REST PKI to PKI Express, you must pay atention to the policy names used in the application.  
The following table shows the equivalence in policy names between REST PKI (1st column) and PKI Express (2nd column). 

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