```
* grantid-identity-service.service - GrantID Identity Service
   Loaded: loaded (/etc/systemd/system/grantid-identity-service.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2020-01-21 14:45:34 UTC; 3h 46min ago
 Main PID: 776 (dotnet)
    Tasks: 26 (limit: 3527)
   CGroup: /system.slice/grantid-identity-service.service
           └─776 /usr/bin/dotnet Grant.Id.Service.dll

Jan 21 14:45:34 ubuntu1804 systemd[1]: Started GrantID Identity Service.
Jan 21 14:45:44 ubuntu1804 grantid[776]: Signing certificate PFX path: '/etc/grantid/grantid.pfx', password: ''
Jan 21 14:45:44 ubuntu1804 grantid[776]: Audit is enabled
Jan 21 14:45:50 ubuntu1804 grantid[776]: Hosting environment: Linux
Jan 21 14:45:50 ubuntu1804 grantid[776]: Content root path: /usr/share/grantid/identity-service
Jan 21 14:45:50 ubuntu1804 grantid[776]: Now listening on: http://localhost:5010
Jan 21 14:45:50 ubuntu1804 grantid[776]: Application started. Press Ctrl+C to shut down.
```
