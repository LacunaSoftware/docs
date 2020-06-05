# How to convert from PKI Express to REST PKI in Ruby
This articles explains the modifications necessary to convert a Ruby application using [PKI Express](../../pki-express/index.md) to a Ruby application using [REST PKI](../index.md).

## Policies Equivalence
When converting your Ruby application from using PKI Express to REST PKI, you must pay atention to the policy names used in the application.  
The following table shows the equivalence in policy names between PKI Express (1st column) and REST PKI (2nd column). 

| PKI Express                                       | REST PKI                      |
|---------------------------------------------------|-------------------------------|
| PADES_BASIC_WITH_LTV                              | PADES_BASIC                   |
| PADES_BASIC_WITH_LTV                              | PADES_BASIC_WITH_ICPBR_CERTS  |
| PADES_BASIC                                       | Policy not yet avaliable      |
| PADES_T                                           | PADES_T_WITH_ICPBR_CERTS      |
| PKI_BRAZIL_PADES_ADR_BASICA_WITH_LTV              | Policy not yet avaliable      |
| PKI_BRAZIL_PADES_ADR_BASICA                       | Policy not yet avaliable      |
| PKI_BRAZIL_PADES_ADR_TEMPO                        | Policy not yet avaliable      |
| CADES_BES_WITH_REVOCATION_VALUES                  | CADES_BES                     |
| CADES_BES                                         | Policy not yet avaliable      |
| CADES_T                                           | Policy not yet avaliable      |
| PKI_BRAZIL_CADES_ADR_BASICA_WITH_REVOCATION_VALUE | CADES_ICPBR_ADR_BASICA        |
| PKI_BRAZIL_CADES_ADR_BASICA                       | Policy not yet avaliable      |
| PKI_BRAZIL_CADES_ADR_TEMPO                        | CADES_ICPBR_ADR_TEMPO         |
| PKI_BRAZIL_CADES_ADR_COMPLETA                     | CADES_ICPBR_ADR_COMPLETA      |
| XADES_BES                                         | XML_XADES_BES                 |
| XML_DSIG_BASIC                                    | XML_DSIG_BASIC                |
| PKI_BRAZIL_XML_ADR_BASIC                          | XML_ICPBR_ADR_BASICA          |
| PKI_BRAZIL_XML_ADR_TEMPO                          | XML_ICPBR_ADR_TEMPO           |
| NFE_PADRAO_NACIONAL                               | XML_ICPBR_NFE_PADRAO_NACIONAL |
| COD_WITH_SHA1                                     | Policy not yet avaliable      |
| COD_WITH_SHA256                                   | Policy not yet avaliable      |

> [!NOTE]
> The desired policy is not yet avaliable in REST PKI? [Contact us](https://www.lacunasoftware.com/en/home/purchase).