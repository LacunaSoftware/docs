# Instalação do PKI Express em Linux Red Hat

Para instalar o PKI Express no Red Hat Enterprise Linux (RHEL), siga os passos abaixo:

## 1. Registre seu sistema no *Subscription Manager* do Red Hat e ative o canal do .NET

Antes de começar, é preciso que o seu sistema esteja registrado no *Subscription Manager* do Red Hat e que o canal do .NET esteja ativo.
Veja como fazer isso na [documentação da Red Hat](https://access.redhat.com/documentation/en-us/net_core/2.0/html/getting_started_guide/gs_install_dotnet#install_register_rehel).

## 2. Instale e ative o .NET Core SDK

```sh
sudo yum install rh-dotnet20 -y
sudo scl enable rh-dotnet20 bash
```

## 3. Instale o PKI Express

Instale o `wget` se você ainda não o tiver instalado em seu sistema:

```sh
sudo yum install wget
```

Baixe o pacote do PKI Express e extraia para a pasta de destino:

```sh
wget https://files.lacunasoftware.com/pki-express/pkie-1.0.1.tar.gz
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
