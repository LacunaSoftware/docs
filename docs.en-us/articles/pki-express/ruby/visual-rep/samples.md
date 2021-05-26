# Samples

## Automatic positioning sample

This sample creates a customized automatic positioning applied in the document's last page.

The model below shows the measures used on the container that delimits the region where the visual representation will be inserted and automatically ordered.

![PAdES auto positioning container](../../../../../images/pki-sdk/pades-autopos-container.png)

The following code exemplifies how to set the container's parameters.

```ruby
container = PkiExpress::PadesVisualRectangle.new
container.left = 3.0
container.right = 3.0
container.bottom = 2.0
container.top = 8.0
```

For more information on how to set Containers, read the article [Defining a container](containers.md)

Each inserted signature has a visual representation. The model below shows its rectangle, text, and image parameters.

![PAdES auto positioning rectangle](../../../../../images/pki-sdk/visual-rep-rectangle.png)

The external signature's rectangle will be 3cm x 7cm. It will have a badge as a background image that will be right-aligned to the rectangle. The text's container will have a right margin of 1.50cm so to avoid the text overlapping the image. The following code shows how to set these parameters. 

```ruby
# Visual representation rectangle
signature_rectangle = PkiExpress::PadesVisualRectangle.new
signature_rectangle.width = 7
signature_rectangle.height = 3

# Text container
container = PkiExpress::PadesVisualRectangle.new
container.left = 0.0
container.top = 0.0
container.right = 1.5
container.bottom = 0.0

# Background image
image = PkiExpress::PadesVisualImage.new
# To be inserted image bytes
image.content = pdf_content 
# Right-align image inside the visual representation rectangle.
image.horizontal_align = PadesHorizontalAlign::RIGHT
#  Vertically centralize the image inside the visual representation rectangle.
image.vertical_align =PadesVerticalAlign::CENTER
```

The image below shows the expected result of the automatically inserted visual representation after the completion of the signatures.

![PAdES auto positioning result](../../../../../images/pki-sdk/visual-rep-result.png)

## Complete automatic positioning sample


```ruby
signer = PkiExpress::PadesSigner.new
signer.pkcs12 = cert
signer.cert_password = 'password'
signer.pdf_to_sign = pdf_content_bytes
signer.signature_policy = PkiExpress::StandardSignaturePolicies::PADES_BASIC_WITH_LTV

# Create a visual representation.
vr = PkiExpress::PadesVisualRepresentation.new
# Set automatic positioning.
position = PkiExpress::PadesVisualAutoPositioning.new
position.page_number = -1
# Set the distance between lines of visual representations.
position.row_spacing = 1.0
# Set the visual representation rectangle.
size = PkiExpress::PadesSize.new(7.0, 3.0)
position.signature_rectangle_size = size
# Set the visual representation positioning container.
position_container = PkiExpress::PadesVisualRectangle.new
position_container.left = 3.0
position_container.right = 3.0
position_container.bottom = 2.0
position_container.top = 8.0
position.container = position_container
vr.position = position

# Visual representation text.
# Set text to be rendered. For a full list of the supported tags, see:
# https://docs.lacunasoftware.com/articles/pki-express/ruby/visual-rep/index.html#pades-tags
text = PkiExpress::PadesVisualText.new('Signed by {{name}}')
# Set text's font size.
text.font_size = 13.0
# Specify that the signing time should also be rendered.
text.include_signing_time = true
# Specify the signing time format.
text.signing_time_format = "dd/MM/yy H:mm:ss zzz"
# Optional. Set the container within the signature
# rectangle on which to place the text. By default,
# the text can occupy the entire rectangle (how much
# of the rectangle the text will actually fill depends
# on the length and font size).
container = PkiExpress::PadesVisualRectangle.new
container.left = 0.0
container.top = 0.0
container.right = 1.5
container.bottom = 0.5
text.container = container
vr.text = text

image = PkiExpress::PadesVisualImage.new
image.content = pdf_content
# Right-align image inside the visual representation rectangle.
image.horizontal_align = PadesHorizontalAlign::RIGHT
# Vertically centralize the image inside the representation rectangle.
image.vertical_align =PadesVerticalAlign::CENTER
vr.image = image

# Set signature visual representation.
signer.visual_representation = vr

signer.output_file_path = output_file_path

# Sign document and insert visual representations.
signer.sign
```

The above code results in the following signed PDF file.

![PAdES auto positioning sample](../../../../../images/pki-sdk/pdf-auto-pos.png)