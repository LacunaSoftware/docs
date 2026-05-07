
## Logging Http requests and responses

To enable HTTP request and response logging:

```ini
[HttpLogging]
Enabled=True
```

Or, with environment variables:

```sh
HttpLogging__Enabled=True
```

> **_NOTE:_** For the log to work, it's necessary to configure the log level of the `Microsoft.AspNetCore.HttpLogging.HttpLoggingMiddleware` category to `Information`

Once this is done, requests will already be logged with a default configuration. If you want more control over these settings, we offer the following configuration options:

| Option                           |Type | Description |
|----------------------------------|-----|-------------|
| Enabled               |bool| Set to `true` to enable HTTP logging; otherwise, set to `false`. |
| LoggingFields       |string| Specify the fields to log for the Request and Response. Defaults to logging request and response properties and headers. Supported values can be found [here](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.httplogging.httploggingfields?view=aspnetcore-6.0). Obs: override default LoggingFields. |
| AdditionalLoggingFields |string| Provide additional logging fields to be included in the log. |
| RequestHeaders      |string| Specify the HTTP request headers that are allowed to be logged. If a header is not allowed, it will be logged with the value `[Redacted]`. Obs: override default request headers. |
| AdditionalRequestHeaders |string| Provide additional HTTP request headers to be included in the log. |
| ResponseHeaders     |string| Specify the HTTP response headers that are allowed to be logged. If a header is not allowed, it will be logged with the value `[Redacted]`. Obs: override default response headers. |
| AdditionalResponseHeaders |string| Provide additional HTTP response headers to be included in the log. |
| TextMediaTypeOptions    |string| Configure encodings for a specific text media types. |
| BinaryMediaTypeOptions    |string| Configure encodings for a specific binary media types |
| ClearMediaTypeOptions		|bool| If specified as `true` overrides the default media type options
| AdditionalMediaTypeOptions |string| Provide additional media type options. |
| RequestBodyLogLimit    |int| Limit the maximum request body size to log (in bytes). Defaults to `32 KB`. |
| ResponseBodyLogLimit   |int| Limit the maximum response body size to log (in bytes). Defaults to `32 KB`. |

### Examples
By default, request body not is logged. To enable it, use one of the following methods:

```ini
[HttpLogging]
LoggingFields=RequestBody           # Override default logging fields
AdditionalLoggingFields=RequestBody # RequestBody will be appended to default logging fields
```

Or, with environment variables:

```sh
HttpLogging__LoggingFields=RequestBody
HttpLogging__AdditionalLoggingFields=RequestBody
```

Headers that not allowed appear with value `[Redacted]`. To display the headers value you need, use:

```ini
[HttpLogging]
AdditionalRequestHeaders=cookie,Sec-Fetch-Dest
```

Or, with environment variables:

```sh
HttpLogging__AdditionalRequestHeaders=cookie,Sec-Fetch-Dest
```

If you want to limit the request body log size:

```ini
[HttpLogging]
RequestBodyLogLimit=5120 # limit to 5KB (5 * 1024) = 5120
```

Or, with environment variables:

```sh
HttpLogging__RequestBodyLogLimit=5120
```