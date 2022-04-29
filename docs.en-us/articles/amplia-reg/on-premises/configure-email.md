# Configure email sending - Amplia Reg

To enable email sending, fill the section **Email** of the configuration file:

* **Enabled**: set to `True`
* **ServerHost**: hostname of the SMTP server
* **EnableSsl**: by default, the SMTP conversation is performed over SSL. To disable SSL, set this setting to `false`
* **ServerPort**: by default, the SMTP conversation is performed over port 587. Set this setting to use a different port
* **Username** and **Password**: if the SMTP server requires authentication, set these settings
* **SenderAddress**: email address to be used as sender (*from* field)
* **SenderName**: name to be used as the sender name (optional)

Example (*.ini* or *.conf* file):

```ini
[Email]
Enabled=True
ServerHost=smtp.patorum.com
Username=SOMEUSER
Password=SOMEPASS
SenderAddress=no-reply@patorum.com
SenderName=Patorum Inc
```

Example (environment variables):

```bash
Email__Enabled=True
Email__ServerHost=smtp.patorum.com
Email__Username=SOMEUSER
Email__Password=SOMEPASS
Email__SenderAddress=no-reply@patorum.com
Email__SenderName=Patorum Inc
```

## See also

* [Amplia Reg on-premises](index.md)
