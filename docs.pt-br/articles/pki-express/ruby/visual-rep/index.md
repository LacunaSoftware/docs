# Representação Visual

[!include[Posicionamento](../../../includes/visual-rep/positioning.md)]

```ruby
signer = PkiExpress::PadesSigner.new
...
vr = PkiExpress::PadesVisualRepresentation.new
position = PkiExpress::PadesVisualManualPositioning.new
position.page_number = -1               # Define inserção na última página do documento
signature_rectangle = PkiExpress::PadesVisualRectangle.new
signature_rectangle.width = 7           # Largura = 7cm
signature_rectangle.height = 3          # Altura = 3cm
signature_rectangle.left = 2.5          # Distância da margem esquerda = 2.50cm
signature_rectangle.bottom = 2.5        # Distância da margem inferior = 2.50cm
position.signature_rectangle(signature_rectangle);
vr.position = position
...
signer.visual_representation = vr
```

[!include[Posicionamento automatico](../../../includes/visual-rep/auto-positioning.md)]


```ruby
signer = PkiExpress::PadesSigner.new
...
vr = PkiExpress::PadesVisualRepresentation.new
position = PkiExpress::PadesVisualAutoPositioning.new
position.page_number = -1                   # Define inserção na última página do documento
position.row_spacing = 1.0                  # 1.00cm de espaçamento entre linhas
size = PkiExpress::PadesSize.new(7.0, 3.0)  # Largura = 7cm e Altura = 3cm
position.signature_rectangle_size = size
position_container = PkiExpress::PadesVisualRectangle.new
position_container.left = 3.0               # Distância da margem esquerda = 3.00cm
position_container.right = 3.0              # Distância da margem direita = 3.00cm
position_container.bottom = 2.0             # Distância da margem inferior = 2.00cm
position_container.top = 8.0                # Distância da margem superior = 8.00cm
position.container = position_container
vr.position = position
...
signer.setVisualRepresentation(vr);
```

[!include[Texto](../../../includes/visual-rep/text.md)]

```ruby
# Texto da representação visual
text = PkiExpress::PadesVisualText.new('Signed by {{name}}')  # Inclui o nome do signatário
text.font_size = 10.0                                         # Define tamanho da fonte do texto
text.include_signing_time = true                              # Inclui a data da assinatura
text.signing_time_format = "dd/MM/yy H:mm:ss zzz"             # Define a formatação da data
# Define container do texto
container = PkiExpress::PadesVisualRectangle.new
container.left = 0.0
container.top = 0.0
container.right = 1.5
container.bottom = 0.5
text.container = container
```

* Imagem

  Também é possível definir uma imagem de fundo para o retângulo de assinatura e customizar sua opacidade e alinhamento.

  Como exemplo, definiremos um posicionamento do texto relativo ao retângulo de assinatura conforme a figura abaixo.

```ruby
image = PkiExpress::PadesVisualImage.new
image.content = pdf_content
image.horizontal_align = PadesHorizontalAlign::RIGHT  # Alinha a imagem horizontamente na direita
image.vertical_align =PadesVerticalAlign::CENTER      # Alinha a imagem verticalmente no centro
```

## Veja também

* [Exemplos completos de representação visual](samples.md)