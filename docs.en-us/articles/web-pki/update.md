# Updates - Web PKI

[Web PKI](index.md) is automatically updated on users' computers. However, you can (and should) update the Javascript library
(`lacuna-web-pki-{version}.js`) on your web application regularly.

Updating the Javascript library:

* Fixes known issues that cannot be resolved with updates to the component installed on users' computers
* Gives your application access to new features on Web PKI

> [!TIP]
> All updates are guaranteed to be 100% backward compatible, so you can update the library without fear of breaking existing code

The latest version of the Javascript library is **2.14.3**. You can get it on the link below:

https://cdn.lacunasoftware.com/libs/web-pki/lacuna-web-pki-2.14.3.min.js

Or include in your Web page as:
```html
<script type="text/javascript" src="https://cdn.lacunasoftware.com/libs/web-pki/lacuna-web-pki-2.14.3.min.js"
  integrity="sha256-P92LF1ePw0qwnmbefDpDiMcr8rmwFkcxVX+utanmlek="
  crossorigin="anonymous"></script>
```

Or install the [NPM web-pki package](https://www.npmjs.com/package/web-pki):

```
$ npm install web-pki --save
```

> [!NOTE]
> Feel free to refer to that URL directly, we will keep it online permanently.
