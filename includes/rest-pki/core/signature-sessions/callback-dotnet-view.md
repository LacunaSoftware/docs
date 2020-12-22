```html
@using Lacuna.RestPki.Api
@using Lacuna.RestPki.Client
@model SignatureSession
<h2>Signed documents</h2>
<ul>
	@foreach (var document in Model.Documents)
	{
		<li>
			<a href="@document.SignedFile.Location">@document.SignedFile.Name</a>
		</li>
	}
</ul>
```
