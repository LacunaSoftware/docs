# Logs - Web PKI

O [Web PKI](index.md) pode registrar logs tanto do componente do navegador quanto da aplicação nativa.

## Habilitar logs no console do navegador

Para habilitar o registro de logs detalhados no console da página do navegador e na aplicação nativa, clique no ícone da extensão e depois em
`Configurações > Avançadas > Logs detalhados`

![Enable verbose logging](../../../images/web-pki/enable-log.png)

## Logs da aplicação nativa

### Windows

No Windows, os logs são registrados no arquivo:
```
%LOCALAPPDATA%\Lacuna Software\WebPKIForChrome.log
```

Nota: `%LOCALAPPDATA%` é um atalho para o diretório de dados de aplicação do usuário atual.

### Mac

No Mac, os logs são registrados no arquivo:
```
~/.lacuna-webpki/WebPKIForChrome.log
```

Nota: `~` é um atalho no terminal para o diretório `home` do usuário atual.

### Linux

No Linux, os logs são registrados no arquivo:
```
~/.lacuna-webpki/WebPKIForChrome.log
```

Nota: `~` é um atalho no terminal para o diretório `home` do usuário atual.