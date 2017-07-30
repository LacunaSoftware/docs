# ASP.NET MVC samples project

The **ASP.NET MVC samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a project using [ASP.NET MVC 5](https://docs.microsoft.com/en-us/aspnet/mvc/mvc5). It is hosted on GitHub at:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/CSharp/MVC

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Open the project folder (`CSharp\MVC`)
1. Open the solution file (.sln) on Visual Studio
1. Generate an API access token on the [REST PKI website](https://pki.rest/)
1. Paste your access token on the file `web.config`
1. Run the solution. Make sure your system allows automatic Nuget package restore (if it doesn't, manually restore the packages).

## Project map

This section lists where to find the relevant parts in each feature sample on the project.

<a name="auth" />
### Authentication with digital certificate

* Controller: [AuthenticationController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/AuthenticationController.cs)
* Views: [Authentication/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/Authentication/Index.cshtml)
  and [Authentication/Failed.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/Authentication/Failed.cshtml)
* Javascript: (inside Authentication/Index.cshtml)

<a name="pades" />
### PAdES signature with file already on server

* Controller: [PadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/PadesSignatureController.cs)
* Views: [PadesSignature/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/PadesSignature/Index.cshtml)
  and [PadesSignature/SignatureInfo.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/PadesSignature/SignatureInfo.cshtml)
* Javascript: (inside PadesSignature/Index.cshtml)

<a name="pades-upload" />
### PAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the controller
[UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/UploadController.cs)
and view
[Upload/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/Upload/Index.cshtml))
the control flow is the same as in the sample [PAdES signature with file already on server](#pades), but with the URL parameter `userfile` filled.

<a name="pades-cosign" />
### PAdES co-signature

After the control flow of the sample [PAdES signature with file already on server](#pades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `userfile` filled.

<a name="pdf-marks" />
### PAdES marks

This feature is demonstrated as an optional configuration on the [PAdES signature with file already on server](#pades)
sample which by default starts commented out. To enable it, uncomment the following line on
[PadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/PadesSignatureController.cs):

```cs
signatureStarter.PdfMarks.Add(PadesVisualElements.GetPdfMark(1));
```

> [!TIP]
> Try changing the argument to the `GetPdfMark(int)` method to see different PDF mark configurations

The relevant code is on the class [PadesVisualElements](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Classes/PadesVisualElements.cs), method `GetPdfMark(int)`.

<a name="pades-server" />
### PAdES signature using server key

Not yet available on this project.

<a name="open-pades" />
### Open/validate an existing PAdES signature

* Controller: [OpenPadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/OpenPadesSignatureController.cs)
* View: [OpenPadesSignature/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/OpenPadesSignature/Index.cshtml)

<a name="print" />
### Printer-friendly version

Not yet available on this project. See sample on [ASP.NET Web Forms samples project](web-forms.md) instead.

<a name="cades" />
### CAdES signature with file already on server

* Controller: [CadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/CadesSignatureController.cs)
* Views: [CadesSignature/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/CadesSignature/Index.cshtml)
  and [CadesSignature/SignatureInfo.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/CadesSignature/SignatureInfo.cshtml)
* Javascript: (inside CadesSignature/Index.cshtml)

<a name="cades-upload" />
### CAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the controller
[UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/UploadController.cs)
and view
[Upload/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/Upload/Index.cshtml))
the control flow is the same as in the sample [CAdES signature with file already on server](#cades), but with the URL parameter `userfile` filled.

<a name="cades-cosign" />
### CAdES co-signature

After the control flow of the sample [CAdES signature with file already on server](#cades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `userfile` filled.

<a name="cades-server" />
### CAdES signature using server key

Not yet available on this project.

<a name="open-cades" />
### Open/validate an existing CAdES signature

* Controller: [OpenCadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/OpenCadesSignatureController.cs)
* View: [OpenCadesSignature/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/OpenCadesSignature/Index.cshtml)

<a name="xml-full" />
### XML signature of the entire document

* Controller: [XmlFullSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/XmlFullSignatureController.cs)
* Views: [XmlFullSignature/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/XmlFullSignature/Index.cshtml)
  and [XmlFullSignature/SignatureInfo.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/XmlFullSignature/SignatureInfo.cshtml)
* Javascript: (inside XmlFullSignature/Index.cshtml)

<a name="xml-element" />
### XML signature of an element

* Controller: [XmlElementSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/XmlElementSignatureController.cs)
* Views: [XmlElementSignature/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/XmlElementSignature/Index.cshtml)
  and [XmlElementSignature/SignatureInfo.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/XmlElementSignature/SignatureInfo.cshtml)
* Javascript: (inside XmlElementSignature/Index.cshtml)

<a name="xades-element" />
### XAdES signature of an element

* Controller: [XadesElementSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/XadesElementSignatureController.cs)
* Views: [XadesElementSignature/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/XadesElementSignature/Index.cshtml)
  and [XadesElementSignature/SignatureInfo.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/XadesElementSignature/SignatureInfo.cshtml)
* Javascript: (inside XadesElementSignature/Index.cshtml)

<a name="open-xml" />
### Open/validate signatures on an existing XML file

* Controller: [OpenXmlSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/OpenXmlSignatureController.cs)
* View: [OpenXmlSignature/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/OpenXmlSignature/Index.cshtml)

<a name="batch" />
### Batch signature

* Controller: [BatchSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/BatchSignatureController.cs)
* View: [BatchSignature/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/BatchSignature/Index.cshtml)
* Javascript: (inside BatchSignature/Index.cshtml)

<a name="batch-optimized" />
### Optimized batch signature

* Controller: [BatchSignatureOptimizedController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/BatchSignatureOptimizedController.cs)
* View: [BatchSignatureOptimized/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/BatchSignatureOptimized/Index.cshtml)
* Javascript: (inside BatchSignatureOptimized/Index.cshtml)
