# Default error callback

Although you can register specific error callbacks on each asynchronous call, if you're always going to apply the same logic when an error occurs, it's better
to register a **default error callback** when calling the `init()` method:

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

From then on you can register the success callback only on each asynchronous call.

> [!NOTE]
> When an error occurs and no error callback is registered for that specific operation, the default error callback is called If no default error callback is
> registered, an exception is thrown.
