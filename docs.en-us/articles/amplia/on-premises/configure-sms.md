# Configure SMS sending - Amplia

If users will issue certificates (either web or mobile issuing procedure), a SMS confirmation is required to confirm the identity of the user during the
certificate issue procedure.

[!include[SMS configuration](../../includes/spa-config/sms-config-full.md)]

To configure multiple SMS sending services, define named subsections of the **SMS** section and define a **Priority** for each service. Lower values mean higher priority.

Example (*.ini* or *.conf* configuration file):

```ini
[SMS:AmazonUS]
Type=AmazonSNS
Region=us-east-1
AccessKeyId=...
SecretAccessKey=...
Priority=1

[SMS:AmazonSA]
Type=AmazonSNS
Region=sa-east-1
AccessKeyId=...
SecretAccessKey=...
Priority=2

[SMS:Fallback]
Type=Twilio
MessageFrom=...
AccountSid=...
AuthToken=...
Priority=3
```

Example (environment variables):

```ini
SMS__AmazonUS__Type=AmazonSNS
SMS__AmazonUS__Region=us-east-1
SMS__AmazonUS__AccessKeyId=...
SMS__AmazonUS__SecretAccessKey=...
SMS__AmazonUS__Priority=1

SMS__AmazonSA__Type=AmazonSNS
SMS__AmazonSA__Region=sa-east-1
SMS__AmazonSA__AccessKeyId=...
SMS__AmazonSA__SecretAccessKey=...
SMS__AmazonSA__Priority=2

SMS__Fallback__Type=Twilio
SMS__Fallback__MessageFrom=...
SMS__Fallback__AccountSid=...
SMS__Fallback__AuthToken=...
SMS__Fallback__Priority=3
```

In the example above, first the primary *AmazonUS* service would be used (`Priority=1`), then if it fails the secondary service *AmasonSA* would be used
(`Priority=2`) and then the *Fallback* service would be used (`Priority=3`).

> [!NOTE]
> In order for a secondary service to be used, the provider must report an error. Some providers report success even though the message delivery is internally
> rejected. In this case, the application cannot know that the delivery failed and thus the secondary provider is not used.

## See also

* [Amplia on-premises](index.md)
