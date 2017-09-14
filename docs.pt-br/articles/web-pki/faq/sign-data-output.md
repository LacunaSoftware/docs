# Qual é o formato da assinatura retornada pelas funções signData e signHash?

As funções `signData` e `signHash` realizam um ***algoritmo*** *de assinatura digital* utilizando a chave privada de um
dos certificados do usuário. Sendo assim, o formato retornado é a saída do algoritmo de assinatura codificada em Base64.
No caso mais comum, que é do algoritmo RSA com chave de 2048 bits, a saída tem 256 bytes (344 caracteres em Base64).

Essa dúvida geralmente ocorre devido à confusão entre uma *assinatura digital*, por exemplo CMS/CAdES, XmlDSig/XAdeS ou
PAdES, e um ***algoritmo*** *de assinatura*, como o RSA. Geralmente, o algoritmo de assinatura é uma parte do processo
de realizar uma assinatura digital. As funções `signData` e `signHash` realizam apenas o algoritrmo, não a assinatura
inteira.

Por favor veja a pergunta [Como posso realizar uma assinatura digital utilizando o Web PKI?](digital-signature.md) para
informações sobre como utilizar o Web PKI para realizar assinaturas digitais.
