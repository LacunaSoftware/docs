# Guia de Integração em .NET

Para integrar a sua aplicação web ao [Lacuna Scanner Service](../index.md), adicione o pacote [Lacuna.Scanner.Client](https://www.nuget.org/packages/Lacuna.Scanner.Client)
ao seu projeto.

> [!TIP]
> Veja a sessão [ASP.NET Core](#aspnet-core) abaixo caso a sua aplicação utilize essa tecnologia.

De posse do **endpoint** e da **API Key**, instancie um `ScannerClient`:

```cs
var endpoint = "...";
var apiKey = "...";
var scanner = new ScannerClient(endpoint, apiKey);
```

Utilize o método `CreateScanSessionAsync(string)` passando o **returnUrl** para iniciar uma sessão:

```cs
var scanSessionParams = await scanner.CreateScanSessionAsync("https://your-return-url/");
```

Utilize o valor retornado no campo `RedirectUrl` para redirecionar o usuário no frontend:

```js
location.href = scanSessionParams.RedirectUrl;
```

Quando detectar que o usuário voltou ao seu site (procure pelo argumento `scanSessionId` na URL), utilize o método `GetScanSessionAsync(Guid)` para obter os
documentos digitalizados:

```cs
var scanSession = await scanner.GetScanSessionAsync(scanSessionId);
if (scanSession.Result == ScanSessionResults.Success) {
	var document = scanSession.Documents.First();
	using (var srcStream = await document.OpenReadAsync()) {
		using (var destStream = File.Create(...)) {
			await srcStream.CopyToAsync(destStream);
		}
	}
}
```

## Sessões *multifile*

Você pode permitir que o usuário digitalize múltiplos documentos. Para isso, passe o parâmetro `multifile: true` ao criar a sessão:

```cs
var scanSessionParams = await scanner.CreateScanSessionAsync("https://your-return-url/", multifile: true);
```

Ao final do processo, ao invés de levar em consideração apenas o primeiro documento, itere a lista de documentos digitalizados:

```cs
var scanSession = await scanner.GetScanSessionAsync(scanSessionId);
if (scanSession.Result == ScanSessionResults.Success) {
	foreach (var document in scanSession.Documents) {
		...
	}
}
```

<a name="aspnet-core" />
## ASP.NET Core

Caso a sua aplicação web seja em ASP.NET Core, utilize o pacote [Lacuna.Scanner.Client.AspNetCore](https://www.nuget.org/packages/Lacuna.Scanner.Client.AspNetCore).

No método `ConfigureServices` do *startup* da sua aplicação, adicione:

```cs
services.AddScanner()
	.Configure(Configuration.GetSection("Scanner"));
```

No arquivo de configuração `appsettings.json`, adicione a seção **Scanner**:

```json
	...
	"Scanner": {
		"Endpoint": "https://scanner.lacunasoftware.com/",
		"ApiKey": "..."
	},
	...
```

Nas partes da aplicação que precisarem fazer chamadas à API do serviço, peça via *dependency injection* uma instância de `IScannerService`:

```cs
using Lacuna.Scanner.Client;

public MyController : ApiController {

	private readonly IScannerService scanner;

	public MyController(IScannerService scanner) {
		this.scanner = scanner;
	}

	...
}
```
