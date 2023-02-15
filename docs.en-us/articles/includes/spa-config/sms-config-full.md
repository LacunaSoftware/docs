The section **SMS** of the configuration file configures the SMS sending. SMS messages may be sent using different *providers*. The setting **Type** defines which
provider should be used, and the remaining settings depend on the provider chosen:

* [Twilio](https://www.twilio.com/)
  * **Type**: `Twilio`
  * **MessageFrom**: the sender phone number provided by Twilio (e.g.: `+12125550000`)
  * **AccountSid**: the account SID, provided by Twilio
  * **AuthToken**: the authentication token, provided by Twilio
* [TotalVoice](https://totalvoice.com.br/)
  * **Type**: `TotalVoice`
  * **AccessToken**: the access token, provided by TotalVoice (e.g.: `0123456789abcdef0123456789abcdef`)
* [Zenvia](https://www.zenvia.com/)
  * **Type**: `Zenvia`
  * **Account**: your account name (e.g.: `patorum.sms`)
  * **Password**: the API password
  * **Endpoint** (optional): alternative API base URL (leave blank if unsure)
* [SmsEmpresa](https://www.smsempresa.com.br/)
  * **Type**: `SmsEmpresa`
  * **ChaveKey**: the *Chave Key* given on *Configuration* &gt; *My Account*
* [Amazon SNS](https://aws.amazon.com/sns/)
  * **Type**: `AmazonSNS`
  * **Region**: the AWS region code, for instance `sa-east-1` or `us-east-1` (see [AWS region codes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html))
  * **AccessKeyId**: the access key ID
  * **SecretAccessKey**: the secret access key
* Simulator (for debugging purposes only): this provider simulates the sending of SMS messages by outputting the messages that would be sent on the system log
  * **Type**: `Simulator`

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