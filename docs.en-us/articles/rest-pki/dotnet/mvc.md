# ASP.NET MVC samples project

The **ASP.NET MVC samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a project using [ASP.NET MVC 5](https://docs.microsoft.com/en-us/aspnet/mvc/mvc5). It is hosted on GitHub at:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/dotnet/mvc

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. Open the project folder (`dotnet\mvc`)
1. Open the solution file (.sln) on Visual Studio
1. Run the solution. Make sure your system allows automatic Nuget package restore (if it doesn't, manually restore the packages).

## Project map

This section lists where to find the relevant parts in each feature sample on the project.

<a name="auth" />
### Authentication with digital certificate

* Controller: [AuthenticationRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/AuthenticationRestController.cs)
* Views:
  * [AuthenticationRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/AuthenticationRest/Index.cshtml)
  (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/signature-form.js))
  * [AuthenticationRest/Failed.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/AuthenticationRest/Failed.cshtml)
  * [AuthenticationRest/Success.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/AuthenticationRest/Success.cshtml)

<a name="pades" />
### PAdES signature with file already on server

* Controller: [PadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/PadesSignatureRestController.cs)
* Views: 
  * [PadesSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/PadesSignatureRest/Index.cshtml)
  (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/signature-form.js))
  * [PadesSignatureRest/SignatureInfo.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/PadesSignatureRest/SignatureInfo.cshtml)

<a name="pades-upload" />
### PAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the controller
[UploadController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/UploadController.cs)
and view
[Upload/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/Upload/Index.cshtml))
is done the control flow is the same as in the sample [PAdES signature with file already on server](#pades), but with the URL parameter `userfile` filled.

<a name="pades-cosign" />
### PAdES co-signature

After the control flow of the sample [PAdES signature with file already on server](#pades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `userfile` filled.

<a name="pdf-marks" />
### PAdES marks

This feature is demonstrated as an optional configuration on the [PAdES signature with file already on server](#pades)
sample which by default starts commented out. To enable it, uncomment the following line on
[PadesSignatureController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/PadesSignatureRestController.cs):

```cs
signatureStarter.PdfMarks.Add(PadesVisualElements.GetPdfMark(1));
```

> [!TIP]
> Try changing the argument to the `GetPdfMark(int)` method to see different PDF mark configurations

The relevant code is on the class [PadesVisualElements](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Classes/PadesVisualElements.cs), method `GetPdfMark(int)`.

<a name="pades-wo-client" />
### PAdES signature without client communication

* Not yet available on this project, but you may refer to this old implementation in [Rest PKI Samples](https://github.com/LacunaSoftware/RestPkiSamples):
* Controller: [PadesSignatureWithoutDirectCommunicationControlller](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/PadesSignatureWithoutDirectCommunicationController.cs)
* Views:
  * [PadesSignatureWithoutDirectCommunication/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/PadesSignatureWithoutDirectCommunication/Index.cshtml)
  (JavaScript on [signature-start-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Content/js/signature-start-form.js))
  * [PadesSignatureWithoutDirectCommunication/Complete.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/PadesSignatureWithoutDirectCommunication/Complete.cshtml)
  (JavaScript on [signature-complete-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Content/js/signature-complete-form.js))
  * [PadesSignatureWithoutDirectCommunication/SignatureInfo.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/PadesSignatureWithoutDirectCommunication/SignatureInfo.cshtml)

<a name="open-pades" />
### Open/validate an existing PAdES signature

* Controller: [OpenPadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/OpenPadesSignatureRestController.cs)
* View: [OpenPadesSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/OpenPadesSignatureRest/Index.cshtml)

<a name="print" />
### Printer-friendly version

* Controller: [PrinterFriendlyPadesRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/PrinterFriendlyPadesRestController.cs)

<a name="cades" />
### CAdES signature with file already on server

* Controller: [CadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/CadesSignatureRestController.cs)
* Views: 
  * [CadesSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/CadesSignatureRest/Index.cshtml)
  (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/signature-form.js))
  * [CadesSignatureRest/SignatureInfo.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/CadesSignatureRest/SignatureInfo.cshtml)

<a name="cades-upload" />
### CAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the controller
[UploadController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/UploadController.cs)
and view
[Upload/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/Upload/Index.cshtml))
is done the control flow is the same as in the sample [CAdES signature with file already on server](#cades), but with the URL parameter `userfile` filled.

<a name="cades-cosign" />
### CAdES co-signature

After the control flow of the sample [CAdES signature with file already on server](#cades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `cmsfile` filled.

<a name="open-cades" />
### Open/validate an existing CAdES signature

* Controller: [OpenCadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/OpenCadesSignatureRestController.cs)
* View: [OpenCadesSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/OpenCadesSignatureRest/Index.cshtml)

<a name="xml-full" />
### XML signature of the entire document

* Controller: [XmlSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/XmlSignatureRestController.cs)
* Views: 
  * [XmlSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/XmlSignatureRest/Index.cshtml)
  (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/signature-form.js))
  * [XmlSignatureRest/SignatureInfo.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/XmlSignatureRest/SignatureInfo.cshtml)

<a name="xml-element" />
### XML signature of an element

* Controller: [XmlNFeSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/XmlNFeSignatureRestController.cs)
* Views: 
  * [XmlNFeSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/XmlNFeSignatureRest/Index.cshtml)
  (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/signature-form.js))
  * [XmlNFeSignatureRest/SignatureInfo.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/XmlNFeSignatureRest/SignatureInfo.cshtml)

<a name="open-xml" />
### Open/validate signatures on an existing XML file

* Controller: [OpenXmlSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/OpenXmlSignatureRestController.cs)
* View: [OpenXmlSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/OpenXmlSignatureRest/Index.cshtml)

<a name="batch" />
### Batch of PAdES signatures

* Controller: [BatchPadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/BatchPadesSignatureRestController.cs)
* View: [BatchPadesSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/BatchPadesSignatureRest/Index.cshtml)
  (JavaScript on [batch-signature-rest-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/batch-signature-rest-form.js))

<a name="batch-optimized" />
### Optimized batch of PAdES signatures

* Controller: [BatchSignatureOptimizedController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/BatchSignatureOptimizedController.cs)
* View: [BatchSignatureOptimized/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/BatchSignatureOptimized/Index.cshtml)
  (JavaScript on [batch-signature-optimized-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Content/js/batch-signature-optimized-form.js))

<a name="batch-cades" />
### Batch of CAdES signatures

* Controller: [BatchCadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/BatchCadesSignatureRestController.cs)
* View: [BatchCadesSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/BatchCadesSignatureRest/Index.cshtml)
  (JavaScript on [batch-signature-rest-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/batch-signature-rest-form.js))

<a name="batch-xml-element" />
### Batch of XML signatures of elements on the same document

Not yet available on this project.
