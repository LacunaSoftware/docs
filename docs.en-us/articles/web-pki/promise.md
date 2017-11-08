# Promise

An object that represents a promise to be fulfilled, through which the programmer can register callbacks for when the promise is fulfilled successfully or for when an error occurrs. 
All asyncronous methods from the LacunaWebPKI class return an instance of this object.

For instance, the method [listCertificates](lacunawebpki.md#list-certificates) returns a promise which is fulfilled when the list of certificates is finally available. 
You could register a callback for when that happens, and another one for if an error occurs, in the following manner:

```js
pki.listCertificates()
.success(function(certs) {
    // Every success callback receives a single argument. Its type (either string, array or object) and meaning depend on the method that returned the promise.
    $scope.certificates = certs;
})
.fail(function (ex) {
	// The fail callback always receives an ExceptionModel object.
    alert('pki error from ' + ex.origin + ': ' + ex.message);
    if (window.console) {
        window.console.log('pki error', ex);
    }
});
```

> [!WARNING]
> NOTICE: You should not instantiate this object directly.

<a name="success" />
## success

```js
success (function (...))
```

### Parameters

A callback function to be called on the method's success complete.
The `success` callback argument's type and meaning depend on the method that returns the promise. Please refer to each [method's documentation](lacunawebpki.md) for such information.

---

<a name="fail" />
## fail

```js
fail (function (ex))
```

### Parameters

`function (ex)` Function receiving an [ExceptionModel](promise.md#exception-object)

A callback function that receives an [ExceptionModel](promise.md#exception-model) to be called in case a failure happens.

---

<a name="exception-model" />
## ExceptionModel

Name      | Type   | Description
----------|--------|------------
`message` | String | A user-friendly message describing the error that occurred.
`error`   | String | A detailed string containing as much information about the error as possible, for instance the stack trace. This is a good value to be logged, not to be shown to the user.
`origin`  | String | A string denoting where the error originated. This should also not be shown to the user, but rather logged for diagnostic purposes.
`code`    | String | An error code