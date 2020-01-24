```
[Unit]
Description=GrantID Auth Server

[Service]
WorkingDirectory=/usr/share/grantid/auth-server
ExecStart=/usr/bin/dotnet Grant.Id.AuthServer.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=grantid-auth-server
User=grantid
Environment=ASPNETCORE_ENVIRONMENT=Linux
Environment=ASPNETCORE_URLS=http://+:5011
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```
