# Get started

## Prerequisites

Before you start, you will need a valid digital certificate registered on the Windows certificate repository (this is done automatically when you use a digital certificate in Windows). In order to check if you indeed have a registered digital certificate, follow the steps below:

1. **Start** > **Run...** > **certmgr.msc**
1. There should be at least one certificate under the Personal folder. Double-click it.
1. A window will pop-up with the certificate's information. It should say "You have a private key that corresponds to this certificate"

That's it, you're ready to start.

## Coding the first lines

First, you must include the latest [lacuna-web-pki.js](https://cdn.lacunasoftware.com/libs/web-pki/lacuna-web-pki-2.14.8.min.js) file in your web page:

```html
<script type="text/javascript" src="https://cdn.lacunasoftware.com/libs/web-pki/lacuna-web-pki-2.14.8.min.js"
  integrity="sha256-Q1U+M9pC+SnXcpLrKZj9tKXp8UG6dD7qrNsBgaXK9ZA="
  crossorigin="anonymous"></script>
```

Or install the [NPM web-pki package](https://www.npmjs.com/package/web-pki):

```
$ npm install web-pki --save
```

> [!NOTE]
> No CSS files have to be included because the component does not interfere in any way in the look and feel of your page.

Next, we'll instantiate the `LacunaWebPKI` class:

```javascript
var pki = new LacunaWebPKI();
```

Then, we'll call the `init()` method to start the component's initialization, passing a callback for when it is ready:

```javascript
pki.init(onWebPkiReady);

function onWebPkiReady() {
    // ...
}
```

Once your callback is invoked, you're ready to go. To retrieve the available certificates, use the `listCertificates()` method:

```javascript
pki.listCertificates().success(function (certs) {
    for (var i = 0; i < certs.length; i++) {
        var cert = certs[i];
        var thumbprint = cert.thumbprint;
        var subjectName = cert.subjectName;
        var issuerName = cert.issuerName;
    }
});
```

> [!NOTE]
> If you are not familiar with asynchronous calls, [read this](async.md).

> [!TIP]
> To find out which properties are available for each certificate, see article [Certificate properties](cert-properties.md)

To read a certificate's binary encoding, call the `readCertificate()` method:

```javascript
// You will need the certificate's thumbprint (as returned by the listCertificates method)
var selectedCertThumbprint = '...';
pki.readCertificate(selectedCertThumbprint).success(function (certEncoding) {
    // certEncoding contains the certificate's encoding (in Base64)
});
```

In order to sign bytes use the `signData()` method, which receives 3 inputs:

* The certificate's thumbprint
* The bytes to be signed (in Base64 encoding)
* The digest algorithm to be used during the signature operation

```javascript
pki.signData({
    thumbprint: '...',     // as returned by the listCertificates method
    data: '...',           // bytes encoded in Base64 (typically given by server)
    digestAlgorithm: '...' // for instance 'SHA-256' (typically given by server)
}).success(function (signature) {
    // signature contains the result of the signature operation (encoded in Base64)
});
```

If your server-side SDK gives you the digest of the "to-sign-bytes" instead of the actual bytes, you should call the `signHash()` method:

```javascript
pki.signHash({
    thumbprint: '...',     // as returned by the listCertificates method
    hash: '...',           // hash encoded in Base64 (typically given by server)
    digestAlgorithm: '...' // for instance 'SHA-256' (typically given by server)
}).success(function (signature) {
    // signature contains the result of the signature operation (encoded in Base64)
});
```

## Live example

<iframe width="100%" height="300" src="https://jsfiddle.net/LacunaSoftware/6zkwejb9/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

In order to run the example, click the **Result** tab. If this is the first time you're using Web PKI, you'll be redirected to the installation page and will be automatically redirected back after the installation completes.

> [!NOTE]
> The example above will only work on your web application if it is running on **localhost**. That means you can go ahead and experiment with it in your web application,
> as long as it is running on localhost (i.e. while in development). In order for the code to work outside of localhost (i.e. go into production), you'll need to purchase
> a license. For more information, please see the article [Licensing](licensing.md).

> [!TIP]
> The example above targets code simplicity. Please see the [full samples](full-samples.md) for more real-life code samples.

## Next steps

Now that we've covered the basics ...

* Check the [supported browsers](browser-support.md)
* See how [licensing](licensing.md) works
* See how to [customize the behavior when the component is not installed](customizing-not-installed.md)
* If your application uses AngularJS or Angular2+, read the section [Callbacks and Angular](angularjs.md)
* Check out the [full samples](full-samples.md)
* See the [API Reference](api-reference/index.md) for detailed information on each method
