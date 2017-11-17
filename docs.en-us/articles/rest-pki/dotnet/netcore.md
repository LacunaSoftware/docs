# ASP.NET Core samples project

The **ASP.NET Core samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a project using the new [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/) technology. It is hosted on GitHub at:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/CSharp/AspNetCore

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Open the project folder (`CSharp\AspNetCore`)
1. Open the solution file (.sln) on Visual Studio
1. Generate an API access token on the [REST PKI website](https://pki.rest/)
1. Paste your access token on the file `web.config`
1. Run the solution. Make sure your system allows automatic Nuget package restore (if it doesn't, manually restore the packages).

## Project map

This section lists where to find the relevant parts in each feature sample on this project.

<a name="auth" />
### Authentication with digital certificate

* API Controller: [AuthenticationController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/Controllers/AuthenticationController.cs)
* SPA Controller: [authentication.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/controllers/authentication.js)
* SPA Template: [authentication.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/views/authentication.html)

<a name="pades" />
### PAdES signature with file already on server

* API Controller: [PadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/Controllers/PadesSignatureController.cs)
* SPA Controller: [pades-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/controllers/pades-signature.js)
* SPA Template: [pades-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/views/pades-signature.html)

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
[PadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/Controllers/PadesSignatureController.cs):

```cs
signatureStarter.PdfMarks.Add(PadesVisualElements.GetPdfMark(storage, 1));
```

> [!TIP]
> Try changing the argument to the `GetPdfMark(int)` method to see different PDF mark configurations

The relevant code is on the class [PadesVisualElements](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/Classes/PadesVisualElements.cs), method `GetPdfMark(int)`.

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

* API Controller: [CadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/Controllers/CadesSignatureController.cs)
* SPA Controller: [cades-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/controllers/cades-signature.js)
* SPA Template: [cades-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/views/cades-signature.html)

<a name="cades-upload" />
### CAdES signature with file uploaded by user

After the file upload (which is crudely implemented merely for demonstration purposes on the SPA controller
[upload.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/controllers/upload.js),
template [upload.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/views/upload.html)
and API Controller [UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/Controllers/UploadController.cs))
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

Not yet available on this project.

<a name="xml-element" />
### XML signature of an element

* API Controller: [XmlElementSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/Controllers/XmlElementSignatureController.cs)
* SPA Controller: [xml-element-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/controllers/xml-element-signature.js)
* SPA Template: [xml-element-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/views/xml-element-signature.html)

<a name="xades-element" />
### XAdES signature of an element

Not yet available on this project.

<a name="open-xml" />
### Open/validate signatures on an existing XML file

Not yet available on this project.

<a name="batch" />
### Batch signature

Not yet available on this project.

<a name="batch-optimized" />
### Optimized batch signature

Not yet available on this project.

<a name="batch-cades" />
### CAdES batch signature

Not yet available on this project.

<a name="batch-xml-element" />
### XML Element batch signature on the same document

Not yet available on this project.
