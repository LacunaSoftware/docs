# Definindo um container

Na representação visual da assinatura PAdES os retângulos e containers são definidos através da classe
@Lacuna.Pki.Pades.PadesVisualRectangle.

## Container

Um container possui os parâmetros `Top`, `Bottom`, `Left`, `Right`, `Width` e `Height` conforme na figura abaixo.

![PAdES rectangle](../../../../../../images/pki-sdk/pades-rectangle.png)

O container, em vermelho, possui suas margens relativas ao elemento no qual ele está sendo inserido.

Para instanciar um container, no entanto, não se deve preencher todos os seus parâmetros. A definição de um conjunto de
parâmetros específicos produz diferentes efeitos. Exemplificaremos a seguir as possibilidades para se definir as dimensões
horizontais de um container (as dimensões verticais são definidas analogamente como explicado ao final dos exemplos).

### Fluido

Definindo apenas os parâmetros `Left` e `Right`, o container respeitará a dimensão passada para essas margens e sua
largura (`Width`) irá se esticar de acordo com o espaço horizontal restante disponível como ilustrado na figura abaixo.

![PAdES fluid rectangle](../../../../../../images/pki-sdk/fluid.png)

### Ancorado à esquerda

Definindo apenas os parâmetros `Left` e `Width`, o container respeitará as dimensões passadas para a margem esquerda e
a largura. A margem direita terá seu tamanho dependente do espaço horizontal restante disponível como ilustrado na figura
abaixo.

![PAdES left anchored rectangle](../../../../../../images/pki-sdk/left-anchored.png)

### Ancorado à direita

Definindo apenas os parâmetros `Right` e `Width`, o container respeitará as dimensões passadas para a margem direita e
a largura. A margem esquerda terá seu tamanho dependente do espaço horizontal restante disponível como ilustrado na figura
abaixo.

![PAdES right anchored rectangle](../../../../../../images/pki-sdk/right-anchored.png)

### Centralizado

Definindo apenas o parâmetro `Width`, o container será inserido centralizado horizontalmente respeitando a dimensão da
largura passada, conforme ilustrado na figura abaixo.

![PAdES centered rectangle](../../../../../../images/pki-sdk/centered.png)

## Dimensões verticais

A definição das dimensões verticais seguem analogamente as instruções das dimensões horizontais discutidas acima,
bastando substituir `Left` e `Right` por `Top` e `Bottom` e `Width` por `Height`.

## Veja também

* @Lacuna.Pki.Pades.PadesVisualRectangle
