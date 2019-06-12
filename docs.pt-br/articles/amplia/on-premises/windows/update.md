# Atualização do Amplia em Windows Server

Para atualizar a sua instância do [Amplia](../../index.md), siga as instruções dessa página.

> [!NOTE]
> Para saber se uma atualização demandará alteração nas configurações, observe no [Histórico de versões](../../changelog.md) as alterações
> de configuração entre a versão que você está instalando e a que encontra-se atualmente instalada (para saber como verificar a versão instalada
> do sistema, veja [este artigo](../check-version.md)).

1. Pare o site no IIS Manager
1. Crie um backup do banco de dados e da pasta do site
1. Apague todos os arquivos da pasta do site **exceto o arquivo `appsettings.iis.json`**
1. Extraia o conteúdo do novo pacote do Amplia ([amplia-2.14.0.zip](https://cdn.lacunasoftware.com/amplia/amplia-2.14.0.zip)) para a pasta do site, sobrescrevendo todos os arquivos
1. Faça eventuais alterações necessárias ao arquivo `appsettings.iis.json` (veja acima como saber quais alterações serão necessárias)
1. Inicie o site no IIS Manager

## Veja também

* [Instalação do Amplia em Windows Server](install.md)
* [Resolução de problemas](../troubleshoot/index.md)
