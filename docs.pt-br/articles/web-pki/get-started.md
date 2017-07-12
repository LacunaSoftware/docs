# Primeiros passos

## Pré-requisitos

Antes de começar, você precisará de um certificado digital válido registrado no repositório de certificados do Windows (o registro é feito automaticamente quando você utiliza um certificado digital no Windows). Para verificar se você tem um certificado digital registrado no Windows, siga os passos abaixo:

1. **Iniciar** > **Executar...** > **certmgr.msc**
1. Deve haver pelo menos um certificado na pasta Pessoal. Dê um duplo-clique no certificado.
1. Aparecerá uma janela com informações sobre o certificado. Deve haver a mensagem "Tem uma chave particular correspondente a este certificado."

Pronto, você já pode começar.

## Codificando as primeiras linhas

Primeiro, inclua na sua página o arquivo [lacuna-web-pki.js](https://get.webpkiplugin.com/Scripts/LacunaWebPKI/lacuna-web-pki-2.5.0.js) mais recente:

```html
<script type="text/javascript" src="https://get.webpkiplugin.com/Scripts/LacunaWebPKI/lacuna-web-pki-2.5.0.js"></script>
```

> [!NOTE]
> Não é necessário incluir nenhum arquivo CSS pois o componente não interfere na interface da página.

Em seguida, instancie a classe `LacunaWebPKI`:

```javascript
var pki = new LacunaWebPKI();
```

Chame então o método `init()` passando um callback que será chamado quando o componente estiver pronto para ser usado:

```javascript
pki.init(onWebPkiReady);

function onWebPkiReady() {
    // ...
}
```

Uma vez que o seu callback tenha sido chamado, você pode chamar as funções para operar com certificados digitais. Para obter os certificados disponíveis, utilize o método `listCertificates()`:

```javascript
pki.listCertificates().success(function (certs) {
    for (var i = 0; i < certs.length; i++) {
        var cert = certs[i];
        var thumbprint = cert.thumbprint;
        var subjectName = cert.subjectName;
        var issuerName = cert.issuerName;
    }
});
```

> [!NOTE]
> Se você não estiver familharizado com chamadas assíncronas, veja a seção [Chamadas assícronas](advanced.md#async).

Para ler o *encoding* de um certificado, chame o método `readCertificate()`:

```javascript
// Você precisará do thumbprint do certificado (conforme informado pelo método listCertificates)
var selectedCertThumbprint = '...';
pki.readCertificate(selectedCertThumbprint).success(function (certEncoding) {
    // certEncoding contém o encoding do certificado (em Base64)
});
```

Para assinar bytes utilize o método signData(), que recebe 3 entradas:

* O *thumbprint* do certificado
* Os bytes a serem assinados (em Base64)
* O algoritmo de digest a ser utilizado durante a operação de assinatura

```javascript
pki.signData({
    thumbprint: '...',     // conforme informado pelo método listCertificates
    data: '...',           // bytes em Base64 (tipicamente dado pelo servidor)
    digestAlgorithm: '...' // por exemplo 'SHA-256' (tipicamente dado pelo servidor)
}).success(function (signature) {
    // signature contém o resultado da assinatura (em Base64)
});
```

Caso o seu SDK rodando no servidor lhe informe o hash dos bytes a serem assinados, ao invés dos bytes em si, chame o método `signHash()`:

```javascript
pki.signHash({
    thumbprint: '...',     // conforme informado pelo método listCertificates
    hash: '...',           // hash em Base64 (tipicamente dado pelo servidor)
    digestAlgorithm: '...' // por exemplo 'SHA-256' (tipicamente dado pelo servidor)
}).success(function (signature) {
    // signature contém o resultado da assinatura (em Base64)
});
```

## Exemplo online

<iframe width="100%" height="300" src="https://jsfiddle.net/LacunaSoftware/6zkwejb9/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Para executar o exemplo, clique na aba **Result**. Se essa for a primeira vez que você utiliza o Web PKI, você será redirecionado para a página de instalação e voltará ao exemplo automaticamente após a instalação.

> [!NOTE]
> O exemplo acima só funcionará na sua aplicação web se a mesma estiver no **localhost**. Isso significa que você pode testar o Web PKI à vontade sem pagar nada, desde que a
> sua aplicação web esteja rodando no localhost (ou seja, em desenvolvimento). Para que o código funcione fora do localhost (em produção), você precisará de uma licença de uso.
> Para mais informações, acesse o artigo [Licenciamento](licensing.md).

> [!TIP]
> O exemplo acima prioriza a simplicidade do código. Veja os [exemplos completos](full-samples.md) para códigos mais próximos da realidade.

## Próximos passos

Agora que vimos as funções básicas do Web PKI ...

* Veja os [browser suportados](browser-support.md)
* Veja como funciona o [licenciamento](licensing.md)
* Leia os [tópicos avançados](advanced.md), por exemplo sobre [como customizar o comportamento quando o componente não estiver instalado](advanced.md#customizing-not-installed)
* Se a sua aplicação utiliza AngularJS, leia a seção [Callbacks e AngularJS](advanced.md#angularjs)
* Veja os [exemplos completos](full-samples.md)
* Veja o [Guia da API](api.md)
