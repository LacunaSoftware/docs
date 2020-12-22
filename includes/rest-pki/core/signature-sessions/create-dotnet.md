```cs
var response = await restPkiService.CreateSignatureSessionAsync(new CreateSignatureSessionRequest() {
	ReturnUrl = "http://localhost:8080/SessionCallback",
});
return Redirect(response.RedirectUrl);
```
