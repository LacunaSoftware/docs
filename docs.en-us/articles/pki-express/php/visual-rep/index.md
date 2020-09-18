# Visual representation

A visual representation of a PDF signature is the text or image with information about the document's internal signature. Some PDF visualization programs can link visual representations with the signature and signer data and properties. 

**Each visual representation is always related to only one PDF signature. And each PDF signature can have up to one visual representation.**

The sections below show the PDF signatures' visual representation options, parameters, and customizations.

## Visual Representation Elements

The visual representation dictionary has three parameters to be defined: position, text, and image. The list below briefly explains those visual representation elements.

* Position

  The visual representation rectangle can be automatic or manual positioned.

  * Automatic positioning

    We recommend the usage of automatic positioning when it's possible to delimit a region (container) of the PDF page for the insertion of visual representations. This positioning mode inserts and organizes the visual representation within the specified region. The figure below shows the behavior of the automatic positioning. The visual representations are inserted one by one inside the external container, illustrated by the red rectangle.

    ![Visual representation auto positioning](../../../../../images/pki-sdk/visual-rep-result-mini.png)

  * Manual positioning

    We recommend the usage of manual positioning when the position of each visual representation, or its regions, is not predefined, as when the user chooses the page and visual representation's position.

    ![Visual representation manual positioning](../../../../../images/pki-sdk/visual-rep-manual-mini.png)

* Text

  The visual representations have textual information that is configured by the parameter `text`.

* Image

  The visual representations can have background images with customizable opacity and alignment. The parameter `image` configures these options.

## Visual representation positioning

Inside the parameter `position`, you can define the PDF page for the representation insertion, the position inside the page, and the measurement unit used to inform the position.

The parameter `pageNumber` sets the page to insert the visual representations. Negative numbers start counting from the end of the document, so -1 is the last page, -2 is the penultimate page, and so on. The special value 0 (zero) means a new blank page, at the end of the document, is used to insert the visual representations.

The parameter `measurementUnits` sets the measurement unit used to set the positioning parameters. The default unit is `'centimeters'` but `'pdfPoints'` is also a valid value. 

### Manual Positioning

The parameter `manual` sets the signature rectangle position on the page. The rectangle has the parameters  `top`, `bottom`, `left`, `right`, `width`, and `height`, as shown in the figure below. 

![PAdES rectangle](../../../../../images/pki-sdk/pades-rectangle.png)

The code below exemplifies how to configure a visual representation to be inserted on the last page of the document; having 7cm of width and 3cm of height; with left and bottom margin of 2.5cm, as shown in the figure below. 

![PAdES visual representation manual positioning](../../../../../images/pki-sdk/pades-visual-rep-manual-pos.png)

```php 
$signer = new PadesSigner();
...
$visual = array(
  'position' => array(
    'pageNumber' => -1,    // Set last page for visual representation insertion
    'manual' => array(
      'width' => 7,        // Width  = 7cm
      'height' => 3,       // Height = 3cm
      'left' => 2.50,      // Left margin   = 2.50cm
      'bottom' => 2.50     // Bottom margin = 2.50cm
    )
  ),
  'text' => array(...),
  'image' => array(...)
);
$signer->setVisualRepresentation($visual)
```

For more information about how to define a visual representation position, see the article:
[Defining a container](containers.md).

### Automatic positioning

Instead of setting each visual representation position within the PDF page, it's possible to make it automatically. In the automatic positioning, you set the visual representation size (width and height) and the container inside which to insert all the visual representation, one by one.

The parameter container sets the external container size and position. Similar to the visual representation settings on the manual positioning, it has the following parameters: `top`, `bottom`, `left`, `right`, `width`, and `height`. And the parameter `signatureRectangleSize` sets the visual representation size (`width` and `height`).

The parameter `rowSpacing` sets the space between "rows" of visual representations. When the space in the current row is not enough to insert the next visual representation, it's inserted in a new row, spaced by the given `rowSpacing` value.
 
By default, the visual representations insertion happens from left to right and from top to bottom. However, this behavior is customizable with the parameters `horizontalDirection` (`'rightToLeft'` or `'leftToRight'`) and `verticalDirection` (`'topDown'` or `'bottomUp'`).

The code below exemplifies how to configure a visual representation to be inserted on the last page of the document; inside a container with a left and right margin of 3cm, bottom margin of 2cm, and top margin of 10cm; and having the size 7cm of width and 3cm of height, as shown in the figure below.

![PAdES visual representation auto positioning](../../../../../images/pki-sdk/auto-positioning.png)

```php 
$signer = new PadesSigner();
...
$visual = array(
  'position' => array(
    'pageNumber' => -1,        // Set last page for visual representations insertion
    'auto' => array(
      'container' => array(
        'left' => 3.00,        // Left margin   = 3.00cm
        'right' => 3.00,       // Right margin  = 3.00cm
        'bottom' => 2.00,      // Bottom margin = 2.00cm
        'top' => 8.00          // Top margin    = 8.00cm
      ),
      'signatureRectangleSize' => array(
        'height' => 3,          // Height = 3cm
        'width' => 7            // Width  = 7cm
      ),
      'rowSpacing' => 1.00      // 1.00cm of space between lines
    )
  ),
  'text' => array(...),
  'image' => array(...)
);
$signer->setVisualRepresentation($visual);
```

> [!NOTE]
> The above code specifies a container with variable width and height. There are many other possible behaviors for the external container. For more information, see the article [Defining a container](containers.md).

The figure below shows the expected result after signing a document using the above code. 

![PAdES visual representation auto positioning result](../../../../../images/pki-sdk/visual-rep-result.png)

## Text and image positioning

* Text

  Inside the visual representation rectangle, the PKI Express supports the customization of text alignment, positioning, and content. A `container` can be defined to set the text position. If none is defined, the text will fill all the rectangle.

  The parameter `HorizontalAlign` (`'left'` or `'right'`) sets the text alignment. The parameter `fontSize` sets the font size used on the text of the visual representation.

  The parameter `includeSigningTime` must be `true` to include the signature's date and time in the visual representation. Use the parameter `signingTimeFormat` to customize the data display format.

  The code below exemplifies the text positioning withing the visual representation rectangle, as shown in the figure below.

  ![PAdES visual text](../../../../../images/pki-sdk/pades-visual-text.png)

```php 
$visual = array(
  'text' => array(                               // Visual representation text
    'text' => "Signed by {{name}}",                // Set signer name
    'container' => array(                        // Text container
      'left' => 0,
      'top' => 0,
      'right' => 1.5,
      'bottom' => 0.5
    ),
    'includeSigningTime' => true,                  // Include signing time
    'signingTimeFormat' => "dd/MM/yy H:mm:ss zzz", // Set the signing time format
    'fontSize' => 10.0                             // Set the font size
  ),
  'position' => array(...),
  'image' => array(...)
);
```

* Image

  It's also possible to set a background image within the visual representation rectangle and customize the image's opacity and alignment.

## See also

* [Visual representation samples](samples.md)