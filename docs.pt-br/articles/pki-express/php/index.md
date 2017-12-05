# Usando o PKI Express em PHP

Este artigo mostra como usar o [PKI Express](../index.md) em PHP

## Projeto de exemplos

O projeto de exemplos demonstra o uso do PKI Express junto com o [Web PKI](../../web-pki/index.md)
em um projeto utilizando **PHP 5.5+** (incluindo 7.x). Ele encontra-se hospedado no GitHub:

https://github.com/LacunaSoftware/PkiExpressSamples/tree/master/PHP

> [!NOTE]
> Se você utiliza uma versão anterior do PHP, por favor [fale conosco](https://www.lacunasoftware.com/pt/home/purchase).

### Executando o projeto

1. [Instale o PKI Express](../setup/index.md)
1. [Baixe o projeto](https://github.com/LacunaSoftware/PkiExpressSamples/archive/master.zip) ou faça um *clone* do [repositório](https://github.com/LacunaSoftware/PkiExpressSamples.git)
1. Em um terminal, navegue até a pasta `PHP` e execute o comando `composer install` para baixar as dependências (se você não possuir o Composer instalado, baixe-o [aqui](https://getcomposer.org/))
1. Configure um site no seu servidor web local apontando para a pasta `PHP`
1. Abra o index.php em um navegador (a URL depende das configurações do seu servidor web)

## Pacote de composer

O uso do PKI Express em PHP deve ser feito com o pacote de composer [lacuna/pki-express](https://packagist.org/packages/lacuna/pki-express)

Para adicioná-lo ao seu projeto, adicione a linha abaixo ao seu arquivo `composer.json`:

```json
{
	"require": {
		"lacuna/pki-express": "^1.1.0"
	}
}
```

Feito isso, execute o comando `composer install` para baixar o pacote e suas dependências (se você ainda não tem o Composer instalado, baixe-o [aqui](https://getcomposer.org/)).

O pacote é de código aberto, hospedado no [GitHub](https://github.com/LacunaSoftware/PkiExpressPhp). Você pode fazer um *fork* para fazer
customizações, e até mesmo submeter um *pull request*.
