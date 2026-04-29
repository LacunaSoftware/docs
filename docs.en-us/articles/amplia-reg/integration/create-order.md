# Create an order - Amplia Reg

> [!TIP]
> Make sure you have completed the [Getting started](get-started.md) steps

The order creation APIs require the certificate type to be specified. To list the available certificate types, call the certificate type listing API.

In .NET:

```cs
var certTypes = await ampliaRegService.ListCertificateTypesAsync(new CertificateTypeListParameters {
	IsDisabled = false,
});
```

Via API:

```
GET /api/certificate-types?isDisabled=false
```

Example response:

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

Then, call one of the order creation APIs depending on the certificate format:

* [ICP-Brasil standard](#brazil)

Please contact us if you need documentation for creating other certificate formats.

<a name="brazil" />

## Creating an ICP-Brasil standard certificate order

Creating an ICP-Brasil standard certificate order in .NET:

```cs
var orderCreateResponse = ampliaRegService.CreateOrderAsync(new OrderCreateRequest<BrazilOrderCreateParameters>() {
	RegistrationAuthority = AuthorityReference.FromOrganizationIdentifier("09933230000188"), // RA CNPJ
	CertificateType = CertificateTypeReference.FromCode("ECPFA1"), // Certificate type code
	IssueType = IssueTypes.Presential, // or IssueTypes.VideoConference
	Parameters = new BrazilOrderCreateParameters() {
		Cpf = "07917307000", // Holder's CPF
		Name = "Holder Name", // Holder's full name
		BirthDate = "1995-10-15", // Holder's birth date in yyyy-mm-dd format
		Cnpj = "08271696000100", // CNPJ (omit for e-CPF)
		OrganizationName = "Patorum Sistemas LTDA", // Company name (omit for e-CPF)
		HolderHasCnh = true, // true if the holder has a driver's license; false otherwise (omit if unknown)
	},
	Validity = PeriodModel.FromYears(1), // Certificate validity (the certificate type must allow it)
	SaleNumber = "1000-1234", // Order number in the sales system (max 50 characters, may contain punctuation)
});
```

> [!NOTE]
> In all calls, CPF and CNPJ must be provided without punctuation (digits only) and with leading zeros if any.

> [!TIP]
> For organizational certificates, the CPF, full name and birth date fields refer to the person responsible for the certificate.

Or via API:

```js
POST /api/brazil/orders
{
	"registrationAuthority": {
		"organizationIdentifier": "09933230000188" // RA CNPJ
	},
	"certificateType": {
		"code": "ECPFA1" // Certificate type code
	},
	"issueType": "Presential", // or "VideoConference"
	"parameters": {
		"cpf": "07917307000", // Holder's CPF
		"name": "Holder Name", // Holder's full name
		"birthDate": "1995-10-15", // Holder's birth date in yyyy-mm-dd format
		"cnpj": "08271696000100", // CNPJ (omit for e-CPF)
		"organizationName": "Patorum Sistemas LTDA", // Company name (omit for e-CPF)
		"holderHasCnh": true // true if the holder has a driver's license; false otherwise (omit if unknown)
	},
	"validity": {
		"years": 1 // Certificate validity (the certificate type must allow this validity)
	},
	"saleNumber": "1000-1234" // Order number in the sales system (max 50 characters, may contain punctuation)
}
```

### RFB prior query

To create an order at a registration authority (RA) subordinate to a level-2 certification authority (CA) subordinate to the Brazilian Revenue Service (RFB) CA,
you must first call the RFB prior query API.

In .NET:

```cs
var rfbResponse = await ampliaRegService.PerformRfbQueryAsync(
	"07917307000", // Holder's CPF
	new DateTime(1995, 10, 15), // Holder's birth date
	"08271696000100", // CNPJ (omit for e-CPF)
);
```

Via direct API integration:

```js
POST /api/orders/rfb-query
{
	"cpf": "07917307000", // Holder's CPF
	"birthDate": "1995-10-15", // Holder's birth date in yyyy-mm-dd format
	"cnpj": "08271696000100", // CNPJ (omit for e-CPF)
}
```

The response indicates whether or not the certificate can be issued with the provided data. If approved, the response also contains the full name and company name (if applicable) that must appear on the certificate. If rejected, the `failure` field contains a message (in Portuguese) that can be displayed to the end user detailing the reason for rejection.

Example response with approval:

```js
{
	"approved": true, // the certificate CAN be issued with the data provided in the query
	"returnCode": 0,
	"failure": null,
	"name": "John Doe", // holder's full name that must appear on the certificate
	"organizationName": "Patorum Sistemas LTDA" // company name that must appear on the certificate
}
```

Example response with rejection:

```js
{
	"approved": false, // the certificate CANNOT be issued with the data provided in the query
	"returnCode": 2, // code returned by the RFB prior query API
	"failure": "CPF informado inexistente nas bases de dados da SRF. Emissão do certificadonão permitida.",
	"name": null,
	"organizationName": null
}
```

### Biometric enrollment check

To create an order for issuance by videoconference, you must ask the holder whether they have a driver's license. Provide the answer in the `HolderHasCnh` field when creating the order. If the holder does not have a driver's license (`HolderHasCnh = false`), call the following API to check whether they have a biometric enrollment. If not, the certificate cannot be issued.

In .NET:

```cs
var checkBioEnrollmentResponse = await ampliaRegService.CheckBioEnrollmentAsync(
	"07917307000" // Holder's CPF
);
if (!checkBioEnrollmentResponse.IsEnrolled) {
	throw new Exception("Issuance by videoconference cannot be performed!");
}
```

Via API:

```js
POST /api/orders/bio-enrollment-check
{
	"cpf": "07917307000" // Holder's CPF
}
```

Response:

```js
{
	"isEnrolled": true // indicates whether the person has a biometric enrollment
}
```

## See also

* [Getting started with integration](get-started.md)
* [Phone number validation](validate-phone.md)
* [Cancel an order](cancel-order.md)
* [Error codes](error-codes.md)
