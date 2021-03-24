# Como funciona a assinatura com PKI Express em Java

Este artigo explica como funciona o processo de assinatura digital realizado no projeto de exemplos do [PKI Express](../index.md) em Java.

## Principais arquivos de código

* Controller [PadesSignatureExpressController](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)
* View [pades-signature-express/index](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/pades-signature-express/index.html)
* Módulo de JavaScript [signature-start-form](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)
* View [pades-signature-express/start](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/pades-signature-express/start.html)
* Módulo de JavaScript [signature-complete-form](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-complete-form.js)
* View [pades-signature-express/signature-info](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/templates/pades-signature-express/signature-info.html)

## Processo de assinatura

### 1. Usuário vai para a página de assinatura

Nesse momento, o usuário visita a URL `/pades-signature-express` (`GET`). O controller `PadesSignatureExpressController` é o responsável por atender à requisição, mais especificamente no método `get()`:

[!include[pades-signature-express](../../../../includes/pki-express/java/how-it-works/pades-signature-get.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

Nesse momento, apenas renderizamos a página de assinatura com a variável `state` setada para `initial`. Essa variável é utilizada para sinalizar em qual ponto o processo
de assinatura se encontra.

[!include[pades-signature-express](../../../../includes/pki-express/java/how-it-works/pades-signature-express-model-attribute.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

> [!NOTE]
> As variáveis `fileToSign` e `userfile` são meramente detalhes do exemplo.

A página renderizada é a view `pades-signature-express`. Ao final do carregamento desta, passamos referências aos elementos da página para o módulo de JavaScript `signatureStartForm`:

[!include[pades-signature-express](../../../../includes/pki-express/java/how-it-works/pades-signature-express-js.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

O módulo `signatureStartForm` bloqueia a tela e dispara a inicialização do Web PKI, passando a função `loadCertificates()` como callback para quando a inicialização
tiver sido concluída:

[!include[init-js](../../../../includes/pki-express/java/how-it-works/start-form-init.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

Na função `loadCertificates()`, disparamos o carregamento dos certificados disponíveis no computador do usuário, populando o elemento `<select>` da página:

[!include[load-certificates-js](../../../../includes/pki-express/java/how-it-works/start-form-load-certificates.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

### 2. Usuário clica no botão **Sign File**

Anteriormente, o módulo de JavaScript `signatureStartForm` registrou a função de JavaScript `startSignature()` para ser chamada quando o botão **Sign File** é clicado:

[!include[wireup-js](../../../../includes/pki-express/java/how-it-works/start-form-wireup-button.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

> [!NOTE]
> Note que é fundamental que o botão na página tenha `type="button"`, e não `type="submit"`, caso contrário ocorreria um *postback* imediatamente ao clicar no botão.

Portanto, quando o usuário clica no botão **Sign File**, a função `startSignature()` do `signatureStartForm` é invocada:

[!include[startSignature-js](../../../../includes/pki-express/java/how-it-works/start-form-startSignature.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

Nessa função, após bloquear a página, obtemos o *thumbprint* do certificado selecionado e colocamos em um dos campos ocultos da página (esse valor será necessário em outro momento do processo
de assinatura):

[!include[get-thumbprint-js](../../../../includes/pki-express/java/how-it-works/start-form-get-thumbprint.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

Invocamos então a função `readCertificate()` do Web PKI para obter a codificação do certificado escolhido (parte pública do certificado, o ".cer", sem a chave privada):

[!include[readCertificate-js](../../../../includes/pki-express/java/how-it-works/start-form-readCertificate.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

Uma vez lido o certificado, preenchemos um campo oculto da página com o resultado e fazemos o *postback*:

[!include[fill-hidden-fields-js](../../../../includes/pki-express/java/how-it-works/start-form-fill-hidden-fields.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-start-form.js)

### 3. Início da assinatura no *backend*

No backend, o controller `PadesSignatureExpressController` novamente é invocado para tratar o postback feito a partir do frontend com o certificado escolhido para realizar a assinatura, feito para a URL `pades-signature-express/start` com verbo `POST`. O método `postStart()` é responsável por tratar a requisição:

[!include[pades-signature-post-start](../../../../includes/pki-express/java/how-it-works/pades-signature-post-start.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

Nesse ponto, iniciamos a assinatura usando a classe `PadesSignatureStarter` passando o arquivo a ser assinado e a codificação do certificado escolhido para assinatura:

[!include[pades-signature-starter](../../../../includes/pki-express/java/how-it-works/pades-signature-starter.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

Opcionalmente, configuramos a aparência da assinatura:

[!include[pades-signature-visual-representation](../../../../includes/pki-express/java/how-it-works/pades-signature-visual-rep.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

> [!NOTE]
> Para mais detalhes sobre as opções de configuração da aparência da assinatura, veja a classe
> [PadesVisualElements](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/util/express/PadesVisualElements.java)

Por fim, concluímos a etapa inicial, obtendo os dados necessários para realizar o algoritmo de assinatura digital:

[!include[pades-signature-start](../../../../includes/pki-express/java/how-it-works/pades-signature-start.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

Um ponto importante: a classe `PadesSignatureStarter` salva um arquivo chamado *transfer data file* contendo informações que precisam ser recuperadas
mais à frente no processo de assinatura. Por padrão, esse arquivo é armazenado na pasta temporária do sistema, porém outra pasta pode ser configurada.
O método `PadesSignatureStarter.getTransferFile()` retorna o *filename* do arquivo, o qual é preenchido em um campo oculto na página:

```java
model.addAttribute("transferFile", result.getTransferFile());
```
[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

> [!NOTE]
> Preocupações de segurança são tomadas na geração do nome desse arquivo, de modo que é impossível um usuário adivinhar o *transfer data file* de um
> processo de assinatura de outro usuário. Além disso, apenas o *filename* é enviado para a página, não o path completo, de modo que também não é
> possível a um usuário induzir a aplicação web a ler um arquivo em uma pasta arbitrária

Após um pouco de *housekeeping*, renderizamos novamente a view `pades-signature-express/start`:

```java
return "pades-signature-express/start";
```
[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

### 4. Realização do algoritmo de assinatura digital no *frontend*

Uma vez carregada a página, a função `init()` do `signatureCompleteForm ` é invocada. Bloqueamos então
a página e invocamos novamente a inicialização do Web PKI, porém dessa vez passando a função `sign()` como callback:

[!include[init-js](../../../../includes/pki-express/java/how-it-works/complete-form-init.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-complete-form.js)

Na função `sign()`, invocamos o Web PKI para realizar o algoritmo de assinatura digital com a chave privada do certificado, usando como dados de entrada os dados retornados pelo PKI Express no backend:

[!include[sign-js](../../../../includes/pki-express/java/how-it-works/complete-form-sign.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-complete-form.js)

Uma vez finalizado o algoritmo de assinatura, preenchemos o resultado em um campo oculto na página e fazemos um novo *postback* para o backend:

[!include[fill-hidden-fields-js](../../../../includes/pki-express/java/how-it-works/complete-form-fill-hidden-fields.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/resources/static/js/signature-complete-form.js)

### 5. Finalização da assinatura no *backend*

No backend, o controller `PadesSignatureExpressController` novamente é invocado para tratar o postback feito a partir do frontend com o resultado do algoritmo de assinatura digital, feito para a URL `pades-signature-express/complete` com verbo `POST`. O método `postComplete()` é responsável por tratar a requisição:

[!include[pades-signature-post-complete](../../../../includes/pki-express/java/how-it-works/pades-signature-post-complete.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

Obtemos uma instância da classe `SignatureFinisher` e fornecemos o arquivo sendo assinado, o *filename* do arquivo de *transfer data* e o resultado do algoritmo de assinatura feito no frontend com o Web PKI:

[!include[pades-signature-finisher](../../../../includes/pki-express/java/how-it-works/pades-signature-finisher.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

Geramos um *filename* aleatório para receber o PDF assinado:

[!include[pades-signature-return](../../../../includes/pki-express/java/how-it-works/pades-signature-return.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

Finalizamos o processo de assinatura:

[!include[pades-signature-finish](../../../../includes/pki-express/java/how-it-works/pades-signature-finish.md)]

[view on source](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/java/springmvc/src/main/java/com/lacunasoftware/pkisuite/controller/PadesSignatureExpressController.java)

Após esse comando, o arquivo assinado encontra-se salvo no *filename* gerado aleatóriamente acima. Fica, então, a critério da sua aplicação mover esse arquivo para o local correto, seja em banco de dados, sistema de arquivos ou serviço de storage.
