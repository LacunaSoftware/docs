# Node.js SPA samples project

The **Node.js SPA samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a Node.js project following the Single Page Application pattern with [AngularJS](https://angularjs.org/) on the frontend.
It is hosted on GitHub at:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/NodeJS/angular-spa

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Generate an API access token on the [REST PKI website](https://pki.rest/)
1. Paste your access token on the file [restpki-client.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/angular-spa/restpki-client.js)
1. Install dependencies: `npm install`
1. Run application: `npm start`
1. Access the URL [http://localhost:3000](http://localhost:3000)

## Project map

This section lists where to find the relevant parts in each feature sample on this project.

<a name="auth" />
### Authentication with digital certificate

* API: [app.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/angular-spa/app.js)
* SPA Controller: [authentication.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/angular-spa/webapp/js/controllers/authentication.js)
* SPA Template: [authentication.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/views/authentication.html)

<a name="pades" />
### PAdES signature with file already on server

* API: [app.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/angular-spa/app.js)
* SPA Controller: [pades-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/angular-spa/webapp/js/controllers/pades-signature.js)
* SPA Template: [pades-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/angular-spa/webapp/views/pades-signature.html)

<a name="pades-upload" />
### PAdES signature with file uploaded by user

Not yet available on this project.

<a name="pades-cosign" />
### PAdES co-signature

Not yet available on this project.

<a name="pdf-marks" />
### PAdES marks

Not yet available on this project.

<a name="pades-server" />
### PAdES signature using server key

Not yet available on this project.

<a name="pades-wo-client" />
### PAdES signature without client communication

Not yet available on this project.

<a name="open-pades" />
### Open/validate an existing PAdES signature

Not yet available on this project.

<a name="print" />
### Printer-friendly version

Not yet available on this project.

<a name="cades" />
### CAdES signature with file already on server

Not yet available on this project.

<a name="cades-upload" />
### CAdES signature with file uploaded by user

Not yet available on this project.

<a name="cades-cosign" />
### CAdES co-signature

Not yet available on this project.

<a name="cades-server" />
### CAdES signature using server key

Not yet available on this project.

<a name="open-cades" />
### Open/validate an existing CAdES signature

Not yet available on this project.

<a name="xml-full" />
### XML signature of the entire document

Not yet available on this project.

<a name="xml-element" />
### XML signature of an element

Not yet available on this project.

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

