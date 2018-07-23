# Licenciamento

Para utilizar o Web PKI em aplicações web rodando fora do localhost, é preciso configurar a licença de uso do componente. Para
configurar a licença, basta escolher um dos dois formatos recebidos e passar no construtor da classe `LacunaWebPKI`.

Caso prefira o formato binário:

```javascript
var webPkiLicense = 'ASYAanNma...Q==';
var pki = new LacunaWebPKI(webPkiLicense);
```

Ou, se preferir o formato em JSON:

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
> A licença do Web PKI não é necessária para testar o Web PKI em uma aplicação web rodando no localhost (qualquer porta)
> ou ainda quando sendo utilizado em conjunto com o Rest PKI em nuvem (nesse caso, inclusive em produção).

Para mais informações sobre a diferença entre os formatos de licença, veja a seção abaixo.

<a name="formats" />
## Formatos de licença

Você receberá a licença em dois formatos, como abaixo:

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

Os dois formatos são equivalentes. A diferença é que o formato binário esconde os detalhes da sua licença, enquanto que no formato json eles são legíveis.
Se você não se importar que usuários que por ventura inspecionem o código fonte da página vejam os detalhes da sua licença, o formato json é preferível pois
facilita o diagnóstico de problemas como uma licença expirada. Entretanto, se você preferir esconder essas informações, utilize o formato binário. Note que
os detalhes não ficam cifrados no formato binário, apenas codificados em Base64.

> [!WARNING]
> O valor do campo `signature` da licença em formato JSON, embora se assemelhe à versão binária, não funciona como licença sozinho. Utilize ou a versão
> binária ou a versão JSON inteira. Qualquer tentativa de usar apenas algumas partes da licença resultará em rejeição da licença pelo componente.

## Uso em IPs internos

As licenças de uso do Web PKI são emitidas permitindo uso em caráter de homologação em qualquer IP privado:

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

Isso significa que todos os IPs das faixas privadas de IPs podem ser utilizados:

* 10.x.x.x
* 127.x.x.x
* 172.16.0.0 a 172.31.255.255
* 192.168.x.x

Por exemplo, um site de hologação hospedado em `http://192.168.5.12:8000/signature/` estaria contemplado.
