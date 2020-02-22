# Configure email sending - Amplia

To enable email sending, fill the section **Email** of the JSON configuration file:

* **Enabled**: set to `true`
* **ServerHost**: hostname of the SMTP server
* **EnableSsl**: by default, the SMTP conversation is performed over SSL. To disable SSL, set this setting to `false`
* **ServerPort**: by default, the SMTP conversation is performed over port 587. Set this setting to use a different port
* **Username** and **Password**: if the SMTP server requires authentication, set these settings
* **SenderAddress**: email address to be used as sender (*from* field)
* **SenderName**: name to be used as the sender name (optional)

## See also

* [Amplia on-premises](index.md)
