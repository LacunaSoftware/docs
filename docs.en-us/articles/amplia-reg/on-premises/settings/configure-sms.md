# Configure SMS sending - Amplia Reg

Some operations on [Amplia Reg](../index.md) require sending SMS messages. SMS messages may be sent using different *providers*.

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
* Simulator (for debugging purposes only)
  * **Type**: set this setting to `Simulator` to simulate sending SMS messages (messages that would be sent are only logged)

Example (*.ini* or *.conf* file):

```ini
[SMS]
Enabled=True
Type=Twilio
MessageFrom=+12125550000
AccountSid=YOURACCOUNTSID
AuthToken=YOURTOKEN
```

Example (environment variables):

```bash
SMS__Enabled=True
SMS__Type=Twilio
SMS__MessageFrom=+12125550000
SMS__AccountSid=YOURACCOUNTSID
SMS__AuthToken=YOURTOKEN
```

## See also

* [Amplia Reg on-premises](index.md)
