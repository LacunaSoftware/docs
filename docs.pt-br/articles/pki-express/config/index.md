# Configuração - PKI Express

É possível alterar as seguintes configurações do PKI Express:

* [Logs](log.md)
* [Pasta temporária](temp-dir.md)

A configuração do PKI Express é gerenciada através do comando `pkie config`. Veja as seções abaixo para saber mais sobre esse comando.

## Comando *pkie config*

Para visualizar a sintaxe do comando:

```sh
pkie help config
```

Para visualizar as configurações atuais:

```sh
pkie config
```

Para alterar uma configuração:

```sh
pkie config --set name=value
```

Exemplo:

```sh
pkie config --set logLevel=3
```

## Configuração efetiva

O PKI Express pode eventualmente ignorar uma configuração inválida. Por exemplo, se a configuração
`tempDir` for setada para um caminho inválido ou uma pasta à qual o PKI Express não possui permissões
de escrita, a pasta temporária definida pelo ambiente será utilizada. Esse é o chamado valor *efetivo*
da configuração, ou seja, o valor que o PKI Express está de fato utilizando.

Para diagnosticar problemas relacionados à configuração, pode ser útil verificar a configuração
efetiva do PKI Express:

```sh
pkie config --effective
```
