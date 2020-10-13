# Exemplos completos

## Exemplo completo com posicionamento automático

Criaremos um posicionamento automático customizado que será aplicado na última página do documento.

O container de inclusão, região na qual as representações visuais das assinaturas serão organizadas automaticamente,
será definido seguindo o modelo representado na imagem abaixo.

![PAdES auto positioning container](../../../../../images/pki-sdk/pades-autopos-container.png)

O código abaixo exemplifica como definir estes parâmetros em um container.

```php
$container = array(
    'left' => 3.00,
    'right' => 3.00,
    'bottom' => 2.00,
    'top' => 8.00
);
```

Para mais informações de como definir um Container, veja o artigo [Definindo um container](containers.md)

Cada assinatura incluída terá sua representação visual seguindo os parâmetros do retângulo de assinatura, texto e imagem
seguindo o modelo representado pela imagem abaixo.

![PAdES auto positioning rectangle](../../../../../images/pki-sdk/visual-rep-rectangle.png)

O retângulo externo da assinatura tera 3cm x 7cm. Será incluído um brasão de imagem de fundo alinhada à direita no
retângulo de assinatura. O container do texto terá uma margem direita de 1.50cm em relação ao retângulo externo,
impedindo, para este exemplo, que o texto fique por cima da imagem. O código abaixo demonstra como definir estes parâmetros.

```php
// Definindo retângulo de assinatura
$signature = array(
    'height' => 3.0,
    'width' => 7.0
);

// Definindo o container do Texto
$textContainer = array(
    'left' => 0,
    'right' => 1.5,
    'bottom' => 0,
    'top' => 0
);

// Definindo imagem de fundo
$image = array(
    'resource' => array(
        // Bytes da imagem a ser inserida
        'content' => getPdfStampContent()
    ),
    // Define imagem alinhada à direita no retângulo da
    // representação visual. Valores possíveis: 'right',
    // 'center' e 'left'.
    'horizontalAlign' => 'right',
    // Define imagem alinhada verticalmente centralizada no
    // retângulo da representação visual. Valores 
    // possíveis: 'top', 'center' e 'bottom'.
    'verticalAlign' => 'center',
);
```

À medida que as assinaturas forem sendo realizadas, o resultado esperado para as representações visuais incluídas
automaticamente é o apresentado na imagem abaixo.

![PAdES auto positioning result](../../../../../images/pki-sdk/visual-rep-result.png)

## Exemplo completo com posicionamento automático

```php
$signer = new PadesSigner();
$signer->setPkcs12($cert_path);
$signer->setCertPassword('password');
$signer->setPdfToSignFromContentRaw($pdfBytes);
$signer->signaturePolicy = StandardSignaturePolicies::PADES_BASIC_WITH_LTV;

// Cria uma referencia para o arquivo stamp. E 
// posteriormente esse arquivo pode ser referenciado como
// "fref://{alias}" no campo "url" da representação visual
$signer->addFileReference('stamp', getPdfStampPath());

// Criando objeto de representação visual
$visual = array(
    'position' => array(
        'pageNumber' => -1,
        // Define a unidade das medidas fornecidas como
        // centímetros (unidade padrão). Valores possíveis:
        // 'centimeters' e 'pdfPoints'.
        'measurementUnits' => 'centimeters',
        // Define posicionamento automático
        'auto' => array(
            // Define o container para posicionamento das
            // representações visuais
            'container' => array(
                'left' => 3.00,
                'right' => 3.00,
                'bottom' => 2.00,
                'top' => 8.00
            ),
            // Define o retângulo da representação visual
            'signatureRectangleSize' => array(
                'height' => 3.0,
                'width' => 7.0,
            ),
            // Define o espaçamento entre linhas de 
            // representações visuais
            'rowSpacing' => 1.0,
            // Define que as representações serão 
            // posicionadas da esquerda para direita 
            // (comportamento padrão). Valores possíveis:
            // 'leftToRight' e 'rightToLeft'.
            'horizontalDirection' => 'leftToRight',
            // Define que as representações serão 
            // posicionadas de cima para baixo 
            // (comportamento padrão). Valores possíveis:
            // 'topDown' e 'BottomUp'.
            'verticalDirection' => 'topDown',
        )
    ),
    'text' => array(   // Texto da representação visual
        // Define o texto a ser inserido. Para ver a lista 
        // completa de tags suportadas, veja: 
        // https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PadesTags.md
        'text' => 'Signed by {{name}} ({{national_id}})',
        // Define o tamanho da fonte do texto.
        'fontSize' => 13.0,
        // Define que o horário da assinatura também seja
        // renderizado.
        'includeSigningTime' => true,
        // Define texto alinhado à direita no container.
        // Valores possíveis: 'right' e 'left'
        'horizontalAlign' => 'right',
        // Opicional. Define o container retangular dentro
        // da representação da assinatura onde o texto será
        // inserido. Por padrão, o texto pode ocupar todo o
        // retângulo da representação (o quanto será de 
        // fato preenchido depende do comprimento do texto
        // e do tamanho da fonte).
        'container' => array(
            'left' => 0,
            'top' => 0,
            'right' => 1.5,
            'bottom' => 0, 
        ),
    ),
    'image' => array(    // Imagem da representação visual
        'resource' => array(
            // Referência para a imagem a ser inserida.
            'url' => 'fref://stamp',
        ),
        // Define imagem alinhada à direita no retângulo da
        // representação visual. Valores possíveis: 
        // 'right', 'center' e 'left'
        'horizontalAlign' => 'right',
        // Define imagem centralizada verticalmente no 
        // retângulo da representação visual. Valores 
        // possíveis: 'top', 'center' e 'bottom'
        'verticalAlign' => 'center',
    )
);

// Define representação visual na assinatura
$signer->setVisualRepresentation($visual);
// Gera o nome do arquivo PDF assinado com representação 
// visual
$signedPdf = generateFileId('pdf');
$signer->setOutputFile($signedPdf);
// Assina o documento e insere a representação visual
$signer->sign();
```

A execução do exemplo acima produz o seguinte resultado na assinatura de um PDF:

![PAdES auto positioning sample](../../../../../images/pki-sdk/pdf-auto-pos.png)
