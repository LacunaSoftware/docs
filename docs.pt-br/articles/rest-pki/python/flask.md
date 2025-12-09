# Projeto de exemplos em Python com Flask

O **Projeto de exemplos em Python com Flask** mostra como usar o [Rest PKI](../index.md) junto com [Web PKI](../../web-pki/index.md) em um projeto Python usando o framework [Flask](http://flask.pocoo.org/). Está hospedado no GitHub em:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/python/flask

## Executando o projeto

1. [Download do projeto](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) ou clonar o repositório
1. Instale as dependências: `pip install -r requirements.txt`
1. Veja o ambiente variável `FLASK_APP` para definir o nome do aplicativo que deve executar: `FLASK_APP=sample`
1. Execute a aplicação web: `flask run`
1. Acesse a URL [http://localhost:5000](http://localhost:5000)

## Mapa do projeto

Esta seção mostra onde encontrar partes relevantes em cada amostra de recurso do projeto.

<a name="auth" />
### Autentificação com certificação digital

* View: [authentication_rest.py](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/views/authentication_rest.py)
* Templates:
  * [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/authentication_rest/index.html) (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/static/js/signature-form.js))
  * [complete.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/authentication_rest/complete.html)

<a name="pades" />
### Assinatura PAdES com arquivo já no servidor

* View: [pades_signature_rest.py](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/views/pades_signature_rest.py)
* Templates:
  * [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/pades_signature_rest/index.html) (JavaScript on [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/static/js/signature-form.js))
  * [complete.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/pades_signature_rest/complete.html)

<a name="pades-upload" />
### Assinatura PAdES com arquivo enviado pelo usuário

Após o upload do arquivo (implementado apenas para demonstração na view [server_files.py](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/views/server_files.py) e template [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/server_files/index.html)) o fluxo de controle é o mesmo que na amostra [Assinatura PAdES com arquivo já no servidor](#pades), mas com o parâmetro URL `userfile` preenchido.

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

* View: [cades_signature_rest.py](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/views/cades_signature_rest.py)
* Templates:
  * [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/cades_signature_rest/index.html) (JavaScript em [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/static/js/signature-form.js))
  * [complete.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/cades_signature_rest/complete.html)

<a name="cades-upload" />
### Assinatura CAdES com arquivo enviado pelo usuário

Após o upload do arquivo (implementado apenas para demonstração na view [server_files.py](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/views/server_files.py) e template [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/server_files/index.html)) o fluxo de controle é o mesmo que na amostra [Assinatura CAdES com arquivo já no servidor](#cades), mas com o parâmetro URL `userfile` preenchido.

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

* View: [xml_signature_rest.py](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/views/xml_signature_rest.py)
* Templates:
  * [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/xml_signature_rest/index.html)
  (JavaScript em [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/static/js/signature-form.js))
  * [complete.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/xml_signature_rest/complete.html)

<a name="xml-element" />
### Assinatura XML de um elemento

* View: [xml_signature_rest.py](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/views/xml_signature_rest.py)
* Templates:
  * [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/xml_nfe_signature_rest/index.html) (JavaScript em [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/static/js/signature-form.js))
  * [complete.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/xml_nfe_signature_rest/complete.html)

<a name="xades-element" />
### Assinatura XadES de um elemento

Não avaliado neste projeto ainda.

<a name="batch" />
### Lote de assinaturas PAdES

* View: [batch_pades_signature_rest.py](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/views/batch_pades_signature_rest.py)
* Template: [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/batch_pades_signature_rest/index.html) (JavaScript em [batch-signature-rest-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/static/js/batch-signature-rest-form.js)) 

<a name="batch-optimized" />
### Lote otimizado de assinatura PAdES

Não avaliado neste projeto ainda.

<a name="batch-cades" />
### Lote de assinaturas CAdES

* View: [batch_cades_signature_rest.py](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/views/batch_cades_signature_rest.py)
* Template: [index.html](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/templates/batch_cades_signature_rest/index.html) (JavaScript em [batch-signature-rest-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/python/flask/sample/static/js/batch-signature-rest-form.js))

<a name="batch-xml-element" />
### Lote de assinaturas XML de elementos do mesmo documento

Não avaliado neste projeto ainda.