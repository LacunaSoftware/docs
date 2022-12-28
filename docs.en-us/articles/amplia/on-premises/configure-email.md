# Configure email sending - Amplia

To enable email sending, fill the section **Email** of the JSON configuration file:

* **Enabled**: set to `true`
* **ServerHost**: hostname of the SMTP server
* **Username** and **Password**: if the SMTP server requires authentication, set these settings
* **SenderAddress**: email address to be used as sender (*from* field)
* **SenderName**: name to be used as the sender name (optional)

Optional settings:

* **EnableSsl**: by default, the SMTP conversation is performed over SSL. To disable SSL, set this setting to `false`
* **ServerPort**: by default, the SMTP conversation is performed over port 587. Set this setting to use a different port

Example (*.ini* or *.conf* configuration file):

```ini
[Email]
Enabled=True
ServerHost=smtp.yourcompany.com
Username=SOME_USER
Password=SOME_PASSWORD
SenderAddress=some-user@yourcompany.com
SenderName=Some User
```

Example (environment variables):

```ini
Email__Enabled=True
Email__ServerHost=smtp.yourcompany.com
Email__Username=SOME_USER
Email__Password=SOME_PASSWORD
Email__SenderAddress=some-user@yourcompany.com
Email__SenderName=Some User
```

Example (*.json* configuration file):

```json
	...,
	"Email": {
		"Enabled": true,
		"ServerHost": "smtp.yourcompany.com",
		"Username": "SOME_USER",
		"Password": "SOME_PASSWORD",
		"SenderAddress": "some-user@yourcompany.com",
		"SenderName": "Some User"
	},
	...
```

## See also

* [Amplia on-premises](index.md)
