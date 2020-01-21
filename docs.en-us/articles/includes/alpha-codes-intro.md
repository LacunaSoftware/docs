When generating a printer-friendly version of a signed file, a "document verification code" needs to be included in the
document so that a third party receiving the printed document can access your website and provide the code to get back the
digitally signed version:

![Codigo de verificacao](../../../images/verification-code.png)

In the past, we provided the source code to generate this verification code as part of the samples, for instance:

```cs
public static class Util {
   
   // ...

   public static string GenerateVerificationCode() {
      // String with exactly 32 letters and numbers to be used on the codes.
      const string Alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      // Allocate a byte array large enough to receive the necessary entropy
      var bytes = new byte[(int)Math.Ceiling(VerificationCodeSize * 5 / 8.0)];
      // ...
      return sb.ToString();
   }

   // ...

}
```

However, since the verification code plays an important role in protecting the access to your documents, we now offer
the `AlphaCode` class to perform the code generation.

<a name="update-code" />
## Updating your app to use *AlphaCode*

> [!WARNING]
> The verification code generation has recently undergone a careful audit and has received important improvements.
> We highly recommend that you update your application to use *AlphaCode* instead of the old provided code.
