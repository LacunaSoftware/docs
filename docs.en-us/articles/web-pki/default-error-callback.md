# Default fail callback

Although you can register specific fail callbacks on each asynchronous call, if you're always going to apply the same logic when an error occurs, it's better
to register a **default fail callback** when calling the [`init()`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init) method:

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

From then on you can register the success callback only on each asynchronous call.

> [!NOTE]
> When an error occurs and no fail callback is registered for that specific operation, the default error callback is called If no default fail callback is
> registered, an exception is thrown.

For more information, please see the documentation of [FailCallback](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.failcallback.html) and [Promise](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.promise.html)