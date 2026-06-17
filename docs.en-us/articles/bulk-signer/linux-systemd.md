# Bulk Signer - Setup with Linux systemd

<!-- link to version in Portuguese -->
<div data-alt-locales="pt-br"></div>

The host detects systemd mode automatically via `Microsoft.Extensions.Hosting.Systemd`.

## Publish

```bash
dotnet publish src/Lacuna.BulkSigner/Lacuna.BulkSigner.csproj -c Release -r linux-x64 --self-contained false -o /opt/lacuna-bulksigner
```

## Unit file

`/etc/systemd/system/lacuna-bulksigner.service`:

```ini
[Unit]
Description=Lacuna Bulk Signer v2
After=network-online.target
Wants=network-online.target

[Service]
WorkingDirectory=/opt/lacuna-bulksigner
ExecStart=/usr/bin/dotnet /opt/lacuna-bulksigner/Lacuna.BulkSigner.dll
Restart=on-failure
RestartSec=10
SyslogIdentifier=lacuna-bulksigner
User=lacuna
Environment=ASPNETCORE_ENVIRONMENT=Production
EnvironmentFile=/etc/lacuna-bulksigner/secrets.env
KillMode=process
KillSignal=SIGINT

[Install]
WantedBy=multi-user.target
```

`/etc/lacuna-bulksigner/secrets.env` (mode `0600`, owned by `lacuna`):

```env
BULKSIGNER_API_KEY=your-api-key
BULKSIGNER_PFX_PASSWORD=your-pfx-password
Signing__License=<lacuna-license-string>
```

## Enable and start

```bash
sudo useradd --system --no-create-home lacuna
sudo chown -R lacuna:lacuna /opt/lacuna-bulksigner /var/lib/lacuna-bulksigner
sudo systemctl daemon-reload
sudo systemctl enable --now lacuna-bulksigner.service
sudo journalctl -u lacuna-bulksigner -f
```

Logs:

* Structured rolling logs: `data/logs/` (relative to working directory) or wherever `Folders:Logs` is configured.
* `journalctl` captures Spectre stdout output.

## Upgrade

```bash
sudo systemctl stop lacuna-bulksigner
# copy new files over /opt/lacuna-bulksigner
sudo systemctl start lacuna-bulksigner
```

## See also

* [Configuration](configuration.md)
* [Troubleshooting](troubleshooting.md)
