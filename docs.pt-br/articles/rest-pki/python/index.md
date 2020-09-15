# Usando o Rest PKI em Python

Rest PKI pode ser usado em Python. Para começar, veja [Projeto de exemplos em Python/Flask](flask.md).

## Biblioteca do cliente

O projeto de exemplo em Python/Flask usa o pacote PyPi [restpki-cient](https://pypi.org/project/restpki-client/) para acessar as aplicações Rest PKI em Python. Isto suporta Python 2 e Python 3.

Para adicioná-lo ao seu projeto, adicione a linha abaixo ao seu arquivo `requirements.txt`:

[!include[requirements.txt](../../../../includes/rest-pki/python/requirements.md)]

Feito isso, execute o comando `pip install -r requirements.txt` para baixar o pacote e suas dependências.

> Se você não tiver **pip** instalado, pegue [aqui](https://pip.pypa.io/en/stable/installing/)

### Código fonte

O pacote é de código aberto, hospedado em [GitHub](https://github.com/LacunaSoftware/RestPkiPythonClient). Sinta-se à vontade para distribuir o pacote se precisar fazer personalizações.