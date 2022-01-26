# Certificate requirements - Signature sessions

In order to restrict the certificates that the user will be able to choose during a [signature session](index.md), specify a list of
**certificate requirements** when creating the session. The user will only be able to select certificates that meet **ALL** of the specified
requirements.

Each requirement is composed of a **type** and, depending on the type, an **argument**. For instance, let's say you need to restrict users to only
sign documents using certificates whose private key is protected by a cryptographic device, which is what the [CryptoDevice](#crypto-device)
requirement does. This specific requirement does not take an argument, so we only have to specify its type.

On .NET:

[!include[Specify a certificate requirement in dotnet](../../../../../../includes/rest-pki/core/signature-sessions/certificate-requirement-dotnet.md)]

Direct API integration:

[!include[Specify a certificate requirement API](../../../../../../includes/rest-pki/core/signature-sessions/certificate-requirement-api.md)]

See the different requirement types available on the next section.

## Requirement types

The following requirement types are currently available:

* [CryptoDevice](#crypto-device): requires certificates to have a private key protected by a cryptographic device
* [Cpf](#cpf): requires certificates to have a certain Brazilian CPF number

> [!NOTE]
> If you need a different requirement, contact us

<a name="crypto-device" />
### CryptoDevice

Use the `CryptoDevice` requirement to restrict users to only choose certificates whose private key are protected by a cryptographic device
(typically a cryptographic token). This requirement does not take an argument.

> [!NOTE]
> For ICP-Brasil certificates, this means A3 or A4 certificates only.

<a name="cpf" />
### Cpf

Use the `Cpf` requirement to restrict users to only choose certificates having a certain Brazilian CPF number. Pass the CPF on the argument,
with or without punctuation (but *with* leading zeroes).

> [!NOTE]
> This requirement has the side effect of improving user experience when using cloud certificates, since the user is not required to type in his
> CPF to check the available cloud certificates (the CPF is inferred from the requirement).
