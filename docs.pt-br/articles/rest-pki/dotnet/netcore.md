# Projeto de exemplos em ASP.NET Core

O **Projeto de exemplos em ASP.NET Core** mostra como usar o [Rest PKI](../index.md) junto com [Web PKI](../../web-pki/index.md)
em um projeto usando [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/). É hospedado no GiHub em:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/dotnet/spa

## Executando o projeto

1. [Download do projeto](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) ou clonar o [repositório](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. Abra a pasta do projeto (`dotnet\spa\PkiSuiteAspNetSpaSample`)
1. Abra o arquivo de solução (.sln) no Visual Studio
1. Execute a solução. Certifique-se de que seu sistema permita a restauração automática do pacote Nuget (se isso não ocorrer, restaure manualmente os pacotes).

## Mapa do projeto

Esta seção lista tem onde encontrar as partes relevantes em cada amostra de recurso no projeto.

<a name="auth" />
### Autentificação com certificado digital

* API Controller: [AuthenticationRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/AuthenticationRestController.cs)
* Componente SPA (TypeScript): [authentication-rest.component.ts](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/authentication-rest/authentication-rest.component.ts)
* Template SPA (HTML): [authentication-rest.component.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/authentication-rest/authentication-rest.component.html)

<a name="pades" />
### Assinatura PAdES com arquivo já no servidor

* API Controller: [PadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/PadesSignatureRestController.cs)
* Componente SPA (TypeScript): [pades-signature-rest.component.ts](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/pades-signature-rest/pades-signature-rest.component.ts)
* Template SPA (HTML): [pades-signature-rest.component.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/pades-signature-rest/pades-signature-rest.component.html)

<a name="pades-upload" />
### Assinatura PAdES com arquivo enviado pelo usuário

Após o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração em [upload.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/controllers/upload.js),
template [upload.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/views/upload.html) 
and API Controller [UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/Controllers/UploadController.cs)) é feito o fluxo de controle é o mesmo que na amostra [PAdES signature with file already on server](#pades),
mas com parâmetro de URL `userfile` preenchidos.

<a name="pades-cosign" />
### Assinatura conjunta PAdES

Após o fluxo de controle da amostra [Assinatura PAdES com arquivo já no servidor](#pades) está concluído e o link *Co-sign with another certificate* é clicado, o mesmo fluxo de controle é 
repetido, mas agora com parâmetro de URL `userfile` preenchidos.

<a name="pdf-marks" />
### Marcas PAdES

Esse recurso é demonstrado como uma configuração opcional no  [Assinatura PAdES com arquivo já no servidor](#pades), amostra que por padrão começa comentada. Para ativá-lo, remova o 
comentário da linha a seguir [PadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/PadesSignatureRestController.cs):

```cs
signatureStarter.PdfMarks.Add(PadesVisualElements.GetPdfMark(storage, 1));
```

> [!TIP]
> Tente mudar o argumento para a função `getPdfMark()`para ver diferentes configurações de marcas PDF.

O código relevante está no arquivo [PadesVisualElements](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Classes/PadesVisualElements.cs), 
função `getPdfMark()`.

<a name="pades-server" />
### Assinatura PAdES usando chave do servidor

Ainda não está disponível neste projeto.

<a name="pades-wo-client" />
### Assinatura PAdES sem a comunicação com cliente

Ainda não está disponível neste projeto.

<a name="open-pades" />
### Abrir/validar uma assinatura PAdES existente

* API Controller: [OpenPadesRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/OpenPadesRestController.cs)
* Componente SPA (TypeScript): [open-pades-rest.component.ts](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/open-pades-rest/open-pades-rest.component.ts)
* Template SPA (HTML): [open-pades-rest.component.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/open-pades-rest/open-pades-rest.component.html)

<a name="print" />
### Versão para impressão

Ainda não está disponível neste projeto.

<a name="cades" />
### Assinatura CAdES com arquivo já no servidor

* API Controller: [CadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/CadesSignatureRestController.cs)
* Componente SPA (TypeScript): [cades-signature-rest.component.ts](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/cades-signature-rest/cades-signature-rest.component.ts)
* Template SPA (HTML): [cades-signature-rest.component.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/cades-signature-rest/cades-signature-rest.component.html)

<a name="cades-upload" />
### Assinatura CAdES com upload do arquivo pelo usuário

* Ainda não está disponível neste projeto, mas você pode consultar esta implementação antiga no [Rest PKI Samples](https://github.com/LacunaSoftware/RestPkiSamples):

Depois que o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração no [UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/sample-spring-mvc/src/main/java/sample/controller/UploadController.java)),template [upload.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/wwwroot/views/upload.html)
and API Controller [UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/AspNetCore/CoreWebApp/Controllers/UploadController.cs)) é feito 
o fluxo de controle é o mesmo que na amostra [CAdES signature with file already on server](#cades), mas com parâmetro de URL `userfile` preenchidos.

<a name="cades-cosign" />
### Assinatura conjunta CAdES

Após o fluxo de controle da amostra [CAdES signature with file already on server](#cades) está concluído e o link *Co-sign with another certificate* é clicado, o mesmo fluxo de controle é 
repetido, mas agora com parâmetro de URL `cmsfile` preenchidos.

<a name="cades-server" />
### Assinatura CAdES usando chave do servidor

Ainda não está disponível neste projeto.

<a name="open-cades" />
### Abrir/validar uma assinatura CAdES existente

Ainda não está disponível neste projeto.

<a name="xml-full" />
### Assinatura XML do documento inteiro

* API Controller: [XmlSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/XmlSignatureRestController.cs)
* Componente SPA (TypeScript): [xml-signature-rest.component.ts](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/xml-signature-rest/xml-signature-rest.component.ts)
* Template SPA (HTML): [xml-signature-rest.component.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/xml-signature-rest/xml-signature-rest.component.html)

<a name="xml-element" />
### Assinatura XML de um elemento

* API Controller: [XmlNFeSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/Controllers/XmlNFeSignatureRestController.cs)
* Componente SPA (TypeScript): [xml-nfe-signature-rest.component.ts](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/xml-nfe-signature-rest/xml-nfe-signature-rest.component.ts)
* Template SPA (HTML): [xml-nfe-signature-rest.component.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/dotnet/spa/PkiSuiteAspNetSpaSample/ClientApp/src/app/components/xml-nfe-signature-rest/xml-nfe-signature-rest.component.html)

<a name="xades-element" />
### Assinatura XAdES de um elemento

Ainda não está disponível neste projeto.

<a name="open-xml" />
### Abrir/validar assinatura de um arquivo XML existente

Ainda não está disponível neste projeto.

<a name="batch" />
### Lote de assinatura PAdES 

Ainda não está disponível neste projeto.

<a name="batch-optimized" />
### Lote otimizado de assinaturas PAdES

Ainda não está disponível neste projeto.

<a name="batch-cades" />
### Lote de assinaturas CAdES

Ainda não está disponível neste projeto.

<a name="batch-xml-element" />
### Lote de assinaturas XML de elementos no mesmo documento

Ainda não está disponível neste projeto.