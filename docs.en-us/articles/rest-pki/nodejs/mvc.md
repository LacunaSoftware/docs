# Node.js MVC samples project

The **Node.js MVC samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a Node.js project following the Model-View-Controller pattern. It is hosted on GitHub at:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/nodejs/expressmvc

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. Install dependencies: `npm install`
1. Run application: `npm start`
1. Access the URL [http://localhost:3000](http://localhost:3000)

## Project map

This section lists where to find the relevant parts in each feature sample on the project.

<a name="auth" />
### Authentication with digital certificate

* Route: [authentication-restpki.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/routes/authentication-restpki.js)
* Views:
  * [authentication-rest/index.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/authentication-rest/index.pug)
    (JavaScript on [authentication-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/public/javascripts/authentication-form.js))
  * [authentication-rest/failed.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/authentication-rest/failed.pug)

<a name="pades" />
### PAdES signature with file already on server

* Route: [pades-signature-restpki.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/routes/pades-signature-restpki.js)
* Views: 
  * [pades-signature-rest/index.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/pades-signature-rest/index.pug)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/public/javascripts/signature-form.js))
  * [pades-signature-rest/complete.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/pades-signature-rest/complete.pug)

<a name="pades-upload" />
### PAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the route
[server-files.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/routes/server-files.js)
and view
[server-files/index.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/server-files/index.pug))
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

* Route: [pades-server-key-express.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/routes/pades-server-key-express.js)
* View: [pades-server-key-express/index.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/pades-server-key-express/index.pug)

<a name="pades-wo-client" />
### PAdES signature without client communication

Not yet available on this project.

<a name="open-pades" />
### Open/validate an existing PAdES signature

* Route: [open-pades-restpki.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/routes/open-pades-restpki.js)
* View: [open-pades-rest/index.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/open-pades-rest/index.pug)

<a name="print" />
### Printer-friendly version

After the control flow of the sample [PAdES signature with file already on server](#pades) is completed and the link *Download a printer-friendly version of the signed file* is clicked,
the flow goes to the route
[printer-version-pades-restpki.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/routes/printer-version-pades-restpki.js)
with the URL parameter `file` filled.

<a name="cades" />
### CAdES signature with file already on server

* Route: [cades-signature-restpki.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/routes/cades-signature-restpki.js)
* Views:  
  * [cades-signature-rest/index.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/cades-signature-rest/index.pug)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/public/javascripts/signature-form.js))
  * [cades-signature-rest/complete.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/cades-signature-rest/complete.pug)

<a name="cades-upload" />
### CAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the route
[server-files.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/routes/server-files.js)
and view
[server-files/index.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/server-files/index.pug))
is done the control flow is the same as in the sample [CAdES signature with file already on server](#cades), but with the URL parameter `userfile` filled.

<a name="cades-cosign" />
### CAdES co-signature

After the control flow of the sample [CAdES signature with file already on server](#cades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `cmsfile` filled.

<a name="cades-server" />
### CAdES signature using server key

* Route: [cades-server-key-express.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/routes/cades-server-key-express.js)
* View: [cades-server-key-express/index.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/cades-server-key-express/index.pug)

<a name="open-cades" />
### Open/validate an existing CAdES signature

* Route: [open-cades-restpki.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/routes/open-cades-restpki.js)
* View: [open-cades-rest/index.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/open-cades-rest/index.pug)

<a name="xml-full" />
### XML signature of the entire document

* Route: [xml-signature-restpki.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/routes/xml-signature-restpki.js)
* Views:
  * [xml-signature-rest/index.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/xml-signature-rest/index.pug)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/public/javascripts/signature-form.js))
  * [xml-signature-rest/complete.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/xml-signature-rest/complete.pug)

<a name="xml-element" />
### XML signature of an element

* Route: [xml-nfe-signature-restpki.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/routes/xml-nfe-signature-restpki.js)
* Views:
  * [xml-nfe-signature-rest/index.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/xml-nfe-signature-rest/index.pug)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/public/javascripts/signature-form.js))
  * [xml-nfe-signature-rest/complete.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/xml-nfe-signature-rest/complete.pug)

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
