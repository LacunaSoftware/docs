# Visual representation

[!include[Positioning](../../../includes/visual-rep/positioning.md)]

```ruby
signer = PkiExpress::PadesSigner.new
...
vr = PkiExpress::PadesVisualRepresentation.new
position = PkiExpress::PadesVisualManualPositioning.new
# Set last page for visual representation insertion
position.page_number = -1
signature_rectangle = PkiExpress::PadesVisualRectangle.new
signature_rectangle.width = 7           # Width = 7cm
signature_rectangle.height = 3          # Height = 3cm
signature_rectangle.left = 2.5          # Left margin   = 2.50cm
signature_rectangle.bottom = 2.5        # Bottom margin = 2.50cm
position.signature_rectangle(signature_rectangle);
vr.position = position
...
signer.visual_representation = vr
```

[!include[Auto Positioning](../../../includes/visual-rep/auto-positioning.md)]

```ruby
signer = PkiExpress::PadesSigner.new
...
vr = PkiExpress::PadesVisualRepresentation.new
position = PkiExpress::PadesVisualAutoPositioning.new
# Set last page for visual representations insertion
position.page_number = -1
# 1.00cm of space between lines
position.row_spacing = 1.0
# Width  = 7cm and Height = 3cm
size = PkiExpress::PadesSize.new(7.0, 3.0)
position.signature_rectangle_size = size
position_container = PkiExpress::PadesVisualRectangle.new
position_container.left = 3.0               # Left margin   = 3.00cm
position_container.right = 3.0              # Right margin  = 3.00cm
position_container.bottom = 2.0             # Bottom margin = 2.00cm
position_container.top = 8.0                # Top margin    = 8.00cm
position.container = position_container
vr.position = position
...
signer.setVisualRepresentation(vr);
```

[!include[Text](../../../includes/visual-rep/text.md)]

```ruby
# Visual representation text
# Set signer name
text = PkiExpress::PadesVisualText.new('Signed by {{name}}')
# Set the font size
text.font_size = 10.0
# Include signing time
text.include_signing_time = true
# Set the signing time format
text.signing_time_format = "dd/MM/yy H:mm:ss zzz"
# Text container
container = PkiExpress::PadesVisualRectangle.new
container.left = 0.0
container.top = 0.0
container.right = 1.5
container.bottom = 0.5
text.container = container
```

* Image

  It's also possible to set a background image within the visual representation rectangle and customize the image's opacity and alignment.

```ruby
image = PkiExpress::PadesVisualImage.new
image.content = pdf_content
# Right-align image inside the visual representation rectangle.
image.horizontal_align = PadesHorizontalAlign::RIGHT
# Vertically centralize the image inside the visual representation rectangle.
image.vertical_align =PadesVerticalAlign::CENTER
```

## See also

* [Visual representation samples](samples.md)