# Projeto de exemplos em PHP 5.5+

O **Projeto de exemplos em PHP 5.5+** mostra como usar o [Rest PKI](../index.md) junto com o [Web PKI](../../web-pki/index.md) em um projeto usando o **PHP 5.5+** (incluindo 7.x). Isto é
hospedado no GitHub em:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/php/plain

> [!NOTE]
> Para projetos destinados a versões anteriores do PHP, [clique aqui](index.md).

## Executando o projeto

1. [Download do projeto](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) ou clonar o [repositório](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. No prompt de comando, navegue até a pasta `php/plain` e execute `composer install` para baixar as dependências (se você não tiver Composer instalado, pegue [aqui](https://getcomposer.org/))
1. Ainda na pasta `php/plain`, execute `composer start` para iniciar o servidor embutido do PHP
1. Abra http://localhost:8000 no navegador

## Mapa do projeto

Esta seção lista tem onde encontrar as partes relevantes em cada amostra de recurso no projeto.

<a name="auth" />
### Autentificação com certificado digital

* [authentication-rest/index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/authentication-rest/index.php)
  * JavaScript: [authentication-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/authentication-form.js)
* [authentication-rest/complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/authentication-rest/complete.php)

<a name="pades" />
### Assinatura PAdES com arquivo já no servidor

* [pades-signature-rest/index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-signature-rest/index.php)
  * JavaScript: [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-form.js)
* [pades-signature-rest/complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-signature-rest/complete.php)

<a name="pades-upload" />
### Assinatura PAdES com arquivo enviado pelo usuário

Após o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração em [upload.php]
(https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) é feito o fluxo de controle é o mesmo que na amostra [Assinatura PAdES com arquivo já no servidor](#pades),
mas com parâmetro de URL `userfile` preenchidos.

<a name="pades-cosign" />
### Assinatura conjunta PAdES

Após o fluxo de controle da amostra [Assinatura PAdES com arquivo já no servidor](#pades) está concluído e o link *Co-sign with another certificate* é clicado, o mesmo fluxo de controle é 
repetido, mas agora com parâmetro de URL `userfile` preenchidos.

<a name="pdf-marks" />
### Marcas PAdES

Esse recurso é demonstrado como uma configuração opcional no  [Assinatura PAdES com arquivo já no servidor](#pades), amostra que por padrão começa comentada. Para ativá-lo, remova o comentário da linha a seguir [pades-signature-rest/index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-signature-rest/index.php):

```php
array_push($signatureStarter->pdfMarks, getPdfMark(1));
```

> [!TIP]
> Tente mudar o argumento para a função `getPdfMark()`para ver diferentes configurações de marcas PDF.

O código relevante está no arquivo [PadesVisualElementsRest.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/PadesVisualElementsRest.php), 
função `getPdfMark()`.

<a name="pades-server" />
### Assinatura PAdES usando chave do servidor

 * [pades-server-key-express/index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/pades-server-key-express/index.php)

 <a name="pades-wo-client" />
### Assinatura PAdES sem a comunicação com cliente

Ainda não está disponível neste projeto.

<a name="open-pades" />
### Abrir/validar uma assinatura PAdES existente

* [open-pades-rest/index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/open-pades-rest/index.php)

<a name="print" />
### Versão para impressão

Após o fluxo de controle da amostra [Assinatura PAdES com arquivo já no servidor](#pades) está concluído e o link *Download a printer-friendly version of the signed file* é clicado, o fluxo 
vai para o arquivo [printer-friendly-pades-rest/index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/printer-friendly-pades-rest/index.php), mas com parâmetro de URL `file` preenchidos.

O PDF gerado contém links para o arquivo [check.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/check.php), que 
mostra detalhes das assinaturas.

<a name="cades" />
### Assinatura CAdES com arquivo já no servidor

* [cades-signature-rest/index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/cades-signature-rest/index.php)
  * JavaScript: [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-form.js)
* [cades-signature-rest/complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/cades-signature-rest/complete.php)

<a name="cades-upload" />
### Assinatura CAdES com upload do arquivo pelo usuário

Depois que o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração no [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) é feito 
o fluxo de controle é o mesmo que na amostra [CAdES signature with file already on server](#cades), mas com parâmetro de URL `userfile` preenchidos.

<a name="cades-cosign" />
### Assinatura conjunta CAdES

Após o fluxo de controle da amostra [CAdES signature with file already on server](#cades) está concluído e o link *Co-sign with another certificate* é clicado, o mesmo fluxo de controle é 
repetido, mas agora com parâmetro de URL `cmsfile` preenchidos.

<a name="cades-server" />
### Assinatura CAdES usando chave do servidor

* [cades-signature-server-key.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/cades-signature-server-key.php)

<a name="open-cades" />
### Abrir/validar uma assinatura CAdES existente

* [open-cades-rest/index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/open-cades-rest/index.php)

<a name="xml-full" />
### Assinatura XML do documento inteiro

* [xml-signature-rest/index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/xml-signature-rest/index.php)
  * JavaScript: [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-form.js)
* [xml-signature-rest/complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/xml-signature-rest/complete.php)

<a name="xml-element" />
### Assinatura XML de um elemento

* [xml-nfe-signature-rest/index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/xml-nfe-signature-rest/index.php)
  * JavaScript: [signature-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/signature-form.js)
* [xml-nfe-signature-rest/complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/xml-nfe-signature-rest/complete.php)

<a name="xades-element" />
### Assinatura XAdES de um elemento

Não está disponível neste projeto.

<a name="open-xml" />
### Abrir/validar assinatura de um arquivo XML existente

* [open-xml-rest/index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/open-xml-rest/index.php)

<a name="batch" />
### Lote de assinatura PAdES 

* [batch-pades-signature-rest/index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/batch-pades-signature-rest/index.php)
  * JavaScript: [batch-signature-rest-form.js](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/scripts/batch-signature-rest-form.js)
  * Manipuladores AJAX: [batch-pades-signature-rest/start.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/batch-pades-signature-rest/start.php)
    e [batch-pades-signature-rest/complete.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/batch-pades-signature-rest/complete.php)

<a name="batch-optimized" />
### Lote otimizado de assinaturas PAdES

Não está disponível neste projeto.

<a name="batch-cades" />
### Lote de assinaturas CAdES

Não está disponível neste projeto.

<a name="batch-xml-element" />
### Lote de assinaturas XML de elementos no mesmo documento

* [batch-xml-element-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/batch-xml-element-signature.php)
  * JavaScript: [batch-xml-element-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/content/js/batch-xml-element-signature-form.js)
  * AJAX handlers: [batch-xml-element-signature-start.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/batch-xml-element-signature-start.php)
    and [batch-xml-element-signature-complete.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/batch-xml-element-signature-complete.php)
