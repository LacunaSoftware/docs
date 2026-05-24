# Bulk Signer - Setup as a Windows Service

<!-- link to version in Portuguese -->
<div data-alt-locales="pt-br"></div>

The host detects Windows Service mode automatically via `Microsoft.Extensions.Hosting.WindowsServices` and exits with code 0 on graceful shutdown.

## Publish

```powershell
dotnet publish src\Lacuna.BulkSigner\Lacuna.BulkSigner.csproj -c Release -r win-x64 --self-contained false -o C:\LacunaBulkSigner
```

## Install as a service

```powershell
sc create LacunaBulkSigner binpath="C:\LacunaBulkSigner\Lacuna.BulkSigner.exe" start=auto
sc description LacunaBulkSigner "Lacuna Bulk Signer v2"
```

Set environment variables via the service account or registry:

```powershell
[Environment]::SetEnvironmentVariable("BULKSIGNER_API_KEY", "your-api-key", [EnvironmentVariableTarget]::Machine)
[Environment]::SetEnvironmentVariable("BULKSIGNER_PFX_PASSWORD", "your-pfx-password", [EnvironmentVariableTarget]::Machine)
[Environment]::SetEnvironmentVariable("Signing__License", "<lacuna-license>", [EnvironmentVariableTarget]::Machine)
```

Start:

```powershell
sc start LacunaBulkSigner
```

Check the rolling log under `data\logs\` for startup events. The Spectre console output goes to the service event log/host (not visible by default — use the Serilog file logs for diagnostics).

## Upgrade

```powershell
sc stop LacunaBulkSigner
# Copy new files over C:\LacunaBulkSigner
sc start LacunaBulkSigner
```

## Uninstall

```powershell
sc stop LacunaBulkSigner
sc delete LacunaBulkSigner
```

## See also

* [Configuration](configuration.md)
* [Troubleshooting](troubleshooting.md)
