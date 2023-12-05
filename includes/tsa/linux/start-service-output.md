```
● lacuna-tsa.service - Lacuna TSA
     Loaded: loaded (/etc/systemd/system/lacuna-tsa.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2023-12-01 17:58:50 -03; 2 days ago
   Main PID: 33858 (dotnet)
      Tasks: 29 (limit: 4627)
     Memory: 58.5M
        CPU: 10.842s
     CGroup: /system.slice/tsa.service
             └─33858 /usr/bin/dotnet Lacuna.Tsa.Server.dll

dez 04 15:01:29 server.patorum.com systemd[1]: Started Lacuna TSA.
dez 04 15:01:29 server.patorum.com lacuna-tsa[193611]: info: Lacuna.Tsa.Server.ApplicationStarter[0]
dez 04 15:01:29 server.patorum.com lacuna-tsa[193611]:       Application starting (version: 1.2.0 RTM)
dez 04 15:01:31 server.patorum.com lacuna-tsa[193611]: info: Lacuna.Tsa.Server.ApplicationStarter[0]
dez 04 15:01:31 server.patorum.com lacuna-tsa[193611]:       Application started
Hint: Some lines were ellipsized, use -l to show in full.
```
