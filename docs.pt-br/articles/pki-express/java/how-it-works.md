# Como funciona a assinatura com PKI Express em Java

Este artigo explica como funciona o processo de assinatura digital realizado no projeto de exemplos do [PKI Express](../index.md) em Java.

## Principais arquivos de código

* Controller [PadesSignatureController](https://github.com/LacunaSoftware/PkiExpressSamples/blob/master/Java/src/main/java/sample/controller/PadesSignatureController.java)
* View [pades-signature](https://github.com/LacunaSoftware/PkiExpressSamples/blob/master/Java/src/main/resources/templates/pades-signature.html)
* Módulo de JavaScript [signatureForm](https://github.com/LacunaSoftware/PkiExpressSamples/blob/master/Java/src/main/resources/static/js/signature-form.js)

## Processo de assinatura

### 1. Usuário vai para a página de assinatura

Nesse momento, o usuário visita a URL `/pades-signature` (`GET`). O controller `PadesSignatureController` é o responsável por atender à requisição, mais especificamente no método `get()`:

```java
/**
 * This action simple renders the page
 */
@RequestMapping(value = "/pades-signature", method = {RequestMethod.GET})
public String get(/* ... */) throws IOException {
	// ...
}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L24-L62)

Nesse momento, apenas renderizamos a página de assinatura com a variável `state` setada para `initial`. Essa variável é utilizada para sinalizar em qual ponto o processo
de assinatura se encontra.

```java
// Render the signature page (templates/pades-signature.html)
model.addAttribute("state", state);
model.addAttribute("fileToSign", fileToSign);
model.addAttribute("userfile", userfile);
return "pades-signature";
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L57-L61)

> [!NOTE]
> As variáveis `fileToSign` e `userfile` são meramente detalhes do exemplo.

A página renderizada é a view `pades-signature`. Ao final do carregamento desta, passamos referências aos elementos da página para o módulo de JavaScript `signatureForm`:

```js
$(document).ready(function () {
    // Once the page is ready, we call the init() function on the javascript code (see signature-form.js)
    signatureForm.init({
        form: $('#signForm'),
        certificateSelect: $('#certificateSelect'),
        refreshButton: $('#refreshButton'),
        signButton: $('#signButton'),
        stateField: $('#stateField'),
        certThumbField: $('#certThumbField'),
        certContentField: $('#certContentField'),
        toSignHashField: $('#toSignHashField'),
        digestAlgorithmField: $('#digestAlgorithmField'),
        signatureField: $('#signatureField')
    });
});
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/templates/pades-signature.html#L76-L90)

O módulo `signatureForm`, quando `state == "initial"`, bloqueia a tela e dispara a inicialização do Web PKI, passando a função `loadCertificates()` como callback para quando a inicialização
tiver sido concluída:

```js
// -------------------------------------------------------------------------------------------------
// Initializes the signature form.
// -------------------------------------------------------------------------------------------------
function init(fe) {

    // ...

    if (formElements.stateField.val() == 'initial') {

        // Wireup of button clicks.
        formElements.signButton.click(startSignature);
        formElements.refreshButton.click(refresh);

        // Block the UI while we get things ready.
        $.blockUI({ message: 'Initializing ...' });

        // Call the init() method on the LacunaWebPKI object, passing a callback for when the
        // component is ready to be used and another to be called when an error occurs on any of the
        // subsequent operations. For more information, see:
        // https://docs.lacunasoftware.com/en-us/articles/web-pki/get-started.html#coding-the-first-lines
        // https://webpki.lacunasoftware.com/Help/classes/LacunaWebPKI.html#method_init
        pki.init({
            ready: loadCertificates, // As soon as the component is ready we'll load the certificates.
            defaultError: onWebPkiError
        });

	} else //...

}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L21-L38)

Na função `loadCertificates()`, disparamos o carregamento dos certificados disponíveis no computador do usuário, populando o elemento `<select>` da página:

```js
// -------------------------------------------------------------------------------------------------
// Function that loads the certificates, either on startup or when the user clicks the "Refresh"
// button. At this point, the UI is already blocked.
// -------------------------------------------------------------------------------------------------
function loadCertificates() {

    // Call the listCertificates() method to list the user's certificates.
    pki.listCertificates({

        // Specify that expired certificates should be ignored.
        filter: pki.filters.isWithinValidity,

        // In order to list only certificates within validity period and having a CPF (ICP-Brasil),
        // use this instead:
        //filter: pki.filters.all(pki.filters.hasPkiBrazilCpf, pki.filters.isWithinValidity),

        // Id of the select to be populated with the certificates.
        selectId: formElements.certificateSelect.attr('id'),

        // Function that will be called to get the text that should be displayed for each option.
        selectOptionFormatter: function (cert) {
            return cert.subjectName + ' (issued by ' + cert.issuerName + ')';
        }

    }).success(function () {

        // Once the certificates have been listed, unblock the UI.
        $.unblockUI();
    });

}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L62-L92)

### 2. Usuário clica no botão **Sign File**

Anteriormente, o módulo de JavaScript `signatureForm` registrou a função de JavaScript `startSignature()` para ser chamada quando o botão **Sign File** é clicado:

```js
// Wireup of button clicks.
formElements.signButton.click(startSignature);
formElements.refreshButton.click(refresh);
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L23-L25)

> [!NOTE]
> Note que é fundamental que o botão na página tenha `type="button"`, e não `type="submit"`, caso contrário ocorreria um *postback* imediatamente ao clicar no botão.

Portanto, quando o usuário clica no botão **Sign File**, a função `startSignature()` do `signatureForm` é invocada:

```js
// -------------------------------------------------------------------------------------------------
// Function called when the user clicks the "Sign File" button.
// -------------------------------------------------------------------------------------------------
function startSignature() {

    // Block the UI while we perform the signature
    $.blockUI({ message: 'Starting signature ...' });

    // ...
}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L94-L115)

Nessa função, após bloquear a página, obtemos o *thumbprint* do certificado selecionado e colocamos em um dos campos ocultos da página (esse valor será necessário em outro momento do processo
de assinatura):

```js
// Get the thumbprint of the selected certificate.
var selectedCertThumbprint = formElements.certificateSelect.val();
formElements.certThumbField.val(selectedCertThumbprint);
``` 
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L102-L104)

Invocamos então a função `readCertificate()` do Web PKI para obter a codificação do certificado escolhido (parte pública do certificado, o ".cer", sem a chave privada):

```js
// Get certificate content to be passed to "start" step of the signature.
pki.readCertificate(selectedCertThumbprint).success(// ...
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L106-L107)

Uma vez lido o certificado, preenchemos um campo oculto da página com o resultado, mudamos o `state` para `start` e fazemos o *postback*:

```js
/* ... */.success(function (certEncoded) {
	formElements.certContentField.val(certEncoded);
	formElements.stateField.val('start');
	formElements.form.submit();
});
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L109-L112)

### 3. Início da assinatura no *backend*

No backend, o controller `PadesController` novamente é invocado para tratar o postback feito a partir do frontend com o certificado escolhido para realizar a assinatura,
feito para a URL `pades-signature` porém com verbo `POST`. O método `post()` é responsável por tratar a requisição:

```java
/**
 * This action receives the form submission from the signature page. It will perform a PAdES signature in three
 * steps using PKI Express and Web PKI.
 */
@RequestMapping(value = "/pades-signature", method = {RequestMethod.POST})
public String post(/* ... */) throws IOException {
	// ...
}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L64-L79)

Mais especificamente, como nesse momento temos `state == "start"`, o código executado é o seguinte trecho:

```java
if (state.equals("start")) {

	// This block will be executed only when its on the "start" step. In this sample, the state is set as
	// "start" programatically after the user press the "Sign File" button (see method sign() on
	// signature-form.js).

	// ...
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L81-L142)

Nesse ponto, iniciamos a assinatura usando a classe `PadesSignatureStarter` passando o arquivo a ser assinado e a codificação do certificado escolhido para assinatura:

```java
// Get an instance of the PadesSignatureStarter class, responsible for receiving the signature elements
// and start the signature process.
PadesSignatureStarter signatureStarter = new PadesSignatureStarter(Util.getPkiExpressConfig());

// Set PKI default options (see Util.java)
Util.setPkiDefaults(signatureStarter);

// Set PDF to be signed.
signatureStarter.setPdfToSign(fileToSign);

// Set Base64-encoded certificate's content to signature starter.
signatureStarter.setCertificateBase64(certContent);
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L88-L99)

Opcionalmente, configuramos a aparência da assinatura:

```java
// Set a file reference for the stamp file. Note that this file can be referenced later by
// "fref://stamp" at the "url" field on the visual representation (see content/vr.json file or
// getVisualRepresentation(case) method).
signatureStarter.addFileReference("stamp", Util.getPdfStampPath());

// Set visual representation. We provide a Java class that represents the visual representation
// model.
signatureStarter.setVisualRepresentation(PadesVisualElements.getVisualRepresentation(1));
// Alternatively, we can provide a javascript file that represents json-encoded the model
// (see resources/static/vr.json).
//signatureStarter.setVisualRepresentationFromFile(Util.getVisualRepresentationPath());
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L101-L111)

> [!NOTE]
> Para mais detalhes sobre as opções de configuração da aparência da assinatura, veja a classe
> [PadesVisualElements](https://github.com/LacunaSoftware/PkiExpressSamples/blob/master/Java/src/main/java/sample/controller/util/PadesVisualElements.java)

Por fim, concluímos a etapa inicial, obtendo os dados necessários para realizar o algoritmo de assinatura digital:

```java
// Start the signature process. Receive as response a SignatureStartResult instance containing the
// following fields:
// - toSignHash: The hash to be signed.
// - digestAlgorithm: The digest algorithm that will inform the Web PKI component to compute the signature.
// - transferFile: A temporary file to be passed to "complete" step.
SignatureStartResult result = signatureStarter.start();
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L113-L119)

Um ponto importante: a classe `PadesSignatureStarter` salva um arquivo chamado *transfer data file* contendo informações que precisam ser recuperadas
mais à frente no processo de assinatura. Por padrão, esse arquivo é armazenado na pasta temporária do sistema, porém outra pasta pode ser configurada.
O método `PadesSignatureStarter.getTransferFile()` retorna o *filename* do arquivo, o qual é preenchido em um campo oculto na página:

```java
model.addAttribute("transferFile", result.getTransferFile());
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L133)

> [!NOTE]
> Preocupações de segurança são tomadas na geração do nome desse arquivo, de modo que é impossível um usuário adivinhar o *transfer data file* de um
> processo de assinatura de outro usuário. Além disso, apenas o *filename* é enviado para a página, não o path completo, de modo que também não é
> possível a um usuário induzir a aplicação web a ler um arquivo em uma pasta arbitrária

Após um pouco de *housekeeping*, renderizamos novamente a view `pades-signature`:

```java
return "pades-signature";
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L193)

### 4. Realização do algoritmo de assinatura digital no *frontend*

Uma vez carregada novamente a página, a função `init()` do `signatureForm` é mais uma vez invocada, porém dessa vez temos `state == "start"`. Bloqueamos então
a página e invocamos novamente a inicialização do Web PKI (como houve recarregamento da página, é necessário inicializar o componente novamente), porém
dessa vez passando a função `sign()` como callback:

```js
} else if (formElements.stateField.val() == 'start') {

    // Block the UI while we get things ready.
    $.blockUI({ message: 'Signing ...' });
    pki.init({
        ready: sign, // As soon as the component is ready we'll perform the signature.
        defaultError: onWebPkiError
    });

}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L40-L49)

Na função `sign()`, invocamos o Web PKI para realizar o algoritmo de assinatura digital com a chave privada do certificado, usando como dados de entrada
os dados retornados pelo PKI Express no backend:

```js
// -------------------------------------------------------------------------------------------------
// Function called when the page is rendered on the "start" state. This will happen after the
// "start" step on server-side (see method init() above).
// -------------------------------------------------------------------------------------------------
function sign() {

    // Call signHash() on the Web PKI component passing the "to-sign-hash", the digest algorithm and
    // the certificate selected by the user.
    pki.signHash({
        thumbprint: formElements.certThumbField.val(),
        hash: formElements.toSignHashField.val(),
        digestAlgorithm: formElements.digestAlgorithmField.val()
    }).success(function (signature) {
        // ...
    });
}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L117-L129)

Uma vez finalizado o algoritmo de assinatura, preenchemos o resultado em um campo oculto na página, mudamos o `state` para `complete` e fazemos um novo *postback* para o backend:

```js
}).success(function (signature) {

    formElements.signatureField.val(signature);
    formElements.stateField.val('complete');
    formElements.form.submit();

});
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/resources/static/js/signature-form.js#L129-L136)

### 5. Finalização da assinatura no *backend*

No backend, o controller `PadesController` novamente é invocado para tratar o postback feito com o resultado do algoritmo de assinatura digital.
O método `post()` é responsável por tratar a requisição, porém dessa vez temos `state == 'complete'`:

```java
} else if (state.equals("complete")) {

	// This block will be executed only when it's on the "complete" step. In this sample, the state is set as
	// "complete" programatically after the Web PKI component perform the signature and submit the form (see
	// method sign() on signature-form.js).

	// ...
}
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L144-L192)

Obtemos uma instância da classe `SignatureFinisher` e fornecemos o arquivo sendo assinado, o *filename* do arquivo de *transfer data* e o resultado do algoritmo de assinatura feito
no frontend com o Web PKI:

```java
// Get an instance of the SignatureFinisher class, responsible for completing the signature process.
SignatureFinisher signatureFinisher = new SignatureFinisher(Util.getPkiExpressConfig());

// Set PKI default options (see Util.java)
Util.setPkiDefaults(signatureFinisher);

// Set PDF to be signed. It's the same file we used on "start" step.
signatureFinisher.setFileToSign(fileToSign);

// Set transfer file.
signatureFinisher.setTransferFilePath(transferFile);

// Set the signature value.
signatureFinisher.setSignature(signature);
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L151-L164)

Geramos um *filename* aleatório para receber o PDF assinado:

```java
// Generate path for output file and add to signature finisher.
String filename = UUID.randomUUID() + ".pdf";
signatureFinisher.setOutputFilePath(Application.getTempFolderPath().resolve(filename));
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L166-L168)

Finalizamos o processo de assinatura:

```java
// Complete the signature process.
signatureFinisher.complete();
```
[view on source](https://github.com/LacunaSoftware/PkiExpressSamples/blob/java-annotated/Java/src/main/java/sample/controller/PadesSignatureController.java#L170-L171)

Após esse comando, o arquivo assinado encontra-se salvo no *filename* gerado aleatóriamente acima. Fica, então, a critério da sua aplicação mover esse arquivo
para o local correto, seja em banco de dados, sistema de arquivos ou serviço de storage.
