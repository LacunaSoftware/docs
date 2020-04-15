<!-- TODO: get real output -->

```
* signer.service - Signer
   Loaded: loaded (/etc/systemd/system/signer.service; enabled; vendor preset: enabled)
   Active: active (running) since Sun 2019-07-07 05:50:04 UTC; 4min 22s ago
 Main PID: 10960 (dotnet)
    Tasks: 31 (limit: 2319)
   CGroup: /system.slice/signer.service
           └─10960 /usr/bin/dotnet Lacuna.Signer.Site.dll

...

Dec 04 12:45:08 server.patorum.com signer[32562]: Hosting environment: Linux
Dec 04 12:45:08 server.patorum.com signer[32562]: Content root path: /usr/share/signer
Dec 04 12:45:08 server.patorum.com signer[32562]: Now listening on: http://localhost:5001
Dec 04 12:45:08 server.patorum.com signer[32562]: Application started. Press Ctrl+C to shut down.
Hint: Some lines were ellipsized, use -l to show in full.
```
