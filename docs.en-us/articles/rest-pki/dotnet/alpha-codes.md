# Generating alphanumeric codes on .NET

[!include[Alpha Codes introduction](../../../includes/alpha-codes-intro.md)]

You probably brought the (now obsolete) methods `GenerateVerificationCode`, `FormatVerificationCode` and `ParseVerificationCode`
into your own code. To update your application:

1. Update the nuget package [Lacuna.RestPki.Client](https://www.nuget.org/packages/Lacuna.RestPki.Client) to version **1.18.0** or greater
1. Replace the implementation of these methods on your code with calls to methods of the *AlphaCode* class:

   ```cs
   public static string GenerateVerificationCode() => AlphaCode.Generate();
   
   public static string FormatVerificationCode(string code) => AlphaCode.Format(code);
   
   public static string ParseVerificationCode(string formattedCode) => AlphaCode.Parse(formattedCode);
   ```

[!include[Alpha Codes principles](../../../includes/alpha-codes-principles.md)]

## See also

* [Generating alphanumeric codes (PKI SDK)](../../pki-sdk/alpha-codes.md)
* [Using Rest PKI on .NET](index.md)
