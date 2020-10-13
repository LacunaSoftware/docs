Para mais informações sobre como definir a posição da representação da assinatura, veja o artigo
[Definindo um container](containers.md).

### Posicionamento Automático

No posicionamento automático, ao invés de se definir o posicionamento da representação visual em relação à página, define-se um
container que irá receber as representações das sucessivas assinaturas realizadas no documento e o tamanho de cada
retângulo de assinatura dentro do container.

O container de assinaturas é definido pelo parâmetro `container`. 
De maneira similar à especificação do retângulo de assinatura no posicionamento manual, o container pode ter os parâmetros
`top`, `bottom`, `left`, `right`, `width` e `height`.
Já o tamanho de cada retângulo de assintura (`width` e `height`) é definido pelo parâmetro `signatureRectangleSize`.

A propriedade `rowSpacing` define o espaçamento entre as "linhas" das representações visuais. 
Quando não há mais espaço em uma linha, as representações são inseridas em uma nova linha respeitando o `rowSpacing` passado.

Por padrão, as assinaturas são inseridas da esquerda para direita, de cima para baixo. No entanto, esse comportamento pode ser customizado com os parâmetros `horizontalDirection` (`"rightToLeft"` ou `"leftToRight"`) e `verticalDirection` (`"topDown"` ou `"bottomUp"`).

Por exemplo, para especificar que as representações visuais devem ser inseridas sucessivamente na última página do documento dentro de um container espaçado 3cm das bordas laterais, 2cm da borda inferior e 8cm da borda superior, sendo que cada retângulo de assinatura deve ter 7cm de largura por 3cm de altura, conforme ilustrado na imagem abaixo, escreveríamos o seguinte código:

![PAdES visual representation auto positioning](../../../../images/pki-sdk/auto-positioning.png)