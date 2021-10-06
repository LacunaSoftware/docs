# Personalização do Signer

Esta página descreve os principais aspectos que podem ser personalizados em sua instância do Signer.

## Esquema de cores

A aplicação é tematizada de acordo com um tema com duas cores principais:

* **Theme**: cor do tema.
* **Accent**: cor de contraste.

Conforme a imagem abaixo:

![Color Scheme](../images/color-scheme.png)

Os temas disponíveis são:

* default: 

![Color Scheme](../images/themes/default.png)

* amaranth-pacific-blue - apb:

![Color Scheme](../images/themes/apb.png)

* amazon-cornell-red - acr:

![Color Scheme](../images/themes/acr.png)

* azure-lime-green - alg:

![Color Scheme](../images/themes/alg.png)

* castleton-green-orange - cgo (v1.10.1):

![Color Scheme](../images/themes/cgo.png)

* cerulean-lime-green - clg:

![Color Scheme](../images/themes/clg.png)

* charcoal-amazonite - cam:

![Color Scheme](../images/themes/cam.png)

* cobalt-lemon-curry - clc:

![Color Scheme](../images/themes/clc.png)

* dark-cerulean-green - dcg:

![Color Scheme](../images/themes/dcg.png)

* dark-grey-yellow - dgy:

![Color Scheme](../images/themes/dgy.png)

* dark-indigo-red - dir:

![Color Scheme](../images/themes/dir.png)

* english-vermillion-arsenic - eva:

![Color Scheme](../images/themes/eva.png)

* green-dark-coral - gdc:

![Color Scheme](../images/themes/gdc.png)

* independence-green - idg:

![Color Scheme](../images/themes/idg.png)

* metallic-seaweed-emerald - mse:

![Color Scheme](../images/themes/mse.png)

* onyx-satin-gold - osg:

![Color Scheme](../images/themes/osg.png)

* oxford-blue-green - obg (v1.10.1):

![Color Scheme](../images/themes/obg.png)

* persian-plum-sand - pps (v1.10.4):

![Color Scheme](../images/themes/pps.png)

* queen-blue-mint - qbm:

![Color Scheme](../images/themes/qbm.png)

* teal-blue-gold - tbg:

![Color Scheme](../images/themes/tbg.png)

* viridian-green-yellow - vgy (v1.10.2):

![Color Scheme](../images/themes/vgy.png)

* international-orange-green - iog (v1.31.0):

![Color Scheme](../images/themes/iog.png)

* onyx-carrot-orange - oco (v1.31.0):

![Color Scheme](../images/themes/oco.png)

* international-orange-apricot - ioa (v1.33.0):

![Color Scheme](../images/themes/ioa.png)

* generic-viridian-blue - gvb (v1.33.0):

![Color Scheme](../images/themes/gvb.png)

* space-cadet-yellow - scy (v1.34.0):

![Color Scheme](../images/themes/scy.png)

* blue-venetian-red - bvr (v1.36.0):

![Color Scheme](../images/themes/bvr.png)

> [!NOTE]
> Caso seja necessário, um novo tema pode ser criado de acordo com sua necessidade, bastando informar qual são as cores theme e accent.

## Logos

A aplicação utiliza duas logos principais: 

* light-logo: para aplicação em fundo escuro.

![Light Logo](../images/light-logo-sample.png)

* dark-logo: para aplicação em fundo claro.

![Dark Logo](../images/dark-logo-sample.png)

## Configuração da Home

Existem duas formas de configurar a Home page:

* Configuração simples.
* Configuração avançada (página estática).

###  Configuração Simples

Permite personalizar a área demarcada abaixo:

![Custom Home Page](../images/home-page.png)

É preciso apenas fornecer uma imagem de como gostaria que ficasse ou então o HTML/CSS correspondente.

Caso deseje criar seu próprio HTML e CSS, as seguintes regras devem ser observadas:

* Criar um arquivo HTML para cada linguagem disponível, no formato `home-<language>.html`. Exemplo: `home-pt.html`, `home-es.html` e `home-en.html`.
* Os arquivos HTML não podem conter tags `script` nem *inline styles*.
* Os arquivos HTML poderão usar classes definidas na biblioteca *Bootstrap* versão `4.3.1` referentes aos seguintes módulos:
	* [Grid](https://getbootstrap.com/docs/4.3/layout/grid)
	* [Utilities for layout](https://getbootstrap.com/docs/4.3/layout/utilities-for-layout)
* A aplicação segue o padrão [Material Design](https://material.io) e, por tanto, classes definidas na biblioteca [Angular Material UI](https://material.angular.io) 
também podem ser utilizadas.
* Caso seja necessário personalizar o CSS, deve ser criado um arquivo denominado `main.css`.
* Os arquivos HTML e CSS devem ser colocados na pasta `assets` do *Blob Storage* configurado. Ao fazer a atualização, a aplicação precisa ser reiniciada.

###  Configuração Avançada (página estática)

Permite personalizar toda a home page, de maneira que a página passa a ser estática. Exemplo:

![Custom Home page advanced](../images/advanced-home-page.png)

Para isso, é preciso fornecer um arquivo HTML chamado `index.html` acompanhado de uma pasta denominada `theme-assets` com todos 
recursos que o arquivo depender: imagens, CSS e JS. **Subpastas não são suportadas**, isto é, os arquivos devem ser adicionados na
raíz da pasta theme-assets:

![Folder Structure](../images/advanced-folder-structure.png)

Todos arquivos devem ser colocados na pasta `assets` do *Blob Storage* configurado. Ao fazer a atualização, a aplicação precisa ser reiniciada.

> [!WARNING]
> Ao usar esta abordagem, recomenda-se que não sejam feitas muitas alterações no cabeçalho da página, tendo em vista que existem 
> páginas da área externa da aplicação cujo cabeçalho não irá seguir esse modelo, como exemplo a tela de assinatura externa e de 
> validação de documentos.


## Configuração do footer

Permite personalizar o footer da home page, caso a configuração de home page seja a simples:

![Footer](../images/footer.png)

É preciso apenas fornecer uma imagem de como gostaria que ficasse ou então o HTML/CSS correspondente.

## Envio de Emails

É possível personalizar o envio de emails para que sejam enviados com seu próprio servidor SMTP. Para isso devem ser informados
os dados abaixo:

* **ServerHost**: endereço (host) do Servidor SMTP.
* **EnableSsl**: define se o servidor SMTP aceita comunicação com SSL.
* **ServerPort**: porta para comunicação com o servidor SMTP caso seja diferente do padrão (587).
* **Username**: usuário para autenticação com servidor SMTP.
* **Password**: senha do usuário para autenticação com servidor SMTP.
* **SenderAddress**: endereço de email que será utilizado para enviar emails.
* **SenderName**: nome que será exibido como remetente dos emails enviados. Recomenda-se usar o mesmo nome da aplicação.

## Envio de SMS

Caso o envio de SMS esteja habilitado (assinatura eletrônica com código via SMS) deve ser configurada sua própria conta no provedor
de SMS <a href="https://www.twilio.com" target="_blank">Twilio</a> ou <a href="https://www.totalvoice.com.br" target="_blank">Total Voice</a>.

## Domínio

Basta adicionar um registro DNS de tipo CNAME apontando para o endereço da instância que será fornecido e notificar
a equipe de implantação para que façam os ajustes necessários.