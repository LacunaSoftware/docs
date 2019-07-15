# Generating alphanumeric codes on Java

[!include[Alpha Codes introduction](../../../includes/alpha-codes-intro.md)]

You probably brought the (now obsolete) methods `generateVerificationCode`, `formatVerificationCode` and `parseVerificationCode`
into your own code. To update your application:

1. Update the Maven package *com.lacunasoftware.restpki*
1. Replace the implementation of these methods on your code with calls to methods of the *AlphaCode* class:

   ```java
   public static String generateVerificationCode() {
      return AlphaCode.generate();
   }
   
   public static String formatVerificationCode(String code) {
      return AlphaCode.format(code);
   }
   
   public static String parseVerificationCode(String formattedCode) {
      return AlphaCode.parse(formattedCode);
   }
   ```

[!include[Alpha Codes principles](../../../includes/alpha-codes-principles.md)]

## See also

* [Generating alphanumeric codes on Java (PKI Express)](../../pki-express/java/alpha-codes.md)
* [Using Rest PKI on .Java](index.md)
