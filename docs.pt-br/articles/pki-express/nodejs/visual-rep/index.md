# Representação Visual

[!include[Posicionamento](../../../includes/visual-rep/positioning.md)]

```javascript
const signer = new PadesSigner();
...
let visual = {
  position: {
    pageNumber: -1,     // Define inserção na última página do documento
    manual: {
      width: 7,         // Largura = 7cm
      height: 3,        // Altura = 3cm
      left: 2.50,       // Distância da margem esquerda = 2.50cm
      bottom: 2.50      // Distância da margem inferior = 2.50cm
    }
  },
  text: {...},
  image: {...}
};
signer.setVisualRepresentation(visual);
```

[!include[Posicionamento automatico](../../../includes/visual-rep/auto-positioning.md)]


```javascript
const signer = new PadesSigner();
...
let visual = {
  position: {
    pageNumber: -1,               // Define inserção na última página do documento
    auto: {
      container: {
        left: 3.00,               // Distância da margem esquerda = 3.00cm
        right: 3.00,              // Distância da margem direita = 3.00cm
        bottom: 2.00,             // Distância da margem inferior = 2.00cm
        top: 8.00                 // Distância da margem superior = 8.00cm
      },
      signatureRectangleSize: {
        height: 3,                // Altura = 3cm
        width: 7                  // Largura = 7cm
      },
      rowSpacing: 1.00            // 1.00cm de espaçamento entre linhas
    }
  },
  text: {...},
  image: {...}
};
signer.setVisualRepresentation(visual);
```
[!include[Texto](../../../includes/visual-rep/text.md)]
```javascript
let visual = {
  text: {                                       // Texto da representação visual
    text: 'Signed by {{name}}',                 // Inclui o nome do signatário
    container: array  (                         // Define container do texto
      left: 0,
      top: 0,
      right: 1.5,
      bottom: 0.5
    },
    includeSigningTime: true,                   // Inclui a data da assinatura
    signingTimeFormat: 'dd/MM/yy H:mm:ss zzz',  // Define a formatação da data
    fontSize: 10.0                              // Define tamanho da fonte do texto
  },
  position: {...},
  image: {...}
};
```

* Imagem

  Também é possível definir uma imagem de fundo para o retângulo de assinatura e customizar sua opacidade e alinhamento.

  Como exemplo, definiremos um posicionamento do texto relativo ao retângulo de assinatura conforme a figura abaixo.

```javascript
const signer = new PadesSigner();
...
// Cria uma referencia para o arquivo stamp. E posteriormente esse arquivo pode ser
// referenciado como "fref://{alias}" no campo "url" da representação visual
signer.addFileReference('stamp', "imagem_de_fundo.png");
visual = {
  text: {...},
  position: {...},
  image: {
    resource: {
      url: 'fref://stamp',    // Utiliza imagem_de_fundo referenciada como  'stamp'
    },
    horizontalAlign: 'right', // Alinha a imagem horizontamente na direita
    verticalAlign: 'center',  // Alinha a imagem verticalmente no centro
  },
};
signer.setVisualRepresentation(visual);
```
* É possível remover a representação visual:

```javascript
signatureStarter.suppressDefaultVisualRep(true);
```

## Veja também

* [Exemplos completos de representação visual](samples.md)
