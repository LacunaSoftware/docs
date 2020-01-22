```
* grantid-auth-server.service - GrantID Auth Server
   Loaded: loaded (/etc/systemd/system/grantid-auth-server.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2020-01-21 14:45:35 UTC; 4h 28min ago
 Main PID: 868 (dotnet)
    Tasks: 24 (limit: 3527)
   CGroup: /system.slice/grantid-auth-server.service
           └─868 /usr/bin/dotnet Grant.Id.AuthServer.dll

Jan 21 14:45:35 ubuntu1804 systemd[1]: Started GrantID Auth Server.
Jan 21 14:45:44 ubuntu1804 grantid[868]: Signing certificate PFX path: '/etc/grantid/grantid.pfx', password: ''
Jan 21 14:45:47 ubuntu1804 grantid[868]: Hosting environment: Linux
Jan 21 14:45:47 ubuntu1804 grantid[868]: Content root path: /usr/share/grantid/auth-server
Jan 21 14:45:47 ubuntu1804 grantid[868]: Now listening on: http://[::]:5011
Jan 21 14:45:47 ubuntu1804 grantid[868]: Application started. Press Ctrl+C to shut down.
```
