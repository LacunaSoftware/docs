# Visual representation

[!include[Positioning](../../../includes/visual-rep/positioning.md)]

```java
PadesSigner signer = new PadesSigner();
...
PadesVisualRepresentation vr = new PadesVisualRepresentation();
PadesVisualManualPositioning position = new PadesVisualManualPositioning();
position.setPageNumber(-1);                            // Set last page for visual representation insertion
PadesVisualRectangle signatureRectangle = new PadesVisualRectangle();
signatureRectangle.setWidth(7);                        // Width = 7cm
signatureRectangle.setHeight(3);                       // Height = 3cm
signatureRectangle.setLeft(2.5);                       // Left margin   = 2.50cm
signatureRectangle.setBottom(2.5);                     // Bottom margin = 2.50cm
position.setSignatureRectangle(signatureRectangle);
vr.setText(...);
vr.setImage(...);

signer.setVisualRepresentation(vr);
```

[!include[Auto Positioning](../../../includes/visual-rep/auto-positioning.md)]

```java
PadesSigner signer = new PadesSigner();
...
PadesVisualRepresentation vr = new PadesVisualRepresentation();
PadesVisualAutoPositioning position = new PadesVisualAutoPositioning();
position.setPageNumber(-1);                     // Set last page for visual representations insertion
position.setRowSpacing(1.0);                    // 1.00cm of space between lines
PadesSize size = new PadesSize(7.0, 3.0);       // Width  = 7cm and Height = 3cm
position.setSignatureRectangleSize(size);
PadesVisualRectangle positionContainer = new PadesVisualRectangle();
positionContainer.setLeft(3.0);                 // Left margin   = 3.00cm
positionContainer.setRight(3.0);                // Right margin  = 3.00cm
positionContainer.setBottom(2.0);               // Bottom margin = 2.00cm
positionContainer.setTop(8.0);                  // Top margin    = 8.00cm
position.setContainer(positionContainer);
vr.setPosition(position);
vr.setText(...);
vr.setImage(...);

signer.setVisualRepresentation(vr);
```

[!include[Text](../../../includes/visual-rep/text.md)]

```java
// Visual representation text
PadesVisualText text = new PadesVisualText("Signed by {{name}}"); // Set signer name
text.setFontSize(10.0);                                           // Set the font size
text.setIncludeSigningTime(true);                                 // Include signing time
text.setSigningTimeFormat("dd/MM/yy H:mm:ss zzz");                // Set the signing time format
// Text container
PadesVisualRectangle container = new PadesVisualRectangle();
container.setLeft(0.0);
container.setTop(0.0);
container.setRight(1.5);
container.setBottom(0.5);
text.setContainer(container);
```

* Image

  It's also possible to set a background image within the visual representation rectangle and customize the image's opacity and alignment.

```java
PadesVisualImage image = new PadesVisualImage();
image.setContent(...);
// Right-align image inside the visual representation rectangle.
image.setHorizontalAlign(PadesHorizontalAlign.Right);
// Vertically centralize the image inside the visual representation rectangle.
image.setVerticalAlign(PadesVerticalAlign.Center);
```
* It's possible to remove the visual representation:
```java
signatureStarter.setSuppressDefaultVisualRepresentation(true);
```

## See also

* [Visual representation samples](samples.md)
