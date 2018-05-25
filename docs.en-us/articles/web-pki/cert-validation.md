# Certificate pre-validation

It is a good approach to list all the available certificates and, once the user makes his decision and clicks on the *sign* or *log in*
button, validate the selected certificate based on its properties.

> [!NOTE]
> This validation is merely a "pre-check" based on information contained on the certificate, done to avoid obvious selection errors by
> the user. This is not the actual certificate validation that typically needs to be performed during a
> [certificate authentication](../pki-guide/cert-auth.md) or [digital signature](../pki-guide/signatures.md) process.

```js
var certificates = null;

function onWebPkiReady () {
	pki.listCertificates({
		selectId: 'certificateSelect'
	}).success(function (certs) {
		// NOTE: we need to keep the "certs" array for later!
		certificates = certs;
	});
}

function getSelectedCert() {
	var selectedCertThumb = $('#certificateSelect').val();
	for (var i = 0; i < certificates.length; i++) {
		var cert = certificates[i];
		if (cert.thumbprint == selectedCertThumb) {
			return cert;
		}
	}
	return null;
}

function sign() {
	// get the selected certificate
	var selectedCert = getSelectedCert();
	// validate the certificate based on its properties
	var now = new Date();
	if (now > selectedCert.validityEnd) {
		alert('The chosen certificate has expired on ' + selectedCert.validityEnd.toLocaleDateString());
		return;
	}
	if (now < selectedCert.validityStart) {
		alert('The chosen certificate will only be valid starting '
			+ selectedCert.validityStart.toLocaleDateString());
		return;
	}
	// proceed with the signature process with the argument selectedCert.thumbprint
}
```

> [!TIP]
> Don't really use `alert()` to show messages, we're using it merely to keep things simple

> [!NOTE]
> Unfortunately, Web PKI currently does not support retrieving a given certificate's properties. Therefore, we have to store the array of
> certificates yielded by the `listCertificates()` function to later recover the selected certificate's properties. This will be addressed
> on a future release of the component.
