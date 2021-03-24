```js
// -------------------------------------------------------------------------------------------------
// Function that loads the certificates, either on startup or when the user clicks the "Refresh"
// button. At this point, the UI is already blocked.
// -------------------------------------------------------------------------------------------------
function loadCertificates() {

    // Call the listCertificates() method to list the user's certificates.
    pki.listCertificates({

        // Specify that expired certificates should be ignored.
        filter: pki.filters.isWithinValidity,

        // In order to list only certificates within validity period and having a CPF (ICP-Brasil),
        // use this instead:
        //filter: pki.filters.all(pki.filters.hasPkiBrazilCpf, pki.filters.isWithinValidity),

        // Id of the select to be populated with the certificates.
        selectId: formElements.certificateSelect.attr('id'),

        // Function that will be called to get the text that should be displayed for each option.
        selectOptionFormatter: function (cert) {
            return cert.subjectName + ' (issued by ' + cert.issuerName + ')';
        }

    }).success(function () {

        // Once the certificates have been listed, unblock the UI.
        $.unblockUI();
    });

}
```