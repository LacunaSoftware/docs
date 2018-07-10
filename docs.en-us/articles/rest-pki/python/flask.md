# Python Flash samples project

The **Python Flask samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a Python project using the [Flask](http://flask.pocoo.org/) framework. It is hosted on GitHub at:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/Python

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip)
   or clone the repository
1. Generate an API access token on the [REST PKI website](https://pki.rest/)
1. Paste your access token on the file `sample/utils.py`
1. Install dependencies: `pip install -r requirements.txt`
1. Set the `FLASK_APP` environment variable to define the name of app that
 should be run: `FLASK_APP=sample`
1. Run the web application: `flask run`
1. Access the URL [http://localhost:5000](http://localhost:5000)

## Project map

This section lists where to find the relevant parts in each feature sample on the project.

<a name="auth" />
### Authentication with digital certificate

* View: [authentication.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/authentication.py)
* Templates:
  * [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/authentication/index.html) (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/static/js/signature-form.js))
  * [action.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/authentication/action.html)

<a name="pades" />
### PAdES signature with file already on server

* View: [pades_signature.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/pades_signature.py)
* Templates:
  * [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/pades_signature/index.html) (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/static/js/signature-form.js))
  * [action.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/pades_signature/action.html)

<a name="pades-upload" />
### PAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration puposes on the view [upload.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/upload.py) and template [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/upload/index.html)) is done the control flow is the same as in the sample [PAdES signature with the file already on server](#pades), but with the URL parameter `userfile` filled.

<a name="pades-cosign" />
### PAdES co-signature

After the control flow of the sample [PAdES signature with file already on server](#pades) is completed an the link *Co-sign with another certificate* is clicked, the same control flow is repeated, but now with the URL parameter `userfile` filled.

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

* View: [cades_signature.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/cades_signature.py)
* Templates:
  * [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/cades_signature/index.html) (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/static/js/signature-form.js))
  * [action.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/cades_signature/action.html)

<a name="cades-upload" />
### CAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration puposes on the view [upload.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/upload.py) and template [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/upload/index.html)) is done the control flow is the same as in the sample [CAdES signature with file already on server](#cades), but with the URL parameter `userfile` filled.

<a name="cades-cosign" />
### CAdES co-signature

After the control flow of the sample [CAdES signature with file already on server](#cades) is completed and the link *Co-sign with another certificate* is clicked, the same control flow is repeated, but now with the URL parameter `cmsfile` filled.

<a name="cades-server" />
### CAdES signature using server key

Not yet available on this project.

<a name="open-cades" />
### Open/validate an existing CAdES signature

Not yet available on this project.

<a name="xml-full" />
### XML signature of the entire document

* View: [xml_signature.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/xml_signature.py)
* Templates:
  * [full.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/xml_signature/full.html)
  (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/xml_signature/full.html))
  * [action.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/xml_signature/action.html)

<a name="xml-element" />
### XML signature of an element

* View: [xml_signature.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/xml_signature.py)
* Templates:
  * [element.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/xml_signature/element.html) (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/xml_signature/full.html))
  * [action.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/xml_signature/action.html)

<a name="xades-element" />
### XAdES signature of an element

Not yet available on this project.

<a name="open-xml" />
### Open/validate signatures on an existing XML file

Not yet available on this project.

<a name="batch" />
### Batch of PAdES signatures

* View: [batch_pades_signature.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/batch_pades_signature.py)
* Template: [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/batch_pades_signature/index.html) (JavaScript on [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/static/js/batch-signature-form.js)) 

<a name="batch-optimized" />
### Optimized batch of PAdES signatures

Not yet available on this project.

<a name="batch-cades" />
### Batch of CAdES signatures

* View: [batch_cades_signature.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/batch_cades_signature.py)
* Template: [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/batch_cades_signature/index.html) (JavaScript on [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/static/js/batch-signature-form.js))

<a name="batch-xml-element" />
### Batch of XML signatures of elements on the same document

Not yet available on this project.