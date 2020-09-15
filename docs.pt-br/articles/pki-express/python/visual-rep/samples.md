# Exemplos completos

## Exemplo completo com posicionamento automático

Criaremos um posicionamento automático customizado que será aplicado na última página do documento.

O container de inclusão, região na qual as representações visuais das assinaturas serão organizadas automaticamente,
será definido seguindo o modelo representado na imagem abaixo.

![PAdES auto positioning container](../../../../../images/pki-sdk/pades-autopos-container.png)

O código abaixo exemplifica como definir estes parâmetros em um container.

```python
container = {
    'left': 3.00,
    'right': 3.00,
    'bottom': 2.00,
    'top': 8.00
}
```

Para mais informações de como definir um Container, veja o artigo [Definindo um container](containers.md)

Cada assinatura incluída terá sua representação visual seguindo os parâmetros do retângulo de assinatura, texto e imagem
seguindo o modelo representado pela imagem abaixo.

![PAdES auto positioning rectangle](../../../../../images/pki-sdk/visual-rep-rectangle.png)

O retângulo externo da assinatura tera 3cm x 7cm. Será incluído um brasão de imagem de fundo alinhada à direita no
retângulo de assinatura. O container do texto terá uma margem direita de 1.50cm em relação ao retângulo externo,
impedindo, para este exemplo, que o texto fique por cima da imagem. O código abaixo demonstra como definir estes parâmetros.

```python
# Definindo retângulo de assinatura
signature = {
    'height': 3.0,
    'width': 7.0
}

# Definindo o container do Texto
textContainer = {
    'left': 0,
    'right': 1.5,
    'bottom': 0,
    'top': 0
}

# Definindo imagem de fundo
image = {
    'resource': {
        'content': getPdfStampContent()   # Bytes da imagem a ser inserida
    },
    'horizontalAlign': = 'right',         # Define imagem alinhada à direita no retângulo da representação visual
    'verticalAlign': 'center',            # Define imagem alinhada verticalmente centralizada no retângulo da representação visual
}
```

À medida que as assinaturas forem sendo realizadas, o resultado esperado para as representações visuais incluídas
automaticamente é o apresentado na imagem abaixo.

![PAdES auto positioning result](../../../../../images/pki-sdk/visual-rep-result.png)

## Exemplo completo com posicionamento automático

```python
signer = PadesSigner()
signer.set_pkcs12_from_path(cert_path)
signer.cert_password = 'password'
signer.set_pdf_to_sign_from_raw(pdf_bytes)
signer.signature_policy = standard_signature_policies.PADES_BASIC_WITH_LTV

# Cria uma referencia para o arquivo stamp. E posteriormente esse arquivo pode ser 
# referenciado como "fref':#{alias}" no campo "url" da representação visual
signer.add_file_reference('stamp', get_pdf_stamp_path())

# Criando objeto de representação visual
visual = {
    'position': {
        'pageNumber': -1,
        'auto': {                                         # Define posicionamento automático
            'container': {                                # Define o container para posicionamento das representações visuais
                'left': 3.00,
                'right': 3.00,
                'bottom': 2.00,
                'top': 8.00
            },
            'signatureRectangleSize': {                   # Define o retângulo da representação visual
                'height': 3.0,
                'width': 7.0,
            },
            'rowSpacing': 1.0,                            # Define o espaçamento entre linhas de representações visuais
            'horizontalDirection': "leftToRight",         # Define que as representações serão posicionadas da esquerda para direita (comportamento padrão).
            'verticalDirection': "topDown",              # Define que as representações serão posicionadas de cima para baixo (comportamento padrão).
    },
    'text': {                                             # Texto da representação visual

        'text': 'Signed by {{name}} ({{national_id}})',   # Define o texto a ser inserido.
        'fontSize': 13.0,                                 # Define o tamanho da fonte do texto.
        'includeSigningTime': true,                       # Define que o horário da assinatura também seja renderizado.
        'horizontalAlign': 'right',                       # Define texto alinhado à direita no container.
        'container': {  
            'left': 0,                                    # Opicional. Define o container retangular dentro da
            'top': 0,                                     # representação da assinatura onde o texto será inserido.
            'right': 1.5,                                 # Por padrão, o texto pode ocupar todo o retângulo da 
            'bottom': 0,                                  # representação (o quanto será de fato preenchido depende 
        },                                              # do comprimento do texto e do tamanho da fonte).

    },
    'image': {                                             # Imagem da representação visual
        'resource': {
            'url': 'fref':#stamp',                         # Referência para a imagem a ser inserida.
        },
        'horizontalAlign': 'Right',                        # Define imagem alinhada à direita no retângulo da representação visual.
        'verticalAlign': 'Center',                         # Define imagem centralizada verticalmente no retângulo da representação visual.
    }
}

signer.set_visual_representation(visual)            # Define representação visual na assinatura

signed_pdf = '%s.pdf' % (str(uuid.uuid4()))                     # Gera o nome do arquivo PDF assinado com representação visual

signer.output_file = signed_pdf
signer.sign(False)                                # Assina o documento e insere a representação visual
```

A execução do exemplo acima produz o seguinte resultado na assinatura de um PDF':

![PAdES auto positioning sample](../../../../../images/pki-sdk/pdf-auto-pos.png)
