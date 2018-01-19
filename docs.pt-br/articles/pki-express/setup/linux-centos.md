# Instalação do PKI Express em CentOS/Oracle Linux

[!include[Para instalar](includes/intro-prefix.md)] no CentOS ou no Oracle Linux [!include[voce precisara](includes/intro-suffix.md)]

[!include[De posse da licenca](includes/prereqs-reminder.md)]

## 1. Adicione o *feed* de pacotes da Microsoft

[!include[Add Microsoft feed](../../../../includes/pki-express/centos/add-feed.md)]

## 2. Instale o .NET Core Runtime

[!include[Install dotnet](../../../../includes/pki-express/centos/install-dotnet.md)]

[!include[Note on standalone dotnet setup](includes/dotnet-standalone-note.md)]

## 3. Instale o PKI Express

Baixe o pacote do PKI Express e extraia para a pasta de destino:

[!include[Install](../../../../includes/pki-express/linux/install-curl.md)]

Crie um atalho para executar o PKI Express:

[!include[Create shortcut](../../../../includes/pki-express/centos/create-shortcut.md)]

Crie uma pasta para os logs e configure o PKI Express para utilizá-la:

[!include[Configure log](../../../../includes/pki-express/linux/config-log.md)]

Ative o PKI Express:

[!include[Activate](../../../../includes/pki-express/linux/activate.md)]

[!include[Caso falhe](includes/manual-activation.md)]

<a name="update" />
## Atualização

[!include[Update](includes/update-curl.md)]
