# Substituição do ICPBravoAccess

A substituição da biblioteca ICPBravoAccess pelo plugin Web PKI pode ser feita 
de uma maneira fácil e sem a necessidade de alterar seu código JavaScript existente.
Basta seguir os passos:


1. **Remova** a tag `<script>` que importa a biblioteca `icpBravoAccessExt` descontinuada no seu HTML:
```html
<!-- Remover a inclusão do  icpbravo.access.ext.js -->
<script type="text/javascript" src="icpbravo.access.ext.js"></script>
```

1. Adicione por último na tag `<head>` do seu HTML:
```html
<html>
  <head>
    ...

    <!-- Adicionar as seguintes linhas -->
    <script src="https://cdn.lacunasoftware.com/libs/web-pki/lacuna-web-pki-2.16.4.min.js"></script>
    <script src="https://cdn.lacunasoftware.com/libs/pibask/lacuna-pibask-1.0.1.js"></script>
    <script>
	  window.lacunaWebPkiLicense = '>>> Insira aqui sua licença binária do Web PKI <<<';
    </script>
  </head>
  ...
```

> [!NOTE]
> **Licenciamento**
>
> Para utilizar o [Web PKI](http://docs.lacunasoftware.com/en-us/articles/web-pki/index.html) em 
> ambiente de produção, é necessária a inclusão da licença através do parâmetro `window.lacunaWebPkiLicense`
> acima. Caso ainda não tenha uma licença, solicite o envio através do email **[suporte@lacunasoftware.com](mailto:suporte@lacunasoftware.com)**
> informando os *hostnames* ou *URLs* nos quais o plugin será executado.

Pronto, o Web PKI deve agora substituir completamente o ICPBravoAccess, adicionando suporte a outros navegadores
e sistemas como Mac OS X, Linux, Android e iOS.

## Veja também

* [Sistemas suportados](https://docs.lacunasoftware.com/articles/web-pki/browser-support)
* [Guia da API](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki)