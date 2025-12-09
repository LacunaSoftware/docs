# Projeto de exemplos em Node.js MVC

O **Projeto de exemplos em Node.js MVC** mostra como usar o [Rest PKI](../index.md) junto com [Web PKI](../../web-pki/index.md)
em projeto Node.js seguindo o padrão Model-View-Controller. É hospedado no GitHub em:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/nodejs/expressmvc

## Executando o projeto

1. [Download do projeto](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) ou clonar o [repositório](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. Instale as dependências: `npm install`
1. Execute a aplicação: `npm start`
1. Acesse o URL [http://localhost:3000](http://localhost:3000)

## Mapa do projeto

Esta seção lista tem onde encontrar as partes relevantes em cada amostra de recurso no projeto.

<a name="auth" />
### Autentificação com certificado digital

* Route: [authentication-restpki.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/routes/authentication-restpki.js)
* Views:
  * [authentication-rest/index.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/authentication-rest/index.pug)
    (JavaScript on [authentication-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/public/javascripts/authentication-form.js))
  * [authentication-rest/failed.pug](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/nodejs/expressmvc/views/authentication-rest/failed.pug)

<a name="pades" />
### Assinatura PAdES com arquivo já no servidor

* Route: [pades-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/pades-signature.js)
* Views: 
  * [pades-signature.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/pades-signature.pug)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/public/javascripts/signature-form.js))
  * [pades-signature-complete.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/pades-signature-complete.pug)

<a name="pades-upload" />
### Assinatura PAdES com arquivo enviado pelo usuário

Após o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração em [upload.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/upload.js) e
[upload.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/upload.pug)) é feito o fluxo de controle é o mesmo que na amostra [Assinatura PAdES com arquivo já no servidor](#pades),
mas com parâmetro de URL `userfile` preenchidos.

<a name="pades-cosign" />
### Assinatura conjunta PAdES

Após o fluxo de controle da amostra [Assinatura PAdES com arquivo já no servidor](#pades) está concluído e o link *Co-sign with another certificate* é clicado, o mesmo fluxo de controle é 
repetido, mas agora com parâmetro de URL `userfile` preenchidos.

<a name="pdf-marks" />
### Marcas PAdES

Ainda não está disponível neste projeto.

<a name="pades-server" />
### Assinatura PAdES usando chave do servidor

* Route: [pades-signature-server-key.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/pades-signature-server-key.js)
* View: [pades-signature-complete.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/pades-signature-complete.pug)

<a name="pades-wo-client" />
### Assinatura PAdES sem a comunicação com cliente

Ainda não está disponível neste projeto.

<a name="open-pades" />
### Abrir/validar uma assinatura PAdES existente

* Route: [open-pades-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/open-pades-signature.js)
* View: [open-pades-signature.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/open-pades-signature.pug)

<a name="print" />
### Versão para impressão

Após o fluxo do controle da amostra [Assinatura PAdES com arquivo já no servidor](#pades) estiver completo e o link *Download a printer-friendly version of the signed file* for clicado, o fluxo ,
vai para web form: [printer-friendly-version.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/printer-friendly-version.js) com o arquivo de parâmetro URL `file` preenchido.

<a name="cades" />
### Assinatura CAdES com arquivo já no servidor

* Route: [cades-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/cades-signature.js)
* Views:  
  * [cades-signature.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/cades-signature.pug)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/public/javascripts/signature-form.js))
  * [cades-signature-complete.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/cades-signature-complete.pug)

<a name="cades-upload" />
### Assinatura CAdES com upload do arquivo pelo usuário

Depois que o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração no [upload.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/upload.js) e [upload.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/upload.pug)) é feito 
o fluxo de controle é o mesmo que na amostra [Assinatura CAdES com arquivo já no servidor](#cades), mas com parâmetro de URL `userfile` preenchidos.

<a name="cades-cosign" />
### Assinatura conjunta CAdES

Após o fluxo de controle da amostra [Assinatura CAdES com arquivo já no servidor](#cades) está concluído e o link *Co-sign with another certificate* é clicado, o mesmo fluxo de controle é 
repetido, mas agora com parâmetro de URL `cmsfile` preenchidos.

<a name="cades-server" />
### Assinatura CAdES usando chave do servidor

* Route: [cades-signature-server-key.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/cades-signature-server-key.js)
* View: [cades-signature-complete.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/cades-signature-complete.pug)

<a name="open-cades" />
### Abrir/validar uma assinatura CAdES existente

* Route: [open-cades-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/open-cades-signature.js)
* View: [open-cades-signature.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/open-cades-signature.pug)

<a name="xml-full" />
### Assinatura XML do documento inteiro

* Route: [xml-full-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/xml-full-signature.js)
* Views:
  * [xml-full-signature.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/xml-full-signature.pug)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/public/javascripts/signature-form.js))
  * [xml-signature-complete.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/xml-signature-complete.pug)

<a name="xml-element" />
### Assinatura XML de um elemento

* Route: [xml-element-signature.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/routes/xml-element-signature.js)
* Views:
  * [xml-element-signature.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/xml-element-signature.pug)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/public/javascripts/signature-form.js))
  * [xml-signature-complete.pug](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/NodeJS/mvc/views/xml-signature-complete.pug)

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