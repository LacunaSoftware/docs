# LacunaWebPKI

This class is used to communicate with the Web PKI component. Although the component is different for each 
browser (in Chrome it consists of both an extension and an application installed on the user's machine, on 
Internet Explorer it is only an add-on), all interfacing with the component is done through this class regardless 
of the user's browser. The gory details of browser-dependant code are hidden by this class.

> [!NOTE]
> Make sure you call the [init](lacunawebpki.md#init) method before you call other methods.

## Contructor
```js
LacunaWebPKI (license)
```

### Parameters

`license` String | Object

The license for the component. May be a string or an object (see examples). In order for the component to work, 
you must set a valid purchased license that matches the URL of the site running the code. The exception is when 
running the code from localhost. In that case, no license is needed, so you can test the component as much as you 
want in development before deciding to license it.

### Examples

Instantiate with a license object

```js
// Here, we use the JSON format of our license. If you don't mind having the details of your license (expiration
// date and allowed domains) in the source code of your page, this option is preferred because it makes it
// easier to diagnose problems such as an expired license.
var license = {
    "format": 1,
    "allowedDomains": [
        "webpki.lacunasoftware.com",
        "jsfiddle.net"
    ],
    "expiration": null,
    "signature": "ClKvO1J22vAD+YmfANiKQLbcLE1lNraPKCel6tRM+ZxR+h6M/crtJYRRVGGz7hrdbM0Y0mfTu15RMYGqQMi1QNZS6GrT4vNzIayv552Fl0EFWQA7jWlctUwfYoHRHVEnCNx9YGXDiA9+yDoGlVwgTR7fjzNeS3Fen1MVIyKBF464gN0JvdiCRJMI47JGVDkPmKjcrYIvJs6y5Lg25RW4ZnBKVruS+HR2s3k8ZrV4y4RCQE4UYMKbukF9vsF+JqAEifRlPq2xLcrNdxBveVDSXS/LRHAcrZrMM+Iw4A79jl0ngWPcy+CwinAhT+3dxVo5ZWMRQFpmTkylEMDvTjV9wQ=="
};

// Constructor with license object
var pki = new LacunaWebPKI(license);
```
Instantiate with a license binary string

```js
// Here, we use the binary format of our license. This is preferred if you want to hide the details of your license
// (expiration date and allowed domains). Please note that the details are not encrypted, just encoded in Base64.
var license = 'ASYAanNmaWRkbGUubmV0LHdlYnBraS5sYWN1bmFzb2Z0d2FyZS5jb20AAAABClKvO1J22vAD+YmfANiKQLbcLE1lNraPKCel6tRM+ZxR+h6M/crtJYRRVGGz7hrdbM0Y0mfTu15RMYGqQMi1QNZS6GrT4vNzIayv552Fl0EFWQA7jWlctUwfYoHRHVEnCNx9YGXDiA9+yDoGlVwgTR7fjzNeS3Fen1MVIyKBF464gN0JvdiCRJMI47JGVDkPmKjcrYIvJs6y5Lg25RW4ZnBKVruS+HR2s3k8ZrV4y4RCQE4UYMKbukF9vsF+JqAEifRlPq2xLcrNdxBveVDSXS/LRHAcrZrMM+Iw4A79jl0ngWPcy+CwinAhT+3dxVo5ZWMRQFpmTkylEMDvTjV9wQ==';

// Constructor with (binary) String license
var pki = new LacunaWebPKI(license);
```

<a name="init" />
## init

Initializes the instance of the LacunaWebPKI object. This method must be called before calling any other methods.
```js
init (readyCallback)
init (args)
```

| Since                    |
|--------------------------|
| lacuna-web-pki-1.3.10.js |

### Parameters
`readyCallback` Function

A function to be called when the component is ready to be used. The function receives no arguments.

`args` [InitArgs](lacunawebpki.md#init-object) Object

<a name="init-args" />
#### InitArgs
An object passed to the [init](lacunawebpki.md#init) method with the parameters below.
| Parameter      | Type         | Obs      | Description 
|----------------|--------------|----------|-------------
| `ready`        | Function     |          | A function to be called when the component is ready to be used. The function receives no arguments.
| `notInstalled` | Function     | optional | A function to be called if the component's installation is not OK (component not installed, outdated or user is using an unsupported browser). Refer to examples below for the exact function signature. If no callback is given, the user is automatically redirected to the installation website and will be redirected back once the installation is completed. If you do pass a callback to override the default behavior, use the [redirectToInstallPage](lacunawebpki.md#redirect-to-install-page) method to redirect the user to the installation page whenever you think it's convenient.
| `defaultError` | Function     | obsolet  | Use `defaultFail` instead.
| `defaultFail`  | FailFunction | optional | The default callback to be called when an error occurrs (please refer to examples below for the exact function signature).
| `angularScope` | Object       | optional | If your webpage uses AngularJS, you can pass here a reference to your $scope, which will then be used to call the callback functions properly, relieving you of doing a "$scope.$apply(function() { ... });" on every callback. The calls are actually wrapped around a "safe $apply", as described in https://coderwall.com/p/ngisma/safe-apply-in-angular-js.
| `license`      | Object       | optional | The license for the component, if not already set when instantiating the object.

### Examples

Init with a ready callback
```js
// This is the simplest way to call the method, in case you don't wish to register a default error callback nor
// define a custom behavior for when the component is not installed/outdated.
pki.init(onWebPkiReady);

// The ready callback receives no arguments
function onWebPkiReady() {
    // start using the component
}
```

Init with an args object
```js
// If you wish to pass any other argument, you must use the extended version of the method:
pki.init({
    ready: onWebPkiReady,
    notInstalled: onWebPkiNotInstalled,
    defaultFail: onWebPkiFail,
    angularScope: $scope
});

function onWebPkiReady() {
    // start using the component
}

// The notInstalled callback receives two parameters:
// - status: A number indicating the reason for the failed verification, whose value is equal to one of the values of the
//           LacunaWebPKI.installationStates object (NOT_INSTALLED: 1, OUTDATED: 2, BROWSER_NOT_SUPPORTED: 3)
// - message: A user-friendly message describing the reason for the failure.
function onWebPkiNotInstalled(status, message) {
    alert(message + '\n\nYou will be redirected to the installation page');
    pki.redirectToInstallPage();
}

// The default error callback receives 3 arguments:
// - message: a user-friendly message describing the error that occurred
// - error: a detailed string containing as much information about the error as possible, for instance the stack trace. This is a good value to be logged, not to be shown to the user.
// - origin: a string denoting where the error originated. This should also not be shown to the user, but rather logged for diagnostic purposes.
function onWebPkiFail(ex) {
    alert(ex.message);
    if (window.console) {
        window.console.log('Web PKI error from ' + ex.origin + ': ' + ex.error + ' - code: ' + ex.code, ex);
    }
}
```

<a name="list-certificates" />
## listCertificates

Lists the available certificates.

```js
listCertificates ()
```

| Since                    |
|--------------------------|
| lacuna-web-pki-1.0.0.js  |

### Return

A [Promise](promise.md) object that can be used to register a callback to be called when the operation completes. The success 
callback for this promise receives an array of [CertificateModel](lacunawebpki.md#cert-model) with the available certificates.

```js
function (certificates)
```
`certificates` Array of [CertificateModel](lacunawebpki.md#cert-model)
An array with the model of the available certificates.

<a name="cert-model" />
#### CertificateModel
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
#### KeyUsagesModel

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
#### PkiBrazilModel

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
#### PkiItalyModel

Name            | Type   | Description
--------------- | ------ | --------------------------
`codiceFiscale` | String | Subject's *codice fiscale*

For instance, to log the *codice fiscale* of each certificate:

```javascript
pki.listCertificates().success(function (certs) {
    for (var i = 0; i < certs.length; i++) {
		var cert = certs[i];
		console.log(cert.pkiItaly.codiceFiscale);
	}
});
```

> [!NOTE]
> Each property on the `PkiItalyModel` object may be null, but the object itself (`cert.pkiItaly`) is never null.


### Examples

For instance, to log the Common Name (CN) part of each certificate:

```javascript
pki.listCertificates().success(function (certs) {
    for (var i = 0; i < certs.length; i++) {
		var cert = certs[i];
		console.log(cert.subjectName);
	}
});
```
For instance, to check for the `nonRepudiation` key usage on each certificate:

```javascript
pki.listCertificates().success(function (certs) {
    for (var i = 0; i < certs.length; i++) {
		var cert = certs[i];
		if (cert.keyUsage.nonRepudiation) {
			// ...
		}
	}
});
```
For instance, to log the CPF of each certificate:

```javascript
pki.listCertificates().success(function (certs) {
    for (var i = 0; i < certs.length; i++) {
		var cert = certs[i];
		console.log(cert.pkiBrazil.cpf);
	}
});
```
> [!TIP]
> For more examples and customization of certificate selection, please visit the section [Customizing certificate selection](cert-select.md)

<a name="read-certificate" />
## readCertificate

Reads a certificate's binary encoding.
Most browser signature schemes that relay to the server-side code the responsibility of encoding the signature require that the signer certificate's binary encoding be read and sent back to the server for the generation of the "to-sign-bytes" or "signed attributes". This method enables your code to do that.

| Since                    |
|--------------------------|
| lacuna-web-pki-1.0.0.js  |

### Parameters

```js
readCertificate (thumbprint)
```

`thumbprint` String
The certificate's thumbprint, as yielded by the method [listCertificates](lacunawebpki.md#list-certificates).

### Return

A [Promise](promise.md) object that can be used to register a callback to be called when the operation completes. The success callback for this promise receives a string containing the certificate's binary encoding in Base64.
```js
function (certContent)
```
`certContent` String
The Base64 string of the certificate DER encoded content.

### Examples

```js
// We use the certificate's thumbprint as previously returned by the listCertificates method
// to read the certificate's encoding using the readCertificate method.
pki.readCertificate(selectedCertThumbprint).success(function (certContent) {
    alert('Certificate read: ' + certContent);
});
```
### Live examples

<a name="redirect-install" />
## redirectToInstallPage

Redirects the user to the install page, with the appropriate url arguments so as to make the user be redirected back to the original page once the installation completes successfully.

```js
redirectToInstallPage ()
```

<a name="sign-data" />
## signData

Signs a collection of bytes with a certificate.

| Since                    |
|--------------------------|
| lacuna-web-pki-1.0.0.js  |

### Parameters

```js
signData (args) 
```

`args` [SignDataArgs](lacunawebpki.md#sign-data-args)

<a name="sign-data-args" />
#### SignDataArgs
An object with the following options:

 Name              | Type   | Description 
-------------------|--------|-------------
 `thumbprint`      | String | The thumbprint of the certificate to be used, as yielded by the method [listCertificates](lacunawebpki.md#list-certificates).
 `data`            | String | The bytes to be signed, encoded in Base64 string.
 `digestAlgorithm` | String | The name or OID of the digest algorithm to be used to compute the hash of the bytes during the signature operation. Common values for this parameter are `'SHA-256'` or `'SHA-1'`. The forms `'SHA256'`, `'sha256'`, `'sha 256'`, `'sha-256'` will also work.

### Return

A [Promise](promise.md) object that can be used to register a callback to be called when the operation completes The success callback for this promise receives a string with the signature algorithm's output encoded in Base64.

```js
function (signature)
```

`signature` String
The signature algorithm's output encoded in Base64 string

### Examples

```js
var dataToSign = 'SGVsbG8gV29ybGQh'; // Base64-encoded 'Hello World!'
pki.signData({
    thumbprint: $('#certificateSelect').val(),
    data: dataToSign,
    digestAlgorithm: 'SHA-256'
}).success(function (signature) {                                     
    // Use signature
});
```

<a name="sign-hash" />
## signHash

Signs a pre-computed digest value with a certificate.

| Since                    |
|--------------------------|
| lacuna-web-pki-1.0.0.js  |

### Parameters

```js
signHash (args) 
```

`args` [SignHashArgs](lacunawebpki.md#sign-hash-args)

<a name="sign-hash-args" />
#### SignHashArgs
An object with the following options:

| Parameter       | Type   | Description 
|-----------------|--------|-------------
| thumbprint      | String | The thumbprint of the certificate to be used, as yielded by the method [listCertificates](lacunawebpki.md#list-certificates).
| hash            | String | The pre-computed digest value to be signed, encoded in Base64.
| digestAlgorithm | String | The name or OID of the digest algorithm to be used to compute the hash of the bytes during the signature operation. Common values for this parameter are `'SHA-256'` or `'SHA-1'`. The forms `'SHA256'`, `'sha256'`, `'sha 256'`, `'sha-256'` will also work.

### Return

A [Promise](promise.md) object that can be used to register a callback to be called when the operation completes. The success callback for this promise receives a string with the signature algorithm's output encoded in Base64.

```js
function (signature)
```

`signature` String
The signature algorithm's output encoded in Base64 string

### Examples

```js
var hashToSign = 'f4OxZX/x/FO5LcGBSKHWXfwtSx+j1ncoSt3SABJtkGk='; // Base64-encoded SHA-256 of 'Hello World!'
pki.signHash({
    thumbprint: $('#certificateSelect').val(),
    hash: hashToSign,
    digestAlgorithm: 'SHA-256'
}).success(function (signature) {
    // Use signature
});
```

<a name="pre-auth" />
## preauthorizeSignatures

Method to be called befora a batch signature. The user will authorize *n* signatures to be performed.

| Since                    |
|--------------------------|
| lacuna-web-pki-2.0.0.js  |

### Parameters

```js
preauthorizeSignatures (args)
```

`args` [PreAuthorizeArgs](lacunawebpki.md#pre-auth-args) Object

<a name="pre-auth-args" />
#### PreAuthorizeArgs

Name                    | Type   | Description
------------------------|--------|------------
`certificateThumbprint` | String | The thumbprint of the certificate to be used, as yielded by the method [listCertificates](lacunawebpki.md#list-certificates).
`signatureCount`        | Number | The batch signature count intended


### Return

A [Promise](promise.md) object that can be used to register a callback to be called when the operation completes. The success callback for this promise receives a Function to be called on success.

```js
function ()
```

### Examples

```js
pki.preauthorizeSignatures({
	certificateThumbprint: ('#certificateSelect').val(),
	signatureCount: 20
}).success(function () {
	// start signature batch process of 20 signatures
});
```

<a name="sign-pdf" />
## signPdf
Signs a PDF file locally (available only for Windows)

### Parameters

```js
signPdf (args)
```

`args` [SignPdfArgs](lacunawebpki.md#sign-pdf-args) Object

<a name="sign-pdf-args" />
#### SignPdfArgs
An object with the following parameters

Name                          | Type                                                                | Note     | Description
------------------------------|---------------------------------------------------------------------|----------|------------
`fileId`                      | String                                                              |          | The selected PDF to sign file Id returned by method [showFileBrowser](lacunawebpki.md#show-file-browser).
`certificateThumbprint`       | String                                                              |          | The thumbprint of the certificate to be used, as yielded by the method [listCertificates](lacunawebpki.md#list-certificates).
`output`                      | [Output](lacunawebpki.md#output-object)                             |          | The signature file output options.
`trustArbitrators`            | Array of [TrustArbitrator](lacunawebpki.md#trust-arbitrator)        |          | 
`clearPolicyTrustArbitrators` | Boolean                                                             | optional | Whether or not to clear any signature policy default trust arbitrator.
`visualRepresentation`        | [SignatureRepresentation](lacunawebpki.md#signature-representation) | optional | 
`pdfMarks`                    | Array of [PdfMarks](lacunawebpki.md#pdf-marks)                      | optional | 
`bypassMarksIfSigned`         | Boolean                                                             | optional | Whether or not to ignore marks if PDF alredy signed. If signed PDF and `false` will throw exception. Applying marks on a signed PDF would invalidate the previous signatures
`policy`                      | String                                                              |          | The signature policy to use. Can be ('Basic').

### Returns

A [Promise](promise.md) object that can be used to register a callback to be called when the operation completes. The success callback for this promise receives a [PdfSignResult](lacunawebpki.md#pdf-sign-result) object.

```js
function (result)
```

`result` [PdfSignResult](lacunawebpki.md#pdf-sign-result)

<a name="pdf-sign-result" />
#### PdfSignResult
An object with the following parameters

Name                                  | Type                                                    | Description
--------------------------------------|---------------------------------------------------------|---------------------------------
`isValid`                             | Boolean                                                 | Whether or not the signature was completed successfuly. If false, the `signingCertificateValidationResults` will have the failure results.
`signatureInfo`                       | [SignatureInfo](lacunawebpki.md#signature-info)         | 
`pagesCount`                          | Number                                                  | 
`signingCertificateValidationResults` | [ValidationResults](lacunawebpki.md#validation-results) | 

<a name="signature-info" />
#### SignatureInfo
An object with the following parameters

Name                | Type                                           | Description
--------------------|------------------------------------------------|-----------------
`signerCertificate` | [CertificateModel](lacunawebpki.md#cert-model) | The signer certificate model.
`messageDigest`     | [DigestModel](lacunawebpki.md#digest-model)    | The message digest.
`file`              | [FileModel](lacunawebpki.md#file-model)        | The signature file information.
`signingTime`       | Date                                           | The signing date time.

<a name="digest-model" />
#### DigestModel
An object with the following parameters

Name                  | Type   | Description
----------------------|--------|---------------------------------
`digestAlgorithmOid`  | String | The digest algorithm OID.
`digestAlgorithmName` | String | The digest algorithm name.
`digestValue`         | String | The digest valeu Base64 encoded.

<a name="file-model" />
#### FileModel
An object with the following parameters

Name     | Type   | Description
---------|--------|----------------------
`id`     | String | The id that represents the file.
`name`   | String | The file name (with extension).
`length` | Number | The file length in bytes.

> [!NOTE]
> The file is identified by Id, not by path, the files path are never exposed to the page javascript, to comply to user privacy policies of browsers.

<a name="validation-results" />
#### ValidationResults
An object with the following parameters

Name           | Type           | Description
---------------|----------------|------------------
`passedChecks` | [ValidationItem](lacunawebpki.md#validation-item) | Success validations.
`warnings`     | [ValidationItem](lacunawebpki.md#validation-item) | Validation warnings.
`errors`       | [ValidationItem](lacunawebpki.md#validation-item) | Validation errors.

<a name="validation-item" />
#### ValidationItem
An object with the following parameters

Name                     | Type                                                    | Description
-------------------------|---------------------------------------------------------|------------
`type`                   | String                                                  | Validation item type.
`message`                | String                                                  | Validation message.
`detail`                 | String                                                  | Validation details.
`innerValidationResults` | [ValidationResults](lacunawebpki.md#validation-results) | Inner validations results.

### Examples


## signCades 


### Parameters

Name                          | Type                                                         | Note     | Description
------------------------------|--------------------------------------------------------------|----------|------------
`fileId`                      | String                                                       |          | The selected file to sign Id returned by method [showFileBrowser](lacunawebpki.md#show-file-browser).
`certificateThumbprint`       | String                                                       |          | The thumbprint of the certificate to be used, as yielded by the method [listCertificates](lacunawebpki.md#list-certificates).
`output`                      | [Output](lacunawebpki.md#output-object)                      |          | The signature file output options.
`trustArbitrators`            | Array of [TrustArbitrator](lacunawebpki.md#trust-arbitrator) |          | 
`clearPolicyTrustArbitrators` | Boolean                                                      | optional | Whether or not to clear any signature policy default trust arbitrator.
`cmsToCosignFileId`           | String                                                       | optional | A CAdES signature file Id to co-sign. If the signature does not have an encapsulated content (detached), the original signed file must also be passed by the `fileId`.
`autoDetectCosign`            | Boolean                                                      | optional | Whether or not to auto detect if the `fileId` is a CAdES signature to co-sign. If `true`, the CAdES signature file Id to co-sign can be passed directly to `fileId`. Only works if the CAdES signature to co-sign has an encapsulated content (attached).
`includeEncapsulatedContent`  | Boolean                                                      | optional | Whether or not to inlcude the encpasulated content (attached) in the CAdES signature file. If not set, the default is `true`.
`policy`                      | String                                                       |          | The signature policy to use. Can be ('CadesBes' | 'BrazilAdrBasica').


### Returns

A [Promise](promise.md) object that can be used to register a callback to be called when the operation completes. The success callback for this promise receives a [CadesSignResult](lacunawebpki.md#cades-sign-result) object.

```js
function (result)
```

`result` [CadesSignResult](lacunawebpki.md#cades-sign-result) Object

text

<a name="cades-sign-result" />
#### CadesSignResult


## openPades


## openCades


## showFileBrowser


## showFolderBrowser


## openFile


## openFolder


## listTokens


## generateTokenRsaKeyPair


## generateSoftwareRsaKeyPair


## importTokenCertificate


## importCertificate