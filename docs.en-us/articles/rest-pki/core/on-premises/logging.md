# Logging - Rest PKI Core

[Rest PKI Core](../index.md) can write logs to several destinations:

* Standard output (*stdout*)
* File
* [Azure Table storage](https://azure.microsoft.com/en-us/products/storage/tables/)

The default destination depends on the platform being used:

* On Docker, logs are written by default to the standard output, which generally means they end up in the orchestrator's logs
* On Linux, logs are written by the app daemon to the standard output, which are automatically registered in the system log
* On Azure, logs are written by default to an Azure Table

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
Debug or higher from categories starting with the prefix `Microsoft.EntityFrameworkCore.Database` (see below the revelance of this prefix):

```ini
[Logging:LogLevel]
Microsoft.EntityFrameworkCore.Database=Debug
```

Or, with environment variables:

```sh
Logging__LogLevel__Microsoft.EntityFrameworkCore.Database=Information
```

Below are some useful category prefixes.

Category prefix                          | Description
---------------------------------------- | -----------
Lacuna.RestPki                           | Rest PKI Core's own logs
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

```sh
Logging__Console__FormatterName=json
```

## Logging to file

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
Default=Information

[Serilog:MinimumLevel:Override]
Microsoft.EntityFrameworkCore.Database=Debug
```

```sh
Serilog__MinimumLevel__Default=Information
Serilog__MinimumLevel__Override__Microsoft.EntityFrameworkCore.Database=Debug
```

Also, the levels `Trace` and `Critical` are named `Verbose` and `Fatal`, respectively.

<!-- TODO: document rolling file -->
