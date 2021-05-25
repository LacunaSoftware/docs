# Exemplos completos

## Exemplo completo com posicionamento automático

Criaremos um posicionamento automático customizado que será aplicado na última página do documento.

O container de inclusão, região na qual as representações visuais das assinaturas serão organizadas automaticamente,
será definido seguindo o modelo representado na imagem abaixo.

![PAdES auto positioning container](../../../../../images/pki-sdk/pades-autopos-container.png)

O código abaixo exemplifica como definir estes parâmetros em um container.

```java
PadesVisualRectangle container = new PadesVisualRectangle();
container.setLeft(3.0);
container.setRight(3.0);
container.setBottom(2.0);
container.setTop(8.0);
```

Para mais informações de como definir um Container, veja o artigo [Definindo um container](containers.md)

Cada assinatura incluída terá sua representação visual seguindo os parâmetros do retângulo de assinatura, texto e imagem
seguindo o modelo representado pela imagem abaixo.

![PAdES auto positioning rectangle](../../../../../images/pki-sdk/visual-rep-rectangle.png)

O retângulo externo da assinatura tera 3cm x 7cm. Será incluído um brasão de imagem de fundo alinhada à direita no
retângulo de assinatura. O container do texto terá uma margem direita de 1.50cm em relação ao retângulo externo,
impedindo, para este exemplo, que o texto fique por cima da imagem. O código abaixo demonstra como definir estes parâmetros.

```java
// Definindo retângulo de assinatura
PadesVisualRectangle signatureRectangle = new PadesVisualRectangle();
signatureRectangle.setWidth(7);
signatureRectangle.setHeight(3);

// Define container do texto
PadesVisualRectangle container = new PadesVisualRectangle();
container.setLeft(0.0);
container.setTop(0.0);
container.setRight(1.5);
container.setBottom(0.0);

// Definindo imagem de fundo
PadesVisualImage image = new PadesVisualImage();
image.setContent(...);                                  // Bytes da imagem a ser inserida
image.setHorizontalAlign(PadesHorizontalAlign.Right);   // Alinha a imagem horizontamente na direita
image.setVerticalAlign(PadesVerticalAlign.Center);      // Alinha a imagem verticalmente no centro
```

À medida que as assinaturas forem sendo realizadas, o resultado esperado para as representações visuais incluídas
automaticamente é o apresentado na imagem abaixo.

![PAdES auto positioning result](../../../../../images/pki-sdk/visual-rep-result.png)

## Exemplo completo com posicionamento automático

```java
PadesSigner signer = new PadesSigner();
signer.setPkcs12(cert);
signer.setCertPassword('password');
signer.setPdfToSign(pdfContent);
signer.setSignaturePolicy(StandardSignaturePolicies.PadesBasicWithLTV);

PadesVisualRepresentation vr = new PadesVisualRepresentation();
// Define posicionamento automático
PadesVisualAutoPositioning position = new PadesVisualAutoPositioning();
position.setPageNumber(-1);
//Define o espaçamento entre linhas de representações visuais
position.setRowSpacing(1.0);
// Define o retângulo da representação visual
PadesSize size = new PadesSize(7.0, 3.0);
position.setSignatureRectangleSize(size);
// Define o container para posicionamento das representações visuais
PadesVisualRectangle positionContainer = new PadesVisualRectangle();
positionContainer.setLeft(3.0);
positionContainer.setRight(3.0);
positionContainer.setBottom(2.0);
positionContainer.setTop(8.0);
position.setContainer(positionContainer);

// Texto da representação visual
// Define o texto a ser inserido. Para ver a lista completa de tags suportadas, veja: 
// https://docs.lacunasoftware.com/articles/pki-express/java/visual-rep/index.html#pades-tags
PadesVisualText text = new PadesVisualText("Signed by {{name}}");
// Define tamanho da fonte do texto.
text.setFontSize(13.0);
// Define que o horário da assinatura também seja renderizado.
text.setIncludeSigningTime(true);
// Define a formatação da data.
text.setSigningTimeFormat("dd/MM/yy H:mm:ss zzz");
// Opicional. Define o container retangular dentro 
// da representação da assinatura onde o texto será
// inserido. Por padrão, o texto pode ocupar todo o
// retângulo da representação (o quanto será de 
// fato preenchido depende do comprimento do texto
// e do tamanho da fonte).
PadesVisualRectangle container = new PadesVisualRectangle();
container.setLeft(0.0);
container.setTop(0.0);
container.setRight(1.5);
container.setBottom(0.5);
text.setContainer(container);
vr.setText(text);

PadesVisualImage image = new PadesVisualImage();
image.setContent(imageContent);
// Define imagem alinhada à direita no retângulo da representação visual.
image.setHorizontalAlign(PadesHorizontalAlign.Right);
// Define imagem centralizada verticalmente no retângulo da representação visual.
image.setVerticalAlign(PadesVerticalAlign.Center);
vr.setImage(image);

// Define representação visual na assinatura
signer.setVisualRepresentation(vr);

signer.setOutputFile(outputFilePath);

// Assina o documento e insere a representação visual
signer.sign();
signer.dispose();
```

A execução do exemplo acima produz o seguinte resultado na assinatura de um PDF:

![PAdES auto positioning sample](../../../../../images/pki-sdk/pdf-auto-pos.png)