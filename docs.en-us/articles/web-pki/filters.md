# Certificate filters

It is possible to filter the certificates that are shown on your page's certificate selection by passing a filter to the `listCertificates()` function.

> [!WARNING]
> Filtering certificates can cause unwanted user support. Users might expect to see certain certificates that are being filtered
> out and wrongly assume they're not being shown due to a bug and therefore reach out for support. This is specially true when applying a filter based on the
> expiration date, since a certificate might be shown on one day but "disappear" on the next. Because of this, we
> **HIGHLY RECOMMEND** that you **DO NOT USE THIS FEATURE**. Instead, display all certificates and [validate the selected certificate](cert-select.md#validation).

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
Instead, we recommend that you display all certificates and [validate the selected certificate](cert-select.md#validation).
