# Comando do Amplia Reg: **test-email**

## Nome

`test-email` - Testa o envio de e-mail

## Sintaxe

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll [settings] -- test-email <to-address>
```

Ou, no Docker:

```sh
docker run -i lacunasoftware/ampliareg:3.0 [settings] -- test-email <to-address>
```

[!include[About settings](includes/about-settings.md)]

## Descrição

O comando `test-email` testa a configuração de e-mail tentando enviar uma mensagem de teste para o endereço informado.

## Veja também

* [Utilitário de linha de comando do Amplia Reg](index.md)
