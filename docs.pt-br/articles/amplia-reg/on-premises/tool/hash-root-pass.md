# Comando do Amplia Reg: **hash-root-pass**

## Nome

`hash-root-pass` - Calcula um hash com salt para uma senha root fornecida

## Sintaxe

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll -- hash-root-pass
```

Ou, no Docker:

[!include[Hash root password with Docker](../../../../../includes/amplia-reg/docker/hash-root-pass-stdout.md)]

## Descrição

O comando `hash-root-pass` destina-se a ser usado com o *modo de autenticação root*. Use-o para calcular um hash com salt da senha root desejada
e, em seguida, defina o hash na configuração `General__RootPasswordHash`.

A senha é lida do `stdin`.

## Veja também

* [Utilitário de linha de comando do Amplia Reg](index.md)
<!-- * Modo de autenticação root -->
