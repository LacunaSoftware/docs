Ao gerar uma versão para impressão de um arquivo assinado, é necessário gerar um *código de verificação* a ser
incluido no documento para que um terceiro que porventura receba o documento impresso possa visitar o seu site e fornecer o
código, obtendo assim a versão assinada digitalmente (que é a que efetivamente tem validade jurídica):

![Codigo de verificacao](../../../images/verification-code.png)

No passado, nós províamos o código-fonte para geração desse código de verificação como parte dos exemplos, a ser copiado
para o código da sua aplicação. Por exemplo:

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

Entretanto, como o código de verificação desempenha um papel crucial na proteção do acesso aos seus documentos, nós
agora oferecemos a classe `AlphaCode` para fazer a geração dos códigos.

<a name="update-code" />
## Atualizando sua aplicação para usar a classe *AlphaCode*

> [!WARNING]
> A lógica de geração de códigos de verificação passou por uma auditoria minuciosa e recebeu importantes melhorias.
> Por isso, recomendamos que você atualize a sua aplicação para utilizar a classe *AlphaCode* ao invés de utilizar
> o código-fonte antigo.
