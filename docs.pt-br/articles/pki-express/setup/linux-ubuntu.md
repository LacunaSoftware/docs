# Instalação do PKI Express em Ubuntu ou Mint

Para instalar o PKI Express em um Linux Ubuntu (*desktop* ou *server*) ou Mint, siga os passos abaixo:

## 1. Adicione o *feed* de pacotes da Microsoft

Adicione a chave pública de assinatura de pacotes da Microsoft às chaves confiáveis do sistema:

```sh
wget -O - https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
```

Adicione o *feed* de pacotes da Microsoft

* Ubuntu 17.10

```sh
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-artful-prod artful main" > /etc/apt/sources.list.d/dotnetdev.list'
```

* Ubuntu 17.04

```sh
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-zesty-prod zesty main" > /etc/apt/sources.list.d/dotnetdev.list'
```

* Ubuntu 16.04 / Linux Mint 18

```sh
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-xenial-prod xenial main" > /etc/apt/sources.list.d/dotnetdev.list'
```

* Ubuntu 14.04 / Linux Mint 17

```sh
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-trusty-prod trusty main" > /etc/apt/sources.list.d/dotnetdev.list'
```

## 2. Instale o .NET Core SDK

> [!NOTE]
> Se você tiver instalado alguma versão de *preview* do .NET Core, por favor desinstale-a antes de prosseguir.

```sh
sudo apt-get update
sudo apt-get install dotnet-sdk-2.0.0
```

## 3. Instale o PKI Express

Baixe o pacote do PKI Express e extraia para a pasta de destino:

```sh
wget https://files.lacunasoftware.com/pki-express/linux/pkie-1.0.3.tar.gz
sudo mkdir /usr/share/pkie
sudo tar xzf pkie-1.0.3.tar.gz -C /usr/share/pkie
sudo chmod 755 -R /usr/share/pkie
```

Crie um atalho para executar o PKI Express (opcional):

```sh
sudo sh -c 'echo "#!/bin/bash\ndotnet /usr/share/pkie/pkie.dll \"\$@\"" > /usr/local/bin/pkie'
sudo chmod +x /usr/local/bin/pkie
```

Teste o PKI Express:

```sh
pkie help
```

ou, caso não tenha criado o atalho:

```sh
dotnet /usr/share/pkie/pkie.dll help
```
