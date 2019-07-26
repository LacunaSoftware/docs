# Usando o Rest PKI em .NET

Rest PKI pode ser usado em aplicações .NET (C#, VB.NET, C++.NET) usando uma ampla gama de tecnologias e plataformas. Para começar, escolha uma dos exemplos de projetos disponíveis:

* [ASP.NET MVC](mvc.md)
* [ASP.NET Web Forms](web-forms.md)
* [ASP.NET Core](netcore.md)
* [Visual Studio 2008](vs2008.md)

## Biblioteca do cliente

Todos os projeto de amostra .NET usam o pacote Nuget [Lacuna.RestPki.Client](https://www.nuget.org/packages/Lacuna.RestPki.Client/) para acessar o Rest PKI. As plataformas 
seguintes são suportadas:

* .NET Standard 1.3 (for usage on .NET Core, Xamarin and UWP)
* .NET Framework 4.5
* .NET Framework 4.0
* .NET Framework 3.5

As dependências do pacote são de propriedade da Microsoft ou do próprio Lacuna Software. Nnenhum pacote de terceiros é necessário (exceto para o pacote
[Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/), o padrão de fato para manuseio JSON no .NET)

Veja este pacote [referência API](xref:Lacuna.RestPki.Client).