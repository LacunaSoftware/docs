# PHP Plain Samples Project

This *samples project* shows how to use [PKI Express](../../index.md) together with the [Web PKI](../../../web-pki/index.md) browser component on a **PHP 5.5+ plain** project (including 7.x). This project is hosted on GitHub:

<https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/php/plain>

> [!NOTE]
> If you are using a previous version of PHP, please [contact us](https://www.lacunasoftware.com/en/home/purchase).

## Running The Project

Follow these steps to run the sample:

1. [Install PKI Express](../setup/index.md)
1. [Download the project](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) or clone the repository: <https://github.com/LacunaSoftware/PkiSuiteSamples.git>
1. Navigate to the folder `/php/plain`
1. In a command prompt, run the command `composer install` to install the dependencies (if you don't have Composer installed, get it [here](https://getcomposer.org/))
1. Execute the project by running the command `composer start`
1. Access the URL <http://localhost:8000>

## Project Map

This section lists where to find the relevant parts in each feature sample on the project:

### Authentication With Digital Certificates

[!include[authentication-sample.md](../../../../includes/pki-express/php/authentication-sample.md)]

### PAdES Signature With File Already on Server

After choosing one of the available server files (which is crudely implemented for demonstration purposes on [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/index.php) and [action.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/action.php)), the control flow is performed by the following files:

[!include[pades-sample.md](../../../../includes/pki-express/php/pades-sample.md)]

### PAdES Signature With File Uploaded by User

After the file upload (which is crudely implemented for demonstration purposes on [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) is done, the control flow is performed by the following files:

[!include[pades-sample.md](../../../../includes/pki-express/php/pades-sample.md)]

### PAdES Co-Signature

After choosing one of the available **already-signed** server files (which is crudely implemented for demonstration purposes on [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/index.php) and [action.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/action.php)), the control flow is performed by the following files:

[!include[pades-sample.md](../../../../includes/pki-express/php/pades-sample.md)]

### PAdES Signature Using a Server Key

After the file upload (which is crudely implemented for demonstration purposes on [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) is done, the control flow is performed by the following files:

[!include[pades-server-key.md](../../../../includes/pki-express/php/pades-server-key-sample.md)]

### Batch of PAdES Signatures

[!include[batch-pades-sample.md](../../../../includes/pki-express/php/batch-pades-sample.md)]

### Open/Validate an Existing PAdES Signature

After the file upload (which is crudely implemented for demonstration purposes on [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) is done, the control flow is performed by the following files:

[!include[open-pades-sample.md](../../../../includes/pki-express/php/open-pades-sample.md)]

### Printer-Friendly Version From a PAdES Signature

Not yet available on this project.

### CAdES Signature With File Already on Server

After choosing one of the available server files (which is crudely implemented for demonstration purposes on [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/index.php) and [action.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/action.php)), the control flow is performed by the following files:

[!include[cades-sample.md](../../../../includes/pki-express/php/cades-sample.md)]

### CAdES Signature With File Uploaded by User

After the file upload (which is crudely implemented for demonstration purposes on [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) is done, the control flow is performed by the following files:

[!include[cades-sample.md](../../../../includes/pki-express/php/cades-sample.md)]

### CAdES Co-Signature

After choosing one of the available **already-signed** server files (which is crudely implemented for demonstration purposes on [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/index.php) and [action.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/action.php)), the control flow is performed by the following files:

[!include[cades-sample.md](../../../../includes/pki-express/php/cades-sample.md)]

### CAdES Signature Using a Server Key

After the file upload (which is crudely implemented for demonstration purposes on [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) is done, the control flow is performed by the following files:

[!include[cades-server-key-sample.md](../../../../includes/pki-express/php/cades-server-key-sample.md)]

### Batch of CAdES Signatures

Not yet available on this project.

### Open/Validate an Existing CAdES Signature

After the file upload (which is crudely implemented for demonstration purposes on [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) is done, the control flow is performed by the following files:

[!include[open-cades-sample.md](../../../../includes/pki-express/php/open-cades-sample.md)]

### Printer-Friendly Version From a CAdES Signature

Not yet available on this project.

### Signature Package From a CAdES Signature

Not yet available on this project.

### XML Signature of The Entire Document

Not yet available on this project.

### XML Signature of a Brazillian NFe Document

[!include[xml-nfe-sample.md](../../../../includes/pki-express/php/xml-nfe-sample.md)]

### XML Signature of a COD Document

Not yet available on this project.

### Open/Validate Signatures on an Existing XML Document

Not yet available on this project.
