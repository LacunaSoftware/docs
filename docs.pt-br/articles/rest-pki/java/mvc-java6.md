# Projeto de exemplos em Java 6 com Spring MVC

O **Projeto de exemplos em Java 6 com Spring MVC** mostra como usar o [Rest PKI](../index.md) junto com [Web PKI](../../web-pki/index.md) no **Java 6** em uma aplicação web usando
framework [Spring MVC](http://spring.io/). É hospedado no GiHub em:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/Java/spring-mvc-java6

> [!NOTE]
> Este projeto é somente para **Java 6**. Para Java 7+, veja o projeto [Spring MVC](mvc.md).

## Executando o projeto

1. [Download do projeto](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) ou clonar o [repositório](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Gere um token de acesso à API no [REST PKI website](https://pki.rest/)
1. Cole seu token de acesso no arquivo [Java/spring-mvc-java6/src/main/resources/application.properties](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/application.properties#L27-L30)
1. No prompt de comando, navegue até a pasta `Java/sample-spring-java6` e execute o comando `gradlew run` (no Linux `./gradlew run`). Se você estiver usando Windows, você pode, alternativamente, clicar duas vezes no arquivo `Run-Sample.bat`.
1. Depois de ver a mensagem *"Starded Application in x.xxx seconds"* (a porcentagem na tela não atingirá 100%), abra o browser e vá para a URL http://localhost:60963

## Mapa do projeto

Esta seção lista tem onde encontrar as partes relevantes em cada amostra de recurso no projeto.

<a name="auth" />
### Autentificação com certificado digital

* Controller: [AuthenticationController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/AuthenticationController.java)
* Views:
	* [authentication.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/authentication.html)
	  (Javascript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/static/js/signature-form.js))
	* [authentication-success.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/authentication-success.html)
	* [authentication-failed.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/authentication-failed.html)

<a name="pades" />
### Assinatura PAdES com arquivo já no servidor

* Controller: [PadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/PadesSignatureController.java)
* Views:
  * [pades-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/pades-signature.html)
    (Javascript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/static/js/signature-form.js))
  * [pades-signature-info.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/pades-signature-info.html)

<a name="pades-upload" />
### Assinatura PAdES com arquivo enviado pelo usuário

Após o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração em [UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/UploadController.java)) é feito o fluxo de controle é o mesmo que na amostra [Assinatura PAdES com arquivo já no servidor](#pades),
mas com parâmetro de URL `userfile` preenchidos.

<a name="pades-cosign" />
### Assinatura conjunta PAdES

Após o fluxo de controle da amostra [Assinatura PAdES com arquivo já no servidor](#pades) está concluído e o link *Co-sign with another certificate* é clicado, o mesmo fluxo de controle é 
repetido, mas agora com parâmetro de URL `userfile` preenchidos.

<a name="pdf-marks" />
### Marcas PAdES

Esse recurso é demonstrado como uma configuração opcional no  [Assinatura PAdES com arquivo já no servidor](#pades), amostra que por padrão começa comentada. Para ativá-lo, remova o 
comentário da linha a seguir [PadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/PadesSignatureController.java):

```java
signatureStarter.addPdfMark(PadesVisualElements.getPdfMark(1));
```

> [!TIP]
> Tente mudar o argumento para a função `getPdfMark()`para ver diferentes configurações de marcas PDF.

O código relevante está no arquivo [PadesVisualElements](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/util/PadesVisualElements.java), 
função `getPdfMark()`.

<a name="pades-server" />
### Assinatura PAdES usando chave do servidor

Ainda não está disponível neste projeto.

<a name="pades-wo-client" />
### Assinatura PAdES sem a comunicação com cliente

Ainda não está disponível neste projeto.

<a name="open-pades" />
### Abrir/validar uma assinatura PAdES existente

* Controller: [OpenPadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/OpenPadesSignatureController.java)
* View: [open-pades-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/open-pades-signature.html)

<a name="print" />
### Versão para impressão

Ainda não está disponível neste projeto.

<a name="cades" />
### Assinatura CAdES com arquivo já no servidor

* Controller: [CadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/CadesSignatureController.java)
* Views:
  * [cades-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/cades-signature.html)
  (Javascript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/static/js/signature-form.js))
  * [cades-signature-info.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/cades-signature-info.html)

<a name="cades-upload" />
### Assinatura CAdES com upload do arquivo pelo usuário

Depois que o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração no [UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/UploadController.java) é feito 
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

* Controller: [OpenCadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/OpenCadesSignatureController.java)
* View: [open-cades-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/open-cades-signature.html)

<a name="xml-full" />
### Assinatura XML do documento inteiro

* Controller: [XmlSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/XmlSignatureController.java)
* Views:
  * [xml-full-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/xml-full-signature.html)
  (Javascript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/static/js/signature-form.js))
  * [xml-signature-info.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/xml-signature-info.html)

<a name="xml-element" />
### Assinatura XML de um elemento

* Controller: [XmlSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/XmlSignatureController.java)
* Views:
  * [xml-element-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/xml-element-signature.html)
  (Javascript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/static/js/signature-form.js))
  * [xml-signature-info.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/xml-signature-info.html)

<a name="xades-element" />
### Assinatura XAdES de um elemento

Ainda não está disponível neste projeto.

<a name="open-xml" />
### Abrir/validar assinatura de um arquivo XML existente

Ainda não está disponível neste projeto.

<a name="batch" />
### Lote de assinatura PAdES 

* Controller: [BatchSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/java/sample/controller/BatchSignatureController.java)
* View: [batch-signature.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/templates/batch-signature.html)
  * Javascript: [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/spring-mvc-java6/src/main/resources/static/js/batch-signature-form.js)


<a name="batch-optimized" />
### Lote otimizado de assinaturas PAdES

Ainda não está disponível neste projeto.

<a name="batch-cades" />
### Lote de assinaturas CAdES

Ainda não está disponível neste projeto.

<a name="batch-xml-element" />
### Lote de assinaturas XML de elementos no mesmo documento

Ainda não está disponível neste projeto.