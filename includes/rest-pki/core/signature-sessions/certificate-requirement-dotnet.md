```cs
var response = await restPkiService.CreateSignatureSessionAsync(new CreateSignatureSessionRequest() {
	...,
	CertificateRequirements = new List<CertificateRequirement> {
		new CertificateRequirement { Type = CertificateRequirementTypes.CryptoDevice }
	}
});
return Redirect(response.RedirectUrl);
```
