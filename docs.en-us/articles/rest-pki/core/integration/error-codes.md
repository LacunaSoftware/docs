# Error codes - Rest PKI Core

Some of the API error codes returned by Rest PKI Core are listed below:

Code                                     | Description
---------------------------------------- | -----------
`DocumentNotFound`                       | A referenced document was not found (check the document ID)
`SecurityContextNotFound`                | A referenced security context was not found (check the security context ID)
`SignatureSessionNotFound`               | A referenced signature session was not found (check the signature session ID)
`BadSignatureSessionOperation`           | The operation is invalid for the current signature session or document status. For instance, trying to await the session's completion if it is still `Pending` results in this error
`BackgroundProcessing`                   | The operation cannot be completed at this time because the resource is being processed in background
`SignatureSessionTokenRequired`          | The signature session token was not passed on the `X-Signature-Session-Token` request header
`BadSignatureSessionToken`               | An invalid signature session token was passed on the `X-Signature-Session-Token` request header. Check your application for possible corruption of the session token, which may contain characters `-` (hyphen) and `_` (underscore)
`ExpiredSignatureSessionToken`           | An expired signature session token was passed on the `X-Signature-Session-Token` request header. Signature session tokens are normally valid for 4 hours.

> [!NOTE]
> The codes shown above are the most common error codes. Nonetheless, this list is not comprehensive. Other codes exist and new codes may be added anytime without previous warning.
