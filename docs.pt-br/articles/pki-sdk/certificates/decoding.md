# Carregando certificados

Utilizando os métodos @Lacuna.Pki.PKCertificate.Decode(System.Byte[]) ou @Lacuna.Pki.PKCertificate.Decode(System.String)
é possível carregar certificados com encoding BER, DER, Base64 ou PEM.

```cs
// Para certificados com encoded bytes em BER, DER, Base64 ou PEM
PKCertificate PKCertificate.Decode(byte[] certContent);

// Para certificados com encoding Base64 ou PEM
PKCertificate PKCertificate.Decode(string certContent);
```

## Carregamento básico

Para este exemplo, usaremos um certificado de teste, emitido pela AC de teste Lacuna CA.

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

É possível notar no output que além do certificado de teste (Pierre de Fermat) há somente o nome da AC que
emitiu o certificado de teste, não mostra as informações do certicado emissor. Isso ocorre pois a cadeia de
certificado é carregada em *lazy load*, ou seja, só será carregada no momento em que for realmente necessária.
O carregamento é feito dessa maneira, pelo fato da existência de certificados que não seguem os padrões já
estabelecidos para tornar possível a construção da cadeia de forma automática.

No entanto, para carregar a cadeia de certificados no momento da codificação, é necessário informar a Certificate Store
para o método Decode(), de forma a auxiliar o SDK a construir a cadeia de certificados. Para melhor compreensão desta
funcionalidade, verifique a seção a seguir: [Cadeia do certificate](#chain)

<a name="chain" />
## Cadeia do certificado

Ao carregar um certificado utilizando os métodos @Lacuna.Pki.PKCertificate.Decode(System.Byte[], Lacuna.Pki.Stores.ICertificateStore) ou
@Lacuna.Pki.PKCertificate.Decode(System.String, Lacuna.Pki.Stores.ICertificateStore), o SDK automaticamente tentará montar a cadeia do 
certificado através de recursos online como AuthorityInformationAccess, OCSP requests, Certificate Store de ACs interno
do SDK ou Certificate Store passado como parâmetro da função. Os certificados das ACs encontrados online são guardados no
Certificate Store interno do SDK, oferecendo desempenho otimizado para próximas operações.

A construção da cadeia é fundamental para o processo de validação de um certificado, pois esta validação também é
realizada em seus emissores de forma recursiva. O Lacuna PKI SDK apresenta boa aderência a diferentes padrões de PKI,
ao contrário de outras SDKs que não oferecem este recurso e requerem que ACs intermediárias sejam incluídas
manualmente.

Ainda que utilize certificados com características que impossibilitem completar a cadeia, o Lacuna PKI SDK oferece
soluções para auxiliar esta ação.

Para mais informações sobre construção assistida de cadeias, verifique o tópico:
[Construção assistida de cadeias](chain-building.md)

## Veja também

* @Lacuna.Pki.PKCertificate
* [Construção assistida de cadeias](chain-building.md)
