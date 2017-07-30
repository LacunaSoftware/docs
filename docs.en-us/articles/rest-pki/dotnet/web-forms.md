# ASP.NET Web Forms samples project

The **ASP.NET Web Forms samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a project using [ASP.NET Web Forms](https://docs.microsoft.com/en-us/aspnet/web-forms/what-is-web-forms). It is hosted on GitHub at:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/CSharp/WebForms

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Open the project folder (`CSharp\WebForms`)
1. Open the solution file (.sln) on Visual Studio
1. Generate an API access token on the [REST PKI website](https://pki.rest/)
1. Paste your access token on the file `web.config`
1. Run the solution. Make sure your system allows automatic Nuget package restore (if it doesn't, manually restore the packages).
