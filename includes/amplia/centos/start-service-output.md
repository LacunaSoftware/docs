```
* amplia.service - Amplia
   Loaded: loaded (/etc/systemd/system/amplia.service; enabled; vendor preset: disabled)
   Active: active (running) since Wed 2019-12-04 12:45:06 -03; 23s ago
 Main PID: 32562 (dotnet)
   CGroup: /system.slice/amplia.service
           └─32562 /usr/bin/dotnet Lacuna.Amplia.Site.dll

Dec 04 12:45:08 pcrenato.corp.lacunasoftware.com amplia[32562]: info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
Dec 04 12:45:08 pcrenato.corp.lacunasoftware.com amplia[32562]: Entity Framework Core 2.2.6-servicing-10079 initialized 'AppDbContext' using provider 'Microsoft.EntityFram...ons: None
Dec 04 12:45:08 pcrenato.corp.lacunasoftware.com amplia[32562]: info: Microsoft.EntityFrameworkCore.Database.Command[20101]
Dec 04 12:45:08 pcrenato.corp.lacunasoftware.com amplia[32562]: Executed DbCommand (1ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
Dec 04 12:45:08 pcrenato.corp.lacunasoftware.com amplia[32562]: SELECT [key].[Xml]
Dec 04 12:45:08 pcrenato.corp.lacunasoftware.com amplia[32562]: FROM [DataProtectionKeys] AS [key]
Dec 04 12:45:08 pcrenato.corp.lacunasoftware.com amplia[32562]: Hosting environment: Production
Dec 04 12:45:08 pcrenato.corp.lacunasoftware.com amplia[32562]: Content root path: /usr/share/amplia
Dec 04 12:45:08 pcrenato.corp.lacunasoftware.com amplia[32562]: Now listening on: http://localhost:5000
Dec 04 12:45:08 pcrenato.corp.lacunasoftware.com amplia[32562]: Application started. Press Ctrl+C to shut down.
Hint: Some lines were ellipsized, use -l to show in full.
```
