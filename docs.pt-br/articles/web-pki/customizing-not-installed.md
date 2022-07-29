# Customizando o comportamento quando o componente não estiver instalado

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
`init()` (consulte a [documentação do método](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init) para mais detalhes) e passar um callback
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
[documentação do método](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init).
