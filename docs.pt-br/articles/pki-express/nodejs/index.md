# Usando o PKI Express em Node.js

Este artigo mostra como usar o [PKI Express](../index.md) em Node.js

## Projeto de exemplos

O projeto de exemplos demonstra o uso de PKI Express junto com o componente [Web PKI](../../web-pki/index.md)
em um projeto que utilizando **NodeJS**. Ele encontra-se hospedado no GitHub:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/nodejs/expressmvc

### Executando o projeto

1. [Instale o PKI Express](../setup/index.md)
1. [Baixe o projeto](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) ou faça um *clone* do [repositório](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. Em um terminal, navegue ate a pasta `nodejs/expressmvc` e execute o comando `npm install` para baixar as dependências do projeto.
1. Execute a aplicação web: `npm start`
1. Acesse a URL: [http://localhost:3000](http://localhost:3000)

> Se você utiliza [Yarn](https://yarnpkg.com), você pode executar `yarn install` ou `yarn` para **baixar as dependências** e
> `yarn start` para **executar a aplicação**.

### Pacote do NPM

O uso do PKI Express em Node.js deve ser feito com o pacote do NPM [pki-express](https://www.npmjs.com/package/pki-express)

Para adicioná-lo ao seu projeto, adicione a linha abaixo ao seu arquivo `package.json`:

[!include[package.json](../../../../includes/pki-express/nodejs/package.md)]

Feito isso, execute o comando `npm install` para baixar o pacote e suas dependências.

O pacote é de código aberto, hospedado no [GitHub](https://github.com/LacunaSoftware/PkiExpressNode). Você pode fazer um *fork* para fazer
customizações, e até mesmo submeter um *pull request*.