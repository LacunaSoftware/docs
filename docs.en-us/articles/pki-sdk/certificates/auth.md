# Certificate authentication

One of the main uses of public key digital certificates is to authenticate users remotely. To do so, it is necessary 
to (1) verify the validity of the user's certificate at the time of authentication and (2) verify that the user does 
in fact have the private key associated with the public key of the certificate (this is taken as proof that the user is the certificate holder). To assist in this process, the SDK provides the class 
@Lacuna.Pki.PKCertificateAuthentication.

The process of verifying that the user has the private key associated with the public key of the certificate 
involves the generation of a cryptographic *nonce*, a randomly generated number that is never used twice, remote 
signing of that *nonce* by the user using the private key associated with the certificate and subsequent verification 
of the signature with the public key of the certificate.

## Nonce stores

To protect such a protocol from replay attacks, it is necessary to ensure that a user cannot authenticate by 
presenting the same *nonce* signature twice. In other words, it is necessary to keep the status of the *nonces* 
generated in some type of external storage. We will call an external storage capable of storing cryptographic *nonces* as a *nonce store*. The interface @Lacuna.Pki.Stores.INonceStore defines the interaction between the SDK 
and such *nonce stores*:

```cs
public interface INonceStore {
    void Store(byte[] nonce);
    bool CheckAndRemove(byte[] nonce);
}
```

The operation of a *nonce store* is very simple: *nonces* passed to the method
@Lacuna.Pki.Stores.INonceStore.Store(System.Byte[]) should be stored for future reference by the method @Lacuna.Pki.Stores.INonceStore.CheckAndRemove(System.Byte[]), which returns whether *nonce* was previously stored 
or
no and delete it if yes, causing a subsequent query with the same nonce to return `false`.

The optional package [Entity Framework Connector](../optional-packages/ef-connector.md) offers the implementation
recommended interface, the class @Lacuna.Pki.EntityFrameworkConnector.EntityFrameworkNonceStore, that stores the
*nonces* in the database. However, you can create your interface implementation by persisting the state of the
*nonces* wherever you want. See the [interface documentation for more details](xref:Lacuna.Pki.Stores.INonceStore) or even the [implementation the class EntityFrameworkNonceStore](https://bitbucket.org/Lacunas/pkientityframeworkconnector/src/922cba056a43805e208cfcf7834558986d04c14d/PkiEntityFrameworkConnector/EntityFrameworkNonceStore.cs?at=master).

## Implementing authentication

Having an instance of a class that implements the interface @Lacuna.Pki.Stores.INonceStore, you can then instantiate
the class @Lacuna.Pki.PKCertificateAuthentication:

```cs
INonceStore nonceStore = ...;
var certAuth = new PKCertificateAuthentication(nonceStore);
```

The class is used in the two moments of authentication: in the generation of *nonce* and in the subsequent verification of the signature
of *nonce*.

```cs
public class AuthenticationController : ApiController {

    public IHttpActionResult Get() {
        INonceStore nonceStore = ...;
        var certAuth = new PKCertificateAuthentication(nonceStore);
        // Geramos um nonce chamando o método Start()
        var nonce = certAuth.Start();
        var response = new AuthenticationGetResponse() {
            Nonce = nonce
        };
        return Ok(response);
    }

    public IHttpActionResult Post(AuthenticationPostRequest request) {

        ValidationResults vr;
        PKCertificate certificate;
        INonceStore nonceStore = ...;
        var certAuth = new PKCertificateAuthentication(nonceStore);

        // Verificamos a assinatura do nonce e a validade do certificado chamando o método Complete()
        vr = certAuth.Complete(request.Nonce, request.Certificate, request.Signature, TrustArbitrators.Windows, out certificate);

        // Check authentication result
        if (!vr.IsValid) {
            // This failure is perfectly normal, it happens everytime a user tries to sign in
            // with an expired or revoked certificate, for instance.
            return Ok(new AuthenticationPostResponse() {
                Success = false,
                Message = "Authentication failed",
                ValidationResults = vr.ToString()
            });
        }

        // ----------------------------------------------------------------------------------------
        // At this point, you have assurance that the certificate is valid according to the
        // TrustArbitrator you selected above and that the user is indeed the certificate's
        // subject. Now, you'd typically query your database for a user that matches one of the
        // certificate's fields, such as cert.EmailAddress or cert.PkiBrazil.CPF and set the user
        // ID on the auth cookie. For demonstration purposes, we'll set the email address directly
        // on the cookie as if it were the user ID.
        // ----------------------------------------------------------------------------------------
        FormsAuthentication.SetAuthCookie(certificate.EmailAddress, false);

        // Inform the page of the success
        return Ok(new AuthenticationPostResponse() {
            Success = true
        });
    }
}
```

For a complete example including the client-side part, see the project [PkiSdkSamples](https://github.com/LacunaSoftware/PkiSdkSamples) in the GitHub.