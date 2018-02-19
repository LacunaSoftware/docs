# Requisição Autenticada

O Web PKI oferece a funcionalidade de envio de requisições Web autenticadas com o certificado digital do usuário através de SSL/TLS mútuo.
Essa operação tem grande utilidade na comunicação com serviços da Receita Federal, SEFAZ ou prefeituras.

## NFe - Nota Fiscal eletrônica

Outra área na qual a requisição autenticada se faz necessária é a de serviços envolvendo notas fiscais eletrônicas (NFe).
No cenário de transmissão da NFe, o padrão nacional permite que seja utilizado, na autenticação, um certificado de uma empresa diferente da que emitiu a NFe.
Isso possibilita que a transmissão seja feita no *backend* utilizando um certificado A1 emitido em nome da empresa que oferece o serviço de assinatura de NFe na web, por exemplo.

No entanto, existem outros serviços, e.g. consultas e manifestações, nos quais se faz necessária a autenticação apenas com o certificado da empresa emissora da NFe.
Para tais casos, a requisição autenticada com o Web PKI permite a implementação das comunicações à partir do computador do usuário, respeitando ideais de segurança, tanto possibilitando a utilização de certificados em dispositivos criptográficos, A3, tanto evitando a necessidade do envio de certificados A1, deixando-os sob a guarda de terceiros.

## Exemplos

No exemplo abaixo, demonstramos uma simples requisição autenticada que verifica o *status* operacional do serviço SEFAZ-RS em homologação.

```js
// Definicao dos parametros do request
var request = {
	// URL do servico
	url: 'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx',
	method: 'post',
	headers: {
		'Content-Type': 'application/soap+xml; charset=utf-8'
	},
	// Envelope SOAP da requisicao
	body: '<?xml version="1.0" encoding="utf-8"?><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body><nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeStatusServico4"><consStatServ xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><tpAmb>2</tpAmb><cUF>53</cUF><xServ>STATUS</xServ></consStatServ></nfeDadosMsg></soap12:Body></soap12:Envelope>'
};

// Define o certificado do usuario para autenticar a requisicao 
request.certificateThumbprint = $('#certificateSelect').val();

// Envia a requisicao
pki.sendAuthenticatedRequest(request).success(function (response) {
	// Usa a resposta "response"
});

```

## Veja também

* Documentação do método [sendAuthenticatedRequest()](https://docs.lacunasoftware.com/en-us/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#sendauthenticatedrequest)
* Exemplo funcional no JSFiddle: [Exemplo de envio de requisição autenticada](https://jsfiddle.net/LacunaSoftware/3cv5xjov/)