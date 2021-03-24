```js
// ----------------------------------------------------------------------------------------------
// Initializes the signature form.
// ----------------------------------------------------------------------------------------------
function init(fe) {

    // Receive form parameters received as arguments.
    formElements = fe;

    // Block the UI while we get things ready.
    $.blockUI({ message: 'Signing ...' });

    // Call the init() method on the LacunaWebPKI object, passing a callback for when the
    // component is ready to be used and another to be called when an error occurs on any of the
    // subsequent operations. For more information, see:
    // https://docs.lacunasoftware.com/en-us/articles/web-pki/get-started.html#coding-the-first-lines
    // https://webpki.lacunasoftware.com/Help/classes/LacunaWebPKI.html#method_init
    pki.init({
        ready: sign,                 // As soon as the component is ready we'll perform the signature.
        defaultError: onWebPkiError  // Generic error callback defined below.
    });
}
```