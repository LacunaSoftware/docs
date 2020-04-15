```
* lacuna-signer.service - Lacuna Signer
   Loaded: loaded (/etc/systemd/system/lacuna-signer.service; enabled; vendor preset: enabled)
   Active: active (running) since Wed 2020-04-15 22:17:50 UTC; 30s ago
 Main PID: 2831 (dotnet)
    Tasks: 36 (limit: 2319)
   CGroup: /system.slice/lacuna-signer.service
           └─2831 /usr/bin/dotnet Lacuna.Signer.Site.dll

Apr 15 22:17:50 server.patorum.com systemd[1]: Started Lacuna Signer.
Apr 15 22:17:55 server.patorum.com lacuna-signer[2831]: info: Lacuna.Signer.Site.Startup.RecurringJobsInit[0]
Apr 15 22:17:55 server.patorum.com lacuna-signer[2831]:       Initializing recurring jobs
```
