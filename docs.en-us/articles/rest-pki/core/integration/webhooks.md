# Webhooks - Rest PKI Core

You may configure your [Rest PKI Core](../index.md) subscription to send event notifications to your app. The following notifications are currently available:

Event type                   | Description
---------------------------- | -----------
`DocumentSignatureCompleted` | Triggered when a document is signed and has finished being processed

If enabled, webhook notifications consist of HTTP `POST` requests with a `WebhookEventModel`. See the [API Reference](https://core-hml.pki.rest/swagger) for the model schema.

A sample webhook notification is shown below:

```json
{
	"type": "DocumentSignatureCompleted"
	"document": {
		...
	}
}
```

When configuring webhook notifications, you must specify:

* The URL to which the HTTP request should be made
* Optionally, an authentication type
  * **Basic**: specify also a username and password, sent on the `Authentication` request header with schema `Basic`
  * **Bearer**: specify also a bearer token, sent on the `Authentication` request header with schema `Bearer`
  * **API Key**: specify also the API key to be sent on the `X-Api-Key` request header
