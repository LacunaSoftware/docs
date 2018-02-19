# Requisição Autenticada

O Web PKI oferece a funcionalidade de envio de requisições Web autenticadas com o certificado digital do usuário através de SSL/TLS mútuo.
Essa operação tem grande utilidade na comunicação com serviços da Receita Federal, SEFAZ ou prefeituras.

## NFe - Nota Fiscal eletrônica

Outro campo no qual a requisição autenticada se faz necessária são os serviços envolvendo notas fiscais eletrônicas (NFe).
No cenário de transmissão da NFe, o padrão nacional permite que seja utilizado, na autenticação, um certificado de uma empresa diferente da que emitiu a NFe.
Isso possibilita que a transmissão seja feita no *backend* utilizando um certificado A1 emitido em nome da empresa que oferece o serviço de assinatura de NFe na web, por exemplo.

No entanto, existem outros serviços, e.g. consultas e manifestações, nos quais se faz necessária a autenticação apenas com o certificado da empresa emissora da NFe.
Para tais casos, a requisição autenticada com o Web PKI permite a implementação das comunicações à partir do computador do usuário, respeitando ideais de segurança, tanto possibilitando a utilização de certificados em dispositivos criptográficos, A3, tanto evitando a necessidade do envio de certificados A1, deixando-os sob a guarda de terceiros.

## Exemplos

No exemplo abaixo, demonstramos uma simples requisição autenticada que verifica o *status* operacional do serviço SEFAZ-RS

```js
var request = {
	url: 'https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico2.asmx',
	method: 'post',
	headers: {
		'Content-Type': 'application/soap+xml; charset=utf-8'
	},
	body: '<?xml version="1.0" encoding="utf-8"?><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Header><nfeCabecMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NfeStatusServico2"><cUF>53<\/cUF><versaoDados>2.00<\/versaoDados><\/nfeCabecMsg><\/soap12:Header><soap12:Body><nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NfeStatusServico2"><consStatServ xmlns="http://www.portalfiscal.inf.br/nfe" versao="2.00"><tpAmb>1<\/tpAmb><cUF>53<\/cUF><xServ>STATUS<\/xServ><\/consStatServ><\/nfeDadosMsg><\/soap12:Body><\/soap12:Envelope>'
};

// Define o certificado do usuario selecionado
request.certificateThumbprint = $('#certificateSelect').val();

// Envia a requisicao
pki.sendAuthenticatedRequest(request).success(function (response) {
	// Usa a resposta "response"
});

```

## Veja também

Para mais informações, veja a documentação do método [sendAuthenticatedRequest()](https://docs.lacunasoftware.com/en-us/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#sendauthenticatedrequest) e também o exemplo funcional no JSFiddle: [Exemplo de envio de requisição autenticada]()