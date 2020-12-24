```cs
var response = await restPkiService.CreateSignatureSessionAsync(new CreateSignatureSessionRequest() {
	ReturnUrl = null,
	EnableBackgroundProcessing = true,
});
return Redirect(response.RedirectUrl);
```
