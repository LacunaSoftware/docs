```cs
var response = await restPkiService.CreateSignatureSessionAsync(new CreateSignatureSessionRequest() {
	...
	DisableDownloads = true,
});
return Redirect(response.RedirectUrl);
```
