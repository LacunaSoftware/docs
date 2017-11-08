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

---

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

`args` [InitArgs](object-types.md#init-args) Object

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

// The default failure callback receives an exception object with the parameters:
// - message: a user-friendly message describing the error that occurred
// - error:   a detailed string containing as much information about the error as possible, for instance the stack trace. This is a good value to be logged, not to be shown to the user.
// - origin:  a string denoting where the error originated. This should also not be shown to the user, but rather logged for diagnostic purposes.
// - code:    an error code string
function onWebPkiFail(ex) {
    alert(ex.message);
    if (window.console) {
        window.console.log('Web PKI error', ex);
    }
}
```

---

<a name="list-certificates" />
## listCertificates

Lists the available certificates.

```js
listCertificates ()
```

### Return

A [Promise](promise.md) object that can be used to register a callback to be called when the operation completes. The success 
callback for this promise receives an array of [CertificateModel](object-types.md#cert-model) with the available certificates.

```js
function (certificates)
```
`certificates` Array of [CertificateModel](object-types.md#cert-model)
An array with the model of the available certificates.

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

---

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

---

<a name="redirect-install" />
## redirectToInstallPage

Redirects the user to the install page, with the appropriate url arguments so as to make the user be redirected back to the original page once the installation completes successfully.

```js
redirectToInstallPage ()
```

---

<a name="sign-data" />
## signData

Signs a collection of bytes with a certificate.

### Parameters

```js
signData (args) 
```

`args` [SignDataArgs](object-types.md#sign-data-args)

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

---

<a name="sign-hash" />
## signHash

Signs a pre-computed digest value with a certificate.

### Parameters

```js
signHash (args) 
```

`args` [SignHashArgs](object-types.md#sign-hash-args)

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

---

<a name="pre-auth" />
## preauthorizeSignatures

Method to be called befora a batch signature. The user will authorize *n* signatures to be performed.

### Parameters

```js
preauthorizeSignatures (args)
```

`args` [PreAuthorizeArgs](object-types.md#pre-auth-args) Object

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

---

<a name="sign-pdf" />
## signPdf
Signs a PDF file locally (available only for Windows)

### Parameters

```js
signPdf (args)
```

`args` [SignPdfArgs](object-types.md#sign-pdf-args) Object

### Returns

A [Promise](promise.md) object that can be used to register a callback to be called when the operation completes. The success callback for this promise receives a [PdfSignResult](lacunawebpki.md#pdf-sign-result) object.

```js
function (result)
```

`result` [PdfSignResult](object-types.md#pdf-sign-result)

### Examples

---

<a name="sign-cades" />
## signCades 

### Parameters

### Returns

A [Promise](promise.md) object that can be used to register a callback to be called when the operation completes. The success callback for this promise receives a [CadesSignResult](lacunawebpki.md#cades-sign-result) object.

```js
function (result)
```

`result` [CadesSignResult](object-types.md#cades-sign-result) Object

text

---

<a name="open-pades" />
## openPades

---

<a name="open-cades" />
## openCades

---

<a name="show-file-browser" />
## showFileBrowser

> [!NOTE]
> The file is identified by Id, not by path, the files path are never exposed to the page javascript, complying to user privacy policies of browsers.

---

<a name="show-folder-browser" />
## showFolderBrowser

> [!NOTE]
> The folder is identified by Id, not by path, the folders path are never exposed to the page javascript, complying to user privacy policies of browsers.

---

<a name="open-file" />
## openFile

---

<a name="open-folder" />
## openFolder

---

<a name="list-tokens" />
## listTokens

---

<a name="generate-rsa-token" />
## generateTokenRsaKeyPair

---

<a name="generate-rsa-soft" />
## generateSoftwareRsaKeyPair

---

<a name="import-token-cert" />
## importTokenCertificate

---

<a name="import-cert" />
## importCertificate