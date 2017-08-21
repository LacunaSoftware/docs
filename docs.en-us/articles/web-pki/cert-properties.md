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

The table below contains the properties available for each certificate:

Name            | Type                                | Value
--------------- | ----------------------------------- | ----------------------------------------------------------------
`subjectName`   | String                              | The Common Name (CN) part of the certificate's subject name field
`issuerName`    | String                              | The Common Name (CN) part of the certificate's issuer name field
`thumbprint`    | String                              | The SHA-256 thumbprint (Base64-encoded) of the certificate's DER encoding. Used to reference the certificate on subsequent calls.
`keyUsage`      | [KeyUsagesModel](#key-usages-model) | Object with boolean properties indicating wether each possible key usage is set on the certificate (see table below)
`validityStart` | Date                                | The *not before* field of the certificate
`validityEnd`   | Date                                | The *not after* field of the certificate
`pkiBrazil`     | [PkiBrazilModel](#pki-brazil-model) | Object with Brazil-specific fields (see table below)
`pkiItaly`      | [PkiItalyModel](#pki-italy-model)   | Object with Italy-specific fields (see table below)

For instance, to log the Common Name (CN) part of each certificate:

```javascript
pki.listCertificates().success(function (certs) {
    for (var i = 0; i < certs.length; i++) {
		var cert = certs[i];
		console.log(cert.subjectName);
	}
});
```

<a name="key-usages-model" />
## KeyUsagesModel

Name               | Type
------------------ | -------
`crlSign`          | Boolean
`dataEncipherment` | Boolean
`decipherOnly`     | Boolean
`digitalSignature` | Boolean
`encipherOnly`     | Boolean
`keyAgreement`     | Boolean
`keyCertSign`      | Boolean
`keyEncipherment`  | Boolean
`nonRepudiation`   | Boolean

For instance, to check for the `nonRepudiation` key usage on each certificate:

```javascript
pki.listCertificates().success(function (certs) {
    for (var i = 0; i < certs.length; i++) {
		var cert = certs[i];
		if (cert.keyUsage.nonRepudiation) {
			// ...
		}
	}
});
```

<a name="pki-brazil-model" />
## PkiBrazilModel

Name               | Type    | Value
------------------ | ------- | ----------------------------------------------------------------
`cpf`              | String  | Certificate holder's CPF (*CPF do titular/responsável*)
`cnpj`             | String  | Company's CNPJ
`responsavel`      | String  | Name of the certificate's holder (*nome do titular/responsável*)
`dateOfBirth`      | Date    | Date of birth of the certificate's holder (time as midnight in the current machine's time zone)
`certificateType`  | String  | The ICP-Brasil certificate type (possible values are "A1", "A2", "A3", "A4", "S1", "S2", "S3", "S4", "T3", "T4" and "Unknown")
`isAplicacao`      | Boolean | Whether the certificate is an application certificate
`isPessoaFisica`   | Boolean | Whether the certificate is a personal certificate (*pessoa física*)
`isPessoaJuridica` | Boolean | Whether the certificate is a company certificate (*pessoa jurídica*)
`companyName`      | String  | The responsible company name if it is an ICP-Brasil application certificate. The subject's common name without end id numbers if it is an ICP-Brasil company certificate. Null otherwise.
`nis`              | String  | The certificate holder's "Número de Identificação Social - NIS (PIS, PASEP ou CI)". Returns value without leading zeroes. Returns null if information is not present.
`rgNumero`         | String  | Certificate holder's ID number (*número do RG do titular/responsável*) without leading zeroes
`rgEmissor`        | String  | Issuing entity of the certificate holder's ID (órgão emissor do RG do titular/responsável)
`rgEmissorUF`      | String  | State code of the issuing entity of the certificate holder's ID (*UF do órgão emissor do RG do titular/responsável*)
`oabNumero`        | String  | OAB's *Número de Inscrição junto a Seccional* (without leading zeroes)
`oabUF`            | String  | OAB's *sigla do Estado da Seccional*

For instance, to log the CPF of each certificate:

```javascript
pki.listCertificates().success(function (certs) {
    for (var i = 0; i < certs.length; i++) {
		var cert = certs[i];
		console.log(cert.pkiBrazil.cpf);
	}
});
```

> [!NOTE]
> Each property on the `PkiBrazilModel` object may be null, but the object itself (`cert.pkiBrazil`) is never null.

<a name="pki-italy-model" />
## PkiItalyModel

Name            | Type   | Value
--------------- | ------ | --------------------------
`codiceFiscale` | String | Subject's *codice fiscale*

For instance, to log the *codice fiscale* of each certificate:

```javascript
pki.listCertificates().success(function (certs) {
    for (var i = 0; i < certs.length; i++) {
		var cert = certs[i];
		console.log(cert.pkiItaly.codiceFiscale);
	}
});
```

> [!NOTE]
> Each property on the `PkiItalyModel` object may be null, but the object itself (`cert.pkiItaly`) is never null.
