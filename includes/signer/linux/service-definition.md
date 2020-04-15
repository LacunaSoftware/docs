```
[Unit]
Description=Lacuna Signer

[Service]
WorkingDirectory=/usr/share/lacuna-signer
ExecStart=/usr/bin/dotnet Lacuna.Signer.Site.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=lacuna-signer
User=lacuna-signer
Environment=ASPNETCORE_ENVIRONMENT=Linux
Environment=ASPNETCORE_URLS=http://+:5001
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```
