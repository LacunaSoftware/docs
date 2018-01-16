# Instalação do PKI Express em CentOS/Oracle Linux

Para instalar o PKI Express no CentOS ou no Oracle Linux,
você precisará de uma licença de uso. Caso ainda não tenha uma licença, [solicite uma licença de trial](https://www.lacunasoftware.com/pt/home/purchase).

De posse do arquivo de licença (**LacunaPkiLicense.config**), siga os passos abaixo:

## 1. Adicione o *feed* de pacotes da Microsoft

[!include[Add Microsoft feed](../../../../includes/pki-express/centos/add-feed.md)]

## 2. Instale o .NET Core Runtime

> [!NOTE]
> Se você tiver instalado alguma versão de *preview* do .NET Core, por favor desinstale-a antes de prosseguir.

[!include[Install dotnet](../../../../includes/pki-express/centos/install-dotnet.md)]

## 3. Instale o PKI Express

Baixe o pacote do PKI Express e extraia para a pasta de destino:

[!include[Download and extract](../../../../includes/pki-express/linux/download-extract-curl.md)]

Crie um atalho para executar o PKI Express:

[!include[Create shortcut](../../../../includes/pki-express/centos/create-shortcut.md)]

Crie uma pasta para os logs e configure o PKI Express para utilizá-la:

[!include[Configure log](../../../../includes/pki-express/linux/config-log.md)]

Ative o PKI Express:

[!include[Activate](../../../../includes/pki-express/linux/activate.md)]

<a name="update" />
## Atualização

[!include[Update](../../../../includes/pki-express/linux/update-pt.md)]
