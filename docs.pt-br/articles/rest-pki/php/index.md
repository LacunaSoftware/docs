# Usando o Rest PKI em PHP

Rest PKI pode ser usado em aplicação PHP usando uma enorme variedade de versões PHP. Para começar, escolha um dos projetos de amostras disponíveis:

* [PHP 5.5+](current.md) (incluindo PHP 7.x)
* [PHP 5.3/5.4](legacy.md)
* [PHP 5.2](legacy52.md)

### Biblioteca de clientes

O uso do Rest PKI em aplicações PHP dependem da versão PHP. Veja esta seção abaixo correspondente para seu caso.

### Para PHP 5.5+

O uso do Rest PKI no PHP 5.5+ (incluindo 7.x), você deve usar o pacote do compositor [lacuna/restpki-client](https://packagist.org/packages/lacuna/restpki-client).

Para adicionar o seu projeto, coloque isso no seu arquivo `composer.json`:

```json
{
	"require": {
		"lacuna/restpki-client": "^2.3.1"
	}
}
```

Após isso, faça uum `composer install` para download do pacote e e suas dependências (se você não tiver o Composer instalado, pegue [aqui](https://getcomposer.org/)).

O pacote é de código aberto, hospedado no [GitHub](https://github.com/LacunaSoftware/RestPkiPhpClientLegacy). Sinta-se à vontade para bifurcá-lo
se precisar fazer alguma personalização.

### Para PHP 5.3 e 5.4

Para usar Rest PKI no PHP 5.3 e 5.4, você deve usar o pacote do compositor [lacuna/restpki-client-legacy](https://packagist.org/packages/lacuna/restpki-client-legacy).

Para adicionar o seu projeto, coloque isto em seu arquivo `composer.json`:

```json
{
    "require": {
        "lacuna/restpki-client-legacy": "^1.1.0"
    }
}
```

Após isso, faça uum `composer install` para download do pacote e e suas dependências (se você não tiver o Composer instalado, pegue [aqui](https://getcomposer.org/)).

O pacote é de código aberto, hospedado no [GitHub](https://github.com/LacunaSoftware/RestPkiPhpClientLegacy). Sinta-se à vontade para bifurcá-lo
se precisar fazer alguma personalização.

### Para PHP 5.2

Para usar o Rest PKI no PHP 5.2, use o arquivo [RestPkiLegacy52.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/RestPkiLegacy52.php). Se solicitado o pacote [educoder/pest](https://packagist.org/packages/educoder/pest), que
precisa ser adicionado ao seu `composer.json`:

```json
{
    "require": {
        "educoder/pest": "1.0.0"
    }
}
```

Após isso, faça uum `composer install` para download do pacote e e suas dependências (se você não tiver o Composer instalado, pegue [aqui](https://getcomposer.org/)).
