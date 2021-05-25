# Samples

## Automatic positioning sample

This sample creates a customized automatic positioning applied in the document's last page.

The model below shows the measures used on the container that delimits the region where the visual representation will be inserted and automatically ordered.

![PAdES auto positioning container](../../../../../images/pki-sdk/pades-autopos-container.png)

The following code exemplifies how to set the container's parameters.

```java
PadesVisualRectangle container = new PadesVisualRectangle();
container.setLeft(3.0);
container.setRight(3.0);
container.setBottom(2.0);
container.setTop(8.0);
```

For more information on how to set Containers, read the article [Defining a container](containers.md)

Each inserted signature has a visual representation. The model below shows its rectangle, text, and image parameters.

![PAdES auto positioning rectangle](../../../../../images/pki-sdk/visual-rep-rectangle.png)

The external signature's rectangle will be 3cm x 7cm. It will have a badge as a background image that will be right-aligned to the rectangle. The text's container will have a right margin of 1.50cm so to avoid the text overlapping the image. The following code shows how to set these parameters. 

```java
// Visual representation rectangle
PadesVisualRectangle signatureRectangle = new PadesVisualRectangle();
signatureRectangle.setWidth(7);
signatureRectangle.setHeight(3);

// Text container
PadesVisualRectangle container = new PadesVisualRectangle();
container.setLeft(0.0);
container.setTop(0.0);
container.setRight(1.5);
container.setBottom(0.0);

// Background image
PadesVisualImage image = new PadesVisualImage();
// To be inserted image bytes
image.setContent(...);
// Right-align image inside the visual representation rectangle.
image.setHorizontalAlign(PadesHorizontalAlign.Right);
//  Vertically centralize the image inside the visual representation rectangle.
image.setVerticalAlign(PadesVerticalAlign.Center);
```

The image below shows the expected result of the automatically inserted visual representation after the completion of the signatures.

![PAdES auto positioning result](../../../../../images/pki-sdk/visual-rep-result.png)

## Complete automatic positioning sample


```java
PadesSigner signer = new PadesSigner();
signer.setPkcs12(cert);
signer.setCertPassword('password');
signer.setPdfToSign(pdfContent);
signer.setSignaturePolicy(StandardSignaturePolicies.PadesBasicWithLTV);

// Create a visual representation.
PadesVisualRepresentation vr = new PadesVisualRepresentation();
// Set automatic positioning.
PadesVisualAutoPositioning position = new PadesVisualAutoPositioning();
position.setPageNumber(-1);
// Set the distance between lines of visual representations.
position.setRowSpacing(1.0);
// Set the visual representation rectangle.
PadesSize size = new PadesSize(7.0, 3.0);
position.setSignatureRectangleSize(size);
// Set the visual representation positioning container.
PadesVisualRectangle positionContainer = new PadesVisualRectangle();
positionContainer.setLeft(3.0);
positionContainer.setRight(3.0);
positionContainer.setBottom(2.0);
positionContainer.setTop(8.0);
position.setContainer(positionContainer);
vr.setPosition(position);

// Visual representation text.
// Set text to be rendered. For a full list of the supported tags, see:
// https://docs.lacunasoftware.com/articles/pki-express/nodejs/visual-rep/index.html#pades-tags
PadesVisualText text = new PadesVisualText("Signed by {{name}}");
// Set text's font size.
text.setFontSize(13.0);
// Specify that the signing time should also be rendered.
text.setIncludeSigningTime(true);
// Specify the signing time format.
text.setSigningTimeFormat("dd/MM/yy H:mm:ss zzz");
// Optional. Set the container within the signature
// rectangle on which to place the text. By default,
// the text can occupy the entire rectangle (how much
// of the rectangle the text will actually fill depends
// on the length and font size).
PadesVisualRectangle container = new PadesVisualRectangle();
container.setLeft(0.0);
container.setTop(0.0);
container.setRight(1.5);
container.setBottom(0.5);
text.setContainer(container);
vr.setText(text);

PadesVisualImage image = new PadesVisualImage();
image.setContent(imageContent);
// Right-align image inside the visual representation rectangle.
image.setHorizontalAlign(PadesHorizontalAlign.Right);
// Vertically centralize the image inside the representation rectangle.
image.setVerticalAlign(PadesVerticalAlign.Center);
vr.setImage(image);

// Set signature visual representation.
signer.setVisualRepresentation(vr);

signer.setOutputFile(outputFilePath);

// Sign document and insert visual representations.
signer.sign();
signer.dispose();
```

The above code results in the following signed PDF file.

![PAdES auto positioning sample](../../../../../images/pki-sdk/pdf-auto-pos.png)