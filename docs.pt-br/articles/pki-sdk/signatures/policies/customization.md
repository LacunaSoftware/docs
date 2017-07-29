# Customização de políticas

Políticas de assinaturas são um conjunto de normas e propriedades que regulam a criação e validação de assinaturas
digitais. O PKI SDK possui padrões de políticas já configuradas para uso nos assinadores e verificadores, mas também
é possível de maneira simples criar sua própria política ou customizar um padrão já existente.

## Editando uma política

O exemplo abaixo demonstra como carregar um padrão de política de assinatura já configurado e editar alguns parâmetros.

```cs
// Carregando política AD-RT v2.1
var policy = BrazilCadesPolicySpec.GetAdrTempoV21();

// Definindo a inclusão do atributo assinado signing-time
policy.AttributeValidation.SigningTime = true;

// Adicionando mais um árbitro para validação do certificado dos signatários
policy.AddRootTrustArbitrator(TrustArbitrators.Windows);

// Adicionando mais um árbitro para validação do certificado da carimbadora
policy.SignatureTimestampPolicy.AddRootTrustArbitrator(new TrustedRoots(privateRoot));
```

Caso estja fazendo edição de uma política, certifique-se de não criar propriedades conflitantes na criação e validação.

## Criando uma política

No exemplo abaixo iremos criar uma política de assinatura CAdES-BES básica implícita, a política não é assinada, não
faz parte dos atributos assinados.

```cs
// Criando política
var policy = new CadesPolicySpec();

// Definindo propriedades de criação da assinatura
policy.AttributeGeneration = new AttributeGenerationSpec() {
    IncludeSigningTime = true,                                     // Inclui signing-time nos atributos assinados
    IncludeCertificatesInSignedData = InclusionLevel.WholeChain,   // Inclui toda cadeia do certificado no campo Certificates do SignedData
    IncludeCrlsInSignedData = true,                                // Inclui as CRLs usadas no campo CRLs do SignedData
};

// Definindo propriedades de validação da assinatura básica
policy.AttributeValidation = new AttributeValidationSpec() {
    SigningTime = ValidationRequirementLevels.May,
};

// Algoritmos permitidos
policy.DigestAlgorithms.Add(DigestAlgorithm.SHA256);
policy.DigestAlgorithms.Add(DigestAlgorithm.SHA1);
policy.SignatureAlgorithms.Add(SignatureAlgorithm.RSAWithSHA256);
policy.SignatureAlgorithms.Add(SignatureAlgorithm.RSAWithSHA1);

// Árbitro para validação dos certidicados dos signatários
policy.AddRootTrustArbitrator(TrustArbitrators.Windows);        

return policy;
```

## Criando uma política avançada

O código abaixo foi retirado de uma implementação interna do SDK para exemplificar a criação de uma política de
assinatura com elementos avançados. A política em questão é a do padrão ICP-Brasil AD-RC v2.1.

```cs
// Criando política
var policy = new CadesPolicySpec();

// Definindo propriedades e atributos de criação da assinatura
policy.AttributeGeneration = new AttributeGenerationSpec() {
    IncludeFullPathReferenceInSigningCertificateAttribute = false,

    // Inclui a política nos atributos assinados (política explícita)
    IncludeSignaturePolicyIdentifier = true,
    SignaturePolicyQualifiers = CadesPolicySpec.SignaturePolicyQualifiers.Uri,

    SignatureTimestamp = GenerationRequirementLevels.Must,
    IncludeCompleteCertificateReferences = true,
    IncludeCompleteRevocationReferences = true,
    CadesCTimeStamp = GenerationRequirementLevels.Must,
    IncludeCertificateValues = true,
    IncludeRevocationValues = true,
};

// Definindo propriedades e presença de atributos para validação
policy.AttributeValidation = new AttributeValidationSpec() {
    SignaturePolicyIdentifier = ValidationRequirementLevels.Must,
    SigningTime = ValidationRequirementLevels.May,
    SignatureTimestamp = ValidationRequirementLevels.Must,
    CompleteCertificateReferences = ValidationRequirementLevels.Must,
    CompleteRevocationReferences = ValidationRequirementLevels.Must,
    CadesCTimeStamp = ValidationRequirementLevels.Must,
    CertificateValues = ValidationRequirementLevels.Must,
    RevocationValues = ValidationRequirementLevels.Must
};

// Algoritmos permitidos
policy.DigestAlgorithms.Add(DigestAlgorithm.SHA256);
policy.SignatureAlgorithms.Add(SignatureAlgorithm.RSAWithSHA256);

// Informações da política
policy.PolicyOid = "<OID of the policy>";
policy.PolicyUri = new Uri("<URI of the policy>");
policy.PolicyDigest = new DigestAlgorithmAndValue(DigestAlgorithm.SHA256, adrcSha256Digest);

// Árbitro para validação dos certificados
policy.AddRootTrustArbitrator(TrustArbitrators.PkiBrazil);

// Período válido para assinatura
policy.SigningPeriodStart = GetBrasilia0H(2012, 3, 6);
policy.SigningPeriodEnd = GetBrasilia24H(2023, 6, 21);


// Política do carimbo de tempo de assinatura
policy.SignatureTimestampPolicy = new CadesPolicySpec() {
    AttributeGeneration = new AttributeGenerationSpec() {
        IncludeCompleteCertificateReferences = true,
        IncludeCompleteRevocationReferences = true,
        IncludeCertificateValues = true,
        IncludeRevocationValues = true
    },
    AttributeValidation = new AttributeValidationSpec() {
        SignaturePolicyIdentifier = ValidationRequirementLevels.MustNot,
        SigningTime = ValidationRequirementLevels.MustNot,
        SignatureTimestamp = ValidationRequirementLevels.MustNot,
        CompleteCertificateReferences = ValidationRequirementLevels.Must,
        CompleteRevocationReferences = ValidationRequirementLevels.Must,
        CadesCTimeStamp = ValidationRequirementLevels.MustNot,
        CertificateValues = ValidationRequirementLevels.Must,
        RevocationValues = ValidationRequirementLevels.Must,
        ArchiveTimestamp = ValidationRequirementLevels.MustNot
    },
};        
policy.SignatureTimestampPolicy.DigestAlgorithms.Add(DigestAlgorithm.SHA256);
policy.SignatureTimestampPolicy.SignatureAlgorithms.Add(SignatureAlgorithm.RSAWithSHA256);
policy.SignatureTimestampPolicy.AddRootTrustArbitrator(TrustArbitrators.PkiBrazil);


// Política do carimbo de tempo de referências
policy.CadesCTimestampPolicy = new CadesPolicySpec() {        
    AttributeGeneration = new AttributeGenerationSpec() {
        IncludeCompleteCertificateReferences = true,
        IncludeCompleteRevocationReferences = true,
        IncludeCertificateValues = true,
        IncludeRevocationValues = true
    },
    AttributeValidation = new AttributeValidationSpec() {
        SignaturePolicyIdentifier = ValidationRequirementLevels.MustNot,
        SigningTime = ValidationRequirementLevels.MustNot,
        SignatureTimestamp = ValidationRequirementLevels.MustNot,
        CompleteCertificateReferences = ValidationRequirementLevels.Must,
        CompleteRevocationReferences = ValidationRequirementLevels.Must,
        CadesCTimeStamp = ValidationRequirementLevels.MustNot,
        CertificateValues = ValidationRequirementLevels.Must,
        RevocationValues = ValidationRequirementLevels.Must,
        ArchiveTimestamp = ValidationRequirementLevels.MustNot
    },
};
policy.CadesCTimestampPolicy.DigestAlgorithms.Add(DigestAlgorithm.SHA256);
policy.CadesCTimestampPolicy.SignatureAlgorithms.Add(SignatureAlgorithm.RSAWithSHA256);
policy.CadesCTimestampPolicy.AddRootTrustArbitrator(TrustArbitrators.PkiBrazil);

return policy;
```
