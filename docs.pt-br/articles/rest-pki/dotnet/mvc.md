# Projeto de exemplos em ASP.NET MVC

O **Projeto de exemplos em ASP.NET MVC** mostra como usar o [Rest PKI](../index.md) junto com [Web PKI](../../web-pki/index.md)
em um projeto usando [ASP.NET MVC 5](https://docs.microsoft.com/en-us/aspnet/mvc/mvc5). É hospedado no GiHub em:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/dotnet/mvc

## Executando o projeto

1.  [Download do projeto](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) ou clonar o [repositório](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. Abra a pasta do projeto (`dotnet\mvc`)
1. Abra o arquivo de solução (.sln) no Visual Studio
1. Execute a solução. Certifique-se de que seu sistema permita a restauração automática do pacote Nuget (se isso não ocorrer, restaure manualmente os pacotes).

## Mapa do projeto

Esta seção lista tem onde encontrar as partes relevantes em cada amostra de recurso no projeto.

<a name="auth" />
### Autentificação com certificado digital

* Controller: [AuthenticationRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/AuthenticationRestController.cs)
* Views:
  * [AuthenticationRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/AuthenticationRest/Index.cshtml)
  (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/signature-form.js))
  * [AuthenticationRest/Failed.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/AuthenticationRest/Failed.cshtml)
  * [AuthenticationRest/Success.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/AuthenticationRest/Success.cshtml)

<a name="pades" />
### Assinatura PAdES com arquivo já no servidor

* Controller: [PadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/PadesSignatureRestController.cs)
* Views: 
  * [PadesSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/PadesSignatureRest/Index.cshtml)
  (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/signature-form.js))
  * [PadesSignatureRest/SignatureInfo.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/PadesSignatureRest/SignatureInfo.cshtml)

<a name="pades-upload" />
### Assinatura PAdES com arquivo enviado pelo usuário

Após o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração em [UploadController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/UploadController.cs) e
[Upload/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/Upload/Index.cshtml)) é feito o fluxo de controle é o mesmo que na amostra [PAdES signature with file already on server](#pades),
mas com parâmetro de URL `userfile` preenchidos.

<a name="pades-cosign" />
### Assinatura conjunta PAdES

Após o fluxo de controle da amostra [Assinatura PAdES com arquivo já no servidor](#pades) está concluído e o link *Co-sign with another certificate* é clicado, o mesmo fluxo de controle é 
repetido, mas agora com parâmetro de URL `userfile` preenchidos.

<a name="pdf-marks" />
### Marcas PAdES

Esse recurso é demonstrado como uma configuração opcional no  [Assinatura PAdES com arquivo já no servidor](#pades), amostra que por padrão começa comentada. Para ativá-lo, remova o 
comentário da linha a seguir [PadesSignatureController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/PadesSignatureRestController.cs):

```cs
signatureStarter.PdfMarks.Add(PadesVisualElements.GetPdfMark(1));
```

> [!TIP]
> Tente mudar o argumento para a função `getPdfMark()`para ver diferentes configurações de marcas PDF.

O código relevante está no arquivo [PadesVisualElements](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Classes/PadesVisualElements.cs), 
função `getPdfMark()`.

<a name="pades-wo-client" />
### Assinatura PAdES sem a comunicação com cliente

* Controller: [PadesSignatureWithoutDirectCommunicationControlller](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/PadesSignatureWithoutDirectCommunicationController.cs)
* Views:
  * [PadesSignatureWithoutDirectCommunication/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/PadesSignatureWithoutDirectCommunication/Index.cshtml)
  (JavaScript on [signature-start-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Content/js/signature-start-form.js))
  * [PadesSignatureWithoutDirectCommunication/Complete.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/PadesSignatureWithoutDirectCommunication/Complete.cshtml)
  (JavaScript on [signature-complete-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Content/js/signature-complete-form.js))
  * [PadesSignatureWithoutDirectCommunication/SignatureInfo.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/PadesSignatureWithoutDirectCommunication/SignatureInfo.cshtml)

<a name="open-pades" />
### Abrir/validar uma assinatura PAdES existente

* Controller: [OpenPadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/OpenPadesSignatureRestController.cs)
* View: [OpenPadesSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/OpenPadesSignatureRest/Index.cshtml)

<a name="print" />
### Versão para impressão

* Controller: [PrinterFriendlyPadesRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/PrinterFriendlyPadesRestController.cs)

<a name="cades" />
### Assinatura CAdES com arquivo já no servidor

* Controller: [CadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/CadesSignatureRestController.cs)
* Views: 
  * [CadesSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/CadesSignatureRest/Index.cshtml)
  (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/signature-form.js))
  * [CadesSignatureRest/SignatureInfo.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/CadesSignatureRest/SignatureInfo.cshtml)

<a name="cades-upload" />
### Assinatura CAdES com upload do arquivo pelo usuário

Depois que o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração no [UploadController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/UploadController.cs)
 e
[Upload/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/Upload/Index.cshtml)) é feito 
o fluxo de controle é o mesmo que na amostra [CAdES signature with file already on server](#cades), mas com parâmetro de URL `userfile` preenchidos.

<a name="cades-cosign" />
### Assinatura conjunta CAdES

Após o fluxo de controle da amostra [CAdES signature with file already on server](#cades) está concluído e o link *Co-sign with another certificate* é clicado, o mesmo fluxo de controle é 
repetido, mas agora com parâmetro de URL `cmsfile` preenchidos.

<a name="open-cades" />
### Abrir/validar uma assinatura CAdES existente

* Controller: [OpenCadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/OpenCadesSignatureRestController.cs)
* View: [OpenCadesSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/OpenCadesSignatureRest/Index.cshtml)

<a name="xml-full" />
### Assinatura XML do documento inteiro

* Controller: [XmlSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/XmlSignatureRestController.cs)
* Views: 
  * [XmlSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/XmlSignatureRest/Index.cshtml)
  (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/signature-form.js))
  * [XmlSignatureRest/SignatureInfo.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/XmlSignatureRest/SignatureInfo.cshtml)

<a name="xml-element" />
### Assinatura XML de um elemento

* Controller: [XmlNFeSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/XmlNFeSignatureRestController.cs)
* Views: 
  * [XmlNFeSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/XmlNFeSignatureRest/Index.cshtml)
  (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/signature-form.js))
  * [XmlNFeSignatureRest/SignatureInfo.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/XmlNFeSignatureRest/SignatureInfo.cshtml)

<a name="open-xml" />
### Abrir/validar assinatura de um arquivo XML existente

* Controller: [OpenXmlSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/OpenXmlSignatureRestController.cs)
* View: [OpenXmlSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/OpenXmlSignatureRest/Index.cshtml)

<a name="batch" />
### Lote de assinatura PAdES 

* Controller: [BatchPadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/BatchPadesSignatureRestController.cs)
* View: [BatchPadesSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/BatchPadesSignatureRest/Index.cshtml)
  (JavaScript on [batch-signature-rest-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/batch-signature-rest-form.js))

<a name="batch-optimized" />
### Lote otimizado de assinaturas PAdES

* Controller: [BatchSignatureOptimizedController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/BatchSignatureOptimizedController.cs)
* View: [BatchSignatureOptimized/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/BatchSignatureOptimized/Index.cshtml)
  (JavaScript on [batch-signature-optimized-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Content/js/batch-signature-optimized-form.js))

<a name="batch-cades" />
### Lote de assinaturas CAdES

* Controller: [BatchCadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Controllers/BatchCadesSignatureRestController.cs)
* View: [BatchCadesSignatureRest/Index.cshtml](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Views/BatchCadesSignatureRest/Index.cshtml)
  (JavaScript on [batch-signature-rest-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/mvc/PkiSuiteAspNetMvcSample/Content/js/batch-signature-rest-form.js))

<a name="batch-xml-element" />
### Lote de assinaturas XML de elementos no mesmo documento

Ainda não está disponível neste projeto.
