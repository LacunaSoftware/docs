<a name="install-aspnet-core" />

## Instale o ASP.NET Core Runtime 3.1

[!include[Proceed as root](../su.md)]

Registre a chave da Microsoft e o repositório de pacotes (só precisa ser feito uma única vez por máquina),
e então instale o pacote do ASP.NET Core Runtime:

[!include[Install ASP.NET Core Runtime](../../../../../includes/linux/rhel/install-aspnetcore-31.md)]

> [!NOTE]
> Se o comando acima falhar devido a dependencias faltando, por exemplo pelo pacote *libicu* não estar disponível, certifique-se de que o seu sistema está [registrado e associado a uma subscription da Red Hat](https://access.redhat.com/solutions/253273)

[!include[Test dotnet](../test-dotnet-31.md)]
