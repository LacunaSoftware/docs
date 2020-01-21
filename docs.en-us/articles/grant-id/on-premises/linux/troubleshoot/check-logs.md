# Grant ID - Checking the system logs (Linux)

The standard location of the system logs is */var/log/grantid*:

* Identity service: */var/log/grantid/identity-service.log*
* Auth server: */var/log/grantid/auth-server.log*
* Console: */var/log/grantid/console.log*

To follow the log continuously, you can use:

```sh
tail -f /var/log/grantid/COMPONENT.log
```

If Grant ID is not logging to that file, you might have set a different logging path during setup. To check which file is being used,
check the file */etc/grantid/COMPONENT.json*. Locate the section `Serilog`, subsection `WriteTo`.

Example:
```json
"Serilog": {
	"WriteTo": [
		{
			"Name": "File",
			"Args": {
				"path": "/some-custom-path/some-custom-filename.log",
			}
		}
	],
},
```

> [!NOTE]
> Some errors, usually those that occur during system startup, may not be logged in the system log file.
> To diagnose such errors, see [Troubleshooting startup errors](startup-errors.md).
