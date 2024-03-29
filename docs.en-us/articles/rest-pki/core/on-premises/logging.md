﻿# Logging - Rest PKI Core

[Rest PKI Core](../index.md) can write logs to the following destinations:

* Standard output (*stdout*)
* File
* [Azure Table storage](https://azure.microsoft.com/en-us/products/storage/tables/)

The default destination depends on the platform being used.

Platform | Default log destination
-------- | -----------------------
Linux    | Standard output, which are automatically registered in the system log (since the application runs as a daemon)
Docker   | Standard output, which generally means they end up in the orchestrator's logs
Azure    | Azure Table

## Levels

Logs are classified into one of 6 severity levels:

<!-- from https://learn.microsoft.com/en-us/aspnet/core/fundamentals/logging/#log-level -->

LogLevel    | Description
----------- | -----------
Trace       | Contain the most detailed messages. These messages may contain sensitive app data. These messages are disabled by default and should ***not*** be enabled in production.
Debug       | For debugging and development. Use with caution in production due to the high volume.
Information | Tracks the general flow of the app. May have long-term value.
Warning     | For abnormal or unexpected events. Typically includes errors or conditions that don't cause the app to fail.
Error       | For errors and exceptions that cannot be handled. These messages indicate a failure in the current operation or request, not an app-wide failure.
Critical    | For failures that require immediate attention. Examples: data loss scenarios, out of disk space.

By default, logs with severity **Warning or higher** are logged.

This can be overridden, for instance to enable logs with severity Information or higher:

```ini
[Logging:LogLevel]
Default=Information
```

Or, with environment variables:

```sh
Logging__LogLevel__Default=Information
```

## Categories

Logs are also classified into categories, which may be used to enable logs with a different minimum severity by their category. For instance, to enable logs with severity
Debug or higher only from categories starting with the prefix `Lacuna.RestPki` (see below the relevance of this prefix):

```ini
[Logging:LogLevel]
Lacuna.RestPki=Debug
```

Or, with environment variables:

```sh
Logging__LogLevel__Lacuna.RestPki=Debug
```

Below are some useful category prefixes.

Category prefix                          | Description
---------------------------------------- | -----------
Lacuna.RestPki                           | Logs generated by the application itself (not by external libraries or dependencies)
Microsoft.EntityFrameworkCore            | All Entity Framework Core messages (data access framework used by the application)
Microsoft.EntityFrameworkCore.Database   | All database interations
Microsoft.AspNetCore.Hosting.Diagnostics | HTTP requests and responses

## Enabling sensitive data logging

By default, sensitive data such as the contents of HTTP requests or parameters of SQL commands are not logged, regardless of the configured minimum severity level. To
enable logging sensitive data:

```ini
[General]
EnableSensitiveDataLogging=True
```

Or, with environment variables:

```sh
General__EnableSensitiveDataLogging=True
```

## JSON formatting / structured logs

Rest PKI Core generates structured logs. However, by default logs are written to the standard output in human-readable formatting, which "flattens" the information in a
single string, losing the structured information that would otherwise be available.

To avoid this data loss, enable JSON formatting on logs written to the standard output:

```ini
[Logging:Console]
FormatterName=json
```

Or, with environment variables:

```sh
Logging__Console__FormatterName=json
```

## Logging to file

To write logs to a file, configure the application as follows:

```ini
[Serilog:WriteTo:0]
Name=File

[Serilog:WriteTo:0:Args]
path=PATH_TO_LOG_FILE
outputTemplate={Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] [{SourceContext}] {Message:lj}{NewLine}{Exception}
```

Or, with environment variables:

```sh
Serilog__WriteTo__0__Name=File
Serilog__WriteTo__0__Args__path=PATH_TO_LOG_FILE
Serilog__WriteTo__0__Args__outputTemplate={Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] [{SourceContext}] {Message:lj}{NewLine}{Exception}
```

For more information on the `outputTemplate` setting, see [Formatting Output](https://github.com/serilog/serilog/wiki/Formatting-Output).

Please notice that when logging to a file, the configuration for minimum severity level is different:

```ini
[Serilog:MinimumLevel]
Default=Error

[Serilog:MinimumLevel:Override]
Lacuna.RestPki=Information
Microsoft.EntityFrameworkCore.Database=Debug
```

```sh
Serilog__MinimumLevel__Default=Error
Serilog__MinimumLevel__Override__Lacuna.RestPki=Information
Serilog__MinimumLevel__Override__Microsoft.EntityFrameworkCore.Database=Debug
```

Also, the levels `Trace` and `Critical` are named `Verbose` and `Fatal` on this configuration syntax, respectively.

<!-- TODO: document rolling file -->

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
| MediaTypeOptions    |string| Configure encodings for a specific media type. Obs: override default media type options. |
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
