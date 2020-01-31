* Section **Email**: configures email sending through SMTP
  * **ServerHost**: hostname of the SMTP server
  * **Username** and **Password**: if the SMTP server requires authentication, set these settings
  * **SenderAddress**: email address to be used as sender (*from* field)
  * **SenderName**: name to be used as the sender name (optional)
  * **EnableSsl**: by default, the SMTP conversation is performed over SSL. To disable SSL, set this setting to `false`
  * **ServerPort**: by default, the SMTP conversation is performed over port 587. Set this setting to use a different port
  * **Support**: Address written on the footer of outgoing e-mails, e.g. *support@patorum.com*
  * **LogoUrl** (optional): Public URL of the image that is used on the header of outgoing emails. If omitted, the GrantID logo will be used.
