# Projeto de exemplos em Python com Flask

O **Projeto de exemplos em Python com Flask** mostra como usar o [Rest PKI](../index.md) junto com [Web PKI](../../web-pki/index.md) em um projeto Python usando o framework [Flask](http://flask.pocoo.org/). Está hospedado no GitHub em:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/Python

## Executando o projeto

1. [Download do projeto](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) ou clonar o repositório
1. Gerar um token de acesso API no [site do REST PKI](https://pki.rest/)
1. Cole o seu token de acesso no arquivo `sample/utils.py`
1. Instale as dependências: `pip install -r requirements.txt`
1. Veja o ambiente variável `FLASK_APP` para definir o nome do aplicativo que deve executar: `FLASK_APP=sample`
1. Execute a aplicação web: `flask run`
1. Acesse a URL [http://localhost:5000](http://localhost:5000)

## Mapa do projeto

Esta seção mostra onde encontrar partes relevantes em cada amostra de recurso do projeto.

<a name="auth" />
### Autentificação com certificação digital

* View: [authentication.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/authentication.py)
* Templates:
  * [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/authentication/index.html) (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/static/js/signature-form.js))
  * [action.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/authentication/action.html)

<a name="pades" />
### Assinatura PAdES com arquivo já no servidor

* View: [pades_signature.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/pades_signature.py)
* Templates:
  * [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/pades_signature/index.html) (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/static/js/signature-form.js))
  * [action.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/pades_signature/action.html)

<a name="pades-upload" />
### Assinatura PAdES com arquivo enviado pelo usuário

Após o upload do arquivo (que é implementado grosseiramente apenas para fins de demonstração na exibição [upload.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/upload.py) e template [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/upload/index.html)) feito o fluxo de controle é o mesmo que na amostra [Assinatura PAdES com arquivo já no servidor](#pades), mas com o parâmetro URL `userfile` preenchido.

<a name="pades-cosign" />
### Co-assinatura PAdES

Após o fluxo de controle da amostra [Assinatura PAdES com arquivo já no servidor](#pades) for concluído e o link *Co-assinatura com outro certificado* for clicado, o mesmo fluxo de controle é repetido, mas agora com o parâmetro URL `userfile` preenchido.

<a name="pdf-marks" />
### Marcas PAdES

Não avaliado neste projeto ainda.

<a name="pades-server" />
### Assinatura PAdES usando chave do servidor

Não avaliado neste projeto ainda.

<a name="pades-wo-client" />
### Assinatura PAdES sem comunicação do cliente

Não avaliado neste projeto ainda.

<a name="open-pades" />
### Abrir/Validar uma assinatura PAdES existente

Não avaliado neste projeto ainda.

<a name="print" />
### Versão para impressão

Não avaliado neste projeto ainda.

<a name="cades" />
### Assinatura CAdES com arquivo já no servidor

* View: [cades_signature.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/cades_signature.py)
* Templates:
  * [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/cades_signature/index.html) (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/static/js/signature-form.js))
  * [action.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/cades_signature/action.html)

<a name="cades-upload" />
### Assinatura CAdES com arquivo enviado pelo usuário

Após o upload do arquivo (que é implementado grosseiramente apenas para fins de demonstração na exibição [upload.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/upload.py) e template [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/upload/index.html)) feito o fluxo de controle é o mesmo que na amostra [Assinatura CAdES com arquivo já no servidor](#cades), mas com o parâmetro URL `userfile` preenchido.

<a name="cades-cosign" />
### Co-assinatura CAdES

Após o fluxo de controle da amostra [Assinatura CAdES com arquivo já no servidor](#cades) for concluído e o link *Co-assinatura com outro certificado* for clicado, o mesmo fluxo de controle é repetido, mas agora com o parâmetro URL `cmsfile` preenchido.

<a name="cades-server" />
### Assinatura CAdES usando chave do servidor

Não avaliado neste projeto ainda.

<a name="open-cades" />
### Abrir/Validar uma assinatura CAdES existente

Não avaliado neste projeto ainda.

<a name="xml-full" />
### Assinatura XML de um documento inteiro 

* View: [xml_signature.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/xml_signature.py)
* Templates:
  * [full.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/xml_signature/full.html)
  (JavaScript em [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/static/js/signature-form.js))
  * [action.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/xml_signature/action.html)

<a name="xml-element" />
### Assinatura XML de um elemento

* View: [xml_signature.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/xml_signature.py)
* Templates:
  * [element.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/xml_signature/element.html) (JavaScript em [signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/static/js/signature-form.js))
  * [action.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/xml_signature/action.html)

<a name="xades-element" />
### Assinatura XadES de um elemento

Não avaliado neste projeto ainda.

<a name="batch" />
### Lote de assinaturas PAdES

* View: [batch_pades_signature.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/batch_pades_signature.py)
* Template: [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/batch_pades_signature/index.html) (JavaScript on [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/static/js/batch-signature-form.js)) 

<a name="batch-optimized" />
### Lote otimizado de assinatura PAdES

Não avaliado neste projeto ainda.

<a name="batch-cades" />
### Lote de assinaturas CAdES

* View: [batch_cades_signature.py](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/views/batch_cades_signature.py)
* Template: [index.html](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/templates/batch_cades_signature/index.html) (JavaScript on [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Python/sample/static/js/batch-signature-form.js))

<a name="batch-xml-element" />
### Lote de assinaturas XML de elementos do mesmo documento

Não avaliado neste projeto ainda.