```js
/* ... */.success(function (signature) {
	// Fill the "signature" field, needed on server-side to complete the signature.
	formElements.signatureField.val(signature);
	// Submit the form.
	formElements.form.submit();
});
```