# Instalação do PKI Express em Ubuntu ou Mint

[!include[Para instalar](includes/intro-prefix.md)] em um Linux Ubuntu (*desktop* ou *server*) ou Linux Mint [!include[voce precisara](includes/intro-suffix.md)]

[!include[De posse da licenca](includes/prereqs-reminder.md)]

## 1. Adicione o *feed* de pacotes da Microsoft

Adicione a chave pública de assinatura de pacotes da Microsoft às chaves confiáveis do sistema:

[!include[Add product key](../../../../includes/pki-express/ubuntu/add-key.md)]

Adicione o *feed* de pacotes da Microsoft

[!include[Add Microsoft feed](../../../../includes/pki-express/ubuntu/add-feed.md)]

## 2. Instale o .NET Core Runtime

[!include[Remova previews](includes/remove-previews.md)]

[!include[Install dotnet](../../../../includes/pki-express/ubuntu/install-dotnet.md)]

## 3. Instale o PKI Express

Baixe o pacote do PKI Express e extraia para a pasta de destino:

[!include[Download and extract](../../../../includes/pki-express/linux/download-extract-wget.md)]

Crie um atalho para executar o PKI Express:

[!include[Create shortcut](../../../../includes/pki-express/ubuntu/create-shortcut.md)]

Crie uma pasta para os logs e configure o PKI Express para utilizá-la:

[!include[Configure log](../../../../includes/pki-express/linux/config-log.md)]

Ative o PKI Express:

[!include[Activate](../../../../includes/pki-express/linux/activate.md)]

<a name="update" />
## Atualização

[!include[Update](includes/update-wget.md)]
