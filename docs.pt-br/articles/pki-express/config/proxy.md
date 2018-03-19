# Configuração de proxy - PKI Express

Para configurar o [PKI Express](../index.md) para utilizar um proxy para fazer as chamadas web, execute o comando abaixo:

```sh
pkie config --set proxyHost=IP --set proxyPort=PORTA
```

[!include[Admin necessario](includes/admin-needed.md)]

Caso o proxy exija autenticação com usuário e senha, faça também:

```sh
pkie config --set proxyUsername=USERNAME --set proxyPassword=PASSWORD
```

No Linux, certos caracteres na senha como `!` e `$` podem causar problemas. Nesse caso, utilize aspas simples no último argumento:

```sh
pkie config --set proxyUsername=USERNAME --set 'proxyPassword=PASSWORD'
```

Alternativamente, essas configurações podem ser controladas alterando as seguintes variáveis de ambiente:

* `pkie:proxyHost` ou `pkie__proxyHost`
* `pkie:proxyPort` ou `pkie__proxyPort`
* `pkie:proxyUsername` ou `pkie__proxyUsername`
* `pkie:proxyPassword` ou `pkie__proxyPassword`

> [!NOTE]
> Em ambientes Linux, os nomes das variáveis de ambiente são ***case sensitive***
