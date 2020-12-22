```cs
var response = await restPkiService.CreateSignatureSessionAsync(new CreateSignatureSessionRequest() {
	...
	EnableBackgroundProcessing = true,
});
return Redirect(response.RedirectUrl);
```
