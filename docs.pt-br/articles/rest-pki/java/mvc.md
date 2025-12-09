# Projeto de exemplos em Java 7+ com Spring MVC

O **Projeto de exemplos em Java 7+ com Spring MVC** mostra como usar o [Rest PKI](../index.md) junto com [Web PKI](../../web-pki/index.md) em uma aplicação web Java 7+ usando framework [Spring MVC](http://spring.io/). É hospedado no GiHub em:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/java/springmvc

## Executando o projeto

1. [Download do projeto](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) ou clonar o [repositório](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. No prompt de comando, navegue até a pasta `java/springmvc` e execute o comando `gradlew run` (no Linux `./gradlew run`). Se você estiver usando Windows, você pode, alternativamente, clicar duas vezes no arquivo `Run-Sample.bat`.
1. Depois de ver a mensagem *"Starded Application in x.xxx seconds"* (a porcentagem na tela não atingirá 100%), abra o browser e vá para a URL http://localhost:60963

## Mapa do projeto

Esta seção lista tem onde encontrar as partes relevantes em cada amostra de recurso no projeto.

<a name="auth" />
### Autentificação com certificado digital

* Controller: [AuthenticationRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/AuthenticationRestController.java)
* Views:
  * [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/authentication-rest/index.html)
    (Javascript em [authentication-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/authentication-form.js))
  * [success.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/authentication-rest/success.html)
  * [failed.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/authentication-rest/failed.html)

<a name="pades" />
### Assinatura PAdES com arquivo já no servidor

* Controller: [PadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureRestController.java)
* Views:
  * [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/pades-signature-rest/index.html)
    (Javascript em [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-form.js))
  * [signature-info.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/pades-signature-rest/signature-info.html)

<a name="pades-upload" />
### Assinatura PAdES com arquivo enviado pelo usuário

Após o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração em [UploadController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/UploadController.java)) e da view [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/upload/index.html), o fluxo de controle é o mesmo que na amostra [Assinatura PAdES com arquivo já no servidor](#pades),
mas com parâmetro de URL `userfile` preenchidos.

<a name="pades-cosign" />
### Assinatura conjunta PAdES

Após o fluxo de controle da amostra [Assinatura PAdES com arquivo já no servidor](#pades) está concluído e o link *Co-sign with another certificate* é clicado, o mesmo fluxo de controle é 
repetido, mas agora com parâmetro de URL `userfile` preenchidos.

<a name="pdf-marks" />
### Marcas PAdES

Esse recurso é demonstrado como uma configuração opcional no  [Assinatura PAdES com arquivo já no servidor](#pades), amostra que por padrão começa comentada. Para ativá-lo, remova o 
comentário da linha a seguir [PadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureRestController.java):

```java
signatureStarter.addPdfMark(PadesVisualElements.getPdfMark(1));
```

> [!TIP]
> Tente mudar o argumento para a função `getPdfMark()`para ver diferentes configurações de marcas PDF.

O código relevante está no arquivo [PadesVisualElements](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/util/restpki/PadesVisualElements.java), 
função `getPdfMark()`.

<a name="pades-server" />
### Assinatura PAdES usando chave do servidor

* Controller: [PadesServerKeyExpressController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesServerKeyExpressController.java)
* View: [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/pades-server-key-express/index.html)

<a name="pades-wo-client" />
### Assinatura PAdES sem a comunicação com cliente

* Ainda não está disponível neste projeto, mas você pode consultar esta implementação antiga no [Rest PKI Samples](https://github.com/LacunaSoftware/RestPkiSamples):
* Controller: [PadesSignatureWithoutDirectCommunicationControlller](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Controllers/PadesSignatureWithoutDirectCommunicationController.cs)
* Views:
  * [PadesSignatureWithoutDirectCommunication/Index.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/PadesSignatureWithoutDirectCommunication/Index.cshtml)
    (JavaScript em [signature-start-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Content/js/signature-start-form.js))
  * [PadesSignatureWithoutDirectCommunication/Complete.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/PadesSignatureWithoutDirectCommunication/Complete.cshtml)
    (JavaScript em [signature-complete-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Content/js/signature-complete-form.js))
  * [PadesSignatureWithoutDirectCommunication/SignatureInfo.cshtml](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/CSharp/MVC/SampleSite/Views/PadesSignatureWithoutDirectCommunication/SignatureInfo.cshtml)

<a name="open-pades" />
### Abrir/validar uma assinatura PAdES existente

* Controller: [OpenPadesRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/OpenPadesRestController.java)
* View: [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/open-pades-rest/index.html)

<a name="print" />
### Versão para impressão

Após o fluxo de controle da amostra [Assinatura PAdES com arquivo já no servidor](#pades) estar concluído e o link *Download a printer-friendly version of the signed file* ser clicado, o fluxo 
vai para o controller [PrinterFriendlyPadesRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PrinterFriendlyPadesRestController.java) com o parâmetro de URL `fileId` preenchido.

<a name="cades" />
### Assinatura CAdES com arquivo já no servidor

* Controller: [CadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/CadesSignatureRestController.java)
* Views:
  * [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/cades-signature-rest/index.html)
  (Javascript em [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-form.js))
  * [signature-info.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/cades-signature-rest/signature-info.html)

<a name="cades-upload" />
### Assinatura CAdES com upload do arquivo pelo usuário

Depois que o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração no [UploadController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/UploadController.java)) e na view [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/upload/index.html) é feito, 
o fluxo de controle é o mesmo que na amostra [CAdES signature with file already on server](#cades), mas com o parâmetro de URL `userfile` preenchido.

<a name="cades-cosign" />
### Assinatura conjunta CAdES

Após o fluxo de controle da amostra [CAdES signature with file already on server](#cades) está concluído e o link *Co-sign with another certificate* é clicado, o mesmo fluxo de controle é 
repetido, mas agora com parâmetro de URL `cmsfile` preenchidos.

<a name="cades-server" />
### Assinatura CAdES usando chave do servidor

* Controller: [CadesSignatureServerKeyController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/sample-spring-mvc/src/main/java/sample/controller/CadesSignatureServerKeyController.java)
* View: [cades-signature-server-key.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/sample-spring-mvc/src/main/resources/templates/cades-signature-server-key.html)

<a name="open-cades" />
### Abrir/validar uma assinatura CAdES existente

* Controller: [OpenCadesExpressController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/OpenCadesExpressController.java)
* View: [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/open-cades-express/index.html)

<a name="xml-full" />
### Assinatura XML do documento inteiro

* Controller: [XmlSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/XmlSignatureRestController.java)
* Views:
  * [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/xml-signature-rest/index.html)
  (Javascript em [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-form.js))
  * [signature-info.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/xml-signature-rest/signature-info.html)

<a name="xml-element" />
### Assinatura XML de um elemento

* Controller: [XmlNFeSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/XmlNFeSignatureRestController.java)
* Views:
  * [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/xml-nfe-signature-rest/index.html)
  (Javascript em [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-form.js))
  * [signature-info.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/xml-nfe-signature-rest/signature-info.html)

<a name="xades-element" />
### Assinatura XAdES de um elemento

Ainda não está disponível neste projeto.

<a name="open-xml" />
### Abrir/validar assinatura de um arquivo XML existente

* Controller: [OpenXmlRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/OpenXmlRestController.java)
* View: [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/open-xml-rest/index.html)

<a name="batch" />
### Lote de assinatura PAdES 

* Controller: [BatchPadesSignatureRestController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/BatchPadesSignatureRestController.java)
* View: [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/batch-signature-rest/index.html)
  * Javascript: [batch-signature-rest-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/batch-signature-rest-form.js)

<a name="batch-optimized" />
### Lote otimizado de assinaturas PAdES

Ainda não está disponível neste projeto.

<a name="batch-cades" />
### Lote de assinaturas CAdES

Ainda não está disponível neste projeto.

<a name="batch-xml-element" />
### Lote de assinaturas XML de elementos no mesmo documento

Ainda não está disponível neste projeto.
