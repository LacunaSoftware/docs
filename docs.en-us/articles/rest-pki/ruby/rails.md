# Ruby on Rails samples project

The **Ruby on Rails samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a Ruby project using the [Ruby on Rails](http://rubyonrails.org/) framework. It is hosted on GitHub at:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/Ruby

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Generate an API access token on the [REST PKI website](https://pki.rest/)
1. Paste your access token on the initializer file [restpki.rb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/config/initializers/restpki.rb)
1. Install dependencies: `bundle install`
1. Run application: `rails server`
1. Access the URL [http://localhost:3000](http://localhost:3000)

## Project map

This section lists where to find the relevant parts in each feature sample on the project.

<a name="auth" />
### Authentication with digital certificate

* Controller: [AuthenticationController.rb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/authentication_controller.rb)
* Views:
  * [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/authentication/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/authentication/action.html.erb)

<a name="pades" />
### PAdES signature with file already on server

* Controller: [PadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/pades_signature_controller.rb)
* Views:
  * [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/pades_signature/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/pades_signature/action.html.erb)

<a name="pades-upload" />
### PAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the controller
[UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/upload_controller.rb)
and view
[index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/upload/index.html.erb))
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

Not yet available on this project.

<a name="open-pades" />
### Open/validate an existing PAdES signature

Not yet available on this project.

<a name="print" />
### Printer-friendly version

Not yet available on this project.

<a name="cades" />
### CAdES signature with file already on server

* Controller: [CadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/cades_signature_controller.rb)
* Views:
  * [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/cades_signature/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/cades_signature/action.html.erb)

<a name="cades-upload" />
### CAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the controller
[UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/sample-spring-mvc/src/main/java/sample/controller/UploadController.java)
and view
[index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/sample-spring-mvc/src/main/resources/templates/upload.html))
is done the control flow is the same as in the sample [CAdES signature with file already on server](#pades), but with the URL parameter `userfile` filled.

<a name="cades-cosign" />
### CAdES co-signature

After the control flow of the sample [CAdES signature with file already on server](#cades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `userfile` filled.

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

* Controller: [XmlElementSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/xml_element_signature_controller.rb)
* Views:
  * [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/xml_element_signature/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/xml_element_signature/action.html.erb)

<a name="xades-element" />
### XAdES signature of an element

* Controller: [FullXmlSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/full_xml_signature_controller.rb)
  * [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/full_xml_signature/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/full_xml_signature/action.html.erb)

<a name="open-xml" />
### Open/validate signatures on an existing XML file

Not yet available on this project.

<a name="batch" />
### Batch of PAdES signatures

* Controller: [BatchSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/batch_signature_controller.rb)
* View: [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/batch_signature/index.html.erb)
  (JavaScript on [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/batch-signature-form.js))

<a name="batch-optimized" />
### Optimized batch of PAdES signatures

Not yet available on this project.

<a name="batch-cades" />
### Batch of CAdES signatures

* Controller: [CadesBatchSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/cades_batch_signature_controller.rb)
* View: [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/cades_batch_signature/index.html.erb)
  (JavaScript on [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/batch-signature-form.js))

<a name="batch-xml-element" />
### Batch of XML signatures of elements on the same document

Not yet available on this project.
