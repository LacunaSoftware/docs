```js
// ----------------------------------------------------------------------------------------------
// Function called when the user clicks the "Sign File" button.
// ----------------------------------------------------------------------------------------------
function startSignature() {

    // Block the UI while we perform the signature.
    $.blockUI({ message: 'Starting signature ...' });

    // Get the thumbprint of the selected certificate.
    var selectedCertThumbprint = formElements.certificateSelect.val();

    // Get certificate content to be passed to "start" action after the form submission.
    pki.readCertificate(selectedCertThumbprint).success(/* ... */);
}
```