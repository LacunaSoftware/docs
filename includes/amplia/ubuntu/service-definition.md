```
[Unit]
Description=Amplia

[Service]
WorkingDirectory=/usr/share/amplia
ExecStart=/usr/bin/dotnet Lacuna.Amplia.Site.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=amplia
User=amplia
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false
# Uncomment the line below if you intend to use Elliptic Curve keys
#Environment=CLR_OPENSSL_VERSION_OVERRIDE=1.1

[Install]
WantedBy=multi-user.target
```