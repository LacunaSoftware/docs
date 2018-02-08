# Requirements

Install [NodeJS](https://nodejs.org/)

Install typedoc
```
npm install -g typedoc
```

## Web PKI typedoc build
```
typedoc --out lacuna-webpki/ --theme themes/lacuna --readme none --name "Lacuna Web PKI - API" --excludeExternals --includeDeclarations lacuna-web-pki.d.ts
```

## TODO

Typedoc lacuna custom theme.