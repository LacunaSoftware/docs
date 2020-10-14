> [!NOTE]
> The above code specifies a container with variable width and height. There are many other possible behaviors for the external container. For more information, see the article [Defining a container](containers.md).

The figure below shows the expected result after signing a document using the above code. 

![PAdES visual representation auto positioning result](../../../../images/pki-sdk/visual-rep-result.png)

## Text and image positioning

* Text

  Inside the visual representation rectangle, the PKI Express supports the customization of text alignment, positioning, and content. A `container` can be defined to set the text position. If none is defined, the text will fill all the rectangle.

  The parameter `horizontalAlign` (`"left"` or `"right"`) sets the text alignment. The parameter `fontSize` sets the font size used on the text of the visual representation.

  The parameter `includeSigningTime` must be `true` to include the signature's date and time in the visual representation. Use the parameter `signingTimeFormat` to customize the data display format.

  The parameter `text` supports tags that the PKI Express will substitute with the certificate's information.

  * Generic Tags:
    Tag               | Value
    ----------------- | -----------
    `{{name}}`        | The best guess for the signer's full name (recommended for this purpose over `{{subject_cn}}`)
    `{{national_id}}` | The best guess for the signer's national ID. For ICP-Brasil certificates, this is resolved to the holder's CPF. For Italian certificates, this is resolved to the holder's *codice fiscale*.
    `{{email}}`       | Signer's email address
    `{{subject_cn}}`  | The Common Name (CN) part of the certificate's subject name field
    `{{issuer_cn}}`   | The Common Name (CN) part of the certificate's issuer name field

  * ICP-Brasil specific tags:
    Tag                     | Value
    ----------------------- | -----------
    `{{br_cpf}}`            | Certificate holder's CPF (*CPF do titular/responsável*)
    `{{br_cpf_formatted}}`  | Same as `{{br_cpf}}` but formatted as **000.000.000-00**
    `{{br_cnpj}}`           | Company's CNPJ
    `{{br_cnpj_formatted}}` | Same as `{{br_cnpj}}` but formatted as **00.000.000/0000-00**
    `{{br_responsavel}}`    | Name of the certificate's holder (*nome do titular/responsável*)
    `{{br_company}}`        | Company name
    `{{br_oab_numero}}`     | OAB's *Número de Inscrição junto a Seccional* (without leading zeroes)
    `{{br_oab_uf}}`         | OAB's *sigla do Estado da Seccional*
    `{{br_rg_numero}}`      | Certificate holder's ID  number (*número do RG do titular/responsável*) without leading zeroes
    `{{br_rg_emissor}}`     | Issuing entity of the certificate holder's ID (órgão emissor do RG do titular/responsável)
    `{{br_rg_uf}}`          | State code of the issuing entity of the certificate holder's ID (*UF do órgão emissor do RG do titular/responsável*)

  * *Tags* supported for backward compatibility:
    Tag                    | Equivalent tag
    ---------------------- | --------------
    `{{signerName}}`       | `{{name}}`
    `{{signerEmail}}`      | `{{email}}`
    `{{signerNationalId}}` | `{{national_id}}`
    `{{issuerCommonName}}` | `{{issuer_cn}}`
    `{{br_oab_numbero}}`   | `{{br_oab_numero}}`

  The code below exemplifies the text positioning withing the visual representation rectangle, as shown in the figure below.

  ![PAdES visual text](../../../../images/pki-sdk/pades-visual-text.png)
