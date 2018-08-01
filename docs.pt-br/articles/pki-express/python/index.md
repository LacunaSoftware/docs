# Usando o PKI Express em Python

Este artigo mostra como usar o [PKI Express](../index.md) em Python

## Projeto de exemplos

O projeto de exemplos demonstra o uso de PKI Express junto com o [Web PKI](../../web-pki/index/) em um projeto que utilizando **Python 2.7+** (incluindo **Python 3**). Ele encontra-se hospedado no GitHub:

https://github.com/LacunaSoftware/PkiExpressSamples/tree/master/Python

> [!NOTE]
> Se você utiliza uma versão anterior do Python, por favor [fale conosco]
(https://www.lacunasoftware.com/pt/home/purchase).

### Executando o projeto

1. [Instale o PKI Express](../setup/index.md)
1. [Baixe o projeto](https://github.com/LacunaSoftware/PkiExpressSamples/archive/master.zip) ou faça um *clone* do [repositório](https://github.com/LacunaSoftware/PkiExpressSamples.git)
1. Em um terminal, navegue ate a pasta `Python` e execute o comando `pip install -r requirements.txt` para baixar as dependências do projeto.
1. Defina a variável de ambiente `FLASK_APP` com o nome da aplicação que deve ser executada: `FLASK_APP=sample`
1. Execute a aplicação web: `flask run`
1. Acesse a URL: http://localhost:5000

Opcionalmente, você pode criar e ativar seu "virtualenv" para evitar misturar diferentes versões de uma biblioteca:

[!include[virtualenv](../../../../includes/pki-express/python/virtualenv.md)]

### Pacote do PyPi

O uso do PKI Expresse em Python deve ser feito com o pacode de PyPi [pkiexpress](https://pypi.org/project/pkiexpress)

Para adicioná-lo ao seu projeto, adicione a linha abaixo ao seu arquivo `requirements.txt`:

[!include[requirements.txt](../../../../includes/pki-express/python/requirements.md)]

Feito isso, execute o comando `pip install -r requirements.txt` para baixar o pacote e suas dependências.

O pacote é de código aberto, hospedado no [GitHub](https://github.com/LacunaSoftware/PkiExpressPython). Você pode fazer um *fork* para fazer
customizações, e até mesmo submeter um *pull request*.