# Using PKI Express on PHP

This article describes how to use [PKI Express](../index.md) on PHP. To get started, choose one of the available samples' projects (organized by framework):

- [Plain](/plain.md)

## Composer Package

> [NOTE!]
> This package only supports PHP *5.5+*.

To use PKI Express on PHP, you must include the composer package [lacuna/pki-express](https://packagist.org/packages/lacuna/pki-express), by adding the following line to your `composer.json` file:

[!include[composer.json](../../../../includes/pki-express/php/composer.md)]

After that, execute the command `composer install`  to download the package and its dependencies (if you don't have Composer installed, get it [here](https://getcomposer.org/)).

This package is open-source, hosted on [GitHub](https://github.com/LacunaSoftware/PkiExpressPhp). Feel free to *fork* it if you need to make any customizations, and even submit a *pull request*.
