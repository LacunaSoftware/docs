# Embedded signatures integration

## Introduction

Embedded Signature Integration allows you to sign/approve documents in Signer within any application through the component `LacunaSignerWidget`.

> [!NOTE]
> Signer must be configured with a Web PKI license that has the same domain in which the component will be loaded.

## Installation

First, include the latest [lacuna-signer-widget.js](https://cdn.lacunasoftware.com/libs/signer/lacuna-signer-widget-0.6.0.min.js) file on your page:

```html
<script type="text/javascript" src="https://cdn.lacunasoftware.com/libs/signer/lacuna-signer-widget-0.6.0.min.js"
    integrity="sha256-TM1zGyxt8+FQ3VcihnbovQlTP1pBRAVLSKKTOxRBIGw="
    crossorigin="anonymous"></script>
```

Instantiate the class `LacunaSignerWidget`:

```javascript
var widget = new LacunaSignerWidget();
```

Then call the `on()` method passing the event type you want to listen and a callback function that will be called when the user signs/approves the document:

```javascript
//signing
widget.on(widget.events.documentSigned, function (e) {
	// ...
	//alert('Document ' + e.id + ' signed');
});
```

```javascript
//approval
widget.on(widget.events.documentApproved, function (e) {
	// ...
	//alert('Documento ' + e.id + ' approved');
});
```

If you prefer, use the `listen()` method to listen to all events with just one callback:

```javascript
widget.listen(function (e) {
	if (e.type === widget.events.documentSigned) {
		// ...
		//alert('Document ' + e.id + ' signed');
	} else if (e.type === widget.events.documentApproved) {
		// ...
		//alert('Documento ' + e.id + ' approved');
	}
});
```

> [!NOTE]
> Always check in the backend whether the document is actually completed because callbacks can be triggered by other javascript files.

Finally, load the iFrame using the `render()` method which needs two mandatory inputs:

* `embedUrl`: it is the URL related to the action you want to take. Corresponds to the embedUrl parameter returned by [API Action URL](https://www.dropsigner.com/swagger/index.html#operations-Documents-post_api_documents__id__action_url)
* `elementId`: it is the element's id in which the signature component will be displayed.

And two optional inputs:

* `page`: page number where the document will open on startup (to open the last page of any document, no matter its size, assign the number `'-1'`).
* `scale`: the percentage that will define at what scale the document will be opened. It can be defined through a simple string `'100'` or through the `widget.scaleOptions.S100`

```javascript
widget.render(embedUrl, 'embed-container', page, scale);
```

If you wish, the DOM element can be provided directly:

```javascript
widget.renderElement(embedUrl, document.getElementById('embed-container'), page, scale);
```

## Online Example

<iframe width="100%" height="600" src="https://jsfiddle.net/LacunaSoftware/hgutm4fL/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

To run the example, click on the tab **Result**. If you haven't installed Web PKI, you will need to follow the instructions to do so. 
When using this component in your own application, the user will be redirected to the installation page and will automatically return to your application at the end of the process.


## Online example of cloud signing

The BirdID test certificate will be used (CPF 026.102.470-10, see the instructions below for pairing).

<iframe width="100%" height="600" src="https://jsfiddle.net/LacunaSoftware/12zLfhgr/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

To run the example, click on the **Result** tab. In order to use the BirdID Approval Environment Test User, please use the QR code below in the BirdID app:

![BirdID HML credentials](./images/birdidhml.png)

## Additional settings

When instantiating the `Lacuna Sign Widget` class you can pass an object with one or more settings listed below:

Atributo                 | Tipo         |  Descrição  
-----------------------  | ------------ | ----------
`enableNotifications`    | boolean      | Notifications are not sent  after completing an embedded signature/approval. Set this parameter to `true` to send notifications.
`disableDocumentPreview` | boolean      | If `true`, it will hide the document preview. In this case, only the signing button and signer/approver data will be displayed. You can set this parameter after instantiation using `setDisableDocumentPreview` method.
`enableRefusal`          | boolean      | If `true`, it will display the option to decline to sign a document. You can set this parameter after instantiation using `setEnableRefusal` method.
`culture` | string | Defines the widget language, the options available are `"pt"` (portuguese), `"en"`(english) and `"es"`(spanish).
`theme` | string | Defines the widget theme with the 3-character string (e.g. Theme: amazon-cornell-red - Code:`"acr"`). The themes are available at [the customization page](https://docs.lacunasoftware.com/pt-br/articles/signer/on-premises/customization.html)



Example:

```javascript
var widget = new LacunaSignerWidget({ disableDocumentPreview: true });
```

```javascript
var widget = new LacunaSignerWidget();

widget.setDisableDocumentPreview(true);
```

## Online example of signature ​without preview

<iframe width="100%" height="600" src="https://jsfiddle.net/LacunaSoftware/pfn3zct1/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


# Example for mobile devices

Alternatively, it is possible to use embedded signatures in mobile devices, an example app is available at our [GitHub repository](https://github.com/LacunaSoftware/signer-flutter). The example displays a web page containing the embedded signature widget for js. Its compatibility is 


![BirdID HML credentials](./images/signer/../../../../../images/signer/flutter/signer_without_preview_theme.png)