# .NET Core

> Check out the ["Getting Started" tutorials](https://github.com/dotnet/docs/blob/master/docs/core/get-started.md) to learn how to create a simple .NET Core application. It only takes a few minutes to get your first app up and running.

.NET Core is a general purpose development platform maintained by Microsoft and the .NET community on [GitHub](https://github.com/dotnet/core). It is cross-platform, supporting Windows, macOS and Linux, and can be used in device, cloud, and embedded/IoT scenarios. 

The following characteristics best define .NET Core:

- **Flexible deployment:** Can be included in your app or installed side-by-side user- or machine-wide.
- **Cross-platform:** Runs on Windows, macOS and Linux; can be ported to other operating systems. The [supported Operating Systems (OS)](https://github.com/dotnet/core/blob/master/roadmap.md), CPUs and application scenarios will grow over time, provided by Microsoft, other companies, and individuals.
- **Command-line tools:**  All product scenarios can be exercised at the command-line. 
- **Compatible:** .NET Core is compatible with .NET Framework, Xamarin and Mono, via the [.NET Standard Library](https://github.com/dotnet/docs/blob/master/docs/standard/library.md).
- **Open source:** The .NET Core platform is open source, using MIT and Apache 2 licenses. Documentation is licensed under [CC-BY](https://creativecommons.org/licenses/by/4.0/). .NET Core is a [.NET Foundation](https://dotnetfoundation.org/) project.
- **Supported by Microsoft:** .NET Core is supported by Microsoft, per [.NET Core Support](https://www.microsoft.com/net/core/support/)

## Composition

.NET Core is composed of the following parts:

- A [.NET runtime](https://github.com/dotnet/coreclr), which provides a type system, assembly loading, a garbage collector, native interop and other basic services. 
- A set of [framework libraries](https://github.com/dotnet/corefx), which provide primitive data types, app composition types and fundamental utilities. 
- A [set of SDK tools](https://github.com/dotnet/cli) and [language compilers](https://github.com/dotnet/roslyn) that enable the base developer experience, available in the [.NET Core SDK](sdk.md).
- The 'dotnet' app host, which is used to launch .NET Core apps. It selects the runtime and hosts the runtime, provides an assembly loading policy and launches the app. The same host is also used to launch SDK tools in much the same way.

### Languages

The C# and F# languages (Visual Basic is coming) can be used to write applications and libraries for .NET Core. The compilers run on .NET Core, enabling you to develop for .NET Core anywhere it runs. In general, you will not use the compilers directly, but indirectly using the SDK tools.

The C# and F# compilers and the .NET Core tools are or can be integrated into several text editors and IDEs, including Visual Studio, [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp), Sublime Text and Vim, making .NET Core development an option in your favorite coding environment and OS. This integration is provided, in part, by the good folks of the [OmniSharp project](http://www.omnisharp.net/).
