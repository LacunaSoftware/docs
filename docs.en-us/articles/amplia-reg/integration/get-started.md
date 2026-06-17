# Get started on integration - Amplia Reg

In this article, you will take the first steps to integrate your application with [Amplia Reg](../index.md).

## Parameters

To get started, you will need the following parameters:

* **Endpoint**: address of the Amplia Reg instance to be used
* **API Key**: authentication key for the API

If you are using Amplia Reg as a service (SaaS), request your parameters from our [developer support](mailto:suporte@lacunasoftware.com).

If you are using your own [on-premises instance](../on-premises/index.md), the *endpoint* is the address of your Amplia Reg control panel, for example
`https://ampliareg.yourcompany.com/`. Create your own API key by following the steps below:

1. Sign in to your instance's control panel
1. In the side menu, click **Applications**, then **Add**
1. Fill in a **name** for the application
1. Check the `Operator` role (this role is sufficient for most operations typically performed via API)
1. Click **Create**
1. On the application details page, click **Keys**, then **Add**
1. Fill in any description for the key and choose an expiration (it is recommended to choose **Never expires**), then click **Create**
1. **Take note of the displayed API key** as it will not be possible to retrieve it later

## Calling the API

Although Amplia Reg provides REST APIs that can be easily called, they are not typically used directly. Instead, we offer libraries to consume Amplia Reg services (*client libs*) in different programming languages, as well as example projects demonstrating the use of these libraries, so that developers do not need to worry about the details involved in consuming APIs and can code directly in their preferred language.

Choose one of the programming languages below:

* [.NET](#dotnet)

If your application uses a different programming language, [call the APIs directly](#rest).

<a name="dotnet" />

### Calling the API in .NET

Start by adding the NuGet package [Lacuna.AmpliaRegNg.Client](https://www.nuget.org/packages/Lacuna.AmpliaRegNg.Client/).

> [!NOTE]
> The package targets .NET Standard 2.0, which means it is compatible with .NET Framework >= 4.6.1 and .NET Core >= 2.0.

#### ASP.NET Core applications

If your application is built with ASP.NET Core, add the code below to the `ConfigureServices()` method of the *Startup.cs* class in your project:

```cs
public void ConfigureServices(IServiceCollection services) {
	...
	services.AddAmpliaReg().Configure(Configuration.GetSection("AmpliaReg"));
}
```

In the *appsettings.json* configuration file, add the `AmpliaReg` section:

```json
{
	...
	"AmpliaReg": {
		"Endpoint": "YOUR_INSTANCE_ENDPOINT_HERE",
		"ApiKey": "YOUR_API_KEY_HERE"
	},
	...
}
```

In the parts of the application that need to make calls to the service API, request an instance of `IAmpliaRegService` via *dependency injection*:

```cs
using Lacuna.AmpliaRegNg.Client;

public MyController : ApiController {

	private readonly IAmpliaRegService ampliaRegService;

	public MyController(IAmpliaRegService ampliaRegService) {
		this.ampliaRegService = ampliaRegService;
	}

	...
}
```

#### Conventional .NET applications

If your application is not built with ASP.NET Core, use the **endpoint** and **API key** parameters to request an implementation of the `IAmpliaRegService` interface from the static class `AmpliaRegServiceFactory`:

```cs
using Lacuna.AmpliaRegNg.Client;

public MyController : ApiController {

	private readonly IAmpliaRegService ampliaRegService;

	public MyController() {
		this.ampliaRegService = AmpliaRegServiceFactory.GetService(new AmpliaRegOptions() {
			Endpoint = ConfigurationManager.AppSettings["AmpliaRegEndpoint"],
			ApiKey = ConfigurationManager.AppSettings["AmpliaRegApiKey"],
		});
	}

	...
}
```

In the example above, the endpoint and API key would be in the `appSettings` section of the *web.config* file (entries `AmpliaRegEndpoint` and `AmpliaRegApiKey` respectively). However, this mapping is just an example. The parameters can be stored wherever you prefer, for example in the database or a JSON configuration file.

#### Culture / internationalization (i18n)

The current thread's culture (`Thread.CurrentThread.CurrentUICulture`) is used to signal to Amplia Reg which culture the API should observe in each call. This behavior works well if your application sets the appropriate culture on the current thread (`CurrentThread`).

If you prefer, you can also change this behavior, overriding the current thread's culture with a fixed culture.

In ASP.NET Core, add the `CultureName` property to the Amplia Reg configuration section in the *appSettings.json* file:

```json
{
	...
	"AmpliaReg": {
		...,
		"CultureName": "pt-BR"
	},
	...
}
```

In conventional .NET, change the `CultureName` property of the `AmpliaRegOptions` object:

```cs
this.ampliaRegService = AmpliaRegServiceFactory.GetService(new AmpliaRegOptions() {
	...,
	CultureName = "pt-BR",
});
```

#### Exceptions

The following exceptions may be thrown in calls to `IAmpliaRegService` methods:

* `AmpliaRegException`: API error (usually a misuse of the API that can be resolved by adjusting the request parameters). The `Code` property contains the API error code. See [error codes](error-codes.md).
* `RestErrorException`: error in the HTTP call. The `StatusCode` property contains the returned HTTP code. See [HTTP response codes](#http-status-codes).

<a name="rest" />

### Calling the API directly

The Amplia Reg APIs are RESTful, receiving and returning JSON messages, and are easy to use in any modern programming language. If your application does not use any of the programming languages listed above, choose to call the Amplia Reg APIs directly.

See the [API documentation](https://ar.lacunasoftware.com/swagger).

The **endpoint** parameter mentioned above must be prefixed to all relative URLs mentioned in this section.

The **API key** must be passed in the `X-Api-Key` header of each request:

```plaintext
X-Api-Key: yourapp|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

If you prefer, you can also pass the API key in the `Authorization` header, specifying the *scheme* as `ApiKey`:

```plaintext
Authorization: ApiKey yourapp|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

<a name="http-status-codes" />

#### HTTP response codes

The API responds with the following HTTP codes:

Code                         | Description
---------------------------- | -----------
200 (OK)                     | Request processed normally. The response varies for each call and may or may not indicate success; consult the [API documentation](https://ar.lacunasoftware.com/swagger) for the response format.
400 (Bad Request)            | Syntax error in the request. For example, a required field was not provided.
401 (Unauthorized)           | The API key was not provided or is invalid.
403 (Forbidden)              | The provided API key is valid, but the application does not have sufficient permissions to perform the requested operation.
415 (Forbidden)              | Request body is empty or invalid.
422 (Unprocessable Entity)   | API error (usually a misuse of the API that can be resolved by adjusting the request parameters). The response body is an `ErrorModel`, described below.
500 (Internal Server Error)  | An unexpected error occurred. The `exceptionCode` field (string) in the response body may help diagnose the problem.

#### ErrorModel

When the API returns the 422 (Unprocessable Entity) response code, it means an API error occurred (usually a misuse of the API that can be resolved by adjusting the request parameters). In this case, the response body is an `ErrorModel` containing:

Field     | Type     | Description
--------- | -------- | -----------
`code`    | `string` | Contains the error code (see [error codes](error-codes.md))
`message` | `string` | Description of the error (more suitable for logging than for displaying to the user, as it is not internationalized)

Below is an example of an `ErrorModel`:

```json
{
	"code": "OrderNotFound",
	"message": "Order not found: 100123456"
}
```

#### Culture / internationalization (i18n)

The `Accept-Language` request header is observed by the Amplia Reg API, influencing the API's behavior. The following culture codes are supported:

* `pt-BR` (or just `pt`)
* `en-US` (or just `en`)
* `es-ES` (or just `es`)

> [!NOTE]
> Error messages are not affected by this header and therefore should not be displayed to the user, but rather logged in the system log
