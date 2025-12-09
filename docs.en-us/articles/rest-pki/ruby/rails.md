# Ruby on Rails samples project

The **Ruby on Rails samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a Ruby project using the [Ruby on Rails](http://rubyonrails.org/) framework. It is hosted on GitHub at:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/ruby/rails

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. Install dependencies: `bundle install`
1. Run application: `rails server`
1. Access the URL [http://localhost:3000](http://localhost:3000)

## Project map

This section lists where to find the relevant parts in each feature sample on the project.

<a name="auth" />
### Authentication with digital certificate

* Controller: [AuthenticationRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/controllers/authentication_rest_controller.rb)
* Views:
  * [index.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/authentication_rest/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/authentication_rest/action.html.erb)

<a name="pades" />
### PAdES signature with file already on server

* Controller: [PadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/controllers/pades_signature_rest_controller.rb)
* Views:
  * [index.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/pades_signature_rest/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/pades_signature_rest/action.html.erb)

<a name="pades-upload" />
### PAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the controller
[ServerFilesController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/controllers/server_files_controller.rb)
and view
[index.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/server_files/index.html.erb))
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

<a name="pades-wo-client" />
### PAdES signature without client communication

* Controller: [PadesSignatureWithoutIntegrationController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/pades_signature_without_integration_controller.rb)
* Views:
  *	[index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/pades_signature_without_integration/index.html.erb)
	(JavaScript on [signature-without-integration-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/signature-without-integration-form.js))

<a name="open-pades" />
### Open/validate an existing PAdES signature

Not yet available on this project.

<a name="print" />
### Printer-friendly version

Not yet available on this project.

<a name="cades" />
### CAdES signature with file already on server

* Controller: [CadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/controllers/cades_signature_rest_controller.rb)
* Views:
  * [index.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/cades_signature_rest/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/cades_signature_rest/action.html.erb)

<a name="cades-upload" />
### CAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the controller
[ServerFilesController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/controllers/server_files_controller.rb)
and view
[index.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/server_files/index.html.erb)
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

* Controller: [XmlSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/controllers/xml_signature_rest_controller.rb)
  * [index.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/xml_signature_rest/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/xml_signature_rest/action.html.erb)

<a name="xml-element" />
### XML signature of an element

* Controller: [XmlNfeSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/controllers/xml_nfe_signature_rest_controller.rb)
* Views:
  * [index.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/xml_nfe_signature_rest/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/xml_nfe_signature_rest/action.html.erb)

<a name="xades-element" />
### XAdES signature of an element

Not yet available on this project.

<a name="open-xml" />
### Open/validate signatures on an existing XML file

Not yet available on this project.

<a name="batch" />
### Batch of PAdES signatures

* Controller: [BatchPadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/controllers/batch_pades_signature_rest_controller.rb)
* View: [index.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/batch_pades_signature_rest/index.html.erb)
  (JavaScript on [batch-signature-rest-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/assets/javascripts/batch-signature-rest-form.js))

<a name="batch-optimized" />
### Optimized batch of PAdES signatures

Not yet available on this project.

<a name="batch-cades" />
### Batch of CAdES signatures

* Controller: [BatchCadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/controllers/batch_cades_signature_rest_controller.rb)
* View: [index.html.erb](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/views/batch_cades_signature_rest/index.html.erb)
  (JavaScript on [batch-signature-rest-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/ruby/rails/app/assets/javascripts/batch-signature-rest-form.js))

<a name="batch-xml-element" />
### Batch of XML signatures of elements on the same document

Not yet available on this project.
