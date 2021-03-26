# Usando o PKI Express em PHP

Este artigo mostra como usar o [PKI Express](../index.md) em PHP. Para começar, escolha um dos projetos de exemplo disponíveis (organizado por framework):

- [Plain](plain.md)

## Pacote de Composer

> [!NOTE]
> Este pacote só suporta PHP *5.5+*.

Para usar o PKI Express em PHP, você deve incluir o pacote composer [lacuna/pki-express](https://packagist.org/packages/lacuna/pki-express), adicionando a seguinte linha no seu arquivo `composer.json`:

[!include[composer.json](../../../../includes/pki-express/php/composer.md)]

Feito isso, execute o comando `composer install` para baixar o pacote e suas dependências (se você ainda não tem o Composer instalado, baixe-o [aqui](https://getcomposer.org/)).

O pacote é de código aberto, hospedado no [GitHub](https://github.com/LacunaSoftware/PkiExpressPhp). Você pode fazer um *fork* para fazer
customizações, e até mesmo submeter um *pull request*.
