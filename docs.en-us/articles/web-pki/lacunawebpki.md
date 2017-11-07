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

### Parameters
`readyCallback` Function
A function to be called when the component is ready to be used. The function receives no arguments.

`args` InitObject

<a name="init-object" />
#### InitObject
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

```js
// This is the simplest way to call the method, in case you don't wish to register a default error callback nor
// define a custom behavior for when the component is not installed/outdated.
pki.init(onWebPkiReady);

// The ready callback receives no arguments
function onWebPkiReady() {
    // start using the component
}
```
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

### Live examples

<a name="list-certificates" />
## listCertificates
Lists the available certificates.

```js
listCertificates (args)
```

### Parameters

`args` Object optional

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
| Parameter       | Type      | Description 
|-----------------|-----------|-------------
| `subjectName`   | String    | The Common Name (CN) part of the certificate's subject name field.
| `issuerName`    | String    | The Common Name (CN) part of the certificate's issuer name field.
| `email`         | String    | The subject email address.
| `thumbprint`    | String    | A Base64 string of the certificate SHA256 digest. This parameter is used as an identifier for the certificate selection.
| `pkiBrazil`     | [PkiBrazil](lacunawebpki.md#pki-brazil) | A model with ICP-Brasil specific certificate fields.
| `pkiItaly`      | [PkiItaly](lacunawebpki.md#pki-italy) | A model with PKI Italy specific certificate fields.
| `keyUsage`      | [KeyUsage](lacunawebpki.md#key-usage) | A model of boolean certificate key usage types.
| `validityEnd`   | Date      | The certificate expiration date.
| `validityStart` | Date      | The certificate validity start date.

> [!NOTE]
> All certificate model parameters and sub-parameters are present in the returned object.

<a name="pki-brazil" />
#### PkiBrazil
An object with ICP-Brasil specific certificate fields.

| Parameter          | Type      | Description 
|--------------------|-----------|-------------
| `certificateType`  | String    | ICP-Brasil certificate type (`'A1'` | `'A2'` | `'A3'` ...).
| `cnpj`             | String    | The company CNPJ (Id) number if it is a company certificate, `null ` otherwise
| `companyName`      | String    | The company name if it is a company certificate, `null ` otherwise
| `cpf`              | String    | The CPF (Id) of the certficate subject or of the company's legal representative, in case it is a company certificate
| `dateOfBirth`      | Date      | The subject's or the company's legal representative date of birth, in case it is a company certificate
| `isAplicacao`      | Boolean   | Whether or not is an application certificate
| `isPessoaFisica`   | Boolean   | Whether or not is a personal certificate
| `isPessoaJuridica` | Boolean   | Whether or not is a company certificate
| `nis`              | String    | 
| `oabNumero`        | String    | The OAB (Lawyer Id) of the subject
| `oabUF`            | String    | The `oabNumero` state code
| `responsavel`      | String    | The clean name of the subject or the legal representative, in case it is a company certificate
| `rgNumero`         | String    | The general Id of the subject or the legal representative, in case it is a company certificate
| `rgEmissorUF`      | String    | The `rgNumero` state code
| `rgEmissor`        | String    | The `rgNumero` issuer code

<a name="pki-italy" />
#### PkiItaly
An object with PKI Italy specific certificate fields.
| Parameter          | Type      | Description 
|--------------------|-----------|-------------
| `codiceFiscale`    | String    | Che contiene il codice fiscale del titolare rilasciato dall'autorità fiscale dello Stato di residenza del titolare o, in mancanza, un analogo codice identificativo, quale ad esempio un codice di previdenza sociale o un codice identificativo generale.

<a name="key-usage" />
### KeyUsage
An object with the certificate key usage values

| Parameter          | Type
|--------------------|------
| `crlSign`			 | Boolean
| `dataEnciphermen`	 | Boolean
| `decipherOnly`	 | Boolean
| `digitalSignature` | Boolean
| `encipherOnly`	 | Boolean
| `keyAgreement`	 | Boolean
| `keyCertSign`		 | Boolean
| `keyEncipherment`	 | Boolean
| `nonRepudiation`	 | Boolean

### Examples

```js
pki.listCertificates().success(function (certificates) {
    var select = $("#certificateSelect");
    $.each(certificates, function() {
        // The certificates parameter, passed to the success callback, is an array whose each element has the following properties:
        // - thumbprint (used to reference the certificate in the other methods such as readCertificate and signData)
        // - subjectName (the CommonName portion of the subject's name)
        // - issuerName (the CommonName portion of the issuer's name)
        select.append($("<option />").val(this.thumbprint).text(this.subjectName + ' (issued by ' + this.issuerName + ')'));
    });
});
```

### Live examples

<a name="read-certificate" />
## readCertificate

Reads a certificate's binary encoding.
Most browser signature schemes that relay to the server-side code the responsibility of encoding the signature require that the signer certificate's binary encoding be read and sent back to the server for the generation of the "to-sign-bytes" or "signed attributes". This method enables your code to do that.

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

### Live examples


<a name="sign-data" />
## signData

Signs a collection of bytes with a certificate.

### Parameters

```js
signData (args) 
```

`args` [SignDataArgs](lacunawebpki.md#sign-data-args)

<a name="sign-data-args" />
#### SignDataArgs
An object with the following options:

| Parameter       | Type         | Obs      | Description 
|-----------------|--------------|----------|-------------
| thumbprint      | String       |          | The thumbprint of the certificate to be used, as yielded by the method [listCertificates](lacunawebpki.md#list-certificates).
| data            | String       |          | The bytes to be signed, encoded in Base64 string.
| digestAlgorithm | String       |          | The name or OID of the digest algorithm to be used to compute the hash of the bytes during the signature operation. Common values for this parameter are `'SHA-256'` or `'SHA-1'`. The forms `'SHA256'`, `'sha256'`, `'sha 256'`, `'sha-256'` will also work.

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

### Live examples


<a name="sign-hash" />
## signHash

Signs a pre-computed digest value with a certificate.

### Parameters

```js
signHash (args) 
```

`args` [SignHashArgs](lacunawebpki.md#sign-hash-args)

<a name="sign-hash-args" />
#### SignHashArgs
An object with the following options:

| Parameter       | Type         | Obs      | Description 
|-----------------|--------------|----------|-------------
| thumbprint      | String       |          | The thumbprint of the certificate to be used, as yielded by the method [listCertificates](lacunawebpki.md#list-certificates).
| hash            | String       |          | The pre-computed digest value to be signed, encoded in Base64.
| digestAlgorithm | String       |          | The name or OID of the digest algorithm to be used to compute the hash of the bytes during the signature operation. Common values for this parameter are `'SHA-256'` or `'SHA-1'`. The forms `'SHA256'`, `'sha256'`, `'sha 256'`, `'sha-256'` will also work.

### Return

A [Promise](promise.md) object that can be used to register a callback to be called when the operation completes The success callback for this promise receives a string with the signature algorithm's output encoded in Base64.

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

### Live examples

