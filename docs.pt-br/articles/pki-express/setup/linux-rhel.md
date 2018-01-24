# Instalação do PKI Express em Red Hat Enterprise Linux

[!include[Para instalar](includes/intro-prefix.md)] no Red Hat Enterprise Linux (RHEL) [!include[voce precisara](includes/intro-suffix.md)]

[!include[De posse da licenca](includes/prereqs-reminder.md)]

## 1. Registre seu sistema no *Subscription Manager* do Red Hat e ative o canal do .NET

Antes de começar, é preciso que o seu sistema esteja registrado no *Subscription Manager* do Red Hat e que o canal do .NET esteja ativo.
Veja como fazer isso na [documentação da Red Hat](https://access.redhat.com/documentation/en-us/net_core/2.0/html/getting_started_guide/gs_install_dotnet#install_register_rehel).

## 2. Instale e ative o .NET Core

[!include[Install dotnet](../../../../includes/pki-express/rhel/install-dotnet.md)]

<a name="install" />
## 3. Instale o PKI Express

Baixe o pacote do PKI Express e extraia para a pasta de destino:

[!include[Install](../../../../includes/pki-express/linux/install-curl.md)]

Crie um atalho para executar o PKI Express:

[!include[Create shortcut](../../../../includes/pki-express/rhel/create-shortcut.md)]

Crie uma pasta para os logs e configure o PKI Express para utilizá-la:

[!include[Configure log](../../../../includes/pki-express/linux/config-log.md)]

Ative o PKI Express:

[!include[Activate](../../../../includes/pki-express/linux/activate.md)]

[!include[Caso falhe](includes/manual-activation.md)]

<a name="update" />
## Atualização

[!include[Update](includes/update-curl.md)]
