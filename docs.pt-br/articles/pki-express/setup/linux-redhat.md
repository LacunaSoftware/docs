# Instalação do PKI Express em Linux Red Hat

Para instalar o PKI Express no Red Hat Enterprise Linux (RHEL),
você precisará de uma licença de uso. Caso ainda não tenha uma licença, [solicite uma licença de trial](https://www.lacunasoftware.com/pt/home/purchase).

De posse do arquivo de licença (**LacunaPkiLicense.config**), siga os passos abaixo:

## 1. Registre seu sistema no *Subscription Manager* do Red Hat e ative o canal do .NET

Antes de começar, é preciso que o seu sistema esteja registrado no *Subscription Manager* do Red Hat e que o canal do .NET esteja ativo.
Veja como fazer isso na [documentação da Red Hat](https://access.redhat.com/documentation/en-us/net_core/2.0/html/getting_started_guide/gs_install_dotnet#install_register_rehel).

## 2. Instale e ative o .NET Core

[!include[Install dotnet](../../../../includes/pki-express/redhat/install-dotnet.md)]

## 3. Instale o PKI Express

Baixe o pacote do PKI Express e extraia para a pasta de destino:

[!include[Download and extract](../../../../includes/pki-express/linux/download-extract-curl.md)]

Crie um atalho para executar o PKI Express:

[!include[Create shortcut](../../../../includes/pki-express/redhat/create-shortcut.md)]

Crie uma pasta para os logs e configure o PKI Express para utilizá-la:

[!include[Configure log](../../../../includes/pki-express/linux/config-log.md)]

Ative o PKI Express:

[!include[Activate](../../../../includes/pki-express/linux/activate.md)]

<a name="update" />
## Atualização

[!include[Update](../../../../includes/pki-express/linux/update-pt.md)]
