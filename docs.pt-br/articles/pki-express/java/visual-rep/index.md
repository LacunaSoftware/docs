# Representação Visual

[!include[Posicionamento](../../../includes/visual-rep/positioning.md)]

```java
PadesSigner signer = new PadesSigner();
...
PadesVisualRepresentation vr = new PadesVisualRepresentation();
PadesVisualManualPositioning position = new PadesVisualManualPositioning();
position.setPageNumber(-1);                             // Define inserção na última página do documento
PadesVisualRectangle signatureRectangle = new PadesVisualRectangle();
signatureRectangle.setWidth(7);                        // Largura = 7cm
signatureRectangle.setHeight(3);                       // Altura = 3cm
signatureRectangle.setLeft(2.5);                       // Distância da margem esquerda = 2.50cm
signatureRectangle.setBottom(2.5);                     // Distância da margem inferior = 2.50cm
position.setSignatureRectangle(signatureRectangle);
vr.setText(...);
vr.setImage(...);

signer.setVisualRepresentation(vr);
```

[!include[Posicionamento automatico](../../../includes/visual-rep/auto-positioning.md)]


```java
PadesSigner signer = new PadesSigner();
...
PadesVisualRepresentation vr = new PadesVisualRepresentation();
PadesVisualAutoPositioning position = new PadesVisualAutoPositioning();
position.setPageNumber(-1);                     // Define inserção na última página do documento
position.setRowSpacing(1.0);                    // 1.00cm de espaçamento entre linhas
PadesSize size = new PadesSize(7.0, 3.0);       // Largura = 7cm e Altura = 3cm
position.setSignatureRectangleSize(size);
PadesVisualRectangle positionContainer = new PadesVisualRectangle();
positionContainer.setLeft(3.0);                 // Distância da margem esquerda = 3.00cm
positionContainer.setRight(3.0);                // Distância da margem direita = 3.00cm
positionContainer.setBottom(2.0);               // Distância da margem inferior = 2.00cm
positionContainer.setTop(8.0);                  // Distância da margem superior = 8.00cm
position.setContainer(positionContainer);
vr.setPosition(position);
vr.setText(...);
vr.setImage(...);

signer.setVisualRepresentation(vr);
```

[!include[Texto](../../../includes/visual-rep/text.md)]

```java
// Texto da representação visual
PadesVisualText text = new PadesVisualText("Signed by {{name}}"); // Inclui o nome do signatário
text.setFontSize(10.0);                                           // Define tamanho da fonte do texto
text.setIncludeSigningTime(true);                                 // Inclui a data da assinatura
text.setSigningTimeFormat("dd/MM/yy H:mm:ss zzz");                // Define a formatação da data
// Define container do texto
PadesVisualRectangle container = new PadesVisualRectangle();
container.setLeft(0.0);
container.setTop(0.0);
container.setRight(1.5);
container.setBottom(0.5);
text.setContainer(container);
```

* Imagem

  Também é possível definir uma imagem de fundo para o retângulo de assinatura e customizar sua opacidade e alinhamento.

  Como exemplo, definiremos um posicionamento do texto relativo ao retângulo de assinatura conforme a figura abaixo.

```java
PadesVisualImage image = new PadesVisualImage();
image.setContent(...);
image.setHorizontalAlign(PadesHorizontalAlign.Right); // Alinha a imagem horizontamente na direita
image.setVerticalAlign(PadesVerticalAlign.Center);    // Alinha a imagem verticalmente no centro
```

## Veja também

* [Exemplos completos de representação visual](samples.md)