# Alterando a licença de uso - Rest PKI

Para utilizar uma instância [*on premises*](index.md) do [Rest PKI](../index.md), é necessária uma licença
de uso do Lacuna PKI SDK, a qual é solicitada durante o processo de instalação.

Caso seja necessário futuramente alterar a licença sendo utilizada, siga os passos abaixo:

1. Autentique-se como administrador na sua instância do Rest PKI (caso não saiba a senha, veja o artigo [Recuperação de senha de admin](admin-recover.md))
1. No menu superior, clique em **Administração** &gt; **Status do sistema**
1. No item **SDK license loaded**, clique no botão **Alterar**
1. Localize no arquivo **LacunaPkiLicense.txt** a licença binária do PKI SDK, na seção "Binary license content (Base64-encoded)"
   ```
   Binary license content (Base64-encoded)
   ---------------------------------------
   
   AxAA........................................iw==
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ```
1. Copie e cole **a linha inteira**, em seguida clique no botão **Configurar licença**

![Image name](../../../../images/rest-pki/sdk-license.png)
