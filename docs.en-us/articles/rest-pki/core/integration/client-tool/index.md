# Rest PKI Client Tool

The **Rest PKI client tool** is a command line application to perform signatures, among other operations, in desktop applications using
[Rest PKI Core](../../index.md). For instance, to sign a PDF file:

[!include[Rest PKI Client Tool sample](../../../../../../includes/rest-pki/core/client-tool/sample.md)]

The client tool is a single executable file that can be downloaded below:

[!include[Client tool download](../../../../../../includes/rest-pki/core/client-tool/download.md)]

For other platforms, [click here](https://cdn.lacunasoftware.com/restpkicore/client-tool/).

## Configuration

To use the client tool, you must configure the **endpoint** of the Rest PKI Core instance and also the **API Key**. This can either be done with environment
variables or with command parameters.

With the environment variables `RestPki__Endpoint` and `RestPki__ApiKey`:

[!include[API configuration by environment variables](../../../../../../includes/rest-pki/core/client-tool/api-config-env.md)]

With the command parameters `--endpoint` and `--api-key`:

[!include[API configuration by parameters](../../../../../../includes/rest-pki/core/client-tool/api-config-params.md)]

> [!NOTE]
> API keys for Rest PKI Core usually have a pipe character (`|`), for instance `yourapp|12345678` (but longer). If this creates problems
> for your environment, you can use only the part after the pipe character, for instance only `12345678` in the previous example.

### Optional configurations

By default, the timeout when making API calls to the Rest PKI Core instance is 5 minutes. It may be necessary to increase this value if you're signing
very large files or under slow internet connection scenarios. You can customize this with the environment variable `RestPki__TimeoutSeconds`:

[!include[Timeout configuration by environment variables](../../../../../../includes/rest-pki/core/client-tool/timeout-config-env.md)]

Or with the command paramerer `--timeout`:

[!include[Timeout configuration by parameter](../../../../../../includes/rest-pki/core/client-tool/timeout-config-param.md)]

The above examples would set the timeout to 10 minutes (600 seconds).

## Commands

Each operation that can be performed with the client tool is a **command**. The following commands are available:

* [sign](sign.md) - Signs a document
* [list-certs](list-certs.md) - Lists the certificates on the current user's certficate store
* [allocate-keys](allocate-keys.md) - Allocates document keys

## Output / exit codes

If the command is executed successfully, the exit code will be `0` and any eventual output will be written to `stdout`.

If an error occurs, the exit code will be `>= 1` and information about the error will be written to `stderr`. See below the list of exit codes.

[!include[Exit codes](../../../../../../includes/rest-pki/core/client-tool/exit-codes.md)]

## Logging

By default, log files are written to:

* On Windows: `%LOCALAPPDATA%\Lacuna Software\Rest PKI Tool\Logs` (e.g. *C:\Users\USERNAME\AppData\Local\Lacuna Software\Rest PKI Tool\Logs*)
* On Linux: `~/.local/share/rpkitool/logs` (e.g. */home/USERNAME/.local/share/rpkitool/logs*)

You can override this behavior by setting the log directory on the environment variable `Serilog__WriteToPath`.

By default, only logs with severity `Warning` or higher are written. You can override this behavior by setting the environment variable
`Serilog__MinimumLevel__Default`. The log levels, from least to most severe, are:

[!include[Log levels](../../../../../../includes/rest-pki/core/client-tool/log-levels.md)]
