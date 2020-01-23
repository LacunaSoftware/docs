```
[Unit]
Description=GrantID Identity Service

[Service]
WorkingDirectory=/usr/share/grantid/identity-service
ExecStart=/usr/bin/dotnet Grant.Id.Service.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=grantid
User=grantid
Environment=ASPNETCORE_ENVIRONMENT=Linux
Environment=ASPNETCORE_URLS=http://+:5010
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```
