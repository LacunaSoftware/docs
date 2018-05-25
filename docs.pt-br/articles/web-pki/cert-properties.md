# Propriedades dos certificados

Ao chamar a função `listCertificates()`, o seu callback recebe um array com os certificados disponíveis na máquina do usuário.
Cada elemento do array retornado é um objeto do tipo
[CertificateModel](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.certificatemodel.html)
contendo informações sobre o certificado:

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

Algumas das propriedades disponíveis são:

* `subjectName`: Campo *Common Name* (CN) do nome do titular
* `email`: Endereço de e-mail do titular
* `validityEnd`: Data de expiração do certificado (tipo `Date` padrão de JavaScript)
* `pkiBrazil`: Objeto com campos específicos da ICP-Brasil
  * `pkiBrazil.cpf`: CPF do titular/responsável
  * `pkiBrazil.cnpj`: CNPJ da empresa (ou `null`, caso não seja um certificado de pessoa jurídica)
* `pkiItaly`: Objeto com campos específicos de certificados italianos
  * `pkiItaly.cnpj`: *codice fiscale* do titular

> [!NOTE]
> As propriedades `pkiBrazil` e `pkiItaly` estão sempre preenchidas, mesmo que o certificado não seja um certificado brasileiro ou italiano,
> de modo que é seguro fazer algo como `if (cert.pkiBrazil.cpf) { ... }` sem risco de erros. Nesse caso, as sub-propriedade (`pkiBrazil.*` /
> `pkiItaly.*`) é que estarão com valor `null`.

Para obter uma lista completa das propriedades disponíveis em cada elemento do array, veja o guia da API para o tipo
[CertificateModel](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.certificatemodel.html).
