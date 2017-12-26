# PHP 5.2 samples project

The **PHP 5.2 samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a project using **PHP 5.2**. It is hosted on GitHub at:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/PHP/legacy52

> [!NOTE]
> Only use this project if you cannot use the [PHP 5.5+ samples project](current.md) nor the [PHP 5.3/5.4 samples project](legacy.md).

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Generate an API access token on the [REST PKI website](https://pki.rest/)
1. Paste your access token on the file [PHP/legacy52/util.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/util.php#L10-L14)
1. In a command prompt, navigate to the folder `PHP/legacy52` and run the command `composer install` to download the dependencies (if you don't have Composer installed, get it [here](https://getcomposer.org/))
1. Setup a website on your local HTTP server pointing to the `PHP/legacy52` folder
1. Open the index.php file on the browser on the corresponding URL (depending on the previous step)

## Project map

This section lists where to find the relevant parts in each feature sample on the project.

<a name="auth" />
### Authentication with digital certificate

* [authentication.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/authentication.php)
	* JavaScript: (inside authentication.php)
* [authentication-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/authentication-action.php)

<a name="pades" />
### PAdES signature with file already on server

* [pades-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/pades-signature.php)
  * JavaScript: (inside pades-signature.php)
* [pades-signature-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/pades-signature-action.php)

<a name="pades-upload" />
### PAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on
[upload.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/upload.php))
is done the control flow is the same as in the sample [PAdES signature with file already on server](#pades), but with the URL parameter `userfile` filled.

<a name="pades-cosign" />
### PAdES co-signature

After the control flow of the sample [PAdES signature with file already on server](#pades) is completed and the link *Click here to co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `userfile` filled.

<a name="pdf-marks" />
### PAdES marks

Not yet available on this project.

<a name="pades-server" />
### PAdES signature using server key

Not yet available on this project.

<a name="open-pades" />
### Open/validate and existing PAdES signature

Not yet available on this project.

<a name="print" />
### Printer-friendly version

Not yet available on this project.

<a name="cades" />
### CAdES signature with file already on server

* [cades-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/cades-signature.php)
  * JavaScript: (inside cades-signature.php)
* [cades-signature-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/cades-signature-action.php)

<a name="cades-upload" />
### CAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on
[upload.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/upload.php))
is done the control flow is the same as in the sample [CAdES signature with file already on server](#cades), but with the URL parameter `userfile` filled.

<a name="cades-cosign" />
### CAdES co-signature

After the control flow of the sample [CAdES signature with file already on server](#cades) is completed and the link *Click here to co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `cmsfile` filled.

<a name="cades-server" />
### CAdES signature using server key

Not yet available on this project.

<a name="open-cades" />
### Open/validate an existing CAdES signature

Not yet available on this project.

<a name="xml-full" />
### XML signature of the entire document

* [xml-full-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/xml-full-signature.php)
  * JavaScript: (inside xml-full-signature.php)
* [xml-full-signature-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/xml-full-signature-action.php)

<a name="xml-element" />
### XML signature of an element

* [xml-element-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/xml-element-signature.php)
  * JavaScript: (inside xml-element-signature.php)
* [xml-element-signature-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/xml-element-signature-action.php)

<a name="xades-element" />
### XAdES signature of an element

Not yet available on this project.

<a name="open-xml" />
### Open/validate signatures on an existing XML file

Not yet available on this project.

<a name="batch" />
### Batch signature

* [batch-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/batch-signature.php)
  * JavaScript: [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/content/js/batch-signature-form.js)
  * AJAX handlers: [batch-signature-start.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/batch-signature-start.php)
    and [batch-signature-complete.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/batch-signature-complete.php)

<a name="batch-optimized" />
### Optimized batch signature

Not yet available on this project.

<a name="batch-cades" />
### CAdES batch signature

Not yet available on this project.

<a name="batch-xml-element" />
### Batch signature of XML elements on the same document

Not yet available on this project.