```js
$(document).ready(function () {
    // Once the page is ready, we call the init() function on the javascript code (see signature-form.js)
    signatureForm.init({
        form: $('#signForm'),
        certificateSelect: $('#certificateSelect'),
        refreshButton: $('#refreshButton'),
        signButton: $('#signButton'),
        stateField: $('#stateField'),
        certThumbField: $('#certThumbField'),
        certContentField: $('#certContentField'),
        toSignHashField: $('#toSignHashField'),
        digestAlgorithmField: $('#digestAlgorithmField'),
        signatureField: $('#signatureField')
    });
});
```