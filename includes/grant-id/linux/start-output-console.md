```
* grantid-console.service - GrantID Console
   Loaded: loaded (/etc/systemd/system/grantid-console.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2020-01-21 19:25:56 UTC; 13s ago
 Main PID: 28519 (dotnet)
    Tasks: 24 (limit: 3527)
   CGroup: /system.slice/grantid-console.service
           └─28519 /usr/bin/dotnet Grant.Id.Console.dll

Jan 21 19:25:56 ubuntu1804 systemd[1]: Started GrantID Console.
Jan 21 19:25:57 ubuntu1804 grantid[28519]: info: Grant.Id.Console.Startup[0]
Jan 21 19:25:57 ubuntu1804 grantid[28519]:       Console has started.
Jan 21 19:25:57 ubuntu1804 grantid[28519]: Hosting environment: Linux
Jan 21 19:25:57 ubuntu1804 grantid[28519]: Content root path: /usr/share/grantid/console
Jan 21 19:25:57 ubuntu1804 grantid[28519]: Now listening on: http://[::]:5012
Jan 21 19:25:57 ubuntu1804 grantid[28519]: Application started. Press Ctrl+C to shut down.
```
