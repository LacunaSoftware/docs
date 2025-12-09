# ASP.NET Core samples project

The **ASP.NET Core samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a project using the new [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/) technology. It is hosted on GitHub at:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/dotnet/spa

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. Open the project folder (`dotnet\spa\PkiSuiteAspNetSpaSample`)
1. Open the solution file (.sln) on Visual Studio
1. Run the solution. Make sure your system allows automatic Nuget package restore (if it doesn't, manually restore the packages).

## Project map

This section lists where to find the relevant parts in each feature sample on this project.

<a name="auth" />
### Authentication with digital certificate

* API Controller: [AuthenticationRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/AuthenticationRestController.cs)
* SPA component (TypeScript): [authentication-rest.component.ts](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/authentication-rest/authentication-rest.component.ts)
* SPA template (HTML): [authentication-rest.component.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/authentication-rest/authentication-rest.component.html)

<a name="pades" />
### PAdES signature with file already on server

* API Controller: [PadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/PadesSignatureRestController.cs)
* SPA component (TypeScript): [pades-signature-rest.component.ts](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/pades-signature-rest/pades-signature-rest.component.ts)
* SPA template (HTML): [pades-signature-rest.component.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/pades-signature-rest/pades-signature-rest.component.html)

<a name="pades-upload" />
### PAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the SPA controller
[upload.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/controllers/upload.js),
template [upload.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/views/upload.html)
and API Controller [UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/Controllers/UploadController.cs))
is done the control flow is the same as in the sample [PAdES signature with file already on server](#pades), but with the URL parameter `userfile` filled.

<a name="pades-cosign" />
### PAdES co-signature

After the control flow of the sample [PAdES signature with file already on server](#pades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `userfile` filled.

<a name="pdf-marks" />
### PAdES marks

This feature is demonstrated as an optional configuration on the [PAdES signature with file already on server](#pades)
sample which by default starts commented out. To enable it, uncomment the following line on
[PadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/PadesSignatureRestController.cs):

```cs
signatureStarter.PdfMarks.Add(PadesVisualElements.GetPdfMark(storage, 1));
```

> [!TIP]
> Try changing the argument to the `GetPdfMark(int)` method to see different PDF mark configurations

The relevant code is on the class [PadesVisualElements](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Classes/PadesVisualElements.cs), method `GetPdfMark(int)`.

<a name="pades-server" />
### PAdES signature using server key

Not yet available on this project.

<a name="pades-wo-client" />
### PAdES signature without client communication

Not yet available on this project.

<a name="open-pades" />
### Open/validate an existing PAdES signature

* API Controller: [OpenPadesRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/OpenPadesRestController.cs)
* SPA component (TypeScript): [open-pades-rest.component.ts](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/open-pades-rest/open-pades-rest.component.ts)
* SPA template (HTML): [open-pades-rest.component.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/open-pades-rest/open-pades-rest.component.html)

<a name="print" />
### Printer-friendly version

Not yet available on this project.

<a name="cades" />
### CAdES signature with file already on server

* API Controller: [CadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/CadesSignatureRestController.cs)
* SPA component (TypeScript): [cades-signature-rest.component.ts](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/cades-signature-rest/cades-signature-rest.component.ts)
* SPA template (HTML): [cades-signature-rest.component.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/cades-signature-rest/cades-signature-rest.component.html)

<a name="cades-upload" />
### CAdES signature with file uploaded by user

* Not yet available on this project, but you may refer to this old implementation in [Rest PKI Samples](https://github.com/LacunaSoftware/RestPkiSamples):

After the file upload (which is crudely implemented merely for demonstration purposes on the SPA controller
[upload.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/controllers/upload.js),
template [upload.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/Upload/Index.cshtml)
and API Controller [UploadController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/UploadController.cs))
is done the control flow is the same as in the sample [CAdES signature with file already on server](#cades), but with the URL parameter `userfile` filled.

<a name="cades-cosign" />
### CAdES co-signature

After the control flow of the sample [PAdES signature with file already on server](#pades) is completed and the link *Co-sign with another certificate* is clicked, the
same control flow is repeated, but now with the URL parameter `cmsfile` filled.

<a name="cades-server" />
### CAdES signature using server key

Not yet available on this project.

<a name="open-cades" />
### Open/validate an existing CAdES signature

Not yet available on this project.

<a name="xml-full" />
### XML signature of the entire document

* API Controller: [XmlSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/XmlSignatureRestController.cs)
* SPA component (TypeScript): [xml-signature-rest.component.ts](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/xml-signature-rest/xml-signature-rest.component.ts)
* SPA template (HTML): [xml-signature-rest.component.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/xml-signature-rest/xml-signature-rest.component.html)

<a name="xml-element" />
### XML signature of an element

* API Controller: [XmlNFeSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/XmlNFeSignatureRestController.cs)
* SPA component (TypeScript): [xml-nfe-signature-rest.component.ts](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/xml-nfe-signature-rest/xml-nfe-signature-rest.component.ts)
* SPA template (HTML): [xml-nfe-signature-rest.component.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/xml-nfe-signature-rest/xml-nfe-signature-rest.component.html)

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
