```
[Unit]
Description=Lacuna PSC

[Service]
WorkingDirectory=/usr/share/lacuna-psc
ExecStart=/usr/bin/dotnet Lacuna.Psc.Site.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=lacuna-psc
User=lacuna-psc
Environment=ASPNETCORE_ENVIRONMENT=Linux
Environment=ASPNETCORE_URLS=http://+:5003
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```
