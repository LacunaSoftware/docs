# Using Rest PKI on Node.js

Rest PKI can be used on Node.js. To get started, choose one of the available samples projects:

* [Node.js MVC](mvc.md)
* [Node.js Single Page Application (SPA)](spa.md)

## Client library

All Express/Node.js sample projects use the NPM package [restpki-client](https://www.npmjs.com/package/restpki-client)
to access Rest PKI on Node.js applications.

To add it to your project, put this on your `package.json` file:

```json
{
    "dependencies": {
        "restpki-client": "1.0.0"
    }
}
```

After that, do a `npm install` to download the package and its dependencies (if you don't have **npm** installed, get it [here](https://www.npmjs.com/get-npm))

### Source code

The package is open-source, hosted on [GitHub](https://github.com/LacunaSoftware/RestPkiNodeClient). Feel free to fork the package if you need to make any customizations.
