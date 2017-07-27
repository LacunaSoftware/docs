# Entity Framework Connector

O pacote opcional
[Lacuna PKI Entity Framework Connector](https://www.nuget.org/packages/Lacuna.Pki.EntityFrameworkConnector/)
possibilita as seguintes integrações entre o SDK e o
[Microsoft Entity Framework](https://docs.microsoft.com/pt-br/ef/):

* Compressão e descompressão de assinaturas CAdES armazenando as LCRs e certificados em banco de dados
* Criação e validação de assinaturas CAdES com referência de revogação porém sem valores de revogação armazenando os valores em banco de dados
* Enviar mensagens de log geradas pelo SDK para o banco de dados
* Armazenamento de nonces criptográficos no banco de dados para autenticação com certificados digitais

> [!NOTE]
> O pacote assume que o Entity Framework está sendo usado sob o modelo Code First

## Utilizando armazenamento em banco de dados
A classe @Lacuna.Pki.EntityFrameworkConnector.EntityFrameworkStore, incluída no pacote opcional, implementa a interface
@Lacuna.Pki.Stores.ISimpleStore, utilizada pelo SDK quando um storage externo é necessário (para mais informações, veja
[Pacotes nuget opcionais](index.md)).

Para utilizá-la, você deve fazer a classe `DbContext` do seu projeto implementar a interface
@Lacuna.Pki.EntityFrameworkConnector.IPkiStoreContext, o que basicamente significa adicionar um `DbSet` com objetos do
tipo @Lacuna.Pki.EntityFrameworkConnector.PkiStoreObject à sua classe:

```cs
public class MyDbContext : DbContext, IPkiStoreContext {
    // ...
    DbSet<PkiStoreObject> PkiStore { get; set; }
    // ...
}
```

Se o seu projeto estiver usando *automatic migrations*, essa alteração ao `DbContext` irá fazer com que uma nova tabela
com nome "LacunaPkiStore" seja criada no banco de dados. Se o seu projeto estiver usando *code-based migrations*, as
alterações necessárias ao banco de dados aparecerão na próxima migração criada.

O próximo passo é instanciar a classe @Lacuna.Pki.EntityFrameworkConnector.EntityFrameworkStore passando uma instância
do seu `DbContext`, tipicamente dentro de um bloco `using`:

```cs
using (var dbContext = new MyDbContext()) {
    // ...
    var store = new EntityFrameworkStore(dbContext);
    // ...
});
```

Tendo uma instância da classe `EntityFrameworkStore`, você pode utilizá-la em qualquer lugar que o SDK exija um
`ISimpleStore`, por exemplo para comprimir e descomprimir assinaturas CAdES:

```cs
byte[] precomputedSignature = ...; // qualquer assinatura CAdES, não necessariamente feita com o SDK
var compressedSignature = CadesSignatureCompression.Compress(precomputedSignature, store);
var decompressedSignature = CadesSignatureCompression.Decompress(compressedSignature, store);
```

> [!WARNING]
> A classe `EntityFrameworkStore` **não chama** o método `SaveChanges()`, você mesmo precisa chamá-lo.

A motivação para o comportamento de não chamar o método `SaveChanges()` automaticamente é permitir que o programador
faça por exemplo uma compressão de assinatura CAdES como parte de uma transação. Portanto, assegure-se de que o método 
`SaveChanges()` será chamado ao final do processo:

```cs
using (var dbContext = new MyDbContext()) {
    // ...
    byte[] precomputedSignature = ...; // qualquer assinatura CAdES, não necessariamente feita com o SDK
    var store = new EntityFrameworkStore(dbContext);
    var compressedSignature = CadesSignatureCompression.Compress(precomputedSignature, store);
    // ...
    dbContext.SaveChanges();
});
```

## Enviando logs para o banco de dados

A classe @Lacuna.Pki.EntityFrameworkConnector.EntityFrameworkLogger é utilizada para enviar logs gerados pelo SDK para
o banco de dados. Para utilizá-la, você deve fazer a classe `DbContext` do seu projeto imeplementar a interface
@Lacuna.Pki.EntityFrameworkConnector.IPkiLogContext, o que basicamente significa adicionar um `DbSet` com objetos do
tipo @Lacuna.Pki.EntityFrameworkConnector.PkiLogEntry à sua classe:

```cs
public class MyDbContext : DbContext, IPkiLogContext {
    // ...
    DbSet<PkiLogEntry> PkiLog { get; set; }
    // ...
}
```

Se o seu projeto estiver usando *automatic migrations*, essa alteração ao `DbContext` irá fazer com que uma nova tabela
com nome "LacunaPkiLog" seja criada no banco de dados. Se o seu projeto estiver usando *code-based migrations*, as
alterações necessárias ao banco de dados aparecerão na próxima migração criada.

A partir de então, basta incluir no código de inicialização do seu site ou aplicação uma chamada ao método estático
<xref:Lacuna.Pki.EntityFrameworkConnector.EntityFrameworkLogger.Configure(Lacuna.Pki.EntityFrameworkConnector.IPkiLogContext,LogLevels)>
da classe `EntityFrameworkLogger` passando uma instância do seu `DbContext`:

```cs
EntityFrameworkLogger.Configure(new MyDbContext());
```

> [!TIP]
> A classe `EntityFrameworkLogger` chama automaticamente o método `SaveChanges()` do `DbContext` à medida que achar
> necessário. Portanto, você deve passar na chamada ao método `Configure()` uma instância exclusiva do seu `DbContext`.

## Utilizando armazenamento de nonces criptográficos em banco de dados

A classe @Lacuna.Pki.EntityFrameworkConnector.EntityFrameworkNonceStore, incluída no pacote opcional, implementa a
interface @Lacuna.Pki.Stores.INonceStore, utilizada pelo SDK para armazenar nonces criptográficos durante a autenticação
com certificados digitais.

Para utilizá-la, você deve fazer a classe `DbContext` do seu projeto implementar a interface
@Lacuna.Pki.EntityFrameworkConnector.IPkiNonceStoreContext, o que basicamente significa adicionar um `DbSet` com objetos
do tipo @Lacuna.Pki.EntityFrameworkConnector.PkiNonce à sua classe:

```cs
public class MyDbContext : DbContext, IPkiNonceStoreContext {
    // ...
    DbSet<PkiNonce> PkiNonces { get; set; }
    // ...
}
```

Se o seu projeto estiver usando *automatic migrations*, essa alteração ao `DbContext` irá fazer com que uma nova tabela
com nome "LacunaPkiNonces" seja criada no banco de dados. Se o seu projeto estiver usando *code-based migrations*, as
alterações necessárias ao banco de dados aparecerão na próxima migração criada.

O próximo passo é instanciar a classe `EntityFrameworkNonceStore` passando uma instância do seu `DbContext`, tipicamente
dentro de um bloco `using`:

```cs
using (var dbContext = new MyDbContext()) {
    // ...
    var nonceStore = new EntityFrameworkNonceStore(dbContext);
    // ...
});
```

Tendo uma instância da classe `EntityFrameworkNonceStore`, você pode utilizá-la para realizar autenticações com
certificados digitais.

```cs
public class AuthenticationController : ApiController {

    public IHttpActionResult Get() {
        byte[] nonce;
        using (var dbContext = new DbContext()) {
            var nonceStore = new EntityFrameworkNonceStore(dbContext);
            var certAuth = new PKCertificateAuthentication(nonceStore);
            nonce = certAuth.Start();
        }
        var response = new AuthenticationGetResponse() {
            Nonce = nonce
        };
        return Ok(response);
    }

    public IHttpActionResult Post(AuthenticationPostRequest request) {

        ValidationResults vr;
        PKCertificate certificate;
        using (var dbContext = new DbContext()) {
            var nonceStore = new EntityFrameworkNonceStore(dbContext);
            var certAuth = new PKCertificateAuthentication(nonceStore);
            vr = certAuth.Complete(request.Nonce, request.Certificate, request.Signature, TrustArbitrators.Windows, out certificate);
        }

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

> [!TIP]
> A classe `EntityFrameworkNonceStore` por padrão chama o método `SaveChanges()` por conta própria, não é necessário
> chamá-lo manualmente.

Para mais informações veja o tópico [Autenticação com certificado](../certificates/auth.md).

## Dependência do pacote Entity Framework

Para maximizar a compatibilidade, o pacote depende de uma versão antiga do pacote EntityFramework. Entretanto,
recomendamos fortemente que seja utilizada a versão mais atual do pacote.

## Código-fonte

O código-fonte do pacote é aberto, ficando hospedado no
[BitBucket](https://bitbucket.org/Lacunas/pkientityframeworkconnector). Caso queira customizá-lo, você pode fazer um
fork do projeto e utilizar a sua versão customizada ao invés do pacote opcional.
