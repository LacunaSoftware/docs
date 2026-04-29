# Comando do Amplia Reg: **test-cert-renewal-alert**

## Nome

`test-cert-renewal-alert` - Testa o e-mail de alerta de renovação de certificado

## Sintaxe

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll [settings] -- test-cert-renewal-alert <order number> <simulated days before expiration>
```

Ou, no Docker:

```sh
docker run -i lacunasoftware/ampliareg:3.0 [settings] -- test-cert-renewal-alert <order number> <simulated days before expiration>
```

[!include[About settings](includes/about-settings.md)]

## Descrição

O comando `test-cert-renewal-alert` testa o template de e-mail configurado enviando um e-mail de alerta para o endereço de e-mail do titular associado ao pedido. O pedido informado deve estar emitido. Use dias negativos para testar o template de certificado expirado.

## Veja também

* [Utilitário de linha de comando do Amplia Reg](index.md)
