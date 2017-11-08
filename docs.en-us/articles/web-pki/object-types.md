# WebPKI Object Types

This article contains the reference of all javascript objects used by the WebPKI

<a name="cert-model" />
## CertificateModel
An object model of the available certificate with the parameters below.
Name            | Type                                | Description
--------------- | ----------------------------------- | ----------------------------------------------------------------
`subjectName`   | String                              | The Common Name (CN) part of the certificate's subject name field
`issuerName`    | String                              | The Common Name (CN) part of the certificate's issuer name field
`email`         | String                              | The subject email address.
`thumbprint`    | String                              | The SHA-256 thumbprint (Base64-encoded) of the certificate's DER encoding. Used to reference the certificate on subsequent calls.
`keyUsage`      | [KeyUsagesModel](#key-usages-model) | Object with boolean properties indicating wether each possible key usage is set on the certificate (see table below)
`pkiBrazil`     | [PkiBrazilModel](#pki-brazil-model) | Object with Brazil-specific fields (see table below)
`pkiItaly`      | [PkiItalyModel](#pki-italy-model)   | Object with Italy-specific fields (see table below)
`validityStart` | Date                                | The *not before* field of the certificate
`validityEnd`   | Date                                | The *not after* field of the certificate

<a name="key-usages-model" />
## KeyUsagesModel

Name               | Type
------------------ | -------
`crlSign`          | Boolean
`dataEncipherment` | Boolean
`decipherOnly`     | Boolean
`digitalSignature` | Boolean
`encipherOnly`     | Boolean
`keyAgreement`     | Boolean
`keyCertSign`      | Boolean
`keyEncipherment`  | Boolean
`nonRepudiation`   | Boolean

<a name="pki-brazil-model" />
## PkiBrazilModel

Name               | Type    | Description
------------------ | ------- | ----------------------------------------------------------------
`cpf`              | String  | Certificate holder's CPF (*CPF do titular/responsável*)
`cnpj`             | String  | Company's CNPJ
`responsavel`      | String  | Name of the certificate's holder (*nome do titular/responsável*)
`dateOfBirth`      | Date    | Date of birth of the certificate's holder (time as midnight in the current machine's time zone)
`certificateType`  | String  | The ICP-Brasil certificate type (possible values are "A1", "A2", "A3", "A4", "S1", "S2", "S3", "S4", "T3", "T4" and "Unknown")
`isAplicacao`      | Boolean | Whether the certificate is an application certificate
`isPessoaFisica`   | Boolean | Whether the certificate is a personal certificate (*pessoa física*)
`isPessoaJuridica` | Boolean | Whether the certificate is a company certificate (*pessoa jurídica*)
`companyName`      | String  | The responsible company name if it is an ICP-Brasil application certificate. The subject's common name without end id numbers if it is an ICP-Brasil company certificate. Null otherwise.
`nis`              | String  | The certificate holder's "Número de Identificação Social - NIS (PIS, PASEP ou CI)". Returns value without leading zeroes. Returns null if information is not present.
`rgNumero`         | String  | Certificate holder's ID number (*número do RG do titular/responsável*) without leading zeroes
`rgEmissor`        | String  | Issuing entity of the certificate holder's ID (órgão emissor do RG do titular/responsável)
`rgEmissorUF`      | String  | State code of the issuing entity of the certificate holder's ID (*UF do órgão emissor do RG do titular/responsável*)
`oabNumero`        | String  | OAB's *Número de Inscrição junto a Seccional* (without leading zeroes)
`oabUF`            | String  | OAB's *sigla do Estado da Seccional*

> [!NOTE]
> Each property on the `PkiBrazilModel` object may be null, but the object itself (`cert.pkiBrazil`) is never null.

<a name="pki-italy-model" />
## PkiItalyModel

Name            | Type   | Description
--------------- | ------ | --------------------------
`codiceFiscale` | String | Subject's *codice fiscale*

> [!NOTE]
> Each property on the `PkiItalyModel` object may be null, but the object itself (`cert.pkiItaly`) is never null.

---

<a name="init-args" />
## InitArgs
An object passed to the [init](lacunawebpki.md#init) method with the parameters below.

Name           | Type         | Note     | Description 
---------------|--------------|----------|-------------
`ready`        | Function     |          | A function to be called when the component is ready to be used. The function receives no arguments.
`notInstalled` | Function     | optional | A function to be called if the component's installation is not OK (component not installed, outdated or user is using an unsupported browser). Refer to examples below for the exact function signature. If no callback is given, the user is automatically redirected to the installation website and will be redirected back once the installation is completed. If you do pass a callback to override the default behavior, use the [redirectToInstallPage](lacunawebpki.md#redirect-to-install-page) method to redirect the user to the installation page whenever you think it's convenient.
`defaultError` | Function     | obsolet  | Use `defaultFail` instead.
`defaultFail`  | FailFunction | optional | The default callback to be called when an error occurrs (please refer to [fail specification](promise.md#fail) for details).
`angularScope` | Object       | optional | If your webpage uses AngularJS, you can pass here a reference to your $scope, which will then be used to call the callback functions properly, relieving you of doing a "$scope.$apply(function() { ... });" on every callback. The calls are actually wrapped around a "safe $apply", as described in https://coderwall.com/p/ngisma/safe-apply-in-angular-js.
`license`      | Object       | optional | The license for the component, if not already set when instantiating the object.

---

<a name="sign-data-args" />
## SignDataArgs
An object passed to the [signData](lacunawebpki.md#sign-data) method with the following options

 Name              | Type   | Description 
-------------------|--------|-------------
`thumbprint`      | String | The thumbprint of the certificate to be used, as yielded by the method [listCertificates](lacunawebpki.md#list-certificates).
`data`            | String | The bytes to be signed, encoded in Base64 string.
`digestAlgorithm` | String | The name or OID of the digest algorithm to be used to compute the hash of the bytes during the signature operation. Common values for this parameter are `'SHA-256'` or `'SHA-1'`. The forms `'SHA256'`, `'sha256'`, `'sha 256'`, `'sha-256'` will also work.

---

<a name="sign-hash-args" />
## SignHashArgs
An object passed to the [signHash](lacunawebpki.md#sign-hash) method with the following options

Name              | Type   | Description 
------------------|--------|-------------
`thumbprint`      | String | The thumbprint of the certificate to be used, as yielded by the method [listCertificates](lacunawebpki.md#list-certificates).
`hash`            | String | The pre-computed digest value to be signed, encoded in Base64.
`digestAlgorithm` | String | The name or OID of the digest algorithm to be used to compute the hash of the bytes during the signature operation. Common values for this parameter are `'SHA-256'` or `'SHA-1'`. The forms `'SHA256'`, `'sha256'`, `'sha 256'`, `'sha-256'` will also work.

---

<a name="pre-auth-args" />
## PreAuthorizeArgs
An object passed to the [preauthorizeSignatures](lacunawebpki.md#pre-auth) method with the following options

Name                    | Type   | Description
------------------------|--------|------------
`certificateThumbprint` | String | The thumbprint of the certificate to be used, as yielded by the method [listCertificates](lacunawebpki.md#list-certificates).
`signatureCount`        | Number | The batch signature count intended

---

<a name="sign-pdf-args" />
## SignPdfArgs
An object passed to the [signPdf](lacunawebpki.md#sign-pdf) method with the following options

Name                          | Type                                                                | Note     | Description
------------------------------|---------------------------------------------------------------------|----------|------------
`fileId`                      | String                                                              |          | The selected PDF to sign file Id returned by method [showFileBrowser](lacunawebpki.md#show-file-browser).
`certificateThumbprint`       | String                                                              |          | The thumbprint of the certificate to be used, as yielded by the method [listCertificates](lacunawebpki.md#list-certificates).
`output`                      | [Output](object-types.md#output-object)                             |          | The signature file output options.
`trustArbitrators`            | Array of [TrustArbitrator](object-types.md#trust-arbitrator)        |          | 
`clearPolicyTrustArbitrators` | Boolean                                                             | optional | Whether or not to clear any signature policy default trust arbitrator.
`visualRepresentation`        | [VisualRepresentation](object-types.md#visual-representation)       | optional | 
`pdfMarks`                    | Array of [PdfMark](object-types.md#pdf-mark)                        | optional | 
`bypassMarksIfSigned`         | Boolean                                                             | optional | Whether or not to ignore marks if PDF alredy signed. If signed PDF and `false` will throw exception. Applying marks on a signed PDF would invalidate the previous signatures
`policy`                      | String                                                              |          | The signature policy to use. Can be ('Basic').

<a name="output-object" />
## Output
An object with the following parameters

Name             | String | Description
-----------------|--------|------------
`mode`           | String | The signed file output mode ('ShowSaveFileDialog', 'SaveInFolder', 'AutoSave').
`folderId`       | String | The destination folder Id returned by [showFolderBrowser](lacunawebpki.md#show-folder-browser) method (case `mode` is 'SaveInFolder').
`fileNameSuffix` | String | The suffix for saved signed file name.
`dialogTitle`    | String | The save dialog title (case `mode` is 'ShowSaveFileDialog').

---

<a name="trust-arbitrator" />
## TrustArbitrator
An object with the following parameters

Name                 | Type   | Description
---------------------|--------|------------
`type`               | String | The trust arbitrator type ('TrustedRoot', 'Tsl', 'Standard').
`standardArbitrator` | String | A standard trust arbitrator. Used case `type` is 'Standard'. Can be ('PkiBrazil', 'PkiItaly', 'PkiPeru', 'Windows').
`trustedRoot`        | String | The base64 encoded content of root X509 certificate to trust. Used case `type` is 'TrustedRoot'.
`tslUrl`             | String | The TSL (Trust Service List) URL. Used case `type` is 'Tsl'.
`tslRoot`            | String | The base64 encoded content of TSL (Trust Service List) signer's root X509 certificate. Used case `type` is 'Tsl'.

---

<a name="visual-representation" />
## VisualRepresentation

Name                     | Type                                                       | Description
-------------------------|----------------------------------------------------------- |------------
`text`                   | [PadesVisualText](object-types.md#pades-visual-text)       |
`image`                  | [PadesVisualImage](object-types.md#pades-visual-image)     |
`position`               | [PadesVisualPositioning](object-types.md#pades-visual-pos) |

<a name="pades-visual-text" />
## PadesVisualText
Name                     | Type                                                      | Description
-------------------------|-----------------------------------------------------------|------------
`text`                   | String                                                    |
`includeSigningTime`     | Boolean                                                   |
`container`              | [PadesVisualRectangle](object-types.md#pades-visual-rect) |
`horizontalAlign`        | String                                                    | Can be ('Left', 'Right').
`fontSize`               | Number                                                    |

<a name="pades-visual-image" />
## PadesVisualImage
Name                     | Type                                                             | Description
-------------------------|------------------------------------------------------------------|------------
`resource`               | [ResourceContentOrReference](object-types.md#res-content-or-ref) |
`opacity`                | Number                                                           | Default is 100, opaque.
`horizontalAlign`        | String                                                           | Can be ('Left', 'Center', 'Right').
`verticalAlign`          | String                                                           | Can be ('Top', 'Center', 'Bottom').

<a name="pades-visual-pos" />
## PadesVisualPositioning
Name                     | Type                                                                | Description
-------------------------|---------------------------------------------------------------------|------------
`pageNumber`             | Number                                                              | Page on which to insert the visual representation. Negative values denote pages counted from the end of the document (-1 means last page). Zero denotes that, if no signatures are present, a new page should be appended to the document.
`measurementUnits`       | String                                                              | The measurement units to be used in the positioning values. Can be ('Centimeters', 'PdfPoints').
`pageOptimization`       | Object                                                              | Use only in case your document page is not any of the standard page sizes (A0, A1, A3, A4, A5, A6, A7, A8, Letter, Legal or Ledger.
`auto`                   | [PadesVisualAutoPositioning](object-types.md#pades-visual-auto-pos) | To create an auto positioning signature visual representation.
`manual`                 | [PadesVisualRectangle](object-types.md#pades-visual-rect)           | To create an manual positioning signature visual representation in the passed rectangle.

<a name="res-content-or-ref" />
## ResourceContentOrReference
Name                     | Type   | Description
-------------------------|--------|------------
`url`                    | String | Resource URL if is an online resource.
`content`                | String | Base64 encoded content if is a local resource.
`mimeType`               | String | Resource mimetype.

<a name="pades-visual-rect" />
## PadesVisualRectangle
Name                     | Type   
-------------------------|-------
`bottom`                 | Number
`top`                    | Number
`left`                   | Number
`right`                  | Number
`width`                  | Number
`height`                 | Number

<a name="pades-visual-auto-pos" />
## PadesVisualAutoPositioning
Name                     | Type                                                      | Description
-------------------------|-----------------------------------------------------------|------------
`container`              | [PadesVisualRectangle](object-types.md#pades-visual-rect) | The container to auto place the signatures visual representations in.
`signatureRectangleSize` | [PadesSize](object-types.md#pades-size)                   |
`rowSpacing`             | Number                                                    | The space between visual representation rows.

<a name="pades-size" />
## PadesSize
Name                     | Type   | Description
-------------------------|--------|------------
`width`                  | Number | Signature visual representation rectangle width.
`height`                 | Number | Signature visual representation rectangle height.

---

<a name="pdf-mark" />
## PdfMark
Name                | Type                                                        | Description
--------------------|-------------------------------------------------------------|------------
`measurementUnits`  | String                                                      | The measurement units to be used in the positioning values. Can be ('Centimeters', 'PdfPoints').
`container`         | PadesVisualRectangle                                        | The mark content container.
`borderWidth`       | Number                                                      | The container border width.
`backgroundColor`   | String                                                      | The color of container background. If not set, default is transparent. Can be in the formats '#ff00ff', 'rgb(255, 0, 255)', 'rgba(255, 0, 255, 0.8)'.
`borderColor`       | String                                                      | The color of container border. If not set, default is transparent. Can be in the formats '#ff00ff', 'rgb(255, 0, 255)', 'rgba(255, 0, 255, 0.8)'.
`pageOptimization`  | Object                                                      |
`elements`          | Array of [PdfMarkElement](object-types.md#pdf-mark-element) |

<a name="pdf-mark-element" />
## PdfMarkElement
Name                | Type                                                      | Description
--------------------|-----------------------------------------------------------|------------
`elementType`       | String                                                    | Element Type. Can be 'text', 'image'.
`relativeContainer` | [PadesVisualRectangle](object-types.md#pades-visual-rect) |
`rotation`          | Number                                                    |
`textSections`      | [PdfTextSection](object-types.md#pdf-text-section)        |
`image`             | [PdfMarkImage](object-types.md#pdf-mark-image)            |

<a name="pdf-text-section" />
## PdfTextSection
Name                | Type    | Description
--------------------|---------|-----------------------------
`style`             | Number  | 
`text`              | String  | 
`color`             | String  | The text color. If not set, default is BLACK. Can be in the formats '#ff00ff', 'rgb(255, 0, 255)', 'rgba(255, 0, 255, 0.8)'.
`fontSize`          | Number  | 

<a name="pdf-mark-image" />
## PdfMarkImage
Name                | Type                                                             | Description
--------------------|------------------------------------------------------------------|------------
`opacity`           | Number                                                           | Default is 100, opaque.
`resource`          | [ResourceContentOrReference](object-types.md#res-content-or-ref) |

---

<a name="pdf-sign-result" />
## PdfSignResult
An object with the following parameters

Name                                  | Type                                                    | Description
--------------------------------------|---------------------------------------------------------|---------------------------------
`isValid`                             | Boolean                                                 | Whether or not the signature was completed successfuly. If false, the `signingCertificateValidationResults` will have the failure results.
`pagesCount`                          | Number                                                  | The signed PDF number of pages
`signatureInfo`                       | [SignatureInfo](object-types.md#signature-info)         | 
`signingCertificateValidationResults` | [ValidationResults](object-types.md#validation-results) | 

<a name="signature-info" />
## SignatureInfo
An object with the following parameters

Name                | Type                                           | Description
--------------------|------------------------------------------------|-----------------
`signerCertificate` | [CertificateModel](object-types.md#cert-model) | The signer certificate model.
`messageDigest`     | [DigestModel](object-types.md#digest-model)    | The message digest.
`file`              | [FileModel](object-types.md#file-model)        | The signature file information.
`signingTime`       | Date                                           | The signing date time.

<a name="digest-model" />
## DigestModel
An object with the following parameters

Name                  | Type   | Description
----------------------|--------|---------------------------------
`digestAlgorithmOid`  | String | The digest algorithm OID.
`digestAlgorithmName` | String | The digest algorithm name.
`digestValue`         | String | The digest valeu Base64 encoded.

<a name="file-model" />
## FileModel
An object with the following parameters

Name     | Type   | Description
---------|--------|----------------------
`id`     | String | The id that represents the file.
`name`   | String | The file name (with extension).
`length` | Number | The file length in bytes.

> [!NOTE]
> The file is identified by Id, not by path, the files path are never exposed to the page javascript, to comply to user privacy policies of browsers.

<a name="validation-results" />
## ValidationResults
An object with the following parameters

Name           | Type           | Description
---------------|----------------|------------------
`passedChecks` | [ValidationItem](object-types.md#validation-item) | Success validations.
`warnings`     | [ValidationItem](object-types.md#validation-item) | Validation warnings.
`errors`       | [ValidationItem](object-types.md#validation-item) | Validation errors.

<a name="validation-item" />
## ValidationItem
An object with the following parameters

Name                     | Type                                                    | Description
-------------------------|---------------------------------------------------------|------------
`type`                   | String                                                  | Validation item type.
`message`                | String                                                  | Validation message.
`detail`                 | String                                                  | Validation details.
`innerValidationResults` | [ValidationResults](object-types.md#validation-results) | Inner validations results.

---

<a name="sign-cades-args" />
## SignCadesArgs
An object passed to the [signCades](lacunawebpki.md#sign-cades) method with the following options

Name                          | Type                                                         | Note     | Description
------------------------------|--------------------------------------------------------------|----------|------------
`fileId`                      | String                                                       |          | The selected file to sign Id returned by method [showFileBrowser](lacunawebpki.md#show-file-browser).
`certificateThumbprint`       | String                                                       |          | The thumbprint of the certificate to be used, as yielded by the method [listCertificates](lacunawebpki.md#list-certificates).
`output`                      | [Output](object-types.md#output-object)                      |          | The signature file output options.
`trustArbitrators`            | Array of [TrustArbitrator](object-types.md#trust-arbitrator) |          | 
`clearPolicyTrustArbitrators` | Boolean                                                      | optional | Whether or not to clear any signature policy default trust arbitrator.
`cmsToCosignFileId`           | String                                                       | optional | A CAdES signature file Id to co-sign. If the signature does not have an encapsulated content (detached), the original signed file must also be passed by the `fileId`.
`autoDetectCosign`            | Boolean                                                      | optional | Whether or not to auto detect if the `fileId` is a CAdES signature to co-sign. If `true`, the CAdES signature file Id to co-sign can be passed directly to `fileId`. Only works if the CAdES signature to co-sign has an encapsulated content (attached).
`includeEncapsulatedContent`  | Boolean                                                      | optional | Whether or not to inlcude the encpasulated content (attached) in the CAdES signature file. If not set, the default is `true`.
`policy`                      | String                                                       |          | The signature policy to use. Can be ('CadesBes', 'BrazilAdrBasica').

---

<a name="cades-sign-result" />
## CadesSignResult
An object with the following parameters

Name                                  | Type                                                    | Description
--------------------------------------|---------------------------------------------------------|---------------------------------
`isValid`                             | Boolean                                                 | Whether or not the signature was completed successfuly. If false, the `signingCertificateValidationResults` will have the failure results.
`signatureInfo`                       | [SignatureInfo](object-types.md#signature-info)         | 
`signingCertificateValidationResults` | [ValidationResults](object-types.md#validation-results) | 

---

<a name="sig-algorithm" />
## SignatureAlgorithm

Name                     | Type   | Description
-------------------------|--------|------------
`signatureValue`         | String | The Base64 encoded signature value bytes
`signatureAlgorithmOid`  | String | The signature algorithm OID
`signatureAlgorithmName` | String | The signature algorithm name
`digestAlgorithmOid`     | String | The digest algorithm OID
`digestAlgorithmName`    | String | The digest algorithm name

---

<a name="sig-pol-id" />
## SignaturePolicyIdentifier

Name     | Type                                        | Description
---------|---------------------------------------------|------------
`digest` | [DigestModel](object-types.md#digest-model) | The signature policy digest
`oid`    | String                                      | The signature policy OID
`uri`    | String                                      | The signature policy URI

---

<a name="cades-signature" />
## CadesSignature
Name                      | Type                                                 | Description
--------------------------|------------------------------------------------------|------------
`encapsulatedContentType` | String                                               | The encapsulated content type. It can be (Data | SignedData | EnvelopedData | DigestedData | EncryptedData | AuthenticatedData | TstInfo)
`hasEncapsulatedContent`  | Boolean                                              | If there is an encapsulated content attached in the CAdES signature
`signers`                 | Array of [CadesSigner](object-types.md#cades-signer) |

<a name="cades-signer" />
## CadesSigner
Name                     | Type                                                       | Description
-------------------------|------------------------------------------------------------|------------
`messageDigest`          | [DigestModel](object-types.md#digest-model)                | 
`signature`              | [SignatureAlgorithm](object-types.md#sig-algorithm)        | 
`signaturePolicy`        | [SignaturePolicyIdentifier](object-types.md#sig-pol-id)    | 
`certificate`            | [CertificateModel](object-types.md#cert-model)             | 
`signingTime`            | String                                                     | The signing time. Can be null or empty case does not have it.
`certifiedDateReference` | String                                                     | 
`timestamps`             | Array of [CadesTimestamp](object-types.md#cades-timestamp) |
`isValid`                | Boolean                                                    | 
`validationResults`      | [ValidationResults](object-types.md#validation-results)    | 

<a name="cades-timestamp" />
## CadesTimestamp
Name                      | Type                                                 | Description
--------------------------|------------------------------------------------------|------------
`encapsulatedContentType` | String                                               | The encapsulated content type. It can be (Data | SignedData | EnvelopedData | DigestedData | EncryptedData | AuthenticatedData | TstInfo)
`hasEncapsulatedContent`  | Boolean                                              | If there is an encapsulated content attached in the CAdES signature
`signers`                 | Array of [CadesSigner](object-types.md#cades-signer) | 
`genTime`                 | String                                               | The timestamp generation time
`serialNumber`            | String                                               | The timestamp serialnumber
`messageImprint`          | [DigestModel](object-types.md#digest-model)          | The timestampes message imprint

---

<a name="pades-signature" />
## PadesSignature
Name      | Type                                                 | Description
----------|------------------------------------------------------|------------
`signers` | Array of [PadesSigner](object-types.md#pades-signer) |

<a name="pades-signer" />
## PadesSigner
Name                     | Type                                                       | Description
-------------------------|------------------------------------------------------------|------------
`isDocumentTimestamp`    | Boolean                                                    |                  
`signatureFieldName`     | String                                                     |                  
`messageDigest`          | [DigestModel](object-types.md#digest-model)                |                   
`signature`              | [SignatureAlgorithm](object-types.md#sig-algorithm)        |       
`signaturePolicy`        | [SignaturePolicyIdentifier](object-types.md#sig-pol-id)    |
`certificate`            | [CertificateModel](object-types.md#cert-model)             |              
`signingTime`            | String                                                     | The signing time. Can be null or empty case does not have it.
`certifiedDateReference` | String                                                     |                   
`timestamps`             | Array of [CadesTimestamp](object-types.md#cades-timestamp) |
`isValid`                | Boolean                                                    |                  
`validationResults`      | [ValidationResults](object-types.md#validation-results)    |        
