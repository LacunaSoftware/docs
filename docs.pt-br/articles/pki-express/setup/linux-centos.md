# Instalação do PKI Express em CentOS/Oracle Linux

Para instalar o PKI Express no CentOS ou no Oracle Linux, siga os passos abaixo:

## 1. Adicione o *feed* de pacotes da Microsoft

```sh
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[packages-microsoft-com-prod]\nname=packages-microsoft-com-prod \nbaseurl=https://packages.microsoft.com/yumrepos/microsoft-rhel7.3-prod\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/dotnetdev.repo'
```

## 2. Instale o .NET Core SDK

> [!NOTE]
> Se você tiver instalado alguma versão de *preview* do .NET Core, por favor desinstale-a antes de prosseguir.

```sh
sudo yum update
sudo yum install libunwind libicu
sudo yum install dotnet-sdk-2.0.0
```

## 3. Instale o PKI Express

Instale o `wget` se você ainda não o tiver instalado em seu sistema:

```sh
sudo yum install wget
```

Baixe o pacote do PKI Express e extraia para a pasta de destino:

```sh
wget https://files.lacunasoftware.com/pki-express/linux/pkie-1.0.1.tar.gz
sudo mkdir /usr/share/pkie
sudo tar xzf pkie-1.0.1.tar.gz -C /usr/share/pkie
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
