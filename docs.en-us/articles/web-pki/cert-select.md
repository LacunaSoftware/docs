# Customizing certificate selection

You can customize the text that will be displayed for each certificate using any of the [Certificate properties](cert-properties.md)
returned by Web PKI for each certificate:

```js
function onWebPkiReady() {
	pki.listCertificates({
		selectId: 'certificateSelect',
		selectOptionFormatter: getCertText
	});
}

function getCertText(cert) {
	return cert.subjectName + ' (issued by ' + cert.issuerName + ')';
}
```

The same applies if you are manually processing the certificates array instead of using `selectId` and `selectOptionFormatter`:

```js
function onWebPkiReady() {
	pki.listCertificates().success(function (certs) {
		var select = $('#certificateSelect');
		for (var i = 0; i < certs.length; i++) {
			var cert = certs[i];
			select.append(
				$('<option />').val(cert.thumbprint).text(getCertText(cert))
			);
		}
	});
}

function getCertText(cert) {
	return cert.subjectName + ' (issued by ' + cert.issuerName + ')';
}
```

For instance, to show the **expiration date** along with the subject name:

```js
function getCertText(cert) {
	return cert.subjectName + ' (expires on ' + cert.validityEnd.toLocaleDateString() + ')';
}
```

We can also show the subject and issuer plus an `[EXPIRED]` prefix on the certificates that are expired:

```js
function getCertText(cert) {
	var text = cert.subjectName;
	if (new Date() > cert.validityEnd) {
		text = '[EXPIRED] ' + text;
	}
	return text;
}
```

> [!TIP]
> We recommend always using at least one additional property besides the subject name in order to help users that have
> two or more certificates with the same subject name (in other words, don't just do `return cert.subjectName;`)

<a name="validation" />
## Validating the selected certificate

This section has been moved to a separate article: [Certificate pre-validation](cert-validation.md)

<a name="sort" />
## Sorting the certificates

This section was removed because Web PKI now automatically returns the certificates sorted by `subjectName`.

> [!NOTE]
> If this is not happening on your web application, update the Web PKI JavaScript library
