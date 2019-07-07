# Amplia - Checking the system logs (Linux)

The standard location of the system logs is `/var/log/amplia.log`.

To check which file is being used, check the `appsettings.iis.json` file in the site folder (usually `/usr/share/amplia`). Locate the section `Serilog`, subsection `WriteTo`.

Example:
```json
"Serilog": {
	"WriteTo": [
		{
			"Name": "File",
			"Args": {
				"path": "/var/log/amplia.log",
			}
		}
	],
},
```

To follow the log continuously, you can use:

```sh
tail -f /var/log/amplia.log
```

> [!NOTE]
> Some errors, usually those that occur during system startup, may not be logged in the system log file.
> To diagnose such errors, see [Troubleshooting startup errors](startup-errors.md).
