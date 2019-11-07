# Projeto de exemplos em Ruby on Rails

O **Projeto de exemplos em Ruby on Rails** mostra como usar o [Rest PKI](../index.md) junto com [Web PKI](../../web-pki/index.md) em um projeto de Ruby usando o framework [Ruby on Rails](http://rubyonrails.org/). Isto está hospedado no GitHub em:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/Ruby

## Executando o projeto

1. [Download do projeto](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) ou clone o [repositório](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Gere um token API de acesso no [site do REST PKI](https://pki.rest/)
1. Cole seu token de acesso no inicializador [restpki.rb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/config/initializers/restpki.rb)
1. Instale as dependências: `bundle install`
1. Execute a aplicação: `rails server`
1. Accesse a URL [http://localhost:3000](http://localhost:3000)

## Mapa do projeto

Esta seção lista onde você vai encontrar partes relevantes nas amostras do projeto.

<a name="auth" />
### Autentificação com certificado digital

* Controller: [AuthenticationController.rb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/authentication_controller.rb)
* Views:
  * [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/authentication/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/authentication/action.html.erb)

<a name="pades" />
### Assinatura PAdES com arquivo já no servidor

* Controller: [PadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/pades_signature_controller.rb)
* Views:
  * [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/pades_signature/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/pades_signature/action.html.erb)

<a name="pades-upload" />
### Assinatura PAdES com arquivo enviado pelo usuário

Após o upload do arquivo (que é implementado de maneira grosseira apenas para fins de demonstração no controlador [UploadController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/upload_controller.rb) e 
visualização [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/upload/index.html.erb)) feito o fluxo de controle é o mesmo que na amostra [Assinatura PAdES com arquivo existente já no servidor](#pades), mas com o parâmetro URL `userfile` preenchido.

<a name="pades-cosign" />
### Co-assinatura PAdES

Após o fluxo de controle da amostra [Assinatura PAdES com arquivo já existente](#pades) for concluído e o link *Co-assinar com outro certificado* for clicado, o
o mesmo fluxo de controle é repetido, mas agora com o parâmetro de URL `userfile` preenchido.

<a name="pdf-marks" />
### Marcas PAdES

Não avaliado para este projeto ainda.

<a name="pades-server" />
### Assinatura PAdES usando chave do servidor

Não avaliado para este projeto ainda.

<a name="pades-wo-client" />
### Assinatura PAdES sem comunicação do cliente

* Controller: [PadesSignatureWithoutIntegrationController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/pades_signature_without_integration_controller.rb)
* Views:
  *	[index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/pades_signature_without_integration/index.html.erb)
	(JavaScript on [signature-without-integration-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/signature-without-integration-form.js))

<a name="open-pades" />
### Abrir/validar uma assinatura PAdES existente

Não avaliado para este projeto ainda.

<a name="print" />
### Versão para impressão 

Não avaliado para este projeto ainda.

<a name="cades" />
### Assinatura CAdES com arquivo já no servidor

* Controller: [CadesSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/cades_signature_controller.rb)
* Views:
  * [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/cades_signature/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/cades_signature/action.html.erb)

<a name="cades-upload" />
### Assinatura CAdES com arquivo enviado pelo usuário

Após o fluxo de controle da amostra [Assinatura CAdES com arquivo já existente no servidor](#cades) for concluído e o link *Co-sign with another certificate* for clicado, o
o mesmo fluxo de controle é repetido, mas agora com o parâmetro de URL `userfile` preenchido.

<a name="cades-server" />
### Assinatura CAdES usando chave do servidor

Não avaliado para este projeto ainda.

<a name="open-cades" />
### Abrir/validar uma assinatura CAdES existente

Não avaliado para este projeto ainda.

<a name="xml-full" />
### Assinatura XML de um documento inteiro

* Controller: [FullXmlSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/full_xml_signature_controller.rb)
  * [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/full_xml_signature/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/full_xml_signature/action.html.erb)

<a name="xml-element" />
### Assinatura XML de um elemento

* Controller: [XmlElementSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/xml_element_signature_controller.rb)
* Views:
  * [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/xml_element_signature/index.html.erb)
    (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/signature-form.js))
  * [action.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/xml_element_signature/action.html.erb)

<a name="xades-element" />
### Assinatura XAdES de um elemento

Não avaliado para este projeto ainda.

<a name="open-xml" />
### Abrir/validar assinaturas em um arquivo XML existente

Não avaliado para este projeto ainda.

<a name="batch" />
### Lote de assinaturas PAdES

* Controller: [BatchSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/batch_signature_controller.rb)
* View: [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/batch_signature/index.html.erb)
  (JavaScript on [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/batch-signature-form.js))

<a name="batch-optimized" />
### Lote otimizado de assinaturas PAdES

Não avaliado para este projeto ainda.

<a name="batch-cades" />
### Lote de assinaturas CAdES

* Controller: [CadesBatchSignatureController](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/controllers/cades_batch_signature_controller.rb)
* View: [index.html.erb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/views/cades_batch_signature/index.html.erb)
  (JavaScript on [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/app/assets/javascripts/batch-signature-form.js))

<a name="batch-xml-element" />
### Lote de assinaturas XML de elementos do mesmo documento

Não avaliado para este projeto ainda.