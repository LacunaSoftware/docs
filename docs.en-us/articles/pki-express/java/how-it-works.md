# Signature sample explained - PKI Express on Java

This article explains how the digital signature process performed in the PKI Express Java Samples project works.

## Main code files

* Controller [PadesSignatureExpressController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)
* View [pades-signature-express/index](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/pades-signature-express/index.html)
* JavaScript Module [signature-start-form](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)
* View [pades-signature-express/start](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/pades-signature-express/start.html)
* JavaScript Module [signature-complete-form](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-complete-form.js)
* View [pades-signature-express/signature-info](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/pades-signature-express/signature-info.html)

## Subscription process

### 1. User goes to the signature page

At this time, the user visits the URL `/pades-signature-express` (`GET`). The controller `PadesSignatureExpressController` is responsible for responding to the request, more specifically in
the `get()`:

[!include[pades-signature-get](../../../../includes/pki-express/java/how-it-works/pades-signature-get.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

At this time, we just render the signature page with the variable `state` set to `initial`. This variable is used to signal where the signing process is.

[!include[pades-signature-express](../../../../includes/pki-express/java/how-it-works/pades-signature-express-model-attribute.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

> [!NOTE]
> The variables `fileToSign`and `userfile` are merely details of the example.

The rendered page is the view `pades-signature-express`. At the end of loading this, we passed references to the page elements for the JavaScript module `signatureStartForm`:

[!include[pades-signature-express](../../../../includes/pki-express/java/how-it-works/pades-signature-express-js.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

The module `signatureStartForm` blocks the screen and triggers Web PKI initialization, passing the function `loadCertificates()` as callback when the initialization has completed:

[!include[init-js](../../../../includes/pki-express/java/how-it-works/start-form-init.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

In the function `loadCertificates()`, we trigger the loading of the certificates available on the user's computer, populating the element `<select>` from the page:

[!include[load-certificates-js](../../../../includes/pki-express/java/how-it-works/start-form-load-certificates.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

### 2. Users click the **Sign File** button

Previously, the JavaScript module `signatureStartForm` registered JavaScript function `startSignature()` to be called when the **Sign File** button is clicked:

[!include[wireup-js](../../../../includes/pki-express/java/how-it-works/start-form-wireup-button.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

> [!NOTE]
> Note that it is critical that the button on the page has `type="button"`, and don't `type="submit"`, otherwise a postback would occur immediately upon clicking the button.

Therefore, when the user clicks the **Sign File** button, the `startSignature()` function of `signatureStartForm` is invoked:

[!include[startSignature-js](../../../../includes/pki-express/java/how-it-works/start-form-startSignature.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

In this function, after blocking the page, we get the thumbprint of the selected certificate and place it in one of the hidden fields of the page (this value will be necessary at another time
in the subscription process):

[!include[get-thumbprint-js](../../../../includes/pki-express/java/how-it-works/start-form-get-thumbprint.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

We then invoke the function `readCertificates()` of the PKI Web to obtain the encoding of the chosen certificate (public part of the certificate, the ".cer", without the private key):

[!include[readCertificate-js](../../../../includes/pki-express/java/how-it-works/start-form-readCertificate.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

Once the certificate is read, we fill in a hidden field of the page with the result and do the postback:

[!include[fill-hidden-fields-js](../../../../includes/pki-express/java/how-it-works/start-form-fill-hidden-fields.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

### 3. Signing backend start

In the backend, the controller `PadesSignatureExpressController` is again invoked to handle the postback made from the frontend with the certificate chosen to perform the signature, done for the URL `pades-signature-express/start` with a verb `POST`. The method `postStart()` is responsible for handling the request:

[!include[pades-signature-post-start](../../../../includes/pki-express/java/how-it-works/pades-signature-post-start.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

At this point, we start the signature using the class `PadesSignatureStarter` passing the file to be signed and the encoding of the certificate chosen for signature:

[!include[pades-signature-starter](../../../../includes/pki-express/java/how-it-works/pades-signature-starter.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

Opcionally, we configure the signature appearance:

[!include[pades-signature-visual-representation](../../../../includes/pki-express/java/how-it-works/pades-signature-visual-rep.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

> [!NOTE]
> For more details on configuration options for the appearance of the subscription, see the class [PadesVisualElements](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/util/express/PadesVisualElements.java)

Finally, we conclude the initial step, obtaining the necessary data to perform the digital signature algorithm:

[!include[pades-signature-start](../../../../includes/pki-express/java/how-it-works/pades-signature-start.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

An important point: the class `PadesSignatureStarter` saves a file called transfer data file containing information that needs to be retrieved later in the subscription process. By default,
this file is stored in the system temporary folder, but another folder can be configured. The method `PadesSignatureStarter.getTransferFile()` returns the filename of the file, which is
populated in a hidden field on the page:

```java
model.addAttribute("transferFile", result.getTransferFile());
```
[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

> [!NOTE]
> Security concerns are taken in generating the name of this file, so it is impossible for a user to guess the transfer data file from another user's signing process. Also, only the
filename is sent to the page, not the full path, so it is also not possible for a user to induce the web application to read a file in an arbitrary folder.

After a bit of housekeeping, we rendered the view again `pades-signature-express/start`:

```java
return "pades-signature-express/start";
```
[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

### 4. Realization of the digital signature algorithm in the frontend

Once the page is loaded again, the `init()` function of the `signatureCompleteForm ` is invoked. We then blocked the page and invoked the Web PKI initialization, but this time passing the function `sign()` as callback:

[!include[init-js](../../../../includes/pki-express/java/how-it-works/complete-form-init.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-complete-form.js)

In the function `sign()`, we invoke the Web PKI to perform the digital signature algorithm with the private key of the certificate, using as input data the data returned by PKI Express in the backend:

[!include[sign-js](../../../../includes/pki-express/java/how-it-works/complete-form-sign.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-complete-form.js)

Once the signature algorithm is finished, we fill in the result in a hidden field in the page and make a new post back for the backend:

[!include[fill-hidden-fields-js](../../../../includes/pki-express/java/how-it-works/complete-form-fill-hidden-fields.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-complete-form.js)

### 5. Signature termination on backend

In the backend, the controller `PadesSignatureExpressController` is again invoked to handle the postback made from the frontend with  the result of the digital signature algorithm, done for the URL `pades-signature-express/complete` with a verb `POST`. The method `postComplete()` is responsible for handling the request:

[!include[pades-signature-post-complete](../../../../includes/pki-express/java/how-it-works/pades-signature-post-complete.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

We get an instance of the `SignatureFinisher` class and provide the file being signed, the filename of the transfer file data and the result of the signature algorithm done in the frontend with the Web PKI:

[!include[pades-signature-finisher](../../../../includes/pki-express/java/how-it-works/pades-signature-finisher.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

We generate a random filename to receive the signed PDF:

[!include[pades-signature-return](../../../../includes/pki-express/java/how-it-works/pades-signature-return.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

We have completed the signing process:

[!include[pades-signature-finish](../../../../includes/pki-express/java/how-it-works/pades-signature-finish.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

After this command, the signed file is saved in the randomly generated filename above. It is then at the discretion of your application to move this file to the correct location, be it database, file system or storage service.
