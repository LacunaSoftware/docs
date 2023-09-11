# Criação de pedido - Amplia Reg

> [!NOTE]
> Esta documentação encontra-se em processo de elaboração. Pedimos desculpas pelo inconveniente.

## Criação de pedido em AC RFB ICP-Brasil

Para criar um pedido em uma autoridade de registro (AR) subordinada a uma autoridade certificadora (AC) de 2º nível subordinada à AC da Receita Federal do Brasil (RFB),
deve-se chamar a API de consulta prévia:

Em .NET:

```cs
var rfbResponse = ampliaRegService.RfbCheckAsync(new RfbCheckRequest() {
	Cpf = "11111111111", // CPF do titular somente números
	BirthDate = "15/10/1995", // Data de nascimento do titular no formato YYYY/MM/DD
	Cnpj = null, // ou "11111111111111" CNPJ da empresa somente números
});
```

Via integracão direta por API:

```js
POST /api/orders/rfb-check

{
	"cpf": "11111111111", // CPF do titular somente números
	"birthDate": "15/10/1995", // Data de nascimento do titular no formato YYYY/MM/DD
	"cnpj": null, // ou "11111111111111" CNPJ da empresa somente números
}
```

Em seguida, chame a API de criação de pedido:

```cs
var orderCreateResponse = ampliaRegService.CreateBrazilOrderAsync(new OrderCreateRequest<BrazilOrderCreateParameters>() {
	RegistrationAuthority = AuthorityReference.FromOrganizationIdentifier("11111111111111"), // CNPJ da autoridade de registro
	CertificateType = CertificateTypeReference.FromCode("E-CPF/A1"), // Código do tipo de certificado
	IssueType = IssueTypes.Presential, // ou IssueTypes.VideoConference tipo de emissão do certificado
	Parameters = new BrazilOrderCreateParameters() {
		Cpf = "11111111111", // CPF do titular somente números
		Name = "Nome do Titular", // Nome completo do titular
		BirthDate = "15/10/1995", // Data de nascimento do titular no formato YYYY/MM/DD
		Cnpj = null, // ou "11111111111111" CNPJ da empresa somente números
		OrganizationName = null, // ou "Nome da Organização" nome completo da organização
	},
	Validity = PeriodModel.FromYears(1), // Validade do certificado (o tipo de certificado deve permitir essa validade)
	SaleNumber = "ampliaregng-0000001", // Número da venda do pedido
});
```

ou via API:

```js
POST /api/brazil/orders

{
	"registrationAuthority": {
		"OrganizationIdentifier": "11111111111111" // CNPJ da autoridade de registro
	},
	"certificateType": {
		"code": "E-CPF/A1" // Código do tipo de certificado
	},
	"issueType": "Presential", // ou VideoConference tipo de emissão do certificado
	"parameters": {
		"cpf": "11111111111", // CPF do titular somente números
		"name": "Nome do Titular", // Nome completo do titular
		"birthDate": "15/10/1995", // Data de nascimento do titular no formato YYYY/MM/DD
		"cnpj": null, // ou "11111111111111" CNPJ da empresa somente números
		"organizationName": null, // ou "Nome da Organização" nome completo da organização
	},
	"validity": {
		"years": 1 // Validade do certificado (o tipo de certificado deve permitir essa validade)
	},
	"saleNumber": "ampliaregng-0000001" // Número da venda do pedido
}

## Veja também

* [Primeiros passos para integração](get-started.md)
* [Códigos de erro](error-codes.md)
