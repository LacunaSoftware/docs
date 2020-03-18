
# ICPBravoAccess Replacement

The replacement of the ICPBravoAccess library for the Web PKI component can be made
in a easy way.

First, *remove* the `<script>` tag that imports the ICPBravoAccess. After that, add
the `<script>` tags that imports the Web PKI component and replacement library. For example:

```html
<!-- Remove the following line -->
<!-- <script type="text/javascript" src="icpbravo.access.ext.js"></script> -->

<!-- Add the following lines -->
<script type="text/javascript" src="https://cdn.lacunasoftware.com/libs/web-pki/lacuna-web-pki-2.14.1.min.js"></script>
<script type="text/javascript" src="https://cdn.lacunasoftware.com/libs/pibask/lacuna-pibask-1.0.0.js"></script>
```

## Licensing

> [!NOTE]
> This license is not the same used by ICPBravoAccess. If you don't have it, please contact
our support at suporte@lacunasoftware.com.

In order to use [Web PKI](http://docs.lacunasoftware.com/en-us/articles/web-pki/index.html) on
web pages outside of localhost, you must set the component license. To set the license, choose one
of the formats given (binary or JSON) and pass it to the variable `window.lacunaWebPkiLicense`.

If you prefer the binary format:

```javascript
window.lacunaWebPkiLicense = 'ASYAanNma...Q==';
```

Or, if you prefer the JSON format:

```javascript
window.lacunaWebPkiLicense = {
  "format":  1,
  "allowedDomains": [
    "www.patorum.com"
  ],
  ...
};
```