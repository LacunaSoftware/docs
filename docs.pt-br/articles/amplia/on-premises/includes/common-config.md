### Ligações

<!-- link to version in English -->
<div data-alt-locales="en-us"></div>

Na seção **Ligações**

* **HttpsMode**: por padrão, o painel e as REST APIs só podem ser acessados por meio de HTTPS, que é o comportamento recomendado se você tiver um certificado SSL válido.
  * Se você não tiver um certificado SSL válido, definir esta configuração como `Optional`. Os usuários que acessam o painel não serão redirecionados para HTTPS, e as REST APIs poderão ser acessadas por meio de HTTP.
  * Se você tiver um certificado SSL válido, mas alguns aplicativos clientes herdados não o
  reconhecerem, defina essa configuração como `RedirectPages`. As REST APIs ainda estarão acessíveis por meio do HTTP (como no modo `Opcional`), mas os usuários que acessam o painel serão redirecionados para o HTTPS.
* **SslPort**: por padrão, os usuários que acessam o painel por meio de HTTP são redirecionados para HTTPS na porta TCP padrão 43. Se o site estiver usando HTTPS em uma porta não padrão, defina-o aqui.

### Configuração do Amplia

Na seção **Amplia**

* **DatabaseKeyStoreEnabled**: para habilitar o [Armazenamento de chaves em banco de dados](../key-stores/database.md), definir como `true`.
* **NativeUserKeyStoreEnabled**: para habilitar o [Armazenamento de chaves no store nativo](../key-stores/native.md), definir como `true`.
* **NativeMachineKeyStoreEnabled**: para habilitar [Armazenamento de chaves no store nativo da máquina](../key-stores/native.md), definir como `true`.
* **DefaultKeyStore**: o armazenamento de chaves padrão no qual criar novas chaves.
* **DefaultAccessDomains**: domínios a serem usados ao compor os pontos de distribuição da LCR.

### Armazenamento de arquivos

Para manter o banco de dados organizado, o Amplia armazena arquivos fora do banco de dados. Os arquivos podem ser armazenados em provedores diferentes.

Na seção **Storage** configura o armazenamento de arquivos. A configuração **Type** define qual provedor deve ser usado e as configurações restantes dependem do provedor escolhido:

* Sistema de arquivo
  * **Type**: definir esta configuração como `FileSystem` para armazenar arquivos no sistema de arquivos locais
  * **Path**: defina o caminho da pasta na qual armazenar arquivos. Certifique-se de que o aplicativo tenha acesso à pasta

* [Azure Storage](https://azure.microsoft.com/en-us/services/storage/)
  * **Type**: definir esta configuração como `Azure`para armazenar arquivos em uma conta Azure Storage
  * **ConnectionString**: fornecer uma string de conexão para a outra
  * **ContainerName**: o nome do contêiner de blob no qual armazenar arquivos
* Amazon S3 (em breve, entre em contato conosco se você precisar)

### PKI Suite

Na seção **PKI Suite**:

  * **SdkLicense**: sua licença para PKI SDK, no formato Base64 (**obrigatório**)
  * **WebLicense**: sua licença para o componente Web PKI no formato binário (Base64). Somente obrigatório se usuário vai emitir certificados em seus computadores (procedimento de emissão web)

### Envio de email

Na seção **Email**:

  * **Habilitado**: por padrão, o envio de email está habilitado. Para desabilitar isto, defina esta configuração como `false` e ignore o restante desta seção.
  * **ServerHost**: *hostname* do servidor SMTP
  * **EnableSsl**: por padrão, a conversação SMTP é executada por SSL. Para desativar o SSL, defina essa configuração como `false`
  * **ServerPort**: Por padrão, a conversação SMTP é realizada pela porta 587. Defina esta configuração para usar uma porta diferente
  * **Username** ou **Password**: se o servidor SMTP exigir autenticação, defina essas configurações
  * **SenderAdress**: endereço de e-mail a ser usado como remetente (do campo)
  * **SenderName**: nome a ser usado como o nome do remetente (opcional)

### Configuração Open ID Connect

O painel do Amplia requer um servidor Open ID Connect (OIDC) para executar a autenticação de usuários.

A seção **Oidc** configura o servidor OIDC

  * **Authority**: a autoridade OIDC (ex.: `https://id.patorum.com`)
  * **ApiName**: o escopo API que será necessário nos tokens de acesso
  * **DashboardClientId**: o ID do cliente do aplicativo de painel

### Envio de SMS

Se os usuários emitirem certificados (procedimento de emissão pela Web ou móvel), será necessária uma confirmação por SMS para confirmar a identidade do usuário durante o procedimento
de emissão do certificado. Mensagens SMS podem ser enviadas usando *provedores* diferentes

A seção **SMS** configura o envio de SMS. A configuração **Type** define qual provedor deve ser usado e as configurações restantes dependem do provedor escolhido:

* [Twilio](https://www.twilio.com/)
  * **Type**: definir esta configuração para `Twilio`para enviar mensagens SMS usando Twilio
  * **MessageFrom**: o número de telefone do remetente fornecido por Twilio (ex.: `+55125550000`)
  * **AccountSid**: a conta SID, fornecida pelo Twilio
  * **AuthToken**: o token de autenticidade, fornecido pelo Twilio

> [!NOTE]
> Se você desejar utilizar outro provedor de SMS, por favor entre em contato conosco.

### Configuração Key store

Na seção **KeyStores**, cada chave é o nome de um armazenamento de chaves, tendo como valor uma seção com a configuração do armazenamento de chaves. Por exemplo:

```json
...
"KeyStores": {
  "Store1": {
    "Type": "...",
    "Setting1": "...",
    "Setting2": "..."
  },
  "Store2": {
    "Type": "...",
    "Setting1": "...",
    "Setting2": "...",
    "Setting3": "..."
  },
}
...
```

A configuração **Type** em cada configuração de armazenamento de chaves define o tipo de armazenamento de chaves e as configurações restantes dependem do provedor escolhido. Veja este artigo [Configuração de Key Store](../key-stores/index.md) para detalhes.

### Insights de aplicativo (instrumento adicional)

Se você deseja coletar dados de instrumentação adicionais com o [Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview), configure a
seção **ApplicationInsights**

  * **InstrumentationKey**: a chave de instrumentação da conta do Insights a ser usada
