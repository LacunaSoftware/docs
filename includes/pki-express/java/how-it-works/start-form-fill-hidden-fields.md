```js
/* ... */.success(function (certEncoded) {
	// Fill fields needed on the next steps of the signature.
	formElements.certThumbField.val(selectedCertThumbprint);
	formElements.certContentField.val(certEncoded);
	// Submit the form.
	formElements.form.submit();
});
```