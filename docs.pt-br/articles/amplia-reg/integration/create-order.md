# Criação de pedido - Amplia Reg

> [!TIP]
> Certifique-se de que já realizou os [Primeiros passos](get-started.md)

As APIs de criação de pedido exigem que o tipo de certificado seja especificado. Para listar os tipos de certificado disponíveis, chame a
API de listagem de tipos de certificado.

Em .NET:

```cs
var certTypes = await ampliaRegService.ListCertificateTypesAsync();
```

Via API:

```
GET /api/certificate-types
```

Exemplo de resposta:

```js
[
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "e-CPF A1",
    "format": "PkiBrazil",
    "code": "ECPFA1",
    "keyMediaType": "PC",
    "canIssueByAgentBeforeApproval": false,
    "isDisabled": false,
    "creationDate": "2023-09-12T20:31:53.856Z",
    "photoStepEnabled": true,
    "documentsStepEnabled": true,
    "nonExportableKey": false,
    "paraguayParameters": null,
    "brazilParameters": {
      "brazilType": "PessoaFisica",
      "appendIdentifierToCommonName": true
    },
    "caboVerdeParameters": null,
    "sslParameters": null,
    "keySize": 2048,
    "issueByCsr": false,
    "canFillFromCsr": false,
    "certificationAuthorityId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "allowVideoConference": true,
    "validityOptions": [
      { "years": 1, "months": 0, "days": 0 },
      { "years": 2, "months": 0, "days": 0 }
    ]
  }
]
```

Em seguida, chame uma das APIs de criação de pedido dependendo do formato de certificado:

* [Padrão ICP-Brasil](#brazil)

> [!NOTE]
> Consulte-nos caso precise de documentação para criação de outros formatos de certificado.

<a name="brazil" />

## Criação de pedido de certificado padrão ICP-Brasil

> [!NOTE]
> Em todas as chamadas, CPF e CNPJ devem ser fornecidos sem pontuações (somente dígitos) e com zeros à esquerda, se houver.

> [!TIP]
> No caso de certificado de pessoa jurídica, os campos de CPF, nome completo e data de nascimento referem-se ao responsável pelo certificado.

Criação de pedido de certificado padrão ICP-Brasil em .NET:

```cs
var orderCreateResponse = ampliaRegService.CreateOrderAsync(new OrderCreateRequest<BrazilOrderCreateParameters>() {
	RegistrationAuthority = AuthorityReference.FromOrganizationIdentifier("09933230000188"), // CNPJ da AR
	CertificateType = CertificateTypeReference.FromCode("ECPFA1"), // Código do tipo de certificado
	IssueType = IssueTypes.Presential, // ou IssueTypes.VideoConference
	Parameters = new BrazilOrderCreateParameters() {
		Cpf = "07917307000", // CPF do titular
		Name = "Nome do Titular", // Nome completo do titular
		BirthDate = "1995-10-15", // Data de nascimento do titular no formato aaaa-mm-dd
		Cnpj = "08271696000100", // CNPJ (omita em caso de e-CPF)
		OrganizationName = "Patorum Sistemas LTDA", // Razão social (omita em caso de e-CPF)
	},
	Validity = PeriodModel.FromYears(1), // Validade do certificado (o tipo de certificado deve permitir essa validade)
	SaleNumber = "1000-1234", // Número do pedido no sistema de venda (máximo 50 caracteres, pode conter pontuações)
});
```

ou via API:

```js
POST /api/brazil/orders
{
	"registrationAuthority": {
		"organizationIdentifier": "09933230000188" // CNPJ da AR
	},
	"certificateType": {
		"code": "ECPFA1" // Código do tipo de certificado
	},
	"issueType": "Presential", // ou "VideoConference"
	"parameters": {
		"cpf": "07917307000", // CPF do titular
		"name": "Nome do Titular", // Nome completo do titular
		"birthDate": "1995-10-15", // Data de nascimento do titular no formato aaaa-mm-dd
		"cnpj": "08271696000100", // CNPJ (omita em caso de e-CPF)
		"organizationName": "Patorum Sistemas LTDA", // Razão social (omita em caso de e-CPF)
	},
	"validity": {
		"years": 1 // Validade do certificado (o tipo de certificado deve permitir essa validade)
	},
	"saleNumber": "1000-1234" // Número do pedido no sistema de venda (máximo 50 caracteres, pode conter pontuações)
}
```

### Consulta prévia RFB

Para criar um pedido em uma autoridade de registro (AR) subordinada a uma autoridade certificadora (AC) de 2º nível subordinada à AC da Receita Federal do Brasil (RFB),
deve-se primeiramente chamar a API de consulta prévia para obter o nome completo do titular (e a razão social, no caso de certificado


Em .NET:

```cs
var rfbResponse = await ampliaRegService.PerformRfbQueryAsync(
	"07917307000", // CPF do titular
	new DateTime(1995, 10, 15), // Data de nascimento do titular
	"08271696000100", // CNPJ (omita em caso de e-CPF)
});
```

Via integracão direta por API:

```js
POST /api/orders/rfb-query
{
	"cpf": "07917307000", // CPF do titular
	"birthDate": "1995-10-15", // Data de nascimento do titular em formato aaaa-mm-dd
	"cnpj": "08271696000100", // CNPJ (omita em caso de e-CPF)
}
```

A resposta contém a informação de se o certificado pode ou não ser emitido com os dados fornecidos. Em caso positivo, a resposta contém também o nome completo
e a razão social da empresa (se for o caso) que devem constar no certificado. Em caso negativo, o campo `failure` contém uma mensagem em português que pode ser
exibida ao usuário final detalhando o motivo da reprovação.

```js
{
	"approved": true, // denota se o certificado pode ser emitido com os dados fornecidos na consulta
	"returnCode": 0, // código retornado pela API de consulta prévia da RFB
	"failure": null, // motivo da reprovação
	"name": "Fulano de Tal", // nome completo do titular que deve constar no certificado
	"organizationName": "Patorum Sistemas LTDA" // razão social da empresa que deve constar no certificado
}
```

### Consulta de cadastro biométrico

Para criar um pedido com emissão por videoconferência, deve-se perguntar ao titular se ele possui CNH. Caso a resposta seja negativa, deve-se chamar a
seguinte API para verificar se o titular possui cadastro biométrico. Caso negativo, o certificado não poderá ser emitido.

Em .NET:

```cs
var checkBioEnrollmentResponse = await ampliaRegService.CheckBioEnrollmentAsync("07917307000" /* CPF do titular */);
if (!checkBioEnrollmentResponse.IsEnrolled) {
	throw new Exception("A emissão por videoconferência não pode ser realizada sem CNH e sem um cadastro biométrico prévio!");
}
```

Por API:

```js
POST /api/orders/bio-enrollment-check
{
	"cpf": "07917307000" // CPF do titular
}
```

Resposta:

```js
{
	"isEnrolled": true // denota se a pessoa possui cadastro biométrico
}
```

## Veja também

* [Primeiros passos para integração](get-started.md)
* [Códigos de erro](error-codes.md)
