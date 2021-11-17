# Integration Guide

## Introduction

Signer is a web portal of documents that enables digital and electronic signatures as well as the creation of complex document flows. This document discusses possible integration options so that your application can make the most of Signer's potential.


## Authentication

All API calls demand one API Key in order to communicate with Signer. This key must be placed in the Header of all requests:

```javascript
X-Api-Key: your-application|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Every API Key is associated with an Organization previously registered in Signer. Therefore, the scope of this key is **restricted to that organization**, that key will only allow you to access/create documents from that same organization.

> [!NOTE]
> In order to obtain an API key, contact your instance administrator.


## Integration Options

Choose one of the use cases below:

<a name="sign-document" />

* [Sign a document](#sign-document)

* [How to place a signature on a document](#document-marks)

* [Verify document status](#check-document)

* [Send signature reminders](#document-reminders)

* [Download documents versions](#download-document)

* [List documents](#list-documents)

* [Validate signatures of a document](#validate-signatures)

* [Delete a document](#delete-document)

### Sign a document

In order to sign a document, follow the steps below:

1- Upload the file that will be signed using the [upload API (POST /api/uploads)](https://www.dropsigner.com/swagger/index.html#operations-Upload-post_api_uploads). 
The file must be sent through a request [multipart/form-data](https://ec.haxx.se/http/http-multipart). 
An upload ID that identifies that file will be returned:

```javascript
{
	...
	"id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

Alternatively the [simplified upload API (POST /api/uploads/bytes)](https://www.dropsigner.com/swagger/index.html#operations-Upload-post_api_uploads_bytes) can be used. Here, bytes can be sent in Base64 format.

2- Create a document from the uploaded file using the [document creation API](https://www.dropsigner.com/swagger/index.html#operations-Documents-post_api_documents). 
In this call, you must assemble the document flow and define which will be the document's participants and in what order they should take their actions:

```javascript
POST /api/documents

{
	"files": [
	{
		"displayName": "Integration Contract", //Name that will be given to the created document
		"id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", //File's upload ID
		"name": "Contract.pdf", //Name of the original file
		"contentType": "application/pdf" //Original file mime type 
	}
	],
	"flowActions": [
	{
		"type": "Signer",//Type of participant, in this scenario, signer
		"step": 1,//Signing order
		"user": {
		"name": "John Wick",//Participant's name
		"identifier": "81976153069",//Participant's identifier number
		"email": "john.wick@mailinator.com",//Participant's email
		},
		"allowElectronicSignature": true //Allows eletronic signature
	}
	]
}
```

> [!TIP]
> You can create more than one document in the same document creation call, adding as many files as needed. In this scenario, all documents
> will share the same document flow.

The response will return the ID of the created document associated with the upload ID, so you know exactly which document matches which upload:

```javascript
[
	{
	"uploadId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
	"documentId": "b12cb1b2-5d6e-40b2-a050-097d068c4c11"
	}
]
```

When the document is created, Signer automatically notifies the participants added to the flow in the specified order.

Each participant will receive an email with a link that will allow them to sign/approve the document. 

> [!TIP]
> It is not necessary to authenticate (Log in) in order to sign or approve a document.

For further details related to these scenarios, see our examples on GitHub:

* C#: 
	* [Document with one signer](https://github.com/LacunaSoftware/SignerSamples/blob/master/dotnet/console/Console/Scenarios/CreateDocumentWithOneSignerScenario.cs)
	* [Document with two or more signers with order](https://github.com/LacunaSoftware/SignerSamples/blob/master/dotnet/console/Console/Scenarios/CreateDocumentWithTwoOrMoreSignersWithOrderScenario.cs)
	* [Document with two or more signers without order](https://github.com/LacunaSoftware/SignerSamples/blob/master/dotnet/console/Console/Scenarios/CreateDocumentWithTwoOrMoreSignersWithoutOrderScenario.cs)
	* [Document with approver](https://github.com/LacunaSoftware/SignerSamples/blob/master/dotnet/console/Console/Scenarios/CreateDocumentWithApproversScenario.cs)
	* [Document with attachment](https://github.com/LacunaSoftware/SignerSamples/blob/master/dotnet/console/Console/Scenarios/CreateDocumentWithAttachmentScenario.cs)
	* [Document with description](https://github.com/LacunaSoftware/SignerSamples/blob/master/dotnet/console/Console/Scenarios/CreateDocumentWithDescriptionScenario.cs)

* Java: 
	* [Document with one signer](https://github.com/LacunaSoftware/SignerSamples/blob/master/java/console/src/main/java/com/lacunasoftware/signer/sample/scenarios/CreateDocumentWithOneSignerScenario.java)
	* [Document with two or more signers with order](https://github.com/LacunaSoftware/SignerSamples/blob/master/java/console/src/main/java/com/lacunasoftware/signer/sample/scenarios/CreateDocumentWithTwoOrMoreSignersWithOrderScenario.java)
	* [Document with two or more signers without order](https://github.com/LacunaSoftware/SignerSamples/blob/master/java/console/src/main/java/com/lacunasoftware/signer/sample/scenarios/CreateDocumentWithTwoOrMoreSignersWithoutOrderScenario.java)
	* [Document with approver](https://github.com/LacunaSoftware/SignerSamples/blob/master/java/console/src/main/java/com/lacunasoftware/signer/sample/scenarios/CreateDocumentWithApproversScenario.java)
	* [Document with attachment](https://github.com/LacunaSoftware/SignerSamples/blob/master/java/console/src/main/java/com/lacunasoftware/signer/sample/scenarios/CreateDocumentWithAttachmentScenario.java)
	* [Document with description](https://github.com/LacunaSoftware/SignerSamples/blob/master/java/console/src/main/java/com/lacunasoftware/signer/sample/scenarios/CreateDocumentWithDescriptionScenario.java)
	
	
* PHP: 
	* [Document with one signer](https://github.com/LacunaSoftware/SignerSamples/blob/master/php/Scenarios/CreateDocumentWithOneSignerScenario.php)
	* [Document with two or more signers with order](https://github.com/LacunaSoftware/SignerSamples/blob/master/php/Scenarios/CreateDocumentWithTwoOrMoreSignersWithOrderScenario.php)
	* [Document with two or more signers without order](https://github.com/LacunaSoftware/SignerSamples/blob/master/php/Scenarios/CreateDocumentWithTwoOrMoreSignersWithoutOrderScenario.php)
	* [Document with approver](https://github.com/LacunaSoftware/SignerSamples/blob/master/php/Scenarios/CreateDocumentWithApproversScenario.php)
	* [Document with attachment](https://github.com/LacunaSoftware/SignerSamples/blob/master/php/Scenarios/CreateDocumentWithAttachmentScenario.php)
	* [Document with description](https://github.com/LacunaSoftware/SignerSamples/blob/master/php/Scenarios/CreateDocumentWithDescriptionScenario.php)


#### Signing in your own application

If you want to sign the document in your own application, you can use the **Embedded Signature** option.

To do so, you must follow the same steps shown in the previous section, however, when sending the document, it is recommended to add the parameter
`disablePendingActionNotifications` sett as `true`. Thus, notifications will not be considered for participants.

After the creation of the document, send the document ID to get the Subscription URL using the [URL action API](https://www.dropsigner.com/swagger/index.html#operations-Documents-post_api_documents__id__action_url):

```javascript
POST /api/documents/b12cb1b2-5d6e-40b2-a050-097d068c4c11/action-url

{
	//The information must be sent to identify the participant
	"identifier": "81976153069",
	"emailAddress": "john.wick@mailinator.com"
}
```

The response will present two URLs:

```javascript
{
	//URL to redirect the user to the Signer subscription page
	"url": "https://...",
	//URL to use the signing Widget
	"embedUrl": "https://..."
}
```

Once you get the `embedUrl` URL, use the **Subscription Widget** to display the Signer's signing page in your application.
The section [Embedded signature](embedded-signature.md) describes how to use the *Widget*.

<a name="check-document" />
For further details related to these scenarios, see our examples on GitHub:

* [C#](https://github.com/LacunaSoftware/SignerSamples/blob/master/dotnet/console/Console/Scenarios/EmbeddedSignatureScenario.cs)

* [Java](https://github.com/LacunaSoftware/SignerSamples/blob/master/java/console/src/main/java/com/lacunasoftware/signer/sample/scenarios/EmbeddedSignatureScenario.java)

* [PHP](https://github.com/LacunaSoftware/SignerSamples/blob/master/php/Scenarios/EmbeddedSignatureScenario.php)

<a name="document-marks" />


### Pre-positioning a signature on the document

During the creation of a document, it is possible to place each user's signatures in a specific place in the same document. All attribute definitions
are done during the creation of the `flowAction`. There are options to define the location of the signature on a page, as well as the page where you want to pre-position a signature.

For further details related to these scenarios, see our examples on GitHub:

* [C#](https://github.com/LacunaSoftware/SignerSamples/blob/master/dotnet/console/Console/Scenarios/CreateDocumentWithPositionedSignaturesScenario.cs)

* [Java](https://github.com/LacunaSoftware/SignerSamples/blob/master/java/console/src/main/java/com/lacunasoftware/signer/sample/scenarios/CreateDocumentWithPositionedSignaturesScenario.java)

* [PHP](https://github.com/LacunaSoftware/SignerSamples/blob/master/php/Scenarios/CreateDocumentWithPositionedSignaturesScenario.php)


### Check the document status

To check the status of a document, you need to provide its ID. Then just call the [Documents Details API](https://www.dropsigner.com/swagger/index.html#operations-Documents-get_api_documents__id_):

```javascript
GET /api/documents/b12cb1b2-5d6e-40b2-a050-097d068c4c11

{
	"id": "b12cb1b2-5d6e-40b2-a050-097d068c4c11",
	"name": "Integration Contract",
	"isConcluded": true,
	"creationDate": "2019-08-18T16:26:03.372Z",
	"updateDate": "2019-08-18T16:26:03.372Z",
	...
	"flowActions": [
		{
			"id": "4bf61c68-eaf1-455f-b4a1-6141554f1dae",
			"type": "Signer",
			"status": "Completed",
			"step": 1,
			...
			"user":
			{
				"id": "4d961566-9b03-450c-b144-930e0294bac2",
				"name": "John Wick",
				"identifier": "81976153069",
				"email": "john.wick@mailinator.com"
			},
			"title": "Parte",
			"allowElectronicSignature": true
		}
	]
}
```

* To find out if the document is completed, check the property `isConcluded`.
* To find out if a participant has signed/approved the document, check if the property `status` corresponds to `Completed`.

***

Additionally, you can set up a ** Webhook ** that will be triggered every time a document from your organization is completed, approved, declined or signed. For that,
access the Organization page and register the required URL in the ** Integration ** option:

![Webhook](./images/org-webhook.png)

<a name="document-reminders" />
For further details related to these scenarios, see our examples on GitHub:

* [C#](https://github.com/LacunaSoftware/SignerSamples/blob/master/dotnet/console/Console/Scenarios/CheckDocumentStatusScenario.cs)

* [Java](https://github.com/LacunaSoftware/SignerSamples/blob/master/java/console/src/main/java/com/lacunasoftware/signer/sample/scenarios/CheckDocumentStatusScenario.java)

* [PHP](https://github.com/LacunaSoftware/SignerSamples/blob/master/php/Scenarios/CheckDocumentStatusScenario.php)


### Send signing reminders

Once the status of a participant has been verified using the [Check the document status](#check-document),
you can send periodic reminders to the flow participants who have not yet completed an action. [Reminders Sending API](https://www.dropsigner.com/swagger/index.html#operations-Documents-get_api_documents__id_).
To do this, provide the document ID and the participant's action ID(`flowActionId`):

```javascript
POST /api/notifications/flow-action-reminder

{
	"documentId": "b12cb1b2-5d6e-40b2-a050-097d068c4c11",
	"flowActionId": "4bf61c68-eaf1-455f-b4a1-6141554f1dae"    
}
```

<a name="validate-signatures" />
For further details related to these scenarios, see our examples on GitHub:

* [C#](https://github.com/LacunaSoftware/SignerSamples/blob/master/dotnet/console/Console/Scenarios/NotifyFlowParticipantsScenario.cs)

* [Java](https://github.com/LacunaSoftware/SignerSamples/blob/master/java/console/src/main/java/com/lacunasoftware/signer/sample/scenarios/NotifyFlowParticipantsScenario.java)

* [PHP](https://github.com/LacunaSoftware/SignerSamples/blob/master/php/Scenarios/NotifyFlowParticipantsScenario.php)

<a name="download-document" />

## Useful links

* [API references](https://www.dropsigner.com/swagger)
* [GitHub examples](https://github.com/LacunaSoftware/SignerSamples)
