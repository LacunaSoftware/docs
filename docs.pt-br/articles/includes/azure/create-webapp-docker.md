## Criação do App Service

Siga os procedimentos abaixo para criar um *App Service* (você precisa ter um *App Service Plan* previamente criado com sistema operacional **Linux**):

1. Em **App Services**, clique em **+ Create** em seguida em **+ Web App**
1. Na primeira aba (*Basics*), preencha os dados conforme a sua infraestrutura (seguindo a região escolhida para o sistema)
   * Em *Publish*, escolha **Docker Container**
   * Em *Operating System*, escolha **Linux**
   * Em *Region*, escolha a região onde está o seu *app service plan*
   * Em *Linux Plan* , escolha o seu *app service plan*
   * Clique em **Next : Docker &gt;**
1. Na aba seguinte (*Docker*), preencha:
   * Em *Options*, deixe a opção **Single Container**
   * Em *Image Source*, selecione **Azure Container Registry**
   * Em *Registry*, selecione o *container registry* criado anteriormente
   * Em *Image* e *Tag*, selecione a imagem/tag do sistema conforme o comando `az acr import` realizado anteriormente
   * Deixe a opção *Startup Command* **em branco**
   * Clique em **Review + create**
1. Clique em **Create**

Uma vez concluída a criação do App Service, clique em **Go to resource**. Em seguida, tome nota de seu domínio, por exemplo `meu-app-service.azurewebsites.net`.

Vá em **Configuration** do App Service e adicione as seguintes configurações:

* `ASPNETCORE_ENVIRONMENT`: `Azure`
* `Bindings__HttpsMode`: `Strict`
* `STANDBY`: `True`

Salve as configurações.

Ainda na configuração do App Service, vá na aba **General settings** e, na opção **HTTPS Only**, marque **Off** (a própria aplicação se encarregará de exigir acesso via HTTPS da maneira mais adequada).

Em seguida, vá em **Custom domains** e copie o **Custom Domain Verification ID** (esse valor será necessário mais à frente).
