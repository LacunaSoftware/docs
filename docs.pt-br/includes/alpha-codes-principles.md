## Princípios de projeto

A classe *AlphaCode* gera códigos alfanuméricos feitos para serem lidos por pessoas seguindo os princípios abaixo:

1. Os códigos devem de fácil leitura
1. Os códigos devem poder ser facilmente digitados com baixo risco de confundir caracteres similares como `O` e `0`
1. Os códigos devem ter relativa alta entropia com relação ao tamanho do código (alto número de possíveis códigos relativo ao tamanho
   do código, permitindo ao desenvolvedor escolher um código de tamanho relativamente pequeno)

Para melhorar a legibilidade, são utilizadas apenas letras maiúsculas e não são utilizados os caracteres `O`, `0`, `1` e `I`. A entropia
por caractere é relativamente alta, se comparada com um código hexadecimal: como existem 32 possíveis caracteres, cada caractere contribui
com 5 bits à entropia total do código gerado (25% a mais do que num código hexadecimal), o que resulta em códigos menores para uma dada entropia mínima.

Por exemplo, para gerar um código com 80 bits de entropia (2^80 possíveis códigos):

* Em hexadecimal, seria necessário um código de 20 caracteres, ex: `90A0-F20F-5883-8D55-AD31`
* Com a classe *AlphaCode*, o código teria apenas 16 caracteres, ex: `FFWC-RHC5-9NLF-VM42`
