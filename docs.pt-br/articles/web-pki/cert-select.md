# Personalizando a listagem de certificados

É possível personalizar o texto mostrado para cada certificado na listagem de certificados utilizando as
[Propriedades dos certificados](cert-properties.md) retornadas pelo Web PKI:

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

O mesmo se aplica se você estiver processando o array de certificados manualmente:

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

Por exemplo, para exibir a **data de validade** de cada certificado:

```js
function getCertText(cert) {
	return cert.subjectName + ' (expires on ' + cert.validityEnd.toLocaleDateString() + ')';
}
```

Ou para exibir um prefixo `[EXPIRADO]` se o certificado estiver expirado:

```js
function getCertText(cert) {
	var text = cert.subjectName;
	if (new Date() > cert.validityEnd) {
		text = '[EXPIRADO] ' + text;
	}
	return text;
}
```

> [!TIP]
> Recomendamos utilizar pelo menos uma propriedade adicional além do nome do titular para ajudar usuários com
> mais de um certificado com o mesmo nome (em outras palavras, não use apenas `return cert.subjectName;`)

<a name="validation" />
## Validação de certificados

Essa seção foi movida para um artigo separado: [Pré-validação de certificados](cert-validation.md)

<a name="sort" />
## Ordenação

Essa seção foi removida porque o Web PKI agora retorna automaticamente a lista de certificados ordenada pelo `subjectName`.

> [!NOTE]
> Caso na sua aplicação os certificados não estejam ordenados, atualize a biblioteca de JavaScript do Web PKI.
