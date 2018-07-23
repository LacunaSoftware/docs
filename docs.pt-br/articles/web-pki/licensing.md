# Licenciamento

Para utilizar o Web PKI em aplicações web rodando fora do localhost, é preciso configurar a licença de uso do componente.

> [!NOTE]
> A licença do Web PKI não é necessária quando utilizando o Web PKI em uma aplicação web rodando no localhost (qualquer porta)
> ou ainda quando sendo utilizado em conjunto com o Rest PKI em nuvem.

Para configurar a licença, basta escolher um dos dois formatos recebidos e passar no construtor da classe `LacunaWebPKI`:

Caso prefira o formato binário:

```javascript
var webPkiLicense = new LacunaWebPKI('ASYAanNma...Q==');
var pki = new LacunaWebPKI(webPkiLicense);
```

Ou, se preferir o formato em JSON:

```javascript
var webPkiLicense = {
  "format": 1,
  "allowedDomains": [
    "www.lacunasoftware.com"
  ],
  ...
};
var pki = new LacunaWebPKI(webPkiLicense);
```

Para mais informações sobre a diferença entre os formatos de licença, veja a seção [Formatos de licença](#formats) abaixo.

<a name="validation" />
## Validação da licença

O licenciamento é verificado da seguinte maneira:

1. O domínio do site que contém o javascript que utiliza o Web PKI precisa estar na "lista de domínios autorizados" da licença;
1. A data da máquina do usuário precisa ser anterior à data de expiração da licença (você pode optar por uma licença que não expira).

<a name="formats" />
## Formatos de licença

Você receberá a licença em dois formatos, como essas:

```javascript
// Binary license
var webPkiLicense = 'ASYAanNma...Q==';
// JSON license
var webPkiLicense = {
  "format": 1,
  "allowedDomains": [
    "www.lacunasoftware.com"
  ],
  ...
};
```

Os dois formatos são equivalentes. A diferença é que o formato binário esconde os detalhes da sua licença, enquanto que no formato json eles são legíveis.
Se você não se importar que usuários que por ventura inspecionem o código fonte da página vejam os detalhes da sua licença, o formato json é preferível pois
facilita o diagnóstico de problemas como uma licença expirada. Entretanto, se você preferir esconder essas informações, utilize o formato binário. Note que
os detalhes não ficam cifrados no formato binário, apenas codificados em Base64.

> [!WARNING]
> A versão JSON da licença contém um campo `signature` que se assemelha à licença binária. Entretanto, o conteúdo desse campo não pode ser usado isoladamente
> como uma licença, ele só faz sentido dentro do contexto da licença JSON.
