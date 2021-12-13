# Configure email sending - Rest PKI Core

To enable email sending, fill the following settings on the configuration file:

* **Email__Enabled**: set to `true`
* **Email__ServerHost**: hostname of the SMTP server
* **Email__EnableSsl**: by default, the SMTP conversation is performed over SSL. To disable SSL, set this setting to `false`
* **Email__ServerPort**: by default, the SMTP conversation is performed over port 587. Set this setting to use a different port
* **Email__Username** and **Password**: if the SMTP server requires authentication, set these settings
* **Email__SenderAddress**: email address to be used as sender (*from* field)
* **Email__SenderName**: name to be used as the sender name (optional)

## See also

* [Rest PKI Core on-premises](index.md)
