# Especificando a URL do Rest PKI

Na seção [Primeiros Passos](get-started.md), vimos que o método [`init()`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init) deve ser chamado antes de qualquer outra chamada:

```javascript
pki.init(onWebPkiReady);
```

Caso seja utilizado um RestPKI não padrão, ou seja direfente de https://pki.rest , é necessário configurar a licença do WebPKI e a URL do RestPKI que será utilizado na chamada do `init()`

```javascript
var pki = new LacunaWebPKI('ASYAanNmaWRkbGUubmV0LHdlYnBraS5sYWN1bmFzb2Z0d2FyZS5jb20AAAABClKvO1J22vAD+YmfANiKQLbcLE1lNraPKCel6tRM+ZxR+h6M/crtJYRRVGGz7hrdbM0Y0mfTu15RMYGqQMi1QNZS6GrT4vNzIayv552Fl0EFWQA7jWlctUwfYoHRHVEnCNx9YGXDiA9+yDoGlVwgTR7fjzNeS3Fen1MVIyKBF464gN0JvdiCRJMI47JGVDkPmKjcrYIvJs6y5Lg25RW4ZnBKVruS+HR2s3k8ZrV4y4RCQE4UYMKbukF9vsF+JqAEifRlPq2xLcrNdxBveVDSXS/LRHAcrZrMM+Iw4A79jl0ngWPcy+CwinAhT+3dxVo5ZWMRQFpmTkylEMDvTjV9wQ==');
pki.init({
    restPkiUrl: 'https://YourRestPKI.com/',
    ready: onWebPkiReady,
});
```

> [!NOTE]
> Caso o WebPKI não esteja sendo utilizado em conjunto com o RestPKI essa configuração é desnecesária. 

Para mais informações sobre o [`init()`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init), consulte a
[documentação do método](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init).
