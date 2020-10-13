A representação visual na assinatura de PDF é a inclusão de um texto ou imagem contendo informações sobre a assinatura que está interna ao documento. Dependendo do software de visualização do PDF, esta representação pode fazer uma ligação com os dados e propriedades da assinatura e do signatário.

**Cada representação visual é sempre relativa a apenas uma assinatura no PDF e cada assinatura  pode ter até uma representação visual.**

Nas seções abaixo exploraremos as opções, parâmetros e customizações na definição de uma representação visual para assinaturas em PDF.

## Elementos da Representação Visual

O array de representação visual possui 3 parâmetros que podem ser definidos: `position`, `text` e `image`. A lista abaixo introduz os elementos da representação visual.

* Posição

  A posição do retângulo da representação visual da assinatura pode ser definida de forma automática ou manual.

  * Posicionamento Automático

    O posicionamento automático é indicado para casos em que pode-se definir uma região (container) em uma página do PDF que irá receber a representação das assinaturas. Este modo irá organizar as assinaturas em série dentro da região especificada. A figura abaixo exemplifica o comportamento do posicionamento automático. O retângulo vermelho representa o container definido no qual as representações visuais serão posicionadas automaticamente em série.

    ![Visual representation auto positioning](../../../../images/pki-sdk/visual-rep-result-mini.png)

  * Posicionamento Manual

    O posicionamento manual é indicado para os casos em que cada representação das assinaturas serão inseridas em posições arbitrárias, por exemplo a posição e a página serem informados pelo usuário.

    ![Visual representation manual positioning](../../../../images/pki-sdk/visual-rep-manual-mini.png)

* Texto

  As informações textuais a serem inseridas na representação visual da assinatura são customizáveis pelo parâmetro `text`.

* Imagem

  É possível incluir uma imagem de fundo na representação visual da assinatura, podendo também customizar sua opacidade e seu alinhamento dentro do retângulo da representação visual. Estas opções são definidas pelo parâmetro `image`.

## Posicionamento da representação da assinatura

No posicionamento, define-se a página na qual a representação da assinatura será inserida, sua posição na página e a unidade de medida utilizada para informar a posição.

A página é especificada pelo parâmetro `pageNumber`. 
Números negativos são contados a partir do final do documento (-1 significa última página, -2 penúltima, etc).
Pode-se usar o valor especial 0 (zero), que especifica que a representação da assinatura deve ser colocada em uma nova página em branco adicionada ao final do documento.

A unidade de medida é especificada pelo parâmetro `measurementUnits`. Por padrão o seu valor é `"centimeters"`, mas também pode ser `"pdfPoints"`.

### Posicionamento Manual

A posição do retângulo de assinatura em relação à página é especificada pelo parâmetro `manual`. Um retângulo pode ter os parâmetros `top`, `bottom`, `left`, `right`, `width` e `height` conforme mostrado na figura abaixo.

![PAdES rectangle](../../../../images/pki-sdk/pades-rectangle.png)

Por exemplo, para especificar que a representação visual deve ser inserida na última página do documento, tendo tamanho
7cm de largura e 3cm de altura, ficando a 2.5cm das margens esquerda e inferior, conforme a imagem abaixo, escreveríamos
o seguinte código:

![PAdES visual representation manual positioning](../../../../images/pki-sdk/pades-visual-rep-manual-pos.png)
