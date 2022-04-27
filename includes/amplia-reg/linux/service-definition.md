```
[Unit]
Description=Amplia Reg

[Service]
WorkingDirectory=/usr/share/ampliareg
ExecStart=/usr/bin/dotnet Lacuna.AmpliaRegNg.Site.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=ampliareg
User=ampliareg
Environment=ASPNETCORE_ENVIRONMENT=Linux
Environment=ASPNETCORE_URLS=http://+:5002
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```
