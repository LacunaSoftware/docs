# Gerando códigos alfanuméricos

[!include[Alpha Codes introduction](../includes/alpha-codes-intro.md)]

Você provavelmente copiou anteriormente os métodos (agora obsoletos) `GenerateVerificationCode`, `FormatVerificationCode` e `ParseVerificationCode`
dos exemplos para o seu código. Para atualizar a sua aplicação:

1. Atualize o pacote de nuget [Lacuna.Pki](https://www.nuget.org/packages/Lacuna.Pki) para a versão **2.5.2** ou superior
1. Substitua a implementação desses métodos no seu código por chamadas aos métodos da classe *AlphaCode*:

   ```cs
   public static string GenerateVerificationCode() => AlphaCode.Generate();
   
   public static string FormatVerificationCode(string code) => AlphaCode.Format(code);
   
   public static string ParseVerificationCode(string formattedCode) => AlphaCode.Parse(formattedCode);
   ```

[!include[Alpha Codes principles](../includes/alpha-codes-principles.md)]

## Veja também

* [Gerando códigos alfanuméricos em .NET (Rest PKI)](../rest-pki/dotnet/alpha-codes.md)
* [Lacuna PKI SDK](index.md)
