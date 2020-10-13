# Tags da representação visual de assinaturas PAdES

As seguintes tags são suportadas:

Tag               | Valor
----------------- | -----------
`{{name}}`        | Valor mais apropriado para ser utilizado como nome do assinante (mais recomendado para esse propósito do que o `{{subject_cn}}`)
`{{national_id}}` | Valor mais apropriado para ser utilizado como número de identidade nacional do assinante. Para certificados ICP-Brasil, corresponde ao CPF do assinante. Para certificados italianos, corresponde ao *codice fiscale* do assinante.
`{{email}}`       | Endereço de email do assinante
`{{subject_cn}}`  | O campo **Common Name** (CN) do titular (*subject name*) do certificado do signatário
`{{issuer_cn}}`   | O campo **Common Name** (CN) do emissor (*issuer name*) do certificado do signatário

## Tags específicas para certificados ICP-Brasil

Tag                     | Valor
----------------------- | -----------
`{{br_cpf}}`            | CPF do titular (para certificados de PJ, CPF do responsável pelo certificado)
`{{br_cpf_formatted}}`  | Mesmo que `{{br_cpf}}` porém formatado como **000.000.000-00**
`{{br_cnpj}}`           | CNPJ da empresa
`{{br_cnpj_formatted}}` | Mesmo que `{{br_cnpj}}` porém formatado como **00.000.000/0000-00**
`{{br_responsavel}}`    | Nome do titular (para certificados de PJ, nome do responsável pelo certificado)
`{{br_company}}`        | Nome da empresa
`{{br_oab_numero}}`     | Número de Inscrição junto a Seccional da OAB (sem zeros à esquerda)
`{{br_oab_uf}}`         | Sigla do Estado da Seccional da OAB
`{{br_rg_numero}}`      | Número do RG do titular/responsável (sem zeros à esquerda)
`{{br_rg_emissor}}`     | Órgão emissor do RG do titular/responsável
`{{br_rg_uf}}`          | UF do órgão emissor do RG do titular/responsável

## *Aliases*

As seguintes tags são suportadas para manter a retrocompatibilidade:

Tag                    | Tag equivalente
---------------------- | ---------------
`{{signerName}}`       | `{{name}}`
`{{signerEmail}}`      | `{{email}}`
`{{signerNationalId}}` | `{{national_id}}`
`{{issuerCommonName}}` | `{{issuer_cn}}`
`{{br_oab_numbero}}`   | `{{br_oab_numero}}`
