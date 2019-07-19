# Signature sample explained - PKI Express on Java

This article explains how the digital signature process performed in the PKI Express Java Samples project works.

## Main code files

* Controller [PadesSignatureController](https://github.com/LacunaSoftware/PkiExpressSamples/blob/master/Java/src/main/java/sample/controller/PadesSignatureController.java)
* View [pades-signature](https://github.com/LacunaSoftware/PkiExpressSamples/blob/master/Java/src/main/resources/templates/pades-signature.html)
* Módulo de JavaScript [signatureForm](https://github.com/LacunaSoftware/PkiExpressSamples/blob/master/Java/src/main/resources/static/js/signature-form.js)

## Subscription process

### 1. User goes to the signature page

At this time, the user visits the URL `/pades-signature` (`GET`). The controller `PadesSignatureController` is responsible for responding to the request, more specifically in
the `get()`:

```java
/**
 * This action simple renders the page
 */
@RequestMapping(value = "/pades-signature", method = {RequestMethod.GET})
public String get(/* ... */) throws IOException {
	// ...
}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L24-L62)

At this time, we just render the signature page with the variable `state` set to `initial`. This variable is used to signal where the signing process is.

```java
// Render the signature page (templates/pades-signature.html)
model.addAttribute("state", state);
model.addAttribute("fileToSign", fileToSign);
model.addAttribute("userfile", userfile);
return "pades-signature";
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L57-L61)

> [!NOTE]
> The variables `fileToSign`and `userfile` are merely details of the example.

The rendered page is the view `pades-signature`. At the end of loading this, we passed references to the page elements for the JavaScript module `signatureForm`:

```js
$(document).ready(function () {
    // Once the page is ready, we call the init() function on the javascript code (see signature-form.js)
    signatureForm.init({
        form: $('#signForm'),
        certificateSelect: $('#certificateSelect'),
        refreshButton: $('#refreshButton'),
        signButton: $('#signButton'),
        stateField: $('#stateField'),
        certThumbField: $('#certThumbField'),
        certContentField: $('#certContentField'),
        toSignHashField: $('#toSignHashField'),
        digestAlgorithmField: $('#digestAlgorithmField'),
        signatureField: $('#signatureField')
    });
});
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/templates/pades-signature.html#L76-L90)

The module `signatureForm`, when `state == "initial"`, blocks the screen and triggers Web PKI initialization, passing the function `loadCertificates()` as callback when the initialization has completed:

```js
// -------------------------------------------------------------------------------------------------
// Initializes the signature form.
// -------------------------------------------------------------------------------------------------
function init(fe) {

    // ...

    if (formElements.stateField.val() == 'initial') {

        // Wireup of button clicks.
        formElements.signButton.click(startSignature);
        formElements.refreshButton.click(refresh);

        // Block the UI while we get things ready.
        $.blockUI({ message: 'Initializing ...' });

        // Call the init() method on the LacunaWebPKI object, passing a callback for when the
        // component is ready to be used and another to be called when an error occurs on any of the
        // subsequent operations. For more information, see:
        // https://docs.lacunasoftware.com/en-us/articles/web-pki/get-started.html#coding-the-first-lines
        // https://webpki.lacunasoftware.com/Help/classes/LacunaWebPKI.html#method_init
        pki.init({
            ready: loadCertificates, // As soon as the component is ready we'll load the certificates.
            defaultError: onWebPkiError
        });

	} else //...

}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L21-L38)

In the function `loadCertificates()`, we trigger the loading of the certificates available on the user's computer, populating the element `<select>` from the page:

```js
// -------------------------------------------------------------------------------------------------
// Function that loads the certificates, either on startup or when the user clicks the "Refresh"
// button. At this point, the UI is already blocked.
// -------------------------------------------------------------------------------------------------
function loadCertificates() {

    // Call the listCertificates() method to list the user's certificates.
    pki.listCertificates({

        // Specify that expired certificates should be ignored.
        filter: pki.filters.isWithinValidity,

        // In order to list only certificates within validity period and having a CPF (ICP-Brasil),
        // use this instead:
        //filter: pki.filters.all(pki.filters.hasPkiBrazilCpf, pki.filters.isWithinValidity),

        // Id of the select to be populated with the certificates.
        selectId: formElements.certificateSelect.attr('id'),

        // Function that will be called to get the text that should be displayed for each option.
        selectOptionFormatter: function (cert) {
            return cert.subjectName + ' (issued by ' + cert.issuerName + ')';
        }

    }).success(function () {

        // Once the certificates have been listed, unblock the UI.
        $.unblockUI();
    });

}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L62-L92)

### 2. Users click the **Sign File** button

Previously, the JavaScript module `signatureForm` registered JavaScript function `startSignature()` to be called when the **Sign File** button is clicked:

```js
// Wireup of button clicks.
formElements.signButton.click(startSignature);
formElements.refreshButton.click(refresh);
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L23-L25)

> [!NOTE]
> Note that it is critical that the button on the page has `type="button"`, and don't `type="submit"`, otherwise a postback would occur immediately upon clicking the button.

Therefore, when the user clicks the **Sign File** button, the `startSignature()` function of `signatureForm` is invoked:

```js
// -------------------------------------------------------------------------------------------------
// Function called when the user clicks the "Sign File" button.
// -------------------------------------------------------------------------------------------------
function startSignature() {

    // Block the UI while we perform the signature
    $.blockUI({ message: 'Starting signature ...' });

    // ...
}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L94-L115)

In this function, after blocking the page, we get the thumbprint of the selected certificate and place it in one of the hidden fields of the page (this value will be necessary at another time
in the subscription process):

```js
// Get the thumbprint of the selected certificate.
var selectedCertThumbprint = formElements.certificateSelect.val();
formElements.certThumbField.val(selectedCertThumbprint);
``` 
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L102-L104)

We then invoke the function `readCertificates()` of the PKI Web to obtain the encoding of the chosen certificate (public part of the certificate, the ".cer", without the private key):

```js
// Get certificate content to be passed to "start" step of the signature.
pki.readCertificate(selectedCertThumbprint).success(// ...
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L106-L107)

Once the certificate is read, we fill in a hidden field of the page with the result, change the state to start and do the postback:

```js
/* ... */.success(function (certEncoded) {
	formElements.certContentField.val(certEncoded);
	formElements.stateField.val('start');
	formElements.form.submit();
});
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L109-L112)

### 3. Signing backend start

In the backend, the controller `PadesController` is again invoked to handle the postback made from the frontend with the certificate chosen to perform the signature, done for the URL
`pades-signature` but with a verb `POST`. The method `post()` is responsible for handling the request:

```java
/**
 * This action receives the form submission from the signature page. It will perform a PAdES signature in three
 * steps using PKI Express and Web PKI.
 */
@RequestMapping(value = "/pades-signature", method = {RequestMethod.POST})
public String post(/* ... */) throws IOException {
	// ...
}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L64-L79)

More especifically, as we have `state == "start"`, the code executed is as follows:

```java
if (state.equals("start")) {

	// This block will be executed only when its on the "start" step. In this sample, the state is set as
	// "start" programatically after the user press the "Sign File" button (see method sign() on
	// signature-form.js).

	// ...
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L81-L142)

At this point, we start the signature using the class `PadesSignatureStarter` passing the file to be signed and the encoding of the certificate chosen for signature:

```java
// Get an instance of the PadesSignatureStarter class, responsible for receiving the signature elements
// and start the signature process.
PadesSignatureStarter signatureStarter = new PadesSignatureStarter(Util.getPkiExpressConfig());

// Set PKI default options (see Util.java)
Util.setPkiDefaults(signatureStarter);

// Set PDF to be signed.
signatureStarter.setPdfToSign(fileToSign);

// Set Base64-encoded certificate's content to signature starter.
signatureStarter.setCertificateBase64(certContent);
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L88-L99)

Opcionally, we configure the signature appearance:

```java
// Set a file reference for the stamp file. Note that this file can be referenced later by
// "fref://stamp" at the "url" field on the visual representation (see content/vr.json file or
// getVisualRepresentation(case) method).
signatureStarter.addFileReference("stamp", Util.getPdfStampPath());

// Set visual representation. We provide a Java class that represents the visual representation
// model.
signatureStarter.setVisualRepresentation(PadesVisualElements.getVisualRepresentation(1));
// Alternatively, we can provide a javascript file that represents json-encoded the model
// (see resources/static/vr.json).
//signatureStarter.setVisualRepresentationFromFile(Util.getVisualRepresentationPath());
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L101-L111)

> [!NOTE]
> For more details on configuration options for the appearance of the subscription, see the class [PadesVisualElements](https://github.com/LacunaSoftware/PkiExpressSamples/blob/master/Java/src/main/java/sample/controller/util/PadesVisualElements.java)

Finally, we conclude the initial step, obtaining the necessary data to perform the digital signature algorithm:

```java
// Start the signature process. Receive as response a SignatureStartResult instance containing the
// following fields:
// - toSignHash: The hash to be signed.
// - digestAlgorithm: The digest algorithm that will inform the Web PKI component to compute the signature.
// - transferFile: A temporary file to be passed to "complete" step.
SignatureStartResult result = signatureStarter.start();
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L113-L119)

An important point: the class `PadesSignatureStarter` saves a file called transfer data file containing information that needs to be retrieved later in the subscription process. By default,
this file is stored in the system temporary folder, but another folder can be configured. The method `PadesSignatureStarter.getTransferFile()` returns the filename of the file, which is
populated in a hidden field on the page:

```java
model.addAttribute("transferFile", result.getTransferFile());
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L133)

> [!NOTE]
> Security concerns are taken in generating the name of this file, so it is impossible for a user to guess the transfer data file from another user's signing process. Also, only the
filename is sent to the page, not the full path, so it is also not possible for a user to induce the web application to read a file in an arbitrary folder.

After a bit of housekeeping, we rendered the view again `pades-signature`:

```java
return "pades-signature";
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L193)

### 4. Realization of the digital signature algorithm in the frontend

Once the page is loaded again, the `init()` function of the `signatureForm` is again invoked, but this time we have `state == "start"`. We then blocked the page and re-invoked the Web PKI
initialization (as there was a reload of the page, it is necessary to initialize the component again), but this time passing the function `sign()` as callback:

```js
} else if (formElements.stateField.val() == 'start') {

    // Block the UI while we get things ready.
    $.blockUI({ message: 'Signing ...' });
    pki.init({
        ready: sign, // As soon as the component is ready we'll perform the signature.
        defaultError: onWebPkiError
    });

}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L40-L49)

In the function `sign()`, we invoke the Web PKI to perform the digital signature algorithm with the private key of the certificate, using as input data the data returned by PKI Express in the
backend:

```js
// -------------------------------------------------------------------------------------------------
// Function called when the page is rendered on the "start" state. This will happen after the
// "start" step on server-side (see method init() above).
// -------------------------------------------------------------------------------------------------
function sign() {

    // Call signHash() on the Web PKI component passing the "to-sign-hash", the digest algorithm and
    // the certificate selected by the user.
    pki.signHash({
        thumbprint: formElements.certThumbField.val(),
        hash: formElements.toSignHashField.val(),
        digestAlgorithm: formElements.digestAlgorithmField.val()
    }).success(function (signature) {
        // ...
    });
}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L117-L129)

Once the signature algorithm is finished, we fill in the result in a hidden field in the page, change the `state` to `complete` and make a new post back for the backend:

```js
}).success(function (signature) {

    formElements.signatureField.val(signature);
    formElements.stateField.val('complete');
    formElements.form.submit();

});
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L129-L136)

### 5. Signature termination on backend

In the backend, the `PadesController` controller is again invoked to handle the post back done with the result of the digital signature algorithm. The method `post()` is responsible for
dealing with the request, but this time we have `state == 'complete'`:

```java
} else if (state.equals("complete")) {

	// This block will be executed only when it's on the "complete" step. In this sample, the state is set as
	// "complete" programatically after the Web PKI component perform the signature and submit the form (see
	// method sign() on signature-form.js).

	// ...
}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L144-L192)

We get an instance of the `SignatureFinisher` class and provide the file being signed, the filename of the transfer file data and the result of the signature algorithm done in the
frontend with the Web PKI:

```java
// Get an instance of the SignatureFinisher class, responsible for completing the signature process.
SignatureFinisher signatureFinisher = new SignatureFinisher(Util.getPkiExpressConfig());

// Set PKI default options (see Util.java)
Util.setPkiDefaults(signatureFinisher);

// Set PDF to be signed. It's the same file we used on "start" step.
signatureFinisher.setFileToSign(fileToSign);

// Set transfer file.
signatureFinisher.setTransferFilePath(transferFile);

// Set the signature value.
signatureFinisher.setSignature(signature);
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L151-L164)

We generate a random filename to receive the signed PDF:

```java
// Generate path for output file and add to signature finisher.
String filename = UUID.randomUUID() + ".pdf";
signatureFinisher.setOutputFilePath(Application.getTempFolderPath().resolve(filename));
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L166-L168)

We have completed the signing process:

```java
// Complete the signature process.
signatureFinisher.complete();
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L170-L171)

After this command, the signed file is saved in the randomly generated filename above. It is then at the discretion of your application to move this file to the correct location, be it
database, file system or storage service.
