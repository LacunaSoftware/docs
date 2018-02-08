# Requirements

Install [NodeJS](https://nodejs.org/)

Install typedoc
```
npm install -g typedoc
```

## Web PKI typedoc build
```
typedoc --out web-pki/ --theme themes/lacuna --readme none --name "Web PKI - API Reference" --excludeExternals --includeDeclarations lacuna-web-pki.d.ts
```

## TODO

Typedoc lacuna custom theme.