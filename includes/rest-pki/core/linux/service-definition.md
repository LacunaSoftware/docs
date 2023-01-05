```
[Unit]
Description=Rest PKI Core

[Service]
WorkingDirectory=/usr/share/restpkicore
ExecStart=/usr/bin/dotnet Lacuna.RestPki.Site.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=restpkicore
User=restpkicore
Environment=ASPNETCORE_ENVIRONMENT=Linux
Environment=ASPNETCORE_URLS=http://+:5004
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```