```js
// ----------------------------------------------------------------------------------------------
// Function that performs the signature on startup. At this point, the UI is already blocked.
// ----------------------------------------------------------------------------------------------
function sign() {

    // Call signHash() on the Web PKI component passing the "toSignHash", the digest algorithm
    // and the certificate selected by the user.
    pki.signHash({
        thumbprint: formElements.certThumbField.val(),
        hash: formElements.toSignHashField.val(),
        digestAlgorithm: formElements.digestAlgorithmField.val()
    }).success(function (signature) {

        // Fill the "signature" field, needed on server-side to complete the signature.
        formElements.signatureField.val(signature);

        // Submit the form.
        formElements.form.submit();
    });
}
```