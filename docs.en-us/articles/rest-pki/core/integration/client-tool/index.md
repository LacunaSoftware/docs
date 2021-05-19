# Rest PKI Client Tool

The **Rest PKI client tool** is a command line application to perform signatures, among other operations, in desktop applications using
[Rest PKI Core](../../index.md). For instance, to sign a PDF file:

[!include[Rest PKI Client Tool sample](../../../../../../includes/rest-pki/core/client-tool/sample.md)]

The client tool is a single executable file that can be downloaded below:

<br />
<center>
**[Rest PKI Client Tool for Windows](https://cdn.lacunasoftware.com/restpkicore/client-tool/win-x86/rpkitool.exe)**
</center>
<br />

For other platforms, [click here](https://cdn.lacunasoftware.com/restpkicore/client-tool/).

To use the client tool, you must configure the **endpoint** of the Rest PKI Core instance and also the **API Key**. This can either be done with environment
variables or with command arguments.

With the environment variables `RestPki__Endpoint` and `RestPki__ApiKey`:

[!include[API configuration by environment variables](../../../../../../includes/rest-pki/core/client-tool/api-config-env.md)]

With the command arguments `--endpoint` and `--api-key`:

[!include[API configuration by arguments](../../../../../../includes/rest-pki/core/client-tool/api-config-args.md)]

> [!NOTE]
> API keys for Rest PKI Core usually have a pipe character (`|`), for instance `yourapp|12345678` (but longer). If this creates problems
> for your environment, you can use only the part after the pipe character, for instance only `12345678` in the previous example.

## Commands

Each operation that can be performed with the client tool is a **command**. The following commands are available:

* [sign](sign.md) - Signs a document
* [list-certs](list-certs.md) - Lists the certificates on the current user's certficate store
* [allocate-keys](allocate-keys.md) - Allocates document keys

## Output / exit codes

If the command is executed successfully, the exit code will be `0` and any eventual output will be written to stdout.

If an error occurs, the exit code will be `>= 1` and information about the error will be written to stderr. See below the list of exit codes.

[!include[Exit codes](../../../../../../includes/rest-pki/core/client-tool/exit-codes.md)]

## Logging

By default, log files are written to:

* On Windows: `%LOCALAPPDATA%\Lacuna Software\Rest PKI Tool\Logs` (e.g. *C:\Users\USERNAME\AppData\Local\Lacuna Software\Rest PKI Tool\Logs*)
* On Linux: `~/.local/share/rpkitool/logs` (e.g. */home/USERNAME/.local/share/rpkitool/logs*)

You can override this behavior by setting the log directory on the environment variable `Serilog__WriteToPath`.
