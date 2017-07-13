# Advanced topics

This article covers key advanced topics of the Lacuna Web PKI component.

<a name="async" />
## Asynchronous calls

Let's have another look at our sample for listing the available certificates:

```javascript
pki.listCertificates().success(function (certs) {
    // do something with the "certs" array
});
```

This is an example of an **asynchronous call**. The `listCertificates()` method cannot immediately do all the processing that it needs to do and return the result.
It needs some time to do its magic. We could block the execution until the result is available, but that is poor javascript design and can lead to very nasty things
such your web page freezing up and the browser suggesting to the user that the page should be closed because of the freeze. Instead of that, the method immediately
returns a [Promise](https://webpki.lacunasoftware.com/classes/Promise.html).

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
parameters, please refer to the [Promise.error() method documentation](https://webpki.lacunasoftware.com/Help/classes/Promise.html#method_error).

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

<!--<a name="default-error-callback" />--> <!-- Not necessary because the name of the header below is exactly right -->
## Default error callback

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

<a name="customizing-not-installed" />
## Customizing the behavior when the component is not installed

On the article [Get started](get-started.md), we saw that the `init()` code must be called before any other method is called:

```javascript
pki.init(onWebPkiReady);
```

This method checks that the following conditions hold:

1. The client is using a browser that is supported (click here for a list of supported browsers);
1. All the necessary components are installed;
1. The components are up-to-date.

If everything looks good, the given callback is called. However, if one of the above conditions is not held, the user is redirected to the installation page in a
specific way so that, once the installation is completed, the user is redirected to the original page.

It is however possible to customize that behavior. For instance, you might want to display a message to the user explaining the problem and informing him that he
will be redirected to the installation page before actually doing so. In order to do that, you must use the extensive syntax of the `init()` method (refer to the
[method's documentation](https://webpki.lacunasoftware.com/Help/classes/LacunaWebPKI.html#method_init) for further details) and pass a callback on the `notInstalled`
argument.

```javascript
pki.init({
    ready: onWebPkiReady,
    notInstalled: onWebPkiNotInstalled
});
function onWebPkiNotInstalled (status, message) {
    alert(message + '\n\nYou will be redirected to the installation page.');
    pki.redirectToInstallPage();
}
```

> [!NOTE]
> Although the argument is called *notInstalled*, the given callback is called whenever any of the 3 checked conditions are not held (the component is not
> installed, outdated or the user is using an unsupported browser).

At some point you should redirect the user to the installation page. In order to do that, call the `redirectToInstallPage()` method, as shown above. For
more information about the arguments passed to the `notInstalled` callback, please refer to the
[method's documentation](https://webpki.lacunasoftware.com/classes/LacunaWebPKI.html#method_init).

<a name="angularjs" />
## Callbacks and AngularJS

If your web application uses AngularJS, you should pass a reference to your controller's or service's `$scope` when calling the `init()` method:

```javascript
pki.init({
    ready: onWebPkiReady,
    angularScope: $scope,
    ...
});
```

If you fail to do so, your callbacks will be called outside AngularJS's "cycles", which might cause changes to the `$scope` not to be reflected on the view.
