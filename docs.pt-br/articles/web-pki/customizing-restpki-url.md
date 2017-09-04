# Especificando a URL do Rest PKI

Na seção [Primeiros Passos](get-started.md), vimos que o método `init()` deve ser chamado antes de qualquer outra chamada:

```javascript
pki.init(onWebPkiReady);
```

Caso seja utilizado um RestPKI não padrão, ou seja direfente de https://pki.rest , é necessário configurar a URL do RestPKI que será utilizado na chamada do `init()`

```javascript
pki.init({
	 restPkiUrl: 'https://YourRestPKI.com/',
    ready: onWebPkiReady,
});
```

> [!NOTE]
> Caso o WebPKI não esteja sendo utilizado em conjunto com o RestPKI essa configuração é desnecesária. 

Para mais informações sobre o `init()`, consulte a
[documentação do método](http://webpki.lacunasoftware.com/Help/classes/LacunaWebPKI.html#method_init).
