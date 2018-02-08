# Certificate properties

When you call the function `listCertificates()`, your callback receives an array of the available certificates on
the user's machine:

```javascript
pki.listCertificates().success(function (certs) {
    for (var i = 0; i < certs.length; i++) {
		var cert = certs[i];
		// do something with each "cert"
	}
});
```

To view the properties available on each element, see the API Reference for the type
[CertificateModel](https://docs.lacunasoftware.com/en-us/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.certificatemodel.html).
