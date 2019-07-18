# Instalação manual do .NET Core Runtime

No ambiente Linux, o [PKI Express](../index.md) exige o **.NET Core Runtime**. O caminho recomendado para instalar é descrito nas instruções de instalação do PKI Express para qualquer
distruição de suporte.

No entando, se você não pode adicionar pacotes privados ao seu ambiente, siga os passos abaixo para executar a instalação de um banco de dados do .NET Core Runtime.

> [!NOTE]
> Se a sua distribuição Linux não está listada abaixo, por favor nos contate.

## CentOS / Oracle Linux / Fedora

<!--
    Apparently, 2.1 no longer requires doing a `sudo yum install libunwind libicu`:
    https://github.com/dotnet/core/blob/master/release-notes/download-archives/2.1.0-download.md
-->

Realize o download do pacote de banco de dados .NET Core Runtime, extraia para o diretório de destinação e crie um link simbólico para executá-lo:

```sh
curl -O https://download.microsoft.com/download/9/1/7/917308D9-6C92-4DA5-B4B1-B4A19451E2D2/dotnet-runtime-2.1.0-linux-x64.tar.gz
sudo mkdir /usr/share/dotnet
sudo tar xzf dotnet-runtime-2.1.0-linux-x64.tar.gz -C /usr/share/dotnet
sudo ln -s /usr/share/dotnet/dotnet /usr/bin/dotnet
```

Teste a instalação:

```sh
dotnet --info
```

Agora, proceda com a [instalação do PKI Express](linux-centos.md#install).

