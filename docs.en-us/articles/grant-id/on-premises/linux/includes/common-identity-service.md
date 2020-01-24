We'll now install the **Identity Service** component. First, copy the binaries:

[!include[Copy Identity Service files](../../../../../../includes/grant-id/linux/copy-files-identity-service.md)]

Edit the Identity Service configuration file:

[!include[Edit Identity Service settings](../../../../../../includes/grant-id/linux/edit-settings-identity-service.md)]

Fill the following settings:

* Section **ConnectionStrings**
  * **DefaultConnection**: Database connection string (required)
* Section **PkiSuite**
  * **SdkLicense**: Your license for the PKI SDK, in Base64 format (required)
* Section **SMS**: configures the SMS sending. The setting **Type** defines which provider should be used, and the remaining settings depend on the provider chosen:
  * [Twilio](https://www.twilio.com/)
    * **Type**: set this setting to `Twilio` to send SMS messages using Twilio
    * **MessageFrom**: the sender phone number provided by Twilio (e.g.: *+12125550000*)
    * **AccountSid**: the account SID, provided by Twilio
    * **AuthToken**: the authentication token, provided by Twilio
  * [TotalVoice](https://totalvoice.com.br/)
    * **Type**: set this setting to `TotalVoice` to send SMS messages using TotalVoice
    * **AccessToken**: the access token, provided by TotalVoice (e.g.: *0123456789abcdef0123456789abcdef*)
* Section **Email**: configures email sending through AWS Simple Email Service (SES)
  * **AwsAccessKey**: The AWS access key
  * **AwsSecretKey**: The AWS secret key
  * **EmailFrom**: Sender email address configured on AWS, e.g. *no-reply@patorum.com*
  * **Support**: Address written on the footer of outgoing e-mails, e.g. *support@patorum.com*
  * **LogoUrl** (optional): Public URL of the image that is used on the header of outgoing emails. If omitted, the GrantID logo will be used.

Create the service definition file:

[!include[Create Identity Service daemon](../../../../../../includes/grant-id/linux/create-daemon-identity-service.md)]

Enter the following:

[!include[Identity Service daemon definition](../../../../../../includes/grant-id/linux/daemon-definition-identity-service.md)]

Save the file, then enable the service and start it:

[!include[Start service](../../../../../../includes/grant-id/linux/start-identity-service.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/grant-id/linux/start-output-identity-service.md)]

If necessary, restart the service: `systemctl restart grantid-identity-service`

To test that the service is running, run:

[!include[Test service](../../../../../../includes/grant-id/linux/test-daemon-identity-service.md)]

The version of the component should be outputted.
