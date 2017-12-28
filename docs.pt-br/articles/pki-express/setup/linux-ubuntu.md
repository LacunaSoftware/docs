# Instalação do PKI Express em Ubuntu ou Mint

Para instalar o PKI Express em um Linux Ubuntu (*desktop* ou *server*) ou Linux Mint,
você precisará de uma licença de uso. Caso ainda não tenha uma licença, [solicite uma licença de trial](https://www.lacunasoftware.com/pt/home/purchase).

De posse do arquivo de licença (**LacunaPkiLicense.config**), siga os passos abaixo:

## 1. Adicione o *feed* de pacotes da Microsoft

Adicione a chave pública de assinatura de pacotes da Microsoft às chaves confiáveis do sistema:

```sh
wget -qO - https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
```

Adicione o *feed* de pacotes da Microsoft

* Ubuntu 17.10

```sh
wget -qO - https://packages.microsoft.com/config/ubuntu/17.10/prod.list | sudo tee /etc/apt/sources.list.d/microsoft.list
```

* Ubuntu 17.04

```sh
wget -qO - https://packages.microsoft.com/config/ubuntu/17.04/prod.list | sudo tee /etc/apt/sources.list.d/microsoft.list
```

* Ubuntu 16.04 / Linux Mint 18

```sh
wget -qO - https://packages.microsoft.com/config/ubuntu/16.04/prod.list | sudo tee /etc/apt/sources.list.d/microsoft.list
```

* Ubuntu 14.04 / Linux Mint 17

```sh
wget -qO - https://packages.microsoft.com/config/ubuntu/14.04/prod.list | sudo tee /etc/apt/sources.list.d/microsoft.list
```

## 2. Instale o .NET Core Runtime

> [!NOTE]
> Se você tiver instalado alguma versão de *preview* do .NET Core, por favor desinstale-a antes de prosseguir.

```sh
sudo apt-get update
sudo apt-get install dotnet-runtime-2.0.3
```

## 3. Instale o PKI Express

Baixe o pacote do PKI Express e extraia para a pasta de destino:

```sh
wget https://files.lacunasoftware.com/pki-express/linux/pkie-1.1.0.tar.gz
sudo mkdir /usr/share/pkie
sudo tar xzf pkie-1.1.0.tar.gz -C /usr/share/pkie
sudo chmod 755 -R /usr/share/pkie
```

Crie um atalho para executar o PKI Express:

```sh
echo -e '#!/bin/bash\ndotnet /usr/share/pkie/pkie.dll "$@"' | sudo tee /usr/local/bin/pkie
sudo chmod +x /usr/local/bin/pkie
```

Crie uma pasta para os logs e configure o PKI Express para utilizá-la:

```sh
sudo mkdir /var/log/pkie
sudo chmod 777 /var/log/pkie
sudo pkie config --set logdir=/var/log/pkie
```

Ative o PKI Express:

```sh
sudo pkie activate LacunaPkiLicense.config
```

<a name="update" />
## Atualização

Para atualizar o PKI Express, apenas baixe o novo pacote e extraia para a pasta de destino:

```sh
wget https://files.lacunasoftware.com/pki-express/linux/pkie-1.1.0.tar.gz
sudo rm -R /usr/share/pkie/*
sudo tar xzf pkie-1.1.0.tar.gz -C /usr/share/pkie
sudo chmod 755 -R /usr/share/pkie
```

> [!NOTE]
> Caso você esteja atualizando o PKI Express a partir de uma versão 1.0.x, é preciso realizar as tarefas de configuração da pasta de logs e de ativação do PKI Express (veja procedimento acima)
