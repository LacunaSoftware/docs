# Samples

## Automatic positioning sample

This sample creates a customized automatic positioning applied in the document's last page.

The model below shows the measures used on the container that delimits the region where the visual representation will be inserted and automatically ordered.

![PAdES auto positioning container](../../../../../images/pki-sdk/pades-autopos-container.png)

The following code exemplifies how to set the container's parameters.

```python
# Visual representation positioning container.
container = {
    'left': 3.00,
    'right': 3.00,
    'bottom': 2.00,
    'top': 8.00
}
```

For more information on how to set Containers, read the article [Defining a container](containers.md)

Each inserted signature has a visual representation. The model below shows its rectangle, text, and image parameters.

![PAdES auto positioning rectangle](../../../../../images/pki-sdk/visual-rep-rectangle.png)

The external signature's rectangle will be 3cm x 7cm. It will have a badge as a background image that will be right-aligned to the rectangle. The text's container will have a right margin of 1.50cm so to avoid the text overlapping the image. The following code shows how to set these parameters. 

```python
# Visual representation rectangle
signature = {
    'height': 3.0,
    'width': 7.0
}

# Text container
textContainer = {
    'left': 0,
    'right': 1.5,
    'bottom': 0,
    'top': 0
}

# Background image
image = {
    'resource': {
        # To be inserted image bytes
        'content': getPdfStampContent()
    },
    # Right-align image inside the visual representation
    # rectangle. Valid values are 'right', 'center' and 
    # 'left'.
    'horizontalAlign': = 'right',
    # Vertically centralize the image inside the visual
    # representation rectangle. Valid values are 'top',
    # 'center' and 'bottom'.
    'verticalAlign': 'center',
}
```

The image below shows the expected result of the automatically inserted visual representation after the completion of the signatures.

![PAdES auto positioning result](../../../../../images/pki-sdk/visual-rep-result.png)

## Complete automatic positioning sample

```python
signer = PadesSigner()
signer.set_pkcs12_from_path(cert_path)
signer.cert_password = 'password'
signer.set_pdf_to_sign_from_raw(pdf_bytes)
signer.signature_policy = standard_signature_policies.PADES_BASIC_WITH_LTV

# Set a file reference for the stamp file.  Note that the
# file can be referenced later by "fref://{alias}" at the
# "url" field on the visual representation.
signer.add_file_reference('stamp', get_pdf_stamp_path())

# Create a visual representation.
visual = {
    'position': {
        'pageNumber': -1,
        # Set the measurement unit of the parameters as
        # centimeters (default measurement unit). Valid 
        # values are 'centimeters' and 'pdfPoints'. 
        'measurementUnits': 'centimeters',
        # Set automatic positioning.
        'auto': {
            # Set the visual representation positioning
            # container.
            'container': {
                'left': 3.00,
                'right': 3.00,
                'bottom': 2.00,
                'top': 8.00
            },
            # Set the visual representation rectangle.
            'signatureRectangleSize': {
                'height': 3.0,
                'width': 7.0,
            },
            # Set the distance between lines of visual
            # representations.
            'rowSpacing': 1.0,
            # Horizontally insert representations from
            # left to right (default behavior). Valid
            # values are 'leftToRight' and 'rightToLeft'.
            'horizontalDirection': 'leftToRight',
            # Vertically insert representations from top
            # to bottom (default behavior). Valid values
            # are 'leftToRight' and 'rightToLeft'.
            'verticalDirection': 'topDown',
        },
    },
    'text': {    # Visual representation text.
        # Set text to be rendered. For a full list of the
        # supported tags, see:
        # https://docs.lacunasoftware.com/articles/pki-express/python/visual-rep/index.html#pades-tags
        'text': 'Signed by {{name}} ({{national_id}})',
        # Set text's font size.
        'fontSize': 13.0,
        # Specify that the signing time should also be 
        # rendered.
        'includeSigningTime': True,
        # Set container's text as right-aligned. Valid
        # values are 'right' and 'left'.
        'horizontalAlign': 'right',
        # Optional. Set the container within the signature
        # rectangle on which to place the text. By
        # default, the text can occupy the entire 
        # rectangle (how much of the rectangle the text
        # will actually fill depends on the length and 
        # font size).
        'container': {
            'left': 0,
            'top': 0,
            'right': 1.5,
            'bottom': 0,
        },
    },
    'image': {    # Visual representation image.
        'resource': {
            # Reference to the image.
            'url': 'fref://stamp',
        },
        # Right-align image inside the visual 
        # representation rectangle. Valid values are
        # 'right', 'center' and 'left'.
        'horizontalAlign': 'right',
        # Vertically centralize the image inside the
        # visual representation rectangle. Valid values are
        # 'top', 'center', 'bottom'.
        'verticalAlign': 'center',
    }
}

# Set signature visual representation.
signer.set_visual_representation(visual)

# Generate the name of the signed PDF file with visual 
# representations.
signed_pdf = '%s.pdf' % (str(uuid.uuid4()))
signer.output_file = signed_pdf
# Sign document and insert visual representations.
signer.sign(False)
```

The above code results in the following signed PDF file.

![PAdES auto positioning sample](../../../../../images/pki-sdk/pdf-auto-pos.png)