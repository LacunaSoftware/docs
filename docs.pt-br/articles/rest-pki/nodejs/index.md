# Usando o Rest PKI em Node.js

Rest PKI pode ser usado em Node.js. Para começar, escolha um dos projetos de amostra disponíveis:

* [Node.js MVC](mvc.md)
* [Node.js SPA (Single Page Application)](spa.md)

## Biblioteca do cliente

Projetos de amostra All Express/Node.js usam o pacote NPM [restpki-client](https://www.npmjs.com/package/restpki-client)
para acessar aplicações do Rest Pki em Node.js.

Para adicionar isto ao seu projeto, coloque isto em seu arquivo `package.json`:

```json
{
    "dependencies": {
        "restpki-client": "1.0.1"
    }
}
```

Após isso, faça um `npm install` para baixar o pacote e suas dependências (se você não tiver **npm** instalado, pegue [aqui](https://www.npmjs.com/get-npm))

### Source code

O pacote é de código aberto, hospedado no [GitHub](https://github.com/LacunaSoftware/RestPkiNodeClient). Sinta-se à vontade para dividir o pacote se precisar fazer alguma personalização.