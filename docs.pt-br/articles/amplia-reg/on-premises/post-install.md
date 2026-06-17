# Procedimento pós-instalação - Amplia Reg

Após instalar a sua [instância on-premises](index.md) do [Amplia Reg](../index.md), siga estas etapas para preparar a instância para uso.

Comece autenticando-se no Amplia Reg. Como parte desse processo, você precisará se registrar, criando assim a primeira conta de usuário.

Em seguida:

1. Execute o [utilitário de linha de comando](tool/index.md) com o comando `init-data` passando o `Id` da CA no Amplia que será usada para emitir certificados de usuário final
1. Reinicie o serviço

No Linux:

```sh
dotnet /usr/share/ampliareg/Lacuna.AmpliaRegNg.Site.dll -- init-data ID_OF_YOUR_AMPLIA_CA
systemctl restart ampliareg
```

> [!TIP]
> Se você ainda não criou a CA no Amplia para emitir certificados de usuário final, consulte o [Guia de Operação](../../amplia/operation/index.md) do Amplia para
> criar uma [CA raiz](../../amplia/operation/create-root-ca.md) ou uma [CA intermediária](../../amplia/operation/create-intermediate-ca.md).

Se você [configurou o OIDC](settings/configure-oidc.md), este é o momento para [desabilitar o cadastro de usuários](settings/configure-oidc.md#disable-sign-up).
