# Gerando códigos alfanuméricos em .NET

[!include[Alpha Codes introduction](../../../includes/alpha-codes-intro.md)]

Você provavelmente copiou anteriormente os métodos (agora obsoletos) `GenerateVerificationCode`, `FormatVerificationCode` e `ParseVerificationCode`
dos exemplos para o seu código. Para atualizar a sua aplicação:

1. Atualize o pacote de nuget [Lacuna.RestPki.Client](https://www.nuget.org/packages/Lacuna.RestPki.Client) para a versão **1.18.0** ou superior
1. Substitua a implementação desses métodos no seu código por chamadas aos métodos da classe *AlphaCode*:

   ```cs
   public static string GenerateVerificationCode() => AlphaCode.Generate();
   
   public static string FormatVerificationCode(string code) => AlphaCode.Format(code);
   
   public static string ParseVerificationCode(string formattedCode) => AlphaCode.Parse(formattedCode);
   ```

[!include[Alpha Codes principles](../../../includes/alpha-codes-principles.md)]

## Veja também

* [Gerando códigos alfanuméricos (PKI SDK)](../../pki-sdk/alpha-codes.md)
* [Usando o Rest PKI em .NET](index.md)
