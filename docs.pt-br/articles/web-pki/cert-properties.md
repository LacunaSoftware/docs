# Propriedades dos certificados

Ao chamar a função `listCertificates()`, o seu callback recebe um array com os certificados disponíveis na máquina do usuário:

```javascript
pki.listCertificates().success(function (certs) {
    for (var i = 0; i < certs.length; i++) {
		var cert = certs[i];
		// do something with each "cert"
	}
});
```

Para saber quais propriedades estão disponíveis em cada elemento do array, veja o guia da API para o tipo
[CertificateModel](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.certificatemodel.html).
