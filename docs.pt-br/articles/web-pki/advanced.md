# Tópicos avançados

Esse artigo discute tópicos avançados no uso do componente Lacuna Web PKI.

<a name="async" />
## Chamadas assíncronas

Vejamos novamente nosso exemplo para obter os certificados disponíveis:

```javascript
pki.listCertificates().success(function (certs) {
    // fazer alguma coisa com o array "certs"
});
```

O código acima é um exemplo de uma **chamada assíncrona**. O método `listCertificates()` não pode fazer imediatamente todo o procedimento necessário e retornar o
resultado. Ele precisa de tempo para realizar essa operação. Nós *poderíamos* bloquear a execução até que a operação fosse concluída, mas isso é uma má-pratica em
javascript e poderia causar sérios problemas, como a página web travar e o browser sugerir ao usuário que a página deveria ser fechada. Ao invés disso, o método
imediatamente retorna uma **promessa** (uma instância da classe [Promise](http://webpki.lacunasoftware.com/Help/classes/Promise.html)).

Uma promessa é um objeto através do qual você pode registrar callbacks que serão chamados quando a promessa for cumprida, isso é, quando a operação for concluída.
Você deve sempre registrar um callback para quando a operação for concluída com sucesso e, opcionalmente, pode registrar um outro callback para quando ocorrer um
erro durante a operação. Todos os métodos da classe `Promise` são encadeáveis, ou seja, você pode fazer o seguinte:

```javascript
pki.listCertificates().success(function (certs) {
    // fazer alguma coisa com o array "certs"
}).error(function (message, error, origin) {
    alert('Ocorreu um erro ao listar os certificados: ' + message);
});
```

O callback de sucesso sempre recebe um único argumento contendo o resultado da operação. Entretanto, o tipo (string, array ou objeto) e seu significado dependem
do método que retornou a promessa. Você deve verificar a documentação de cada método para obter essas informações.

O callback de erro sempre tem a mesma assinatura (veja acima). O argumento `message` contém uma mensagem apropriada a ser mostrada ao usuário. Os argumentos
`error` e `origin` são técnicos e mais apropriados a serem logados em algum lugar para diagnóstico em caso de erro. Para mais informações acerca desses parâmetros,
consulte a [documentação do método Promise.error()](http://webpki.lacunasoftware.com/Help/classes/Promise.html#method_error).

> [!NOTE]
> Todos os métodos da classe `LacunaWebPKI` são assíncronos, com raras exceções.

Ao invés de registrar os callbacks de sucesso e erro como no exemplo acima, você também pode passá-los no argumento de cada método:

```javascript
pki.listCertificates({
    success: function (certs) {
        // fazer alguma coisa com o array "certs"
    },
    error: function (message, error, origin) {
        alert('Ocorreu um erro ao listar os certificados: ' + message);
    }
});
```

<a name="default-error-callback" />
## Callback de erro padrão

Embora seja possível registrar callbacks de erro específicos em cada chamada assíncrona, se você vai sempre empregar a mesma lógica quando um erro ocorrer,
é mais prático registrar um **callback de erro padrão** ao chamar o método `init()`:

```javascript
pki.init({
    ready: onWebPkiReady,
    defaultError: onWebPkiError
});
function onWebPkiError(message, error, origin) {
    alert(message);
    if (window.console) {
        window.console.log('Web PKI error originated at ' + origin + ': ' + error);
    }
}
```

A partir de então, você pode registrar apenas o callback de sucesso em cada chamada assíncrona.

> [!NOTE]
> Quando um erro ocorre e não há callback de erro registrado para a operação, o callback de erro padrão é chamado. Se também não houver callback de erro padrão registrado,
> uma exceção é lançada.

<a name="customizing-not-installed" />
## Customizando o comportamento quando o componente não estiver instalado

Na seção [Primeiros Passos](get-started.md), vimos que o método `init()` deve ser chamado antes de qualquer outra chamada:

```javascript
pki.init(onWebPkiReady);
```

Esse método verifica que as seguintes condições são válidas:

1. O usuário está utilizando um browser que é suportado ([clique aqui](browser-support.md) para visualizar os browsers suportados);
1. Todos os componentes necessários estão instalados;
1. Todos os componentes estão atualizados.

Se tudo estiver OK, o callback passado como argumento é chamado. Entretanto, se alguma das condições acima não for válida, o usuário é redirecionado para a página
de instalação do componente de uma forma específica tal que, quando a instalação for concluída, ele será automaticamente redirecionado para a página original.

Entretanto, é possível customizar esse comportamento. Por exemplo, você pode querer primeiro exibir uma mensagem para o usuário explicando o problema e informando
que ele será redirecionado para a página de instalação antes de efetivamente redirecionar o usuário. Para isso, você deve usar a forma extensa de chamar o método
`init()` (consulte a [documentação do método](http://webpki.lacunasoftware.com/Help/classes/LacunaWebPKI.html#method_init) para mais detalhes) e passar um callback
no argumento `notInstalled`.

```javascript
pki.init({
    ready: onWebPkiReady,
    notInstalled: onWebPkiNotInstalled
});
function onWebPkiNotInstalled (status, message) {
    alert(message + '\n\nVocê será redirecionado para a página de instalação.');
    pki.redirectToInstallPage();
}
```

> [!NOTE]
> Embora o nome do argumento seja *notInstalled*, o callback passado é chamado caso qualquer uma das 3 condições testadas falhe (componente não instalado,
> desatualizado ou browser não suportado).

Tipicamente você irá em algum momento redirecionar o usuário para a página de instalação. Para isso, chame o método `redirectToInstallPage()` como mostrado acima.
Para mais informações sobre os argumentos passados para o callback `notInstalled`, consulte a
[documentação do método](http://webpki.lacunasoftware.com/Help/classes/LacunaWebPKI.html#method_init).

<a name="angularjs" />
## Callbacks e AngularJS

Se a sua página utilizar o framework AngularJS, você deve passar uma referência para o `$scope` do seu controller ou serviço ao chamar o método `init()`:

```javascript
pki.init({
    ready: onWebPkiReady,
    angularScope: $scope,
    ...
});
```

Se você não fizer isso, seus callbacks serão chamados fora dos "ciclos" do AngularJS, o que pode ocasionar que mudanças ao `$scope` não sejam refletidas na view.
