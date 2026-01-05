The section **SMS** of the configuration file configures the SMS sending. SMS messages may be sent using different *providers*. The setting **Type** defines which
provider should be used, and the remaining settings depend on the provider chosen:

* [Comtele](https://comtele.com.br/)
  * **Type**: `Comtele`
  * **AuthToken** (required): API authentication token
  * **Sender** (optional): field *Sender* (see [service documentation](https://docs.comtele.com.br/#enviar-sms) for more details)
  * **Endpoint** (default: `https://sms.comtele.com.br/api/`): fill to use a custom API endpoint (please note that the suffix `v2/send` is automatically added *after* the endpoint).
* [Eyou](https://www.eyou.com.br/)
  * **Type**: `Eyou`
  * **ApiKey** (required): API key acquired from service dashboard
  * **Username** (required): *username* field acquired from service dashboard
  * **Password** (required): *password* field acquired from service dashboard
  * **UserAgent** (optional): user agent header value to be passed on the API. Be default, a string containing the name and version of the application is sent.
  * **CostCenter** (optional): *CostCenter* field to be passed on the API
  * **Endpoint** (default: `https://sendsms.eyou.com.br/api/sendSms`): fill to use a custom API endpoint.
* [Total Voice](https://totalvoice.com.br/)
  * **Type**: `TotalVoice`
  * **AccessToken**: the access token, provided by TotalVoice (e.g.: `0123456789abcdef0123456789abcdef`)
* [SMS Empresa](https://www.smsempresa.com.br/)
  * **Type**: `SmsEmpresa`
  * **ChaveKey**: the *Chave Key* given on *Configuration* &gt; *My Account*
* [SMS Token](https://www.smstoken.com.br/)
  * **Type**: `SmsToken`
  * **Key** (required): API key acquired from service dashboard
  * **Endpoint** (default: `https://api.smstoken.com.br/`): fill to use a custom API endpoint (the actual route is not configurable).
* [Amazon SNS](https://aws.amazon.com/sns/)
  * **Type**: `AmazonSNS`
  * **Region**: the AWS region code, for instance `sa-east-1` or `us-east-1` (see [AWS region codes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html))
  * **AccessKeyId**: the access key ID
  * **SecretAccessKey**: the secret access key
* Generic
  * **Type**: `Generic`
  * **Endpoint**: the endpoint to which the SMS information will be sent.
  * **AuthType** (default: `NoAuth`): defines the type of authorization provided in the request. Available options are `NoAuth`, `Basic`, `Bearer` and `ApiKey`.
  * **Username**: the username if the AuthType is `Basic`.
  * **Password**: the password if the AuthType is `Basic`.
  * **BearerToken**: the Bearer token if the AuthType is `Bearer`.
  * **ApiKey**: the API key if the AuthType is `ApiKey`.
* [Pontaltech](https://pontaltech.com.br/plataforma-sms/)
  * **Type**: for OTP/token delivery purposes use `FastPontaltech`, for other purposes (e.g. marketing or general notifications) use `Pontaltech`
  * **User** (required): *user* field acquired from service dashboard
  * **Password** (required): *password* field acquired from service dashboard
  * **Endpoint** (default: `sms-api-pointer.pontaltech.com.br`): hostname to be used when calling the API (the actual route is not configurable).
* [Twilio](https://www.twilio.com/)
  * **Type**: `Twilio`
  * **MessageFrom**: the sender phone number provided by Twilio (e.g.: `+12125550000`)
  * **AccountSid**: the account SID, provided by Twilio
  * **AuthToken**: the authentication token, provided by Twilio
* [Zenvia](https://www.zenvia.com/)
  * **Type**: `Zenvia`
  * **Account**: your account name (e.g.: `patorum.sms`)
  * **Password**: the API password
  * **Endpoint** (optional): alternative API base URL (leave blank if unsure)
* Email dump (for debugging purposes only): this provider simulates the sending of SMS messages by sending them as email messages. The destination number
  is used as the mailbox (without the leading `+`) and the default domain is `mailinator.com`. For instance, a SMS message to the number `+1 212 555-0001`
  would be instead be sent as an email message to `12125550001@mailinator.com`.
  * **Type**: `EmailDump`
  * **Domain**: the domain to be used. The default domain is `mailinator.com`, but other disposable email domains may be used (e.g. `grr.la`)
  * **EmailSender**: the email sender to be used. By default, the default mail sender is used. This is normally not changed.
  * **UseDefaultNamedEmailSender**: set to `true` to use the unnamed mail sender. This is normally not changed.
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