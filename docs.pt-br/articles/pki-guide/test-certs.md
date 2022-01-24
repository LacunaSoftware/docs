# Certificados de teste

Se você não tiver um certificado ICP-Brasil para testar nossos produtos, você pode
utilizar um dos certificados para testes da ICP de testes da Lacuna Software.

> [!WARNING]
> A ICP de testes da Lacuna Software nunca deve ser aceita em ambiente de produção!

<br />
<center>
**[Baixar certificados para testes](https://docs.lacunasoftware.com/pt-br/content/test-certs.zip)**
</center>
<br />

Todos os arquivos no zip acima estão em formato PKCS #12 (arquivos .pfx) com senha **1234**. Os seguintes certificados
estão presentes:

* Alan Mathison Turing
    * Email: testturing@lacunasoftware.com
    * Mimetiza certificado ICP-Brasil de pessoa física com CPF 560.723.861-05
* Ferdinand Georg Frobenius
    * Email: testfrobenius@lacunasoftware.com
    * Mimetiza certificado ICP-Brasil de pessoa física com CPF 873.780.111-26
* Pierre de Fermat
    * Email: test@lacunasoftware.com
    * Mimetiza certificado ICP-Brasil de pessoa física com CPF 473.633.618-86
* Wayne Enterprises, Inc 
	* Email: test@wayneenterprises.com
    * Mimetiza certificado ICP-Brasil de pessoa juridica com CNPJ 34.785.5150/0016-6
	* Representante legal: Bruce Wayne, CPF 478.911.786-31

> [!TIP]
> A ICP de testes da Lacuna Software não é aceita por padrão nos nossos
> [projetos de exemplo](https://github.com/LacunaSoftware/PkiSuiteSamples).
> Veja as seções abaixo para obter instruções de como configurar sua aplicação para aceitar os certificados para testes.

Se você precisar de um certificado diferente com dados específicos, você mesmo pode [emitir um certificado de testes](https://demos.lacunasoftware.com/pt/demos/generate-certificate) com os dados que quiser.

Lembre-se de sempre **remover a confiança na ICP de testes da Lacuna Software ao levar a sua aplicação para produção**. Ainda melhor,
recomendamos o emprego de alguma técnica de compilação condicional de modo que a ICP de testes seja aceita apenas quando o código
estiver executando em modo *debug*.

## Configurando o Rest PKI

O ID do contexto de segurança que contém a ICP de testes das Lacuna Software é:

```
Lacuna Test PKI security context ID (for development purposes only!!!):
803517ad-3bbc-4169-b085-60053a8f6dbf
```

O local correto onde colocar esse dado depende da sua linguagem de programação e da operação que você
está realizando. Por exemplo, se você estiver realizando uma assinatura PAdES (PDF) em PHP, altere o arquivo `pades-signature.php`:

```php
// Trust Lacuna Test PKI (for development purposes only!!!)
$signatureStarter->setSecurityContext("803517ad-3bbc-4169-b085-60053a8f6dbf");
```

Ou se estiver usando Java, altere o arquivo `PadesSignatureController.java`:

```java
// Trust Lacuna Test PKI (for development purposes only!!!)
signatureStarter.setSecurityContext(new SecurityContext("803517ad-3bbc-4169-b085-60053a8f6dbf"));
```

Todos os [projetos de exemplo](https://github.com/LacunaSoftware/PkiSuiteSamples) contém comentários indicando como habilitar a confiança na ICP de testes da Lacuna.

## Certificados em nuvem

Se você não tiver um certificado em nuvem para testar nossos produtos, você pode utilizar um dos certificados do VaultID ou BirdID abaixo.

    Cliend Id: 20658903000171
    Client Secret: ocBigveadOkidgavVulnumKet3
    CPF: 02610247010

| VaultID | BirdID |
|:-------:|:------:|
|![Certificado de teste - Vault ID](../../../images/pki-guide/qrcode-cert-vaultid.png) | ![Certificado de teste - BirdID](../../../images/pki-guide/qrcode-cert-birdid.png) |
