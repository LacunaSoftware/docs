# Requisitos de certificados - Sessões de assinatura

Para restringir os certificados que o usuário poderá escolher durante uma [sessão de assinatura](index.md), especifique uma lista de
**requisitos de certificado** ao criar a sessão. O usuário somente poderá escolher certificados que atendam a **TODOS** os critérios
especificados.

Cada requisito é composto por um **tipo** e, dependendo do tipo, um **argumento**. Por exemplo, digamos que a sua aplicação precisa que
as assinaturas sejam feitas com certificados A3, ficando vedado o uso de certificados A1, que é o que o requisito [CryptoDevice](#crypto-device)
faz. Como esse requisito não recebe um argumento, precisamos apenas passar o tipo.

Em .NET:

[!include[Specify a certificate requirement in dotnet](../../../../../../includes/rest-pki/core/signature-sessions/certificate-requirement-dotnet.md)]

Integração direta por API:

[!include[Specify a certificate requirement API](../../../../../../includes/rest-pki/core/signature-sessions/certificate-requirement-api.md)]

Veja os requisitos suportados na próxima sessão.

## Tipos de requisito

Os seguintes tipos de requisito são atualmente suportados:

* [CryptoDevice](#crypt-device): requer que o certificado tenha a chave privada protegida por dispositivo criptográfico (certificado A3 ou A4)
* [Cpf](#cpf): requer que o certificado tenha um determinado CPF

> [!NOTE]
> Se você precisar de um requisito diferente, contate-nos

<a name="crypto-device" />
### CryptoDevice

Use o requisito `CryptoDevice` para permitir apenas o uso de certificados cuja chave privada é protegida por dispositivo criptográfico (tipicamente
token ou smartcard). Em outras palavras, fica vedado o uso de certificados A1, podendo apenas serem utilizados certificados A3 ou A4. Este requisito
não recebe argumento.

<a name="cpf" />
### Cpf

Use o requisito `Cpf` para restringir o usuário a utilizar apenas certificados com um determinado CPF. Passe o CPF no argumento, com ou sem pontuação
(mas *com* zeros à esquerda).

> [!NOTE]
> Esse requisito tem o efeito colateral de melhorar a experiência do usuário no uso de certificado em nuvem, na medida em que permite que o sistema
> não precise solicitar ao usuário que digite seu CPF para consultar os certificados em nuvem disponíveis (o CPF é obtido a partir do requisito especificado).
