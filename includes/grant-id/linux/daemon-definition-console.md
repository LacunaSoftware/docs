```
[Unit]
Description=GrantID Console

[Service]
WorkingDirectory=/usr/share/grantid/console
ExecStart=/usr/bin/dotnet Grant.Id.Console.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=grantid-console
User=grantid
Environment=ASPNETCORE_ENVIRONMENT=Linux
Environment=ASPNETCORE_URLS=http://+:5012
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```
