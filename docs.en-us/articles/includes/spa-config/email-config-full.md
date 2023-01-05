To enable email sending, fill the following settings of **Email** configuration section:

* **Enabled**: set to `True`
* **ServerHost**: hostname of the SMTP server
* **Username** and **Password**: if the SMTP server requires authentication, set these settings
* **SenderAddress**: email address to be used as sender (*from* field)
* **SenderName**: name to be used as the sender name (optional)
* **ServerPort**: by default, the SMTP conversation is performed over port 587. Set this setting to use a different port
* **EnableSsl**: by default, the SMTP conversation is performed over SSL. To disable SSL, set this setting to `false`

Example (*.ini* or *.conf* configuration file):

```ini
[Email]
Enabled=True
ServerHost=smtp.yourcompany.com
Username=YOUR_USERNAME
Password=YOUR_PASSWORD
SenderAddress=yourapp@yourcompany.com
SenderName=Your App
```

Example (environment variables):

```sh
Email__Enabled=True
Email__ServerHost=smtp.yourcompany.com
Email__Username=YOUR_USERNAME
Email__Password=YOUR_PASSWORD
Email__SenderAddress=yourapp@yourcompany.com
Email__SenderName=Your App
```

Example (*.json* configuration file):

```json
	"Email": {
		"Enabled": true,
		"ServerHost": "smtp.yourcompany.com",
		"Username": "YOUR_USERNAME",
		"Password": "YOUR_PASSWORD",
		"SenderAddress": "yourapp@yourcompany.com",
		"SenderName": "Your App"
	},
```
