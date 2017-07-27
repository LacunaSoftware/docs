# Validando certificados

Para realizar a validação de um certificado, é preciso passar um @Lacuna.Pki.ITrustArbitrator

O `ITrustArbitrator` define um modo de arbitrar se a raíz da certificação é confiável. O SDK, através da classe estática
@Lacuna.Pki.TrustArbitrators, possui implementações de árbitros para validar raízes confiáveis do Windows, do padrão
ICP-Brasil e da PKI-Itália.

## Validando certificado

No código a seguir iremos, como exemplo, validar um certificado ICP-Brasil de maneira padrão.

```cs
// Carregando um certificado ICP-Brasil
PKCertificate cert = ...

// Validando com árbitro ICP-Brasil
var vr = cert.Validate(TrustArbitrators.PkiBrazil);

if (vr.isValid) {
    // Certificado é válido
} else {
    // Certificado é inválido
}

// Exibe detalhes da validação
Console.WriteLine(vr);
```

Exemplo anterior validando com árbitro do Windows:

```cs
// Validando com árbitro raízes confiáveis do Windows
var vr = cert.Validate(TrustArbitrators.Windows);
```

## Validando certificado com árbitros combinados

No código a seguir iremos realizar uma validação padrão de certificado com um conjunto de árbitros de confiança
contendo ICP-Brasil, Windows e raízes privadas de teste.

Deste modo, se o certificado for válido e pertencer a alguma das cadeias de certificação (ICP-Brasil, raízes do
Windows ou raízes privadas), a validação terá sucesso.

```cs
// Carregando um certificado
PKCertificate cert = ...

// Criando conjunto de árbitros
var arbitrator = new LinkedTrustArbitrator();
arbitrator.Add(TrustArbitrators.PkiBrazil);                // Adiciona árbitro ICP-Brasil     
arbitrator.Add(TrustArbitrators.Windows);                  // Adiciona árbitro Windows
arbitrator.Add(new TrustedRoots(rootTest1, rootTest2));    // Adiciona árbitro com raízes privadas de teste

// Validando
var vr = cert.Validate(arbitrator);
```

Também é possível criar o conjunto de árbitros através do construtor
<xref:Lacuna.Pki.LinkedTrustArbitrator.#ctor(Lacuna.Pki.ITrustArbitrator[])> ou também utilizando o método de extensão
@Lacuna.Pki.LinkedTrustArbitratorExtension.GetLinkedWith(Lacuna.Pki.ITrustArbitrator,Lacuna.Pki.ITrustArbitrator[])
conforme demonstrado no código abaixo:

```cs
// Outra maneira de criar o conjunto de árbitros
// através do construtor
var arbitrator = new LinkedRootTrustArbitrator(TrustArbitrators.PkiBrazil, TrustArbitrators.Windows, new TrustedRoots(rootTest1, rootTest2));

// Outra maneira de criar o conjunto de árbitros
// atrvés do método de extensão GetLinkedWith
var arbitrator = TrustArbitrators.PkiBrazil.GetLinkedWith(TrustArbitrators.Windows, new TrustedRoots(rootTest1, rootTest2));
```

## Alterando opções de validação

Caso seja necessário fazer alterações nas opções ou modo de validação do certificado, é possível instanciar a classe
@Lacuna.Pki.CertificateValidationOptions com um árbitro e então definir as propriedades da validação.

No código a seguir iremos, como exemplo, validar um certificado sem que seja validado a assinatura do seu emissor e em
caso de estado de revogação desconhecido, seja atribuído Warning ao invés de Error nos resultados da validação.

```cs
// Carregando um certificado
PKCertificate cert = ...

// Criando opções de validação com árbitro raízes confiáveis do Windows
var options = new CertificateValidationOptions(TrustArbitrators.Windows);
options.ValidateIssuerSignature = false;
options.SetFailureLevel(ValidationItemTypes.CertificateRevocationStatusUnknown, ValidationFailureLevels.Warning);

// Validando com opções alteradas
var vr = cert.Validate(options);

// Exibe detalhes da validação
Console.WriteLine(vr);
```

Para mais informações dos métodos e propriedades das opções de validação de certificado verifique o guia da API:
@Lacuna.Pki.CertificateValidationOptions

## Veja também

* @Lacuna.Pki.ITrustArbitrator
* @Lacuna.Pki.TrustArbitrators
* @Lacuna.Pki.LinkedTrustArbitrator
* @Lacuna.Pki.CertificateValidationOptions
