# Embedded signatures integration

## Introduction

Embedded Signature Integration allows you to sign/approve documents in Signer within any application through the component `LacunaSignerWidget`.

> [!NOTE]
> Signer must be configured with a Web PKI license that has the same domain in which the component will be loaded.

## Installation

First, include the latest [lacuna-signer-widget.js](https://cdn.lacunasoftware.com/libs/signer/lacuna-signer-widget-0.5.0.min.js) file on your page:

```html
<script type="text/javascript" src="https://cdn.lacunasoftware.com/libs/signer/lacuna-signer-widget-0.5.0.min.js"
    integrity="sha256-AVAkc2mvhbaWVqyfqHomvdnzhPOLHDn0QLCifiD/Zpk="
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