# Asynchronous calls

Let's have another look at our sample for listing the available certificates:

```javascript
pki.listCertificates().success(function (certs) {
    // do something with the "certs" array
});
```

This is an example of an **asynchronous call**. The `listCertificates()` method cannot immediately do all the processing that it needs to do and return the result.
It needs some time to do its magic. We could block the execution until the result is available, but that is poor javascript design and can lead to very nasty things
such your web page freezing up and the browser suggesting to the user that the page should be closed because of the freeze. Instead of that, the method immediately
returns a [Promise](http://webpki.lacunasoftware.com/Help/classes/Promise.html).

A promise is an object through which you can register callbacks that will be called once the promise is fulfilled -- that is, once the operation is completed. You
should always register a callback for when the operation is completed successfully and, optionally, another for when an error occurs during the operation. The methods
on the `Promise` class are chainable, meaning you can do this:

```javascript
pki.listCertificates().success(function (certs) {
    // do something with the "certs" array
}).error(function (message, error, origin) {
    alert('An error has occurred while retrieving the certificates: ' + message);
});
```

The success callback always receive a single argument representing the operation's result. However, its type (either string, array or object) and meaning depend on
the method that returned the promise. You must check on each method's documentation for such information.

The error callback always has the same signature, which is shown above. The argument `message` contains a user-friedly message and may be shown to the user. The
arguments `error` and `origin` are more technical and are better suited to be logged somewhere for diagnostic purposes. For more information about each of these
parameters, please refer to the [Promise.error() method documentation](http://webpki.lacunasoftware.com/Help/classes/Promise.html#method_error).

> [!NOTE]
> All methods of the `LacunaWebPKI` class are asynchronous, with rare exceptions.

Instead of registering the success and error callbacks like shown above, you can also opt for passing them on the function's arguments:

```javascript
pki.listCertificates({
    success: function (certs) {
        // do something with the "certs" array
    },
    error: function (message, error, origin) {
        alert('An error has occurred while retrieving the certificates: ' + message);
    }
});
```
