# Instalação do PKI Express em Linux Red Hat

Para instalar o PKI Express no Red Hat Enterprise Linux (RHEL),
você precisará de uma licença de uso. Caso ainda não tenha uma licença, [solicite uma licença de trial](https://www.lacunasoftware.com/pt/home/purchase).

De posse do arquivo de licença (**LacunaPkiLicense.config**), siga os passos abaixo:

## 1. Registre seu sistema no *Subscription Manager* do Red Hat e ative o canal do .NET

Antes de começar, é preciso que o seu sistema esteja registrado no *Subscription Manager* do Red Hat e que o canal do .NET esteja ativo.
Veja como fazer isso na [documentação da Red Hat](https://access.redhat.com/documentation/en-us/net_core/2.0/html/getting_started_guide/gs_install_dotnet#install_register_rehel).

## 2. Instale e ative o .NET Core SDK

```sh
sudo yum install rh-dotnet20 -y
```

## 3. Instale o PKI Express

Instale o `wget` se você ainda não o tiver instalado em seu sistema:

```sh
sudo yum install wget
```

Baixe o pacote do PKI Express e extraia para a pasta de destino:

```sh
wget https://files.lacunasoftware.com/pki-express/linux/pkie-1.1.0.tar.gz
sudo mkdir /usr/share/pkie
sudo tar xzf pkie-1.1.0.tar.gz -C /usr/share/pkie
sudo chmod 755 -R /usr/share/pkie
```

Crie um atalho para executar o PKI Express (opcional):

```sh
echo -e '#!/bin/bash\nscl enable rh-dotnet20 -- dotnet /usr/share/pkie/pkie.dll "$@"' | sudo tee /usr/bin/pkie
sudo chmod +x /usr/bin/pkie
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
