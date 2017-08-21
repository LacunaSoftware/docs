# Callback de erro padrão

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
