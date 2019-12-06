# Amplia - Checking the system logs (Linux)

The standard location of the system logs is `/var/log/amplia/error.log`.

To follow the log continuously, you can use:

```sh
tail -f /var/log/amplia/error.log
```

If Amplia is not logging to that file, you might have set a different logging path during setup. To check which file is being used,
check the file `/etc/amplia/appsettings.linux.json`. Locate the section `Serilog`, subsection `WriteTo`.

Example:
```json
"Serilog": {
	"WriteTo": [
		{
			"Name": "File",
			"Args": {
				"path": "/some-custom-path/amplia.log",
			}
		}
	],
},
```

> [!NOTE]
> Some errors, usually those that occur during system startup, may not be logged in the system log file.
> To diagnose such errors, see [Troubleshooting startup errors](startup-errors.md).
