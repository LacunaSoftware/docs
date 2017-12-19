# Logs - PKI Express

Este artigo descreve como configurar a pasta utilizada pelo PKI Express para escrever os
arquivos de log, bem como o nível dos logs escritos.

## Pasta de logs

Por padrão, o PKI Express escreve os arquivos de logs nas seguintes pastas:

* No Windows: `%TEMP%\pkie-<username>`
* No Linux: `/var/log/pkie`

O nome do arquivo de log é `<username>.log` ou um nome similar derivado deste, caso a funcionalidade de *file rolling* entre em ação para limitar o tamanho
do arquivo (cada arquivo de log é limitado a 4MB, e no máximo 64 arquivos são armazenados).

Para alterar a pasta de logs:

```
pkie config --set logDir=path
```

A pasta **deve existir e estar liberada para escrita** tanto pelo seu usuário quanto pelo usuário utilizado para executar a aplicação web
(no Linux, geralmente esse usuário é o `www-data`).

## Nível mínimo

Os logs são categorizados em níveis crescentes de severidade:

* **Verbose**
* **Debug**
* **Information**
* **Warning** **(nível mínimo padrão)**
* **Error**
* **Fatal**

O **nível mínimo** (*minimum level*) define a menor severidade a partir da qual logs são escritos nos arquivos, sendo que logs de
severidades inferiores são descartados. O nível mínimo padrão para o PKI Express é o **Warning**.

Para alterar o nível mínimo:

```sh
pkie config --set logLevel=LEVEL
```

Por exemplo, para alterar o nível mínimo para *Information*:

```sh
pkie config --set logLevel=Information
```

Também são aceitos os seguintes números no valor da configuração:

* 0 = Verbose
* 1 = Debug
* 2 = Information
* 3 = Warning
* 4 = Error
* 5 = Fatal

Por exemplo, para alterar o nível mínimo para *Information*:

```sh
pkie config --set logLevel=2
```
