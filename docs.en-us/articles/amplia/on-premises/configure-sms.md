# Configure SMS sending - Amplia

If users will issue certificates (either web or mobile issuing procedure), a SMS confirmation is required to confirm the identity of the user during the
certificate issue procedure. SMS messages may be sent using different *providers*.

The section **SMS** of the configuration file configures the SMS sending. The setting **Type** defines which provider should be used, and the remaining settings depend on the provider chosen:

* [Twilio](https://www.twilio.com/)
  * **Type**: set this setting to `Twilio` to send SMS messages using Twilio
  * **MessageFrom**: the sender phone number provided by Twilio (e.g.: `+12125550000`)
  * **AccountSid**: the account SID, provided by Twilio
  * **AuthToken**: the authentication token, provided by Twilio
* [TotalVoice](https://totalvoice.com.br/)
  * **Type**: set this setting to `TotalVoice` to send SMS messages using TotalVoice
  * **AccessToken**: the access token, provided by TotalVoice (e.g.: `0123456789abcdef0123456789abcdef`)
* [Zenvia](https://www.zenvia.com/)
  * **Type**: set this setting to `Zenvia` to send SMS messages using Zenvia
  * **Account**: your account name (e.g.: `patorum.sms`)
  * **Password**: the API password
  * **Endpoint** (optional): alternative API base URL (leave blank if unsure)
* [SmsEmpresa](https://www.smsempresa.com.br/)
  * **Type**: set this setting to `SmsEmpresa` to send SMS messages using SmsEmpresa
  * **ChaveKey**: the *Chave Key* given on *Configuration* &gt; *My Account*
* [Amazon SNS](https://aws.amazon.com/sns/)
  * **Type**: set this setting to `AmazonSNS` to send SMS messages using Amazon SNS
  * **Region**: the AWS region code, for instance `sa-east-1` or `us-east-1` (see [AWS region codes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html))
  * **AccessKeyId**: the access key ID
  * **SecretAccessKey**: the secret access key
* Simulator (for debugging purposes only)
  * **Type**: set this setting to `Simulator` to simulate sending SMS messages (messages that would be sent are only logged)

Example (*.ini* or *.conf* configuration file):

```ini
[SMS]
Type=AmazonSNS
Region=us-east-1
AccessKeyId=...
SecretAccessKey=...
```

Example (environment variables):

```ini
SMS__Type=AmazonSNS
SMS__Region=us-east-1
SMS__AccessKeyId=...
SMS__SecretAccessKey=...
```

Example (*.json* configuration file):

```json
	...,
	"SMS": {
		"Type": "AmazonSNS",
		"Region": "us-east-1",
		"AccessKeyId": "...",
		"SecretAccessKey": "..."
	},
	...
```

## See also

* [Amplia on-premises](index.md)
