# Suporte a .NET Standard / .NET Core

A partir da versão [2.1.0](changelog.md#v2-1-0), o [PKI SDK](index.md) suporta o **[.NET Standard](https://docs.microsoft.com/pt-br/dotnet/standard/net-standard) 2.0**,
além dos .NET Frameworks 4.5 e 4.0 Client Profile.

Isso significa que o PKI SDK pode ser utilizado em aplicações em [.NET Core](https://docs.microsoft.com/pt-br/dotnet/core/index), que possuem o importante diferencial de
serem **compatíveis com servidores Linux**, removendo a necessidade de exigir um Windows Server na infraestrutura de seus clientes.

Para demonstrar as possibilidades trazida por essa novidade, a nossa equipe de desenvolvimento realizou em laboratório uma assinatura digital em um Raspeberry Pi 3 em uma aplicação console .NET Core utilizando o PKI SDK.

Além disso, é possível também utilizar o PKI SDK em apps mobile escritos em [Xamarin](https://visualstudio.microsoft.com/xamarin/)!
