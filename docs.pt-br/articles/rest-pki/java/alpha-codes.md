﻿# Gerando códigos alfanuméricos em Java

[!include[Alpha Codes introduction](../../includes/alpha-codes-intro.md)]

Você provavelmente copiou anteriormente os métodos (agora obsoletos) `generateVerificationCode`, `formatVerificationCode` e `parseVerificationCode`
dos exemplos para o seu código. Para atualizar a sua aplicação:

1. Atualize o pacote de Maven *com.lacunasoftware.restpki* para a versão **1.11.0** ou superior
1. Substitua a implementação desses métodos no seu código por chamadas aos métodos da classe *AlphaCode*:

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

[!include[Alpha Codes principles](../../includes/alpha-codes-principles.md)]

## Veja também

* [Gerando códigos alfanuméricos em Java (PKI Express)](../../pki-express/java/alpha-codes.md)
* [Usando o Rest PKI em Java](index.md)
