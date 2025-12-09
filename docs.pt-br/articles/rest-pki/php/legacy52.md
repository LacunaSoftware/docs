# Projeto de exemplos em PHP 5.2

O **Projeto de exemplos em PHP 5.2** mostra como usar [Rest PKI](../index.md) junto com [Web PKI](../../web-pki/index.md)
em um projeto usando **PHP 5.2**. Isto é hospedado no GitHub em:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/PHP/legacy52

> [!NOTE]
> Somente usar este projeto se você não puder usar o [Projeto de exemplos em PHP 5.5+](current.md) ou o [Projeto de exemplos em PHP 5.3/5.4](legacy.md).

## Executando o projeto

1. [Download do projeto](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) ou clonar o [repositório](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. No prompt de comando, navegue até a pasta `PHP/legacy52` e execute o comando `composer install` e faça o download das dependências (se você não tiver Composer instalado, pegue [aqui](https://getcomposer.org/))
1. Configurar um site no seu servidor HTTP local apontando para à pasta `PHP/legacy52`
1. Abrir o arquivo index.php no browser a URL correspondente (dependendo do passo anterior)

## Mapa do projeto

Esta seção lista tem onde encontrar as partes relevantes em cada amostra de recurso no projeto.

<a name="auth" />
### Autentificação com certificado digital

* [authentication.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/authentication.php)
	* JavaScript: (inside authentication.php)
* [authentication-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/authentication-action.php)

<a name="pades" />
### Assinatura PAdES com arquivo já no servidor

* [pades-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/pades-signature.php)
  * JavaScript: (inside pades-signature.php)
* [pades-signature-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/pades-signature-action.php)

<a name="pades-upload" />
### Assinatura PAdES com arquivo enviado pelo usuário

Após o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração em [upload.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/upload.php)) é feito o fluxo de controle é o mesmo que na amostra [Assinatura PAdES com arquivo já no servidor](#pades),
mas com parâmetro de URL `userfile` preenchidos.

<a name="pades-cosign" />
### Assinatura conjunta PAdES

Após o fluxo de controle da amostra [Assinatura PAdES com arquivo já no servidor](#pades) está concluído e o link *Co-sign with another certificate* é clicado, o mesmo fluxo de controle é 
repetido, mas agora com parâmetro de URL `userfile` preenchidos.

<a name="pdf-marks" />
### Marcas PAdES

Ainda não está disponível neste projeto

<a name="pades-server" />
### Assinatura PAdES usando chave do servidor

Ainda não está disponível neste projeto.

<a name="pades-wo-client" />
### Assinatura PAdES sem a comunicação com cliente

Ainda não está disponível neste projeto.

<a name="open-pades" />
### Abrir/validar uma assinatura PAdES existente

* [open-pades-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/open-pades-signature.php))

<a name="print" />
### Versão para impressão

Ainda não está disponível neste projeto.

<a name="cades" />
### Assinatura CAdES com arquivo já no servidor

* [cades-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/cades-signature.php)
  * JavaScript: (inside cades-signature.php)
* [cades-signature-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/cades-signature-action.php)

<a name="cades-upload" />
### Assinatura CAdES com upload do arquivo pelo usuário

Depois que o upload do arquivo (que é grosseiramente implementado apenas para fins de demonstração no [upload.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/upload.php)) é feito 
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

* [open-cades-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/open-cades-signature.php)

<a name="xml-full" />
### Assinatura XML do documento inteiro

* [xml-full-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/xml-full-signature.php)
  * JavaScript: (inside xml-full-signature.php)
* [xml-full-signature-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/xml-full-signature-action.php)

<a name="xml-element" />
### Assinatura XML de um elemento

* [xml-element-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/xml-element-signature.php)
  * JavaScript: (inside xml-element-signature.php)
* [xml-element-signature-action.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/xml-element-signature-action.php)

<a name="xades-element" />
### Assinatura XAdES de um elemento

Ainda não está disponível neste projeto.

<a name="open-xml" />
### Abrir/validar assinatura de um arquivo XML existente

Ainda não está disponível neste projeto.

<a name="batch" />
### Lote de assinatura PAdES 

* [batch-signature.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/batch-signature.php)
  * JavaScript: [batch-signature-form.js](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/content/js/batch-signature-form.js)
  * AJAX handlers: [batch-signature-start.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/batch-signature-start.php)
    and [batch-signature-complete.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/batch-signature-complete.php)

<a name="batch-optimized" />
### Lote otimizado de assinaturas PAdES

Ainda não está disponível neste projeto.

<a name="batch-cades" />
### Lote de assinaturas CAdES

Ainda não está disponível neste projeto.

<a name="batch-xml-element" />
### Lote de assinaturas XML de elementos no mesmo documento

Ainda não está disponível neste projeto.