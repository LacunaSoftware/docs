# Pré-validação de certificados

É uma boa abordagem listar todos os certificados disponíveis -- sem filtrar por CPF ou data de validade -- e, uma vez que o usuário
escolha um certificado e clique no botão *assinar* ou *entrar*, validar o certificado escolhido.

> [!NOTE]
> Essa validação é meramente uma "pré-verificação" baseada nas informações do certificado, feita para evitar erros óbvios de escolha
> do certificado por parte do usuário. Essa **não é** a validação que de fato precisa ser feita para implementar um
> [login com certificado digital](../pki-guide/cert-auth.md) ou uma [assinatura digital](../pki-guide/signatures.md).

```js
var certificates = null;

function onWebPkiReady () {
	pki.listCertificates({
		selectId: 'certificateSelect'
		// não passe o argumento "filter", para mostrar todos os certificados
	}).success(function (certs) {
		// NOTA: precisamos guardar o array retornado!
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
	// obtemos o certificado escolhido
	var selectedCert = getSelectedCert();
	// realizamos a pré-validação do certificado
	if (new Date() > selectedCert.validityEnd) {
		alert('O certificado escolhido expirou em ' + selectedCert.validityEnd.toLocaleDateString());
		return;
	}
	// prossiga com o processo de assinatura ou login com o parâmetro "selectedCert.thumbprint"
}
```

> [!TIP]
> Estamos utilizando a função `alert()` apenas para simplificar o exemplo, o ideal é utilizar um componente mais amigável para o usuário

> [!NOTE]
> Infelizmente o Web PKI ainda não suporta obter as propriedades de um certificado específico. Por isso, precisamos armazenar o array de
> certificados retornado pela função `listCertificates()` para consultá-lo mais tarde. Esse problema será corrigido numa versão futura
> do componente.
