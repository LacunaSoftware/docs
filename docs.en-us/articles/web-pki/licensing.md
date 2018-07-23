# Licensing

In order to use [Web PKI](index.md) on web pages outside of localhost, you must set the component license. To set the license,
choose one of the formats given (binary or JSON) and pass it to the constructor of the `LacunaWebPKI` license.

If you prefer the binary format:

```javascript
var webPkiLicense = 'ASYAanNma...Q==';
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
  "homologDomains": [
    "staging.patorum.com",
    "ip4:10.0.0.0/8",
    "ip4:127.0.0.0/8",
    "ip4:172.16.0.0/12",
    "ip4:192.168.0.0/16"
  ],
  "productLevel": "Standard",
  "expiration": null,
  "signature": "LzdT1cgp...w=="
};
```

The two forms are equivalent. The difference is that the binary form hides the details of your license, while in the json form they're easily readable.
If you don't mind users who go looking into your source code to be able to see the details of your license, the json form is preferred because it makes
it easier to diagnose problems such as an expired license. However, if you'd rather hide such information, use the binary form. Please note that the
details are not encrypted in the binary form, just encoded in Base64.

> [!WARNING]
> The value of the field `signature` of the JSON license cannot be used as a licence on its own (although it looks like a binary license). Use either
> the binary license or the entire JSON license. Choosing bits and pieces will result in a validation failure be the component.

## Usage on private IPs

Licenses for Web PKI are issued including private IP ranges for staging purposes:

```javascript
  ...
  "homologDomains": [
    ...,
    "ip4:10.0.0.0/8",
    "ip4:127.0.0.0/8",
    "ip4:172.16.0.0/12",
    "ip4:192.168.0.0/16"
  ],
  ...
```

This means that all IP addresses on the private IP ranges can be used to stage applications:

* 10.x.x.x
* 127.x.x.x
* 172.16.0.0 to 172.31.255.255
* 192.168.x.x

For instance, a web application hosted on `http://192.168.5.12:8000/signature/` would be acceptable.
