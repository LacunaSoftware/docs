# PHP Plain Samples Project

This *samples project* shows how to use [PKI Express](../../index.md) together with the [Web PKI](../../../web-pki/index.md) browser component on a **PHP 5.5+ plain** project (including 7.x). This project is hosted on GitHub:

<https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/php/plain>

> [!NOTE]
> If you are using a previous version of PHP, please [contact us](https://www.lacunasoftware.com/en/home/purchase).

## Running The Project

Follow these steps to run the sample:

1. [Install PKI Express](../setup/index.md)
1. [Download the project](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. Navigate to the folder `/php/plain`
1. In a command prompt, run the command `composer install` to install the dependencies
   (if you don't have Composer installed, get it [here](https://getcomposer.org/))
1. Execute the project by running the command `composer start`
1. Access the URL <http://localhost:8000>

## Project Map

This section lists where to find the relevant parts in each feature sample on the project:

### Authentication With Digital Certificates

- [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/authentication-express/index.php)
  - JavaScript: [authentication-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/authentication-form.js)
- [complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/authentication-express/complete.php)

### PAdES Signature With File Already on Server

After choosing one of the available server files (which is crudely implemented for demonstration purposes on [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/index.php) and [action.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/action.php)) is done, the control flow is performed by the following files:

- [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-signature-express/index.php)
  - JavaScript: [signature-start-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-start-form.js)
- [start.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-signature-express/start.php)
  - JavaScript: [signature-complete-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-complete-form.js)
- [complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-signature-express/complete.php)

### PAdES Signature With File Uploaded by User

After the file upload (which is crudely implemented for demonstration purposes on [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) is done, the control flow is performed by the following files:

- [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-signature-express/index.php)
  - JavaScript: [signature-start-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-start-form.js)
- [start.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-signature-express/start.php)
  - JavaScript: [signature-complete-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-complete-form.js)
- [complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-signature-express/complete.php)

### PAdES Co-Signature

After choosing one of the available **already-signed** server files (which is crudely implemented for demonstration purposes on [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/index.php) and [action.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/action.php)) is done, the control flow is performed by the following files:

- [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-signature-express/index.php)
  - JavaScript: [signature-start-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-start-form.js)
- [start.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-signature-express/start.php)
  - JavaScript: [signature-complete-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-complete-form.js)
- [complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-signature-express/complete.php)

### PAdES Signature Using a Server Key

After the file upload (which is crudely implemented for demonstration purposes on [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) is done, the control flow is performed by the following files:

- [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-server-key-express/index.php)

### Batch of PAdES Signatures

- [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/batch-pades-signature-rest/index.php)
  - JavaScript: [batch-signature-rest-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/batch-signature-rest-form.js)
  - Ajax handlers: [start.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/batch-pades-signature-rest/start.php) and [complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/batch-pades-signature-rest/complete.php)

### Open/Validate an Existing PAdES Signature

After the file upload (which is crudely implemented for demonstration purposes on [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) is done, the control flow is performed by the following files:

- [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/open-pades-rest/index.php)

### Printer-Friendly Version From a PAdES Signature

Not yet available on this project.

### CAdES Signature With File Already on Server

After choosing one of the available server files (which is crudely implemented for demonstration purposes on [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/index.php) and [action.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/action.php)) is done, the control flow is performed by the following files:

- [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/cades-signature-express/index.php)
  - JavaScript: [signature-start-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-start-form.js)
- [start.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/cades-signature-express/start.php)
  - JavaScript: [signature-complete-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-complete-form.js)
- [complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/cades-signature-express/complete.php)

### CAdES Signature With File Uploaded by User

After the file upload (which is crudely implemented for demonstration purposes on [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) is done, the control flow is performed by the following files:

- [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/cades-signature-express/index.php)
  - JavaScript: [signature-start-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-start-form.js)
- [start.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/cades-signature-express/start.php)
  - JavaScript: [signature-complete-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-complete-form.js)
- [complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/cades-signature-express/complete.php)

### CAdES Co-Signature

After choosing one of the available **already-signed** server files (which is crudely implemented for demonstration purposes on [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/index.php) and [action.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/action.php)) is done, the control flow is performed by the following files:

- [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/cades-signature-express/index.php)
  - JavaScript: [signature-start-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-start-form.js)
- [start.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/cades-signature-express/start.php)
  - JavaScript: [signature-complete-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-complete-form.js)
- [complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/cades-signature-express/complete.php)

### CAdES Signature Using a Server Key

After the file upload (which is crudely implemented for demonstration purposes on [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) is done, the control flow is performed by the following files:

- [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/cades-server-key-express/index.php)

### Batch of CAdES Signatures

Not yet available on this project.

### Open/Validate an Existing CAdES Signature

After the file upload (which is crudely implemented for demonstration purposes on [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) is done, the control flow is performed by the following files:

- [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/open-cades-express/index.php)

### Printer-Friendly Version From a CAdES Signature

Not yet available on this project.

### Signature Package From a CAdES Signature

Not yet available on this project.

### XML Signature of The Entire Document

Not yet available on this project.

### XML Signature of a Brazillian NFe Document

- [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/xml-nfe-signature-express/index.php)
  - JavaScript: [signature-start-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-start-form.js)
- [start.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/xml-nfe-signature-express/start.php)
  - JavaScript: [signature-complete-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-complete-form.js)
- [complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/xml-nfe-signature-express/complete.php)

### XML Signature of a COD Document

Not yet available on this project.

### Open/Validate Signatures on an Existing XML Document

Not yet available on this project.
