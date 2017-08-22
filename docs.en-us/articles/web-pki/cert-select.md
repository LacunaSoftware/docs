# Customizing certificate selection

On the live example shown on the [Get started](get-started.md) article, we used the `listCertificates()` function and
a bit of JQuery to populate a drop-down list (an HTML `select` tag) with the user's certificates:

```js
function onWebPkiReady() {
	pki.listCertificates().success(function (certs) {
		var select = $('#certificateSelect');
		for (var i = 0; i < certs.length; i++) {
			var cert = certs[i];
			select.append(
				$('<option />')
				.val(cert.thumbprint)
				.text(cert.subjectName + ' (issued by ' + cert.issuerName + ')')
			);
		}
	});
}
```

This will populate the drop-down list with all certificates available on the user's computer, displaying for each certificate
its subject and issuer.

Let's rewrite that code separating the logic for building each option's text:

```js
function onWebPkiReady() {
	pki.listCertificates().success(function (certs) {
		var select = $('#certificateSelect');
		for (var i = 0; i < certs.length; i++) {
			var cert = certs[i];
			select.append($('<option />').val(cert.thumbprint).text(getCertText(cert)));
		}
	});
}

function getCertText(cert) {
	return cert.subjectName + ' (issued by ' + cert.issuerName + ')';
}
```

On this article, we'll show how to customize the snippet above to:

* [Sort the certificates](#sort)
* [Customize the text displayed for each certificate](#customize-text)
* [Validate the selected certificate](#validation)

Below is a live example showing all three features being used:

<iframe width="100%" height="300" src="https://jsfiddle.net/LacunaSoftware/grb8995x/5/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<a name="sort" />
## Sorting the certificates

In order to sort the certificates, use the standard Javascript `sort()` function on the certificates array yielded by `listCertificates()`:

```js
function onWebPkiReady() {
	pki.listCertificates().success(function (certs) {
		certs.sort(compareCerts);
		var select = $('#certificateSelect');
		for (var i = 0; i < certs.length; i++) {
			var cert = certs[i];
			select.append($('<option />').val(cert.thumbprint).text(getCertText(cert)));
		}
	});
}

function compareCerts(c1, c2) {
	var t1 = getCertText(c1);
	var t2 = getCertText(c2);
	if (t1 < t2) {
		return -1;
	}
	if (t1 > t2) {
		return 1;
	}
	return 0;
}

function getCertText(cert) {
	return cert.subjectName + ' (issued by ' + cert.issuerName + ')';
}
```

<a name="customize-text" />
## Customizing the text displayed for each certificate

You can use any of the [Certificate properties](cert-properties.md) to build the text that will be displayed for each certificate.
For instance, to show the **expiration date** along with the subject name:

```js
function getCertText(cert) {
	return cert.subjectName + ' (expires on ' + cert.validityEnd.toLocaleDateString() + ')';
}
```

We can also show the subject and issuer plus a "[EXPIRED]" prefix on the certificates that are expired:

```js
function getCertText(cert) {
	var text = cert.subjectName + ' (issued by ' + cert.issuerName + ')';
	if (new Date() > cert.validityEnd) {
		text = '[EXPIRED] ' + text;
	}
	return text;
}
```

We recommend always using an additional information besides the subject name in order to help users that have two or more certificates with
the same subject name (in other words, don't just do `return cert.subjectName;`)

<a name="validation" />
## Validating the selected certificate

It is a good approach to list all the available certificates and, once the user makes his decision and clicks on the *sign* or *log in*
button, validate the selected certificate based on its properties.

> [!NOTE]
> This validation is merely a "pre-check" based on information contained on the certificate, done to avoid obvious selection errors by
> the user. This is not the actual certificate validation that typically needs to be performed during a
> [certificate authentication](../pki-guide/cert-auth.md) or [digital signature](../pki-guide/signatures.md) process.

```js
var certificates = null;

function onWebPkiReady () {
	pki.listCertificates().success(function (certs) {
		certificates = certs; // NOTE: we need to keep the "certs" array for later!
		var select = $('#certificateSelect');
 		for (var i = 0; i < certs.length; i++) {
			var cert = certs[i];
			select.append($('<option />').val(cert.thumbprint).text(getCertText(cert)));
		}
	});
}

function getCertText(cert) {
	return cert.subjectName + ' (issued by ' + cert.issuerName + ')';
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
