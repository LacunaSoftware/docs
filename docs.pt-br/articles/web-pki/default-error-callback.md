# Callback de erro padrão

Embora seja possível registrar callbacks de erro específicos em cada chamada assíncrona, se você vai sempre empregar a mesma lógica quando um erro ocorrer,
é mais prático registrar um **callback de erro padrão** ao chamar o método [`init()`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init):

```javascript
pki.init({
    ready: onWebPkiReady,
    defaultFail: onWebPkiFail
});

function onWebPkiFail(ex) {
    alert(ex.userMessage);
    console.log('Web PKI error originated at ' + ex.origin + ': ' + ex.error);
}
```

A partir de então, você pode registrar apenas o callback de sucesso em cada chamada assíncrona.

> [!NOTE]
> Quando um erro ocorre e não há callback de erro registrado para a operação, o callback de erro padrão é chamado. Se também não houver callback de erro padrão registrado,
> uma exceção é lançada.

Para mais informações, veja a documentação do [FailCallback](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.failcallback.html) e da classe [Promise](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.promise.html)