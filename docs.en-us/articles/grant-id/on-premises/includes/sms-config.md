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

> [!NOTE]
> If you don't intend to configure SMS sending at this time, disable phone verification for console users by editing the common configuration
> file *common.json*, under the **Application** section set **RequirePhoneVerification** to `false`.
