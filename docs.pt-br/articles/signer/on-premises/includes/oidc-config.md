### Integração com provedor de OpenID Connect

O Signer requer um provedor de Open ID Connect (OIDC), mais especificamente uma *subscription* do [GrantID](../../../grant-id/index.md).

Você pode usar uma *subscription* em nosso serviço SaaS em [grantid.com](https://grantid.com/) ou [instalar sua instância própria do GrantID](../../../grant-id/on-premises/index.md).

<!--
> [!TIP]
> On Docker, see [Using a stack with GrantID](docker/internal-grantid.md) to install both Amplia and GrantID on the same stack
-->

De posse dos parâmetros da sua *subscription* do GrantID, preencha a seção **Oidc**:

* **Authority**: a *OIDC authority* (ex: `https://patorum.grantid.com`)
* **ApiEndpoint**: o endereço da API do GrantID (ex: `https://api.grantid.com`)
* **ApiName**: o escopo de API que será exigido nos tokens de acesso
* **ClientAppId**: o *App-Id* da aplicação frontend
* **AppId**: o *App-Id* da aplicação backend
* **AppSecret**: um segredo para autenticação da aplicação backend
* **RequireHttps** (opcional): atribua o valor `false` caso esteja usando uma instância própria do GrantID sem HTTPS (não recomendado)
