# Substituição do ICPBravoAccess

A substituição da biblioteca ICPBravoAccess pela extensão Web PKI pode ser feita 
de uma maneira fácil.

Primeiro, *remova* a tag `<script>` que importa a ICPBravoAccess. Depois disso, adicione
as tags `<script>` que importam a extensão Web PKI e a biblioteca de substituição. Por exemplo:

```html
<!-- Remover a seguinte linha -->
<!-- <script type="text/javascript" src="icpbravo.access.ext.js"></script> -->

<!-- Adicionar as seguintes linhas -->
<script type="text/javascript" src="https://cdn.lacunasoftware.com/libs/web-pki/lacuna-web-pki-2.14.1.min.js"></script>
<script type="text/javascript" src="https://cdn.lacunasoftware.com/libs/pibask/lacuna-pibask-1.0.0.js"></script>
```

## Licenciamento

> [!NOTE]
> Essa licença não é a mesma usada pelo ICPBravoAccess. Se você não possui essa licença, por favor
contatar nosso suporte em suporte@lacunasoftware.com.

Para utilizar o [Web PKI](http://docs.lacunasoftware.com/en-us/articles/web-pki/index.html) em 
aplicações web rodando fora do localhost, é preciso configurar a licença de uso do componente. Para configurar a 
licença, basta escolher um dos dois formatos recebidos e passar para variável `window.lacunaWebPkiLicense`.

Caso prefira o formato binário:

```javascript
window.lacunaWebPkiLicense = 'ASYAanNma...Q==';
```

Ou, se preferir o formato em JSON:

```javascript
window.lacunaWebPkiLicense = {
  "format":  1,
  "allowedDomains": [
    "www.patorum.com"
  ],
  ...
};
```