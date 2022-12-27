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
Environment=ASPNETCORE_ENVIRONMENT=Linux
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```