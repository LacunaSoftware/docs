# Validating certificates

To perform certificate validation, you must pass a @Lacuna.Pki.ITrustArbitrator

The `ITrustArbitrator` defines a way to arbitrate if the certification root is reliable. The SDK, through the static class @Lacuna.Pki.TrustArbitrators, has arbitrator implementations to validate trusted Windows, ICP-Brazil and 
PKI-Italy roots.

## Validating certificate

In the following code we will, as an example, validate an ICP-Brasil certificate in a standard way.

```cs
// Carregando um certificado ICP-Brasil
PKCertificate cert = ...

// Validando com árbitro ICP-Brasil
var vr = cert.Validate(TrustArbitrators.PkiBrazil);

if (vr.IsValid) {
    // Certificado é válido
} else {
    // Certificado é inválido
}

// Exibe detalhes da validação
Console.WriteLine(vr);
```

Previous example validating with Windows referee:

```cs
// Validando com árbitro raízes confiáveis do Windows
var vr = cert.Validate(TrustArbitrators.Windows);
```

## Validating certificates with combined referee

In the following code we will perform a standard certificate validation with a set of trusted arbitrators containing ICP-Brasil, Windows and private test roots.

Thus, if the certificate is valid and belongs to any of the certification chains (ICP-Brasil, Windows roots or private roots), the validation will be successful.

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

You can also create the referee set through the builder <xref:Lacuna.Pki.LinkedTrustArbitrator.%23ctor(Lacuna.Pki.ITrustArbitrator[])> or also using the extension method @Lacuna.Pki.LinkedTrustArbitratorExtension.GetLinkedWith(Lacuna.Pki.ITrustArbitrator,Lacuna.Pki.ITrustArbitrator[]) 
as shown in the code below:

```cs
// Outra maneira de criar o conjunto de árbitros
// através do construtor
var arbitrator = new LinkedRootTrustArbitrator(TrustArbitrators.PkiBrazil, TrustArbitrators.Windows, new TrustedRoots(rootTest1, rootTest2));

// Outra maneira de criar o conjunto de árbitros
// atrvés do método de extensão GetLinkedWith
var arbitrator = TrustArbitrators.PkiBrazil.GetLinkedWith(TrustArbitrators.Windows, new TrustedRoots(rootTest1, rootTest2));
```

## Changing validation options

If you need to make changes to the options or certificate validation mode, you can instantiate the class @Lacuna.Pki.CertificateValidationOptions with a referee and then set the validation properties.

In the following code we will, as an example, validate a certificate without validating its issuer signature and in case of unknown revocation state, Warning will be assigned instead of Error in the validation results.

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

For more information on certificate validation options methods and properties check the API guide:

## See too

* @Lacuna.Pki.ITrustArbitrator
* @Lacuna.Pki.TrustArbitrators
* @Lacuna.Pki.LinkedTrustArbitrator
* @Lacuna.Pki.CertificateValidationOptions
