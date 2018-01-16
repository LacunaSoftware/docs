# Instalação do PKI Express em Ubuntu ou Mint

Para instalar o PKI Express em um Linux Ubuntu (*desktop* ou *server*) ou Linux Mint,
você precisará de uma licença de uso. Caso ainda não tenha uma licença, [solicite uma licença de trial](https://www.lacunasoftware.com/pt/home/purchase).

De posse do arquivo de licença (**LacunaPkiLicense.config**), siga os passos abaixo:

## 1. Adicione o *feed* de pacotes da Microsoft

Adicione a chave pública de assinatura de pacotes da Microsoft às chaves confiáveis do sistema:

[!include[Add product key](../../../../includes/pki-express/ubuntu/add-key.md)]

Adicione o *feed* de pacotes da Microsoft

[!include[Add Microsoft feed](../../../../includes/pki-express/ubuntu/add-feed.md)]

## 2. Instale o .NET Core Runtime

> [!NOTE]
> Se você tiver instalado alguma versão de *preview* do .NET Core, por favor desinstale-a antes de prosseguir.

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

[!include[Update](../../../../includes/pki-express/linux/update-pt.md)]
