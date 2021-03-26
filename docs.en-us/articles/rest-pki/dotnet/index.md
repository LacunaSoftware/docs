# Using Rest PKI on .NET

Rest PKI can be used on .NET applications (C#, VB.NET, C++.NET) using a wide range of technologies and platforms.
To get started, choose one of the available samples projects:

* [ASP.NET MVC](mvc.md)
* [ASP.NET Web Forms](web-forms.md)
* [ASP.NET Core](netcore.md)
 
## Client library

All .NET samples projects use the Nuget package [Lacuna.RestPki.Client](https://www.nuget.org/packages/Lacuna.RestPki.Client/)
to access Rest PKI. The following platforms are supported:

* .NET Standard 1.3 (for usage on .NET Core, Xamarin and UWP)
* .NET Framework 4.5
* .NET Framework 4.0
* .NET Framework 3.5

The package's dependencies are all owned by either Microsoft or Lacuna Software itself. No 3rd party packages are
necessary (except for the [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) package, the de-facto
standard for handling JSON on .NET)

See the package [API reference](xref:Lacuna.RestPki.Client).
