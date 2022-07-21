# Visual representation

[!include[Positioning](../../../includes/visual-rep/positioning.md)]

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

[!include[Auto Positioning](../../../includes/visual-rep/auto-positioning.md)]

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

[!include[Text](../../../includes/visual-rep/text.md)]

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

```php
$signer = new PadesSigner();
...
// Set a file reference for the stamp file.  Note that the file can be referenced
// later by "fref://{alias}" at the "url" field on the visual representation.
$signer->addFileReference('stamp', getPdfStampPath());
$visual = array(
  'text' => array(...),
  'position' => array(...),
  'image' => array(
    'resource' => array(
      'url' => 'fref://stamp',    // Reference to the image.
    ),
    'horizontalAlign' => 'right', // Right-align image inside the visual representation rectangle.
    'verticalAlign' => 'center',  // Vertically centralize the image inside the visual representation rectangle.
  )
);
$signer->setVisualRepresentation($visual);
```
* It's possible to remove the visual representation:
```php
$signatureStarter->suppressDefaultVisualRepresentation = true;
```
## See also

* [Visual representation samples](samples.md)