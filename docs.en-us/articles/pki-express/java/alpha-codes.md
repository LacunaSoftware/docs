# Generating alphanumeric codes on Java

[!include[Alpha Codes introduction](../../../includes/alpha-codes-intro.md)]

You probably brought the (now obsolete) methods `generateVerificationCode`, `formatVerificationCode` and `parseVerificationCode`
into your own code. To update your application:

1. Update the Maven package *com.lacunasoftware.pkiexpress*
1. Replace the implementation of these methods on your code with calls to methods of the *AlphaCode* class:

   ```java
   public static string generateVerificationCode() {
      return AlphaCode.generate();
   }
   
   public static string formatVerificationCode(String code) {
      return AlphaCode.format(code)
   }
   
   public static string parseVerificationCode(String formattedCode) {
      return AlphaCode.parse(formattedCode)
   }
   ```

[!include[Alpha Codes principles](../../../includes/alpha-codes-principles.md)]

## See also

* [Using PKI Express on .Java](index.md)
