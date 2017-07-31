# Web signatures

A *web signature* is a [digital signature](../signatures.md) performed on a web page using one of the user's
certificates.

This kind of signature necessarily involves performing operations on the **frontend** because the user
certificate's private key might be on a cryptographic device that never allows exporting it. Moreover, even if the
private key is software-based, it is a bad practice to ask the user for it.

We support two ways of implementing web signatures:

* [Web remote signatures](remote.md) - on this approach, only the computations that must necessarily be performed on the frontend
  are performed there, all other steps are performed on the backend.

* [Web local signatures](local.md) - on this approach, all computations are done on the frontend, without cooperation from
  the backend.

On scenarios on which the file that will be signed is already on the server side and/or the resulting signed file needs to end up on the
server side, **remote signatures** have the big advantage of not requiring transmission of the file between server and
browser. Only a minimal data traffic is performed (approximately 3KB). 

Only in scenarios on which the file to be signed and the resulting signed file must not be uploaded to the server should
**local signatures** be employed. Even so, this decision must be taken with care, because performing a digital signature is a complex
process that requires network access to acquire revocation artifacs (Certificate Revocation Lists), which might fail on
some users' computers. Moreover, currently local signatures are only supported on Windows, whereas remote signatures are
supported on Windows, Mac OS and Linux.

Therefore, **we recommend choosing the [web remote signature](remote.md) approach on most cases.**
