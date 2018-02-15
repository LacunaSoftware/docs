# Especificando a URL do Rest PKI

Na seção [Primeiros Passos](get-started.md), vimos que o método [`init()`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init) deve ser chamado antes de qualquer outra chamada:

```javascript
pki.init(onWebPkiReady);
```

Caso seja utilizado um RestPKI não padrão, ou seja direfente de https://pki.rest , é necessário configurar a URL do RestPKI que será utilizado na chamada do `init()`

```javascript
pki.init({
    restPkiUrl: 'https://YourRestPKI.com/',
    ready: onWebPkiReady,
});
```

> [!NOTE]
> Caso o WebPKI não esteja sendo utilizado em conjunto com o RestPKI essa configuração é desnecesária. 

Para mais informações sobre o [`init()`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init), consulte a
[documentação do método](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init).
