```cs
string pdfPath = ...;
Stream xmlStream = ...;
var documents = new List<SignatureSessionDocumentToSign> {
	new SignatureSessionDocumentToSign {
		File = FileReference.FromFile(pdfPath),
	},
	new SignatureSessionDocumentToSign {
		File = FileReference.FromStream(xmlStream, "doc.xml"),
	},
	...
};
var response = await restPkiService.CreateSignatureSessionAsync(new CreateSignatureSessionRequest() {
	...
}, documents: documents);
return Redirect(response.RedirectUrl);
```
