# Usando o PKI Express em Python

Este artigo mostra como usar o [PKI Express](../index.md) em Python

## Projeto de exemplos

O projeto de exemplos demonstra o uso de PKI Express junto com o componente [Web PKI](../../web-pki/index.md)
em um projeto que utilizando **Python**. Ele encontra-se hospedado no GitHub:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/python/flask

### Executando o projeto

1. [Instale o PKI Express](../setup/index.md)
1. [Baixe o projeto](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) ou faça um *clone* do [repositório](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. Em um terminal, navegue ate a pasta `python/flask` e execute o comando `pip install -r requirements.txt` para baixar as dependências do projeto.
1. Defina a variável de ambiente `FLASK_APP` com o nome da aplicação que deve ser executada: `FLASK_APP=sample`
1. Execute a aplicação web: `flask run`
1. Acesse a URL: [http://localhost:5000](http://localhost:5000)

Opcionalmente, você pode criar e ativar seu "virtualenv" para evitar misturar diferentes versões de uma biblioteca:

[!include[virtualenv](../../../../includes/pki-express/python/virtualenv.md)]

### Pacote do PyPi

O uso do PKI Express em Python deve ser feito com o pacote de PyPi [pkiexpress](https://pypi.org/project/pkiexpress)

Para adicioná-lo ao seu projeto, adicione a linha abaixo ao seu arquivo `requirements.txt`:

[!include[requirements.txt](../../../../includes/pki-express/python/requirements.md)]

Feito isso, execute o comando `pip install -r requirements.txt` para baixar o pacote e suas dependências.

O pacote é de código aberto, hospedado no [GitHub](https://github.com/LacunaSoftware/PkiExpressPython). Você pode fazer um *fork* para fazer
customizações, e até mesmo submeter um *pull request*.