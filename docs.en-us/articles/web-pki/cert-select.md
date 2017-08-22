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

* [Customize the text displayed for each certificate](#customize-text)
* [Filter the certificates that are shown](#filters)
* [Validate the selected certificate](#validation)

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

<a name="filters" />
## Filtering the certificates that are shown

You can also filter the certificates that are shown by passing a filter to the `listCertificates()` function.

> [!WARNING]
> Filtering certificates can cause unwanted user support. Users might expect to see certain certificates that are being filtered
> out and wrongly assume they're not being shown due to a bug and therefore reach out for support. This is specially true when applying a filter based on the
> expiration date, since a certificate might be shown on one day but "disappear" on the next. Because of this, we
> **HIGHLY RECOMMEND** that you **DO NOT USE THIS FEATURE**. Instead, display all certificates and [validate the selected certificate](#validation).

If for some reason you still want to use this feature despite the warning above, read on.

To show only certificates that are within their validity period:

```js
pki.listCertificates({
	filter: pki.isWithinValidity
}).success(...);
```

To show only certificates that have a Brazilian CPF:

```js
pki.listCertificates({
	filter: pki.hasPkiBrazilCpf
}).success(...);
```

> [!TIP]
> This is loosely equivalent to "showing only ICP-Brasil certificates", since every ICP-Brasil certificate has a CPF (even company certificates).

> [!NOTE]
> Please note that the fact that a certificate has a CPF does not actually mean it can be trusted to be a valid certificate issued under the
> ICP-Brasil public key infrastructure, since there are a number of validations that need to be performed
> (see [Certificate authentication](../pki-guide/cert-auth.md) for more details).

To show only certificates that have a certain Brazilian CPF:

```js
pki.listCertificates({
	filter: pki.pkiBrazilCpfEquals('11111111111')
}).success(...);
```

You can also combine filters, requiring certificates to match **all** given criteria:

```js
pki.listCertificates({
	filter: pki.filters.all(pki.isWithinValidity, pki.hasPkiBrazilCpf)
}).success(...);
```

Or **any** of the given criteria:

```js
pki.listCertificates({
	filter: pki.filters.any(pki.hasPkiBrazilCpf, pki.hasPkiItalyCodiceFiscale)
}).success(...);
```

You can also write your own filter:

```js
pki.listCertificates({
	filter: function (cert) {
		var now = new Date();
		return (cert.validityStart <= now && now <= cert.validityEnd);
	}
}).success(...);
```

As stated above, we **highly recommend that you do not use this feature** to avoid generating unnecessary user support.
Instead, we recommend that you display all certificates and validate the selected certificate (see next section).

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

Live example:

<iframe width="100%" height="300" src="https://jsfiddle.net/LacunaSoftware/grb8995x/2/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
