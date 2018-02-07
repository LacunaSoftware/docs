# Requirements

Install [NodeJS](https://nodejs.org/)

Install typedoc
```
npm install -g typedoc
```

## Web PKI typedoc build
```
typedoc --out webpki-api/site/ --theme themes/lacuna --readme none --excludeExternals --includeDeclarations webpki-api/lacuna-web-pki.d.ts
```

## TODO

Typedoc lacuna custom theme.