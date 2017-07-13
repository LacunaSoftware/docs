# Licenciamento

Para utilizar o Web PKI em aplicações web rodando fora do localhost, é preciso [adquirir uma licença](https://www.lacunasoftware.com/pt/home/certificate#/webPlans).
O licenciamento é verificado da seguinte maneira:

1. O domínio do site que contém o javascript que utiliza o Web PKI precisa estar na "lista de domínios autorizados" da licença;
1. A data da máquina do usuário precisa ser anterior à data de expiração da licença (você pode optar por uma licença que não expira).

Você receberá a licença em dois formatos, como essas:

```javascript
// Binary license
var myLicense = 'ASYAanNmaWRkbGUubmV0LHdlYnBraS5sYWN1bmFzb2Z0d2FyZS5jb20AAAABClKvO1J22vAD+YmfANiKQLbcLE1lNraPKCel6tRM+ZxR+h6M/crtJYRRVGGz7hrdbM0Y0mfTu15RMYGqQMi1QNZS6GrT4vNzIayv552Fl0EFWQA7jWlctUwfYoHRHVEnCNx9YGXDiA9+yDoGlVwgTR7fjzNeS3Fen1MVIyKBF464gN0JvdiCRJMI47JGVDkPmKjcrYIvJs6y5Lg25RW4ZnBKVruS+HR2s3k8ZrV4y4RCQE4UYMKbukF9vsF+JqAEifRlPq2xLcrNdxBveVDSXS/LRHAcrZrMM+Iw4A79jl0ngWPcy+CwinAhT+3dxVo5ZWMRQFpmTkylEMDvTjV9wQ==';

// Json license
var myLicense = {
  "format": 1,
  "allowedDomains": [
    // This license enables the use of the component from web pages on the following domains:
    "jsfiddle.net",
    "webpki.lacunasoftware.com"
  ],
  // This license does not expire
  "expiration": null,
  // Digital signature of the license to prevent tampering
  "signature": "ClKvO1J22vAD+YmfANiKQLbcLE1lNraPKCel6tRM+ZxR+h6M/crtJYRRVGGz7hrdbM0Y0mfTu15RMYGqQMi1QNZS6GrT4vNzIayv552Fl0EFWQA7jWlctUwfYoHRHVEnCNx9YGXDiA9+yDoGlVwgTR7fjzNeS3Fen1MVIyKBF464gN0JvdiCRJMI47JGVDkPmKjcrYIvJs6y5Lg25RW4ZnBKVruS+HR2s3k8ZrV4y4RCQE4UYMKbukF9vsF+JqAEifRlPq2xLcrNdxBveVDSXS/LRHAcrZrMM+Iw4A79jl0ngWPcy+CwinAhT+3dxVo5ZWMRQFpmTkylEMDvTjV9wQ=="
};
```

Os dois formatos são equivalentes. A diferença é que o formato binário esconde os detalhes da sua licença, enquanto que no formato json eles são legíveis.
Se você não se importar que usuários que por ventura inspecionem o código fonte da página vejam os detalhes da sua licença, o formato json é preferível pois
facilita o diagnóstico de problemas como uma licença expirada. Entretanto, se você preferir esconder essas informações, utilize o formato binário. Note que
os detalhes não ficam cifrados no formato binário, apenas codificados em Base64.

Após obter sua licença, passe-a no formato de sua preferência no construtor da classe `LacunaWebPKI`:

```javascript
var pki = new LacunaWebPKI('ASYAanNmaWRkbGUubmV0LHdlYnBraS5sYWN1bmFzb2Z0d2FyZS5jb20AAAABClKvO1J22vAD+YmfANiKQLbcLE1lNraPKCel6tRM+ZxR+h6M/crtJYRRVGGz7hrdbM0Y0mfTu15RMYGqQMi1QNZS6GrT4vNzIayv552Fl0EFWQA7jWlctUwfYoHRHVEnCNx9YGXDiA9+yDoGlVwgTR7fjzNeS3Fen1MVIyKBF464gN0JvdiCRJMI47JGVDkPmKjcrYIvJs6y5Lg25RW4ZnBKVruS+HR2s3k8ZrV4y4RCQE4UYMKbukF9vsF+JqAEifRlPq2xLcrNdxBveVDSXS/LRHAcrZrMM+Iw4A79jl0ngWPcy+CwinAhT+3dxVo5ZWMRQFpmTkylEMDvTjV9wQ==');
```

Executando o código a partir do localhost, o componente funciona mesmo que nenhuma licença seja passada.
