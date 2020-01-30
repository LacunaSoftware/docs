We'll now install the **Identity Service** component. Edit the configuration file:

[!include[Edit Identity Service settings](../../../../../../includes/grant-id/linux/edit-settings-identity-service.md)]

Fill the following settings:

* Section **ConnectionStrings**
  * **DefaultConnection**: Database connection string (required)
* Section **SMS**: configures the SMS sending. The setting **Type** defines which provider should be used, and the remaining settings depend on the provider chosen:
  * [Twilio](https://www.twilio.com/)
    * **Type**: set this setting to `Twilio` to send SMS messages using Twilio
    * **MessageFrom**: the sender phone number provided by Twilio (e.g.: *+12125550000*)
    * **AccountSid**: the account SID, provided by Twilio
    * **AuthToken**: the authentication token, provided by Twilio
  * [TotalVoice](https://totalvoice.com.br/)
    * **Type**: set this setting to `TotalVoice` to send SMS messages using TotalVoice
    * **AccessToken**: the access token, provided by TotalVoice (e.g.: *0123456789abcdef0123456789abcdef*)
  * Simulator (for debugging purposes only)
    * **Type**: set this setting to `Simulator` to simulate sending SMS messages (but instead only log the messages that would be sent)
* Section **Email**: configures email sending through AWS Simple Email Service (SES)
  * **AwsAccessKey**: The AWS access key
  * **AwsSecretKey**: The AWS secret key
  * **EmailFrom**: Sender email address configured on AWS, e.g. *no-reply@patorum.com*
  * **Support**: Address written on the footer of outgoing e-mails, e.g. *support@patorum.com*
  * **LogoUrl** (optional): Public URL of the image that is used on the header of outgoing emails. If omitted, the GrantID logo will be used.

Create the service, then enable and start it:

[!include[Create Identity Service daemon](../../../../../../includes/grant-id/linux/create-daemon-identity-service.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/grant-id/linux/start-output-identity-service.md)]

If necessary, restart the service: `systemctl restart grantid-identity-service`

To test that the service is running, run:

[!include[Test service](../../../../../../includes/grant-id/linux/test-daemon-identity-service.md)]

The version of the component should be outputted.
