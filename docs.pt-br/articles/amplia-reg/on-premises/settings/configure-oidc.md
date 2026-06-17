# Configuração de OpenID Connect - Amplia Reg

O [Amplia Reg](../index.md) requer uma assinatura do [GrantID](../../grant-id/index.md).

Você pode usar uma assinatura SaaS em [grantid.com](https://grantid.com/) ou [executar sua própria instância do GrantID](../../grant-id/on-premises/index.md).

## Configurando o GrantID

Acesse o portal do Console do GrantID e siga as instruções abaixo.

### Criação da assinatura

Ao criar a assinatura como parte das [etapas de pós-instalação do GrantID](../../grant-id/on-premises/post-install.md), certifique-se de selecionar
como o **tipo de nome de usuário**:

* `CPF` para instâncias brasileiras
* `Custom Information` para instâncias não brasileiras

### Criar uma conexão de API

Na aba **Scopes**, clique em **New API Connection** para criar uma conexão de API para a aplicação, informando:

* **Name**: `amplia-reg`
* **Display name**: `Amplia Reg`
* **User Informations (claims)**: marque todos

### Aplicação Frontend

Na aba **Applications**, clique em **New Application** e informe:

* **Name**: `Amplia Reg`
* **App-id**: `amplia-reg`
* **Type**: selecione `Implicit flow`.

Clique na aba **Settings** e defina:

* Marque a caixa de seleção `Allow Access tokens via browser?` (se ainda não estiver marcada)
* Desmarque as seguintes caixas de seleção (se marcadas): `Require consent?`, `Front-channel logout session required?` e `Back-channel logout session required?`
* **Application URL**: a URL da sua aplicação. Exemplo: `https://ampliareg.suaempresa.com.br`
* **Allowed URLs**:
  * **Redirect**: você deve adicionar 4 URLs de redirecionamento baseadas na URL da sua aplicação:
    * `<applicationURL>` sem barra no final.
    * `<applicationURL>/silent-refresh.html`
    * `<applicationURL>/private/profile/refresh`
    * `<applicationURL>/private`
  * **CORS origins**: `<applicationURL>` sem barra no final.
  * **Post Logout**: `<applicationURL>` sem barra no final.
* **Allowed Identification Scopes**: marque todos
* **Allowed API scopes**: marque a caixa de seleção do escopo de API `Amplia Reg`
* Marque as seguintes caixas de seleção: `Enable digital certificate login?`, `Prioritize digital certificate login?` e `Require digital certificate login?`

> [!WARNING]
> Não se esqueça de salvar suas alterações clicando no botão ao final da página.

### Aplicação Backend

Na aba **Applications**, clique novamente em **New Application** e informe:

* **Name**: `Amplia Reg Backend`
* **App-id**: `amplia-reg-backend`
* **Type**: selecione `Client credentials`.

Clique na aba **Settings** e defina:

* **Allowed API scopes**: marque a caixa de seleção `Manage subscription's users`.

> [!WARNING]
> Não se esqueça de salvar suas alterações clicando no botão ao final da página.

Após salvar, retorne à aba **Basic Details** e na seção **App Secret** clique em **Generate**, depois em **Generate Secret**.
Este é o valor da configuração `AppSecret` (copie e salve para uso posterior).

## Configurando o Amplia Reg para usar o GrantID

Após seguir as etapas acima para configurar o GrantID, preencha a seção **Oidc** do arquivo de configuração:

* **Authority**: a autoridade OIDC (ex.: *https://login.id.patorum.com*)
* **ApiEndpoint**: o endpoint de API do servidor OIDC (ex.: *https://api.id.patorum.com*)
* **ApiName**: `amplia-reg`
* **ClientAppId**: `amplia-reg`
* **AppId**: `amplia-reg-backend`
* **AppSecret**: o segredo gerado para a aplicação backend
* **RequireHttps** (opcional): defina como `false` se a instância do GrantID não utilizar HTTPS

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[Oidc]
Authority=https://login.id.patorum.com
ApiEndpoint=https://api.id.patorum.com
ApiName=amplia-reg
ClientAppId=amplia-reg
AppId=amplia-reg-backend
AppSecret=YOUR_BACKEND_APP_SECRET
```

Exemplo (variáveis de ambiente):

```bash
Oidc__Authority=https://login.id.patorum.com
Oidc__ApiEndpoint=https://api.id.patorum.com
Oidc__ApiName=amplia-reg
Oidc__ClientAppId=amplia-reg
Oidc__AppId=amplia-reg-backend
Oidc__AppSecret=YOUR_BACKEND_APP_SECRET
```

<a name="disable-sign-up" />

## Desabilitando o cadastro de usuários

Após configurar o OIDC no Amplia Reg, acesse o Amplia Reg. Como parte desse processo, você precisará se registrar, criando assim a primeira conta de usuário.
Após criar uma conta, siga as etapas abaixo para desabilitar novos cadastros (que a partir de então serão criados exclusivamente pelo gerenciamento de usuários do Amplia Reg):

1. Na aba **Applications**, clique na aplicação **Amplia Reg**
1. Clique na aba **Settings**
1. Marque a caixa de seleção `Disable sign up in login page?`
1. Clique no botão **Save** ao final da página

## Veja também

* [GrantID](../../grant-id/index.md)
