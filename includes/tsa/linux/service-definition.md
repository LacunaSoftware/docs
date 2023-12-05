```
[Unit]
Description=Lacuna TSA

[Service]
WorkingDirectory=/usr/share/lacuna-tsa
ExecStart=/usr/bin/dotnet Lacuna.Tsa.Server.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=lacuna-tsa
User=lacuna-tsa
Environment=ASPNETCORE_ENVIRONMENT=Linux
Environment=ASPNETCORE_URLS=http://+:5004
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```
