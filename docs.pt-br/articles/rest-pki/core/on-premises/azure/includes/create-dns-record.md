> [!NOTE]
> Nas instruções abaixo, utilizaremos como exemplo a criação do apontamento para o domínio `app.patorum.com`

1. Em **DNS zones**, clique na zona à qual o domínio pertence (ex: `patorum.com`)
1. Clique em **+ Record set**
1. Em *Name*, digite a porção mais à esquerda do domínio (ex: `app`)
1. Em *Type*, selecione **CNAME**
1. Em *Alias record set*, selecione **No**
1. Em *Alias*, preencha o domínio do App Service (ex: `meu-app-service.azurewebsites.net`)
1. Clique em **OK**
1. Clique novamente em **+ Record set**
1. Em *Name*, digite `asuid.` seguido da porção mais à esquerda do domínio (ex: `asuid.app`)
1. Em *Type*, selecione **TXT**
1. Em *Value*, cole o valor do **Custom Domain Verification ID** anteriormente copiado do App Service
1. Clique em **OK**

> [!NOTE]
> Caso você não utilize o Azure como servidor de DNS das zonas, realize o procedimento equivalente no seu servidor de DNS
