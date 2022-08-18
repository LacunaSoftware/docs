# Atualizações - Web PKI

O [Web PKI](index.md) é atualizado automaticamente nos computadores dos usuários. Entretanto, você pode (e deve)
atualizar a biblioteca de Javascript (`lacuna-web-pki-{version}.js`) na sua aplicação web regularmente.

Atualizações à biblioteca de Javascript:

* Corrigem problemas que não podem ser resolvidos apenas através de atualizações ao componente instalado nos computadores dos usuários
* Permitem que a sua aplicação utilize novas funcionalidades do Web PKI

A última versão da biblioteca de Javascript é a **2.15.2**. Você pode obtê-la no link abaixo:

https://cdn.lacunasoftware.com/libs/web-pki/lacuna-web-pki-2.15.2.min.js

Ou incluir na sua página como:
```html
<script type="text/javascript" src="https://cdn.lacunasoftware.com/libs/web-pki/lacuna-web-pki-2.15.2.min.js"
  integrity="sha256-1YBmFfdb8pfq/5ibjis2jYVr7IaEmPokuTH7Ejbx9OE="
  crossorigin="anonymous"></script>
```

Ou instalar através do [Pacote NPM web-pki](https://www.npmjs.com/package/web-pki):

```
$ npm install web-pki --save
```

> [!TIP]
> Todas as atualizações são 100% retrocompatíveis, de modo que você pode atualizar a biblioteca sem
> perigo de causar problemas à sua aplicação web existente