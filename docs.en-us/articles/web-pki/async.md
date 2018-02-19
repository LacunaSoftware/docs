# Asynchronous calls

Let's have another look at our sample for listing the available certificates:

```javascript
pki.listCertificates().success(function (certs) {
    // do something with the "certs" array
});
```

This is an example of an **asynchronous call**. The [`listCertificates()`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#listcertificates) method cannot immediately do all the processing that it needs to do and return the result.
It needs some time to do its magic. We could block the execution until the result is available, but that is poor javascript design and can lead to very nasty things
such your web page freezing up and the browser suggesting to the user that the page should be closed because of the freeze. Instead of that, the method immediately
returns a [`Promise`](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.promise.html).

A promise is an object through which you can register callbacks that will be called once the promise is fulfilled -- that is, once the operation is completed. You
should always register a callback for when the operation is completed successfully and, optionally, another for when an error occurs during the operation. The methods
on the [`Promise`](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.promise.html) class are chainable, meaning you can do this:

```javascript
pki.listCertificates().success(function (certs) {
    // do something with the "certs" array
}).fail(function (ex) {
    alert('An error has occurred while retrieving the certificates: ' + ex.userMessage);
});
```

The success callback always receive a single argument representing the operation's result. However, its type (either string, array or object) and meaning depend on
the method that returned the promise. You must check on each method's documentation for such information.

For more information about each of the exception object parameters, please refer to the [Promise.fail()](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.promise.html#fail) method documentation and [ExceptionModel](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.exceptionmodel.html).

> [!NOTE]
> All methods of the [`LacunaWebPKI`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html) class are asynchronous, with rare exceptions.