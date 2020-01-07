# Decoding certificates

Using the methods @Lacuna.Pki.PKCertificate.Decode(System.Byte[]) or @Lacuna.Pki.PKCertificate.Decode(System.String) certificates can be loaded with BER, DER, Base64, or PEM encoding.

```cs
// Para certificados com encoded bytes em BER, DER, Base64 ou PEM
PKCertificate PKCertificate.Decode(byte[] certContent);

// Para certificados com encoding Base64 ou PEM
PKCertificate PKCertificate.Decode(string certContent);
```

## Basic upload

For this example, we will use a test certificate issued by the test AC Lacuna CA.

```cs
// Certificado com encoding PEM
var pem = "-----BEGIN CERTIFICATE-----\nMIIFLTCCBBegAwIBAgIQAPlQfZfK+GbabULPDzWHmTALBgkqhkiG9w0BAQswVTELMAkGA1UEBhMCQlIxEzARBgNVBAoMCklDUC1CcmFzaWwxHTAbBgNVBAsMFExhY3VuYSBTb2Z0d2FyZSAtIExTMRIwEAYDVQQDDAlMYWN1bmEgQ0EwHhcNMTUwMTIwMTAyMzU5WhcNMTkwMTIwMTAyMzU1WjBtMQswCQYDVQQGEwJCUjETMBEGA1UECgwKSUNQLUJyYXNpbDEuMCwGA1UECwwlQXV0aGVudGljYXRlZCBieSBMYWN1bmEgU29mdHdhcmUgLSBMUzEZMBcGA1UEAwwQUGllcnJlIGRlIEZlcm1hdDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALzmguTacZ4YiFpzUvE9xQEFB2bs8FXdXK8DCEDIq6mTudxFQzicCvF1rn5tgJZVDl4ANjKGDnQFUUhW50gf9xCxcytYkf7jWeabiGrHYweQggoTbguc8mY/OIl1W+0GAoVtpFrBs27zHcE4kPu9DJwJjKNHp00SuRkx35WezRRas940vg15eZKFneyw0VaacJelVdtSwto5HrsoFgQIEQhh/33FHhfVt9XnZ1UiZVZPZcOETJ8ebJpjtKL83yy4QKFc235dp0iudAdCVIY4oAlwVjCn6U9dIZk7qR0H1OYE1f2z8lTtiWx/jg/j+bBpMayVz7HEFqJe/mFBimeY5ZECAwEAAaOCAeMwggHfMAkGA1UdEwQCMAAwHwYDVR0jBBgwFoAU0qjYpb7yDHVFWfnN4BUYSk7c2/cwDgYDVR0PAQH/BAQDAgXgMIGmBgNVHREEgZ4wgZugPQYFYEwBAwGgNAQyMDEwMTE5NzA0NzM2MzM2MTg4NjAwMDAwMDAwMDAwMDAwMDAwMDQ5Mzg4ODI3U1NQREagFwYFYEwBAwagDgQMODg1NTc3NTM0NjUyoCgGBWBMAQMFoB8EHTkxMjkzOTIxOTc3NTc3NzY2NjZCcmFzaWxpYURGgRd0ZXN0QGxhY3VuYXNvZnR3YXJlLmNvbTBQBgNVHSAESTBHMEUGBmBMAQIBADA7MDkGCCsGAQUFBwIBFi1odHRwOi8vY2F0ZXN0LmxhY3VuYXNvZnR3YXJlLmNvbS9kcGNhY3JmYi5wZGYwOQYDVR0fBDIwMDAuoCygKoYoaHR0cDovL2NhdGVzdC5sYWN1bmFzb2Z0d2FyZS5jb20vY3Jscy9jYTAdBgNVHSUEFjAUBggrBgEFBQcDAgYIKwYBBQUHAwQwTAYIKwYBBQUHAQEEQDA+MDwGCCsGAQUFBzAChjBodHRwOi8vY2F0ZXN0LmxhY3VuYXNvZnR3YXJlLmNvbS9jZXJ0aWZpY2F0ZXMvY2EwCwYJKoZIhvcNAQELA4IBAQAAyc4Ylt4Fa2n8DdfjFLTAt4Y78uR3Fo+on8yE2fUG/B/CNLw0TEuSKpvCra1igNjU4VmqRsPAGJiKGaOZe0XeuySVvd16z6J92GLI/02qKvPBuC2qaBF9eu+Hhd4G0G/gnIKFEr/LMoOkBrfU9CL/9jm3/MT2s9F8uF8OBjP0TDaMJkc3yNS9RYEhAM1EdfXUStEv4Zs+Yy+CkkL1vCha1+sH8zNdkYbNMxdGYQTrcG8I1TTh9NLxitTAM7j5JrPycp3rUvu/rq94VnBN9CzN62TWvkaFpQuZSg6FKrsjyGWbpUN96Y21p7QTUAliq226eGBk5BZD8+7ZuZGmG07J\n-----END CERTIFICATE-----";

// Carregando certificado
var cert = PKCertificate.Decode(pem);
// cert.GetCertificateChain()

// Exibindo informações básicas
Console.WriteLine(cert);


/* Output esperado:

   Titular: Pierre de Fermat
   Expira em: 20/01/2019 10:23:55 +00:00
   Emissor: Lacuna CA
 */
```

It is possible to notice in the output that besides the test certificate (Pierre de Fermat) there is only the name 
of the AC that issued the test certificate, it does not show the information of the issuing certificate. This is 
because the certificate chain is loaded in lazy load, ie it will only be loaded when it is really needed. Loading is 
done in this way, because certificates exist that do not follow the standards already established to make it 
possible to build the chain automatically.

However, to load the certificate chain at the time of encoding, you must tell the Certificate Store for the Decode() method to help the SDK build the certificate chain. For a better understanding of this functionality, check out the 
following section: [Certificate Chain](#chain)

<a name="chain" />
## Certificate Chain

When uploading a certificate using the methods <xref:Lacuna.Pki.PKCertificate.Decode(System.Byte[],Lacuna.Pki.Stores.ICertificateStore)> or <xref:Lacuna.Pki.PKCertificate.Decode(System.String,Lacuna.Pki.Stores.ICertificateStore)>, the SDK will automatically attempt to mount the certificate chain through 
online resources such as AuthorityInformationAccess, OCSP requests, SDK Internal CA Certificate Store, or Certificate Store passed as function parameter. CA certificates found online are stored in the SDK's internal 
Certificate Store, providing optimized performance for future operations.

Chain building is critical to the certificate validation process, as this validation is also performed on its issuers recursively. The Gap PKI SDK adheres well to different PKI standards, unlike other SDKs that do not offer this feature and require intermediate CAs to be added manually.

Although using certificates with characteristics that make it impossible to complete the chain, the Lacuna PKI SDK offers solutions to assist this action.

For more information about assisted chain building, check out the topic: [Augmenting certificate chain build](chain-building.md)

## See too

* @Lacuna.Pki.PKCertificate
* [Augmenting certificate chain build](chain-building.md)