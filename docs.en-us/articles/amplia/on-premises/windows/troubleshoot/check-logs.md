# Amplia - Checking the system logs on Windows Server

The standard location of the system logs is  `C:\Logs\Amplia.log`.

To check which file is being used, check the `appsettings.iis.json` file in the site folder. Locate the section `Serilog`, subsection `WriteTo`.

Example:
```json
"Serilog": {
	"WriteTo": [
		{
			"Name": "File",
			"Args": {
				"path": "C:\\Logs\\Amplia.log",
			}
		}
	],
},
```

To follow the log continuously, you can open a Powershell and enter the following command:

```ps
gc C:\Logs\Amplia.log -Tail 100 -Wait
```

> [!NOTE]
> Some errors, usually those that occur during system startup, may not be logged in the system log file.
> To diagnose such errors, see [Troubleshooting startup errors](startup-errors.md).
