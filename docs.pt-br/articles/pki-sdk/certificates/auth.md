# Autenticação com certificado

Uma das principais utilidades de certificados digitais de chave pública é autenticar remotamente usuários. Para tanto,
é preciso (1) verificar a validade do certificado do usuário no momento da autenticação e (2) verificar que o usuário
de fato possui a chave privada associada à chave pública do certificado (toma-se isso como prova de que o usuário é o
titular do certificado). Para auxiliar nesse processo, o SDK disponibiliza a classe
@Lacuna.Pki.PKCertificateAuthentication.

O processo de verificação se o usuário possui a chave privada associada à chave pública do certificado envolve a geração
de um *nonce* criptográfico, um número gerado aleatoriamente que nunca é utilizado duas vezes, assinatura remota desse
*nonce* pelo usuário utilizando a chave privada associada ao certificado e subsequente verificação da assinatura com a
chave pública do certificado.

## Nonce stores

Para proteger tal protocolo de ataques de replay, é necessário garantir que um usuário não consiga autenticar-se
apresentando a assinatura do mesmo *nonce* duas vezes. Em outras palavras, é preciso guardar o estado dos *nonces*
gerados em algum tipo de storage externo. Chamaremos um storage externo capaz de armazenar *nonces* criptográficos de
*nonce store*. A interface @Lacuna.Pki.Stores.INonceStore define a interação entre o SDK e tais *nonce stores*:

```cs
public interface INonceStore {
    void Store(byte[] nonce);
    bool CheckAndRemove(byte[] nonce);
}
```

O funcionamento de um *nonce store* é muito simples: *nonces* passados ao método
@Lacuna.Pki.Stores.INonceStore.Store(System.Byte[]) devem ser armazenados para futura consulta pelo método
@Lacuna.Pki.Stores.INonceStore.CheckAndRemove(System.Byte[]), que retorna se o *nonce* foi anteriormente armazenado ou
não e apaga-o se sim, fazendo com que uma subsequente consulta com o mesmo nonce retorne `false`.


O pacote opcional [Entity Framework Connector](../optional-packages/ef-connector.md) oferece a implementação
recomendada dessa interface, a classe @Lacuna.Pki.EntityFrameworkConnector.EntityFrameworkNonceStore, que armazena os
*nonces* no banco de dados. Entretanto, você pode criar a sua implementação da interface persistindo o estado dos
*nonces* onde quiser. Veja a [documentação da interface para maiores detalhes](xref:Lacuna.Pki.Stores.INonceStore) ou
até mesmo a
[implementação da classe EntityFrameworkNonceStore](https://bitbucket.org/Lacunas/pkientityframeworkconnector/src/922cba056a43805e208cfcf7834558986d04c14d/PkiEntityFrameworkConnector/EntityFrameworkNonceStore.cs?at=master).

## Implementando a autenticação

Tendo uma instância de uma classe que implemente a interface @Lacuna.Pki.Stores.INonceStore, pode-se então instanciar
a classe @Lacuna.Pki.PKCertificateAuthentication:

```cs
INonceStore nonceStore = ...;
var certAuth = new PKCertificateAuthentication(nonceStore);
```

Utiliza-se a classe nos dois momentos da autenticação: na geração do *nonce* e na subsequente verificação da assinatura
do *nonce*.

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

Para um exemplo completo incluindo a parte client-side, veja a projeto [PkiSdkSamples](https://github.com/LacunaSoftware/PkiSdkSamples)
no GitHub.
