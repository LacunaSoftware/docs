```cs
var metadata = new NameValueCollection {
	["organization"] = "Patorum Inc.",
	["priority"] = "10",
};
// Multi-valued metadata also supported
metadata.Add("categories", "Document");
metadata.Add("categories", "Forms");
var response = await restPkiService.CreateSignatureSessionAsync(new CreateSignatureSessionRequest() {
	...
}, documentMetadata: metadata);
```
