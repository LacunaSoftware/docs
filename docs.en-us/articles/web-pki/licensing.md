# Licensing

In order to use [Web PKI](index.md) on web pages outside of localhost, you must set the component license. To set the license,
choose one of the formats given (binary or JSON) and pass it to the constructor of the `LacunaWebPKI` license.

If you prefer the binary format:

```javascript
var webPkiLicense = new LacunaWebPKI('ASYAanNma...Q==');
var pki = new LacunaWebPKI(webPkiLicense);
```

Or, if you prefer the JSON format:

```javascript
var webPkiLicense = {
  "format": 1,
  "allowedDomains": [
    "www.patorum.com"
  ],
  ...
};
var pki = new LacunaWebPKI(webPkiLicense);
```

> [!NOTE]
> A license is not required when trying out Web PKI on web applications running on localhost (whichever port)
> or when using Web PKI together with Rest PKI on cloud (in this case, even in production).

For more information on the different license formats, read the section below.

<a name="formats" />
## License formats

You will receive it in two forms, such as:

```javascript
// Binary license
var webPkiLicense = 'ASYAanNma...Q==';
// JSON license
var webPkiLicense = {
  "format": 1,
  "allowedDomains": [
    "www.patorum.com"
  ],
  ...
};
```

The two forms are equivalent. The difference is that the binary form hides the details of your license, while in the json form they're easily readable.
If you don't mind users who go looking into your source code to be able to see the details of your license, the json form is preferred because it makes
it easier to diagnose problems such as an expired license. However, if you'd rather hide such information, use the binary form. Please note that the
details are not encrypted in the binary form, just encoded in Base64.

> [!WARNING]
> The JSON version contains a field called `signature`. The value of this field *looks like* the binary license. However, it cannot be
> used separately as a license, it can only be used inside its full JSON license.
