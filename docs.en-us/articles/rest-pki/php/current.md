# PHP 5.5+ samples project

The **PHP 5.5+ samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a project using **PHP 5.5+** (including 7.x). It is hosted on GitHub at:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/PHP/standard

> [!NOTE]
> For projects targeting earlier PHP versions, [click here](index.md).

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Generate an API access token on the [REST PKI website](https://pki.rest/)
1. Paste your access token on the file [PHP/standard/util.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/util.php#L10-L14)
1. In a command prompt, navigate to the folder `PHP/standard` and run the command `composer install` to download the dependencies (if you don't have Composer installed, get it [here](https://getcomposer.org/))
1. Setup a website on your local HTTP server pointing to the `PHP/standard` folder
1. Open the index.php file on the browser on the corresponding URL (depending on the previous step)

## Project map

This section lists where to find the relevant parts in each feature sample on the project.

<a name="auth" />
### Authentication with digital certificate

* [authentication.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/authentication.php)
  * Javascript: [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/content/js/signature-form.js)
* [authentication-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/authentication-action.php)

<a name="pades" />
### PAdES signature with file already on server

* [pades-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/pades-signature.php)
  * Javascript: [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/content/js/signature-form.js)
* [pades-signature-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/pades-signature-action.php)

<a name="pades-upload" />
### PAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on
[upload.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/upload.php))
is done the control flow is the same as in the sample [PAdES signature with file already on server](#pades), but with the URL parameter `userfile` filled.

<a name="pades-cosign" />
### PAdES co-signature

After the control flow of the sample [PAdES signature with file already on server](#pades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `userfile` filled.

<a name="pdf-marks" />
### PAdES marks

This feature is demonstrated as an optional configuration on the [PAdES signature with file already on server](#pades)
sample which by default starts commented out. To enable it, uncomment the following line on
[pades-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/pades-signature.php):

```php
array_push($signatureStarter->pdfMarks, getPdfMark(1));
```

> [!TIP]
> Try changing the argument to the `getPdfMark()` function to see different PDF mark configurations

The relevant code is on the file [util-pades.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/util-pades.php), function `getPdfMark()`.

<a name="pades-server" />
### PAdES signature using server key

 * [pades-signature-server-key.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/pades-signature-server-key.php)

<a name="open-pades" />
### Open/validate an existing PAdES signature

* [open-pades-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/open-pades-signature.php)

<a name="print" />
### Printer-friendly version

After the control flow of the sample [PAdES signature with file already on server](#pades) is completed and the link *Download a printer-friendly version of the signed file* is clicked,
the flow goes to the file
[printer-friendly-version.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/printer-friendly-version.php)
with the URL parameter `file` filled.

The generated PDF contains links to the file [check.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/check.php), which shows details of the signatures.

<a name="cades" />
### CAdES signature with file already on server

* [cades-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/cades-signature.php)
  * Javascript: [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/content/js/signature-form.js)
* [cades-signature-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/cades-signature-action.php)

<a name="cades-upload" />
### CAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on
[upload.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/upload.php))
is done the control flow is the same as in the sample [CAdES signature with file already on server](#cades), but with the URL parameter `cmsfile` filled.

<a name="cades-cosign" />
### CAdES co-signature

After the control flow of the sample [CAdES signature with file already on server](#cades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `userfile` filled.

<a name="cades-server" />
### CAdES signature using server key

* [cades-signature-server-key.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/cades-signature-server-key.php)

<a name="open-cades" />
### Open/validate an existing CAdES signature

* [open-cades-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/open-cades-signature.php)

<a name="xml-full" />
### XML signature of the entire document

* [xml-full-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/xml-full-signature.php)
  * Javascript: [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/content/js/signature-form.js)
* [xml-full-signature-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/xml-full-signature-action.php)

<a name="xml-element" />
### XML signature of an element

* [xml-element-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/xml-element-signature.php)
  * Javascript: [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/content/js/signature-form.js)
* [xml-element-signature-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/xml-element-signature-action.php)

<a name="xades-element" />
### XAdES signature of an element

Not yet available on this project.

<a name="open-xml" />
### Open/validate signatures on an existing XML file

* [open-xml-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/open-xml-signature.php)

<a name="batch" />
### Batch signature

* [batch-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/batch-signature.php)
  * Javascript: [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/content/js/batch-signature-form.js)
  * AJAX handlers: [batch-signature-start.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/batch-signature-start.php)
    and [batch-signature-complete.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/batch-signature-complete.php)

<a name="batch-optimized" />
### Optimized batch signature

Not yet available on this project.

<a name="batch-cades" />
### CAdES batch signature

Not yet available on this project.

<a name="batch-xml-element" />
### XML Element batch signature on the same document

Not yet available on this project.
