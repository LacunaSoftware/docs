# Projeto de exemplos em ASP.NET Web Forms

O **Projeto de exemplos em ASP.NET Web Forms** mostra como usar o [Rest PKI](../index.md) junto com [Web PKI](../../web-pki/index.md)
em um projeto usando [ASP.NET Web Forms](https://docs.microsoft.com/en-us/aspnet/web-forms/what-is-web-forms). É hospedado no GiHub em:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/CSharp/WebForms

## Executando o projeto

1. [Download do projeto](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) ou clonar o [repositório](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Abra a pasta do projeto (`CSharp\WebForms`)
1. Abra o arquivo de solução (.sln) no Visual Studio
1. Execute a solução. Certifique-se de que seu sistema permita a restauração automática do pacote Nuget (se isso não ocorrer, restaure manualmente os pacotes).

## Mapa do projeto

Esta seção lista tem onde encontrar as partes relevantes em cada amostra de recurso no projeto.

<a name="auth" />
### Autentificação com certificado digital

* Web Forms: 
	* [Authentication.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Authentication.aspx)
		* [Authentication.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Authentication.aspx.cs)
	* [AuthenticationSuccess.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/AuthenticationSuccess.aspx)
		* [AuthenticationSuccess.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/AuthenticationSuccess.aspx.cs)
	* [AuthenticationFail.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/AuthenticationFail.aspx)
		* [AuthenticationFail.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/AuthenticationFail.aspx.cs)
* JavaScript: [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Scripts/signature-form.js)

<a name="pades" />
### Assinatura PAdES com arquivo já no servidor

* Web Forms:
	* [PadesSignature.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/PadesSignature.aspx)
		* [PadesSignature.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/PadesSignature.aspx.cs)
	* [PadesSignatureInfo.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/PadesSignatureInfo.aspx)
		* [PadesSignatureInfo.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/PadesSignatureInfo.aspx.cs)
* JavaScript: [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Scripts/signature-form.js)


<a name="pades-upload" />
### Assinatura PAdES com arquivo enviado pelo usuário

Após o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração em [Upload.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Upload.aspx) e e no seu *code-behind*
[Upload.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Upload.aspx.cs)) é feito o fluxo de controle é o mesmo que na amostra [PAdES signature with file already on server](#pades),
mas com parâmetro de URL `userfile` preenchidos.

<a name="pades-cosign" />
### Assinatura conjunta PAdES

Após o fluxo de controle da amostra [Assinatura PAdES com arquivo já no servidor](#pades) está concluído e o link *Co-sign with another certificate* é clicado, o mesmo fluxo de controle é 
repetido, mas agora com parâmetro de URL `userfile` preenchidos.

<a name="pdf-marks" />
### Marcas PAdES

Esse recurso é demonstrado como uma configuração opcional no  [Assinatura PAdES com arquivo já no servidor](#pades), amostra que por padrão começa comentada. Para ativá-lo, remova o 
comentário da linha a seguir [PadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/PadesSignature.aspx.cs):

```cs
signatureStarter.PdfMarks.Add(PadesVisualElements.GetPdfMark(1));
```

> [!TIP]
> Tente mudar o argumento para a função `getPdfMark()`para ver diferentes configurações de marcas PDF.

O código relevante está no arquivo [PadesVisualElements](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/PadesVisualElements.cs), 
função `getPdfMark()`.

<a name="pades-server" />
### Assinatura PAdES usando chave do servidor

Ainda não está disponível neste projeto.

<a name="pades-wo-client" />
### Assinatura PAdES sem a comunicação com cliente

Ainda não está disponível neste projeto.

<a name="open-pades" />
### Abrir/validar uma assinatura PAdES existente

Ainda não está disponível neste projeto.

<a name="print" />
### Versão para impressão

Após o fluxo de controle da amostra [PAdES signature with the file already on server](#pades) estar completo e o link *Download a printer-friendly version of the signed file* for clicado,
o fluxo vai para web form: [PrinterFriendlyVersion.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/PrinterFriendlyVersion.aspx)
e o code-behind [PrinterFriendlyVersion.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/PrinterFriendlyVersion.aspx.cs) com o arquivo de parâmetro URL `file` preenchido.

O PDF gerado contém links para web form: [Check.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Check.aspx)
e para o code-behind [Check.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Check.aspx.cs), que mostra detalhes da assinaturas.

<a name="cades" />
### Assinatura CAdES com arquivo já no servidor

* Web Forms:
	* [CadesSignature.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/CadesSignature.aspx)
		* [CadesSignature.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/CadesSignature.aspx.cs)
	* [CadesSignatureInfo.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/CadesSignatureInfo.aspx)
		* [CadesSignatureInfo.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/CadesSignatureInfo.aspx.cs)
* JavaScript: [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Scripts/signature-form.js)

<a name="cades-upload" />
### Assinatura CAdES com upload do arquivo pelo usuário

Depois que o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração no [Upload.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Upload.aspx))
e o code-behind [Upload.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Upload.aspx.cs é feito 
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

Ainda não está disponível neste projeto.

<a name="xml-element" />
### Assinatura XML de um elemento

* Web Forms:
	* [XmlElementSignature.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/XmlElementSignature.aspx)
		* [XmlElementSignature.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/XmlElementSignature.aspx.cs)
	* [XmlElementSignatureInfo.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/XmlElementSignatureInfo.aspx)
		* [XmlElementSignatureInfo.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/XmlElementSignatureInfo.aspx.cs)
* JavaScript: [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Scripts/signature-form.js)

<a name="xades-element" />
### Assinatura XAdES de um elemento

Ainda não está disponível neste projeto.

<a name="open-xml" />
### Abrir/validar assinatura de um arquivo XML existente

Ainda não está disponível neste projeto.

<a name="batch" />
### Lote de assinatura PAdES 

* Web Form: [BatchSignature.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/BatchSignature.aspx)
	* [BatchSignature.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/BatchSignature.aspx.cs)
* JavaScript: [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Scripts/batch-signature-form.js)

<a name="batch-optimized" />
### Lote otimizado de assinaturas PAdES

* Web Form: [BatchSignatureOptimized.aspx](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/BatchSignatureOptimized.aspx)
	* [BatchSignatureOptimized.aspx.cs](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/BatchSignatureOptimized.aspx.cs)
* JavaScript: [batch-signature-optimized-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/WebForms/WebForms/Scripts/batch-signature-optimized-form.js)

<a name="batch-cades" />
### Lote de assinaturas CAdES

Ainda não está disponível neste projeto.

<a name="batch-xml-element" />
### Lote de assinaturas XML de elementos no mesmo documento

Ainda não está disponível neste projeto.