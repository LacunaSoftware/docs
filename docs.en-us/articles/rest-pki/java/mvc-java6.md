# Java 6 Spring MVC samples project

The **Java 6 Spring MVC samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a **Java 6** web application using the [Spring MVC](http://spring.io/) framework. It is hosted on GitHub at:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/Java/spring-mvc-java6

> [!NOTE]
> This project is for **Java 6** only. For Java 7+, see project [Spring MVC](mvc.md).

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Generate an API access token on the [REST PKI website](https://pki.rest/)
1. Paste your access token on the file [Java/spring-mvc-java6/src/main/resources/application.properties](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/application.properties#L27-L30)
1. In a command prompt, navigate to the folder `Java/sample-spring-java6` and run the command
   `gradlew run` (on Linux `./gradlew run`). If you are using Windows, you can alternatively
   double-click the file `Run-Sample.bat`.
1. Once you see the message "Started Application in x.xxx seconds" (the on-screen percentage
   will *not* reach 100%), open a web browser and go the URL http://localhost:60458

## Project map

This section lists where to find the relevant parts in each feature sample on the project.

<a name="auth" />
### Authentication with digital certificate

* Controller: [AuthenticationController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/AuthenticationController.java)
* Views:
	* [authentication.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/authentication.html)
	  (Javascript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/static/js/signature-form.js))
	* [authentication-success.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/authentication-success.html)
	* [authentication-failed.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/authentication-failed.html)

<a name="pades" />
### PAdES signature with file already on server

* Controller: [PadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/PadesSignatureController.java)
* Views:
  * [pades-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/pades-signature.html)
    (Javascript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/static/js/signature-form.js))
  * [pades-signature-info.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/pades-signature-info.html)

<a name="pades-upload" />
### PAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the controller
[UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/UploadController.java)
and view
[upload.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/upload.html))
is done the control flow is the same as in the sample [PAdES signature with file already on server](#pades), but with the URL parameter `userfile` filled.

<a name="pades-cosign" />
### PAdES co-signature

After the control flow of the sample [PAdES signature with file already on server](#pades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `userfile` filled.

<a name="pdf-marks" />
### PAdES marks

This feature is demonstrated as an optional configuration on the [PAdES signature with file already on server](#pades)
sample which by default starts commented out. To enable it, uncomment the following line on
[PadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/PadesSignatureController.java):

```java
signatureStarter.addPdfMark(PadesVisualElements.getPdfMark(1));
```

> [!TIP]
> Try changing the argument to the `getPdfMark(int)` method to see different PDF mark configurations

The relevant code is on the class [PadesVisualElements](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/util/PadesVisualElements.java), method `getPdfMark(int)`.

<a name="pades-server" />
### PAdES signature using server key

Not yet available on this project.

<a name="pades-wo-client" />
### PAdES signature without client communication

Not yet available on this project.

<a name="open-pades" />
### Open/validate an existing PAdES signature

* Controller: [OpenPadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/OpenPadesSignatureController.java)
* View: [open-pades-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/open-pades-signature.html)

<a name="print" />
### Printer-friendly version

Not yet available on this project.

<a name="cades" />
### CAdES signature with file already on server

* Controller: [CadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/CadesSignatureController.java)
* Views:
  * [cades-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/cades-signature.html)
  (Javascript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/static/js/signature-form.js))
  * [cades-signature-info.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/cades-signature-info.html)

<a name="cades-upload" />
### CAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the controller
[UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/UploadController.java)
and view
[upload.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/upload.html))
is done the control flow is the same as in the sample [CAdES signature with file already on server](#cades), but with the URL parameter `userfile` filled.

<a name="cades-cosign" />
### CAdES co-signature

After the control flow of the sample [CAdES signature with file already on server](#cades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `cmsfile` filled.

<a name="cades-server" />
### CAdES signature using server key

Not yet available on this project.

<a name="open-cades" />
### Open/validate an existing CAdES signature

* Controller: [OpenCadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/OpenCadesSignatureController.java)
* View: [open-cades-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/open-cades-signature.html)

<a name="xml-full" />
### XML signature of the entire document

* Controller: [XmlSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/XmlSignatureController.java)
* Views:
  * [xml-full-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/xml-full-signature.html)
  (Javascript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/static/js/signature-form.js))
  * [xml-signature-info.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/xml-signature-info.html)

<a name="xml-element" />
### XML signature of an element

* Controller: [XmlSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/XmlSignatureController.java)
* Views:
  * [xml-element-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/xml-element-signature.html)
  (Javascript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/static/js/signature-form.js))
  * [xml-signature-info.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/xml-signature-info.html)

<a name="xades-element" />
### XAdES signature of an element

Not yet available on this project.

<a name="open-xml" />
### Open/validate signatures on an existing XML file

Not yet available on this project.

<a name="batch" />
### Batch of PAdES signatures

* Controller: [BatchSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/BatchSignatureController.java)
* View: [batch-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/batch-signature.html)
  * Javascript: [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/static/js/batch-signature-form.js)

<a name="batch-optimized" />
### Optimized batch of PAdES signatures

Not yet available on this project.

<a name="batch-cades" />
### Batch of CAdES signatures

Not yet available on this project.

<a name="batch-xml-element" />
### Batch of XML signatures of elements on the same document

Not yet available on this project.