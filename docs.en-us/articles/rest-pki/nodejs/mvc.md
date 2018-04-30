# Node.js MVC samples project

The **Node.js MVC samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a Node.js project following the Model-View-Controller pattern. It is hosted on GitHub at:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/NodeJS/mvc

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Generate an API access token on the [REST PKI website](https://pki.rest/)
1. Paste your access token on the file [restpki-client.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/restpki-client.js)
1. Install dependencies: `npm install`
1. Run application: `npm start`
1. Access the URL [http://localhost:3000](http://localhost:3000)

## Project map

This section lists where to find the relevant parts in each feature sample on the project.

<a name="auth" />
### Authentication with digital certificate

* Route: [authentication.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/authentication.js)
* Views:
  * [authentication.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/authentication.jade)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/public/javascripts/signature-form.js))
  * [authentication-complete.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/authentication-complete.jade)

<a name="pades" />
### PAdES signature with file already on server

* Route: [pades-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/pades-signature.js)
  * [pades-signature.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/pades-signature.jade)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/public/javascripts/signature-form.js))
  * [pades-signature-complete.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/pades-signature-complete.jade)

<a name="pades-upload" />
### PAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the route
[upload.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/upload.js)
and view
[upload.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/upload.jade))
is done the control flow is the same as in the sample [PAdES signature with file already on server](#pades), but with the URL parameter `userfile` filled.

<a name="pades-cosign" />
### PAdES co-signature

After the control flow of the sample [PAdES signature with file already on server](#pades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `userfile` filled.

<a name="pdf-marks" />
### PAdES marks

Not yet available on this project.

<a name="pades-server" />
### PAdES signature using server key

* Route: [pades-signature-server-key.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/pades-signature-server-key.js)
  * [pades-signature-complete.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/pades-signature-complete.jade)

<a name="pades-wo-client" />
### PAdES signature without client communication

Not yet available on this project.

<a name="open-pades" />
### Open/validate an existing PAdES signature

* Controller: [open-pades-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/open-pades-signature.js)
  * [open-pades-signature.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/open-pades-signature.jade)

<a name="print" />
### Printer-friendly version

After the control flow of the sample [PAdES signature with file already on server](#pades) is completed and the link *Download a printer-friendly version of the signed file* is clicked,
the flow goes to the file
[printer-friendly-version.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/printer-friendly-version.js)
with the URL parameter `file` filled.

<a name="cades" />
### CAdES signature with file already on server

* Route: [cades-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/cades-signature.js)
  * [cades-signature.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/cades-signature.jade)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/public/javascripts/signature-form.js))
  * [cades-signature-complete.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/cades-signature-complete.jade)

<a name="cades-upload" />
### CAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the route
[upload.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/upload.js)
and view
[upload.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/upload.jade))
is done the control flow is the same as in the sample [CAdES signature with file already on server](#cades), but with the URL parameter `userfile` filled.

<a name="cades-cosign" />
### CAdES co-signature

After the control flow of the sample [CAdES signature with file already on server](#cades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `cmsfile` filled.

<a name="cades-server" />
### CAdES signature using server key

* Route: [cades-signature-server-key.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/cades-signature-server-key.js)
  * [cades-signature-complete.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/cades-signature-complete.jade)

<a name="open-cades" />
### Open/validate an existing CAdES signature

* Controller: [open-cades-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/open-cades-signature.js)
  * [open-cades-signature.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/open-cades-signature.jade)

<a name="xml-full" />
### XML signature of the entire document

* Route: [xml-full-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/xml-full-signature.js)
  * [xml-full-signature.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/xml-full-signature.jade)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/public/javascripts/signature-form.js))
  * [xml-signature-complete.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/xml-signature-complete.jade)

<a name="xml-element" />
### XML signature of an element

* Route: [xml-element-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/xml-element-signature.js)
  * [xml-element-signature.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/xml-element-signature.jade)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/public/javascripts/signature-form.js))
  * [xml-signature-complete.jade](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/xml-signature-complete.jade)

<a name="xades-element" />
### XAdES signature of an element

Not yet available on this project.

<a name="open-xml" />
### Open/validate signatures on an existing XML file

Not yet available on this project.

<a name="batch" />
### Batch of PAdES signatures

Not yet available on this project.

<a name="batch-optimized" />
### Optimized batch of PAdES signatures

Not yet available on this project.

<a name="batch-cades" />
### Batch of CAdES signatures

Not yet available on this project.

<a name="batch-xml-element" />
### Batch of XML signatures of elements on the same document

Not yet available on this project.
