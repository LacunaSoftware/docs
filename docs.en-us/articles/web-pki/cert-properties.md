# Certificate properties

When you call the function `listCertificates()`, your callback receives an array with the available certificates on
the user's machine. Each item on that array is an object of type
[CertificateModel](https://docs.lacunasoftware.com/en-us/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.certificatemodel.html)
having several properties with information about the certificate:

```javascript
pki.listCertificates().success(function (certs) {
    for (var i = 0; i < certs.length; i++) {
		var cert = certs[i];
		console.log(cert.subjectName);
		console.log(cert.email);
		console.log(cert.validityEnd);
		console.log(cert.pkiBrazil.cpf);
		console.log(cert.pkiItaly.codiceFiscale);
	}
});
```

The same object is received on the `selectOptionFormatter` callback which may be passed when calling `listCertificates()`:

```javascript
pki.listCertificates({
	selectId: 'certificateSelect',
	selectOptionFormatter: function (cert) {
		var text = cert.subjectName + ' ('
			+ 'issued by ' + cert.issuerName
			+ ' on ' + cert.validityEnd.toLocaleDateString()
			+ ')';
		if (new Date() > cert.validityEnd) {
			text = '[EXPIRED] ' + text;
		}
		return text;
	}
});
```

Some of the properties available are:

* `subjectName`: The Common Name (CN) part of the certificate's subject name field
* `email`: The subject's e-mail address
* `validityEnd`: The *not after* field of the certificate (JavaScript type `Date`)
* `pkiBrazil`: Object with Brazil-specific fields
  * `pkiBrazil.cpf`: Certificate holder's CPF (*CPF do titular/responsável*)
  * `pkiBrazil.cnpj`: Company's CNPJ
  * `pkiBrazil.responsavel`: Name of the certificate's holder (*nome do titular/responsável*)
* `pkiItaly`: Object with Italy-specific fields
  * `pkiItaly.codiceFiscale`: The subject's *codice fiscale*

> [!NOTE]
> The properties `pkiBrazil` and `pkiItaly` are guaranteed to be not-null, even if the certificate is not a Brazilian or Italian certificate.
> Therefore, statements such as `if (cert.pkiBrazil.cpf) { ... }` are safe from exceptions. The sub-properties themselves (`pkiBrazil.*` /
> `pkiItaly.*`) are `null` if they do not apply.

For a complete list of the properties available, see the API Reference for the type
[CertificateModel](https://docs.lacunasoftware.com/en-us/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.certificatemodel.html).
