# Configurações do Amplia Reg

### Configurações *General*

Na seção **General**:

* **SiteUrl**: URL pública do site (ex.: `https://ampliareg.patorum.com/`). Este endereço é usado para compor e-mails com links de retorno ao site.
* **EncryptionKey**: chave de criptografia.
* **EncryptionCertThumb**: thumbprint do certificado da chave de criptografia.
* **RootPasswordHash**: hash da senha root calculado anteriormente.
* **AutoUpdateDatabase**: por padrão, a aplicação tenta realizar alterações no modelo do banco de dados após uma atualização (quando necessário). Defina como `false` se a aplicação não tiver permissões de proprietário sobre o banco de dados.
* **SupportEmailAddress**: endereço de e-mail de suporte (usado no rodapé dos e-mails enviados).

* **Flavour**: tipo de sabor da aplicação. Afeta várias partes da aplicação, como formatos de certificado padrão, rótulos, estados, validações, tipos de arquivo do titular permitidos, etc. Padrão: `Brazil`.
* **HidePoweredBy**: remove "powered by Lacuna" da página inicial se definido como `true`. Padrão: `false`.
* **BiometricTokenExpirationMinutes**: validade do token de autenticação biométrica em minutos. Padrão: `720` (12 horas).
* **DeviceTokenExpirationMinutes**: validade do token de autenticação por dispositivo em minutos. Padrão: `720` (12 horas).
* **DeviceAuthenticationTimeoutSeconds**: timeout do início até a conclusão da autenticação por dispositivo em segundos. Padrão: `15`.
* **AcceptedCryptoDeviceProviders**: lista de provedores de criptografia aceitos separados por vírgulas. Deixe em branco para aceitar todos os provedores conhecidos. Padrão: `null`.
* **DeviceAuthenticationCertificatePolicy**: política de certificado do certificado de dispositivo. Padrão: `1.3.6.1.4.1.46332.3.3` [subárvore da Lacuna](https://docs.lacunasoftware.com/pt-br/articles/asn1.html).
* **DocumentGenerator**: tipo de gerador de documentos. Padrão: `Standard`.
* **SessionTimeoutMinutes**: timeout da sessão atual por inatividade em minutos. Padrão: `5`.
* **SessionTimeoutWarningSeconds**: timeout do aviso antes do logout por inatividade em segundos. Padrão: `60`.
* **ExportedFileTicketValidityMinutes**: validade dos tickets para download de arquivos exportados em minutos. Padrão: `60`.
* **ZipCompressionLevel**: tipo de nível de compressão zip. Padrão: `Fastest`.
* **DenySelfOperations**: nega operações próprias em pedidos. Padrão: `false`.
* **AgentCertificateEnabled**: habilita autenticação por certificado de agente de registro. Padrão: `false`.
* **HsmSerialNumber**: número de série do HSM que aparecerá nos contratos de pedidos em nuvem. Aplicado apenas ao `DocumentGenerator` `Code100`. Padrão: `null`.
* **EnableRolesConflict**: conflito de papéis habilitado. Padrão: `true`.

### Configurações *JobSchedules*

Na seção **JobSchedules**:

> controla os agendamentos de jobs.

* **CleanupUsedNonces**: expressão cron desejada que define quando o sistema limpa nonces usados ou expirados. Padrão: `*/11 * * * *` (a cada 11 minutos)
* **CertificateRenewalAlert**: expressão cron desejada que define quando o sistema verifica certificados próximos do vencimento e dispara alertas de renovação. Padrão: `0 10 * * *` (às 10:00).
* **CertificateRenewalAlertTimeZone**: fuso horário usado para avaliar a expressão cron CertificateRenewalAlert. Padrão: fuso horário do sistema.
* **SafSync**: expressão cron desejada que define quando a sincronização de dados SAF é executada. Padrão: `*/13 * * * *` (a cada 13 minutos).
* **SafOccurrencesSync**: expressão cron desejada que define quando a sincronização de dados de ocorrências SAF é executada. Padrão: `*/17 * * * *` (a cada 17 minutos).
* **SafOccurrencesProcess**: expressão cron desejada que define quando as ocorrências SAF sincronizadas são processadas. Padrão: `*/21 * * * *` (a cada 21 minutos).
* **PkiBrazilDailyReport**: expressão cron desejada que define quando o relatório diário PKI Brasil é gerado. Padrão: `5 3 * * *` (às 03:05).

> [!TIP]
> Se precisar de ajuda para definir uma expressão cron, visite [crontab guru](https://crontab.guru/).

### Configurações *Order*

Na seção **Order**:

* **MinConfirmationDeadlineHours**: prazo mínimo de confirmação em horas para pedidos que serão emitidos antes da aprovação. Padrão: `4`.
* **MinConfirmationDeadlineToleranceMinutes**: tolerância mínima do prazo de confirmação em minutos para pedidos que serão emitidos antes da aprovação. Padrão: `15`.
* **MaxConfirmationDeadlineHours**: prazo máximo de confirmação em horas para pedidos que serão emitidos antes da aprovação. Padrão: `168` (7 dias).
* **AllowSameValidationAndConfirmationAgent**: permite que o mesmo agente de registro realize tanto a validação quanto a confirmação de um pedido. Padrão: `false`.
* **AdditionalCertificateFormats**: lista de formatos de certificado adicionais separados por vírgulas. Padrão: `null`.
* **AdditionalHolderFileTypes**: lista de tipos de arquivo do titular adicionais separados por vírgulas. Padrão: `null`.
* **ExpirationImminentLimitInHours**: limite de vencimento iminente em horas. Pedidos com prazo iminente terão prioridade na fila de confirmação. Padrão: `24`.
* **AllowUserCreateOrder**: permite criação de pedidos sem integração de aplicação. Padrão: `true`.
* **OrderNumberSeries**: série do número de pedido. Será usada como prefixo do número do pedido. Padrão: `1`.
* **OrderIndexLength**: comprimento do índice do pedido. Padrão: `7`.
* **ResendIssueNotificationCooldownMinutes**: cooldown de reenvio de notificação de emissão em minutos. Padrão: `1`.
* **IssuePasswordLength**: comprimento da chave de emissão 1 e da chave de emissão 2. Padrão: `6`.
* **ApiSessionExpirationMinutes**: expiração padrão da sessão de API em minutos. Padrão: `15`.
* **IssuePreparationSessionExpirationMinutes**: expiração da sessão de preparação de emissão em minutos. Padrão: `16`.
* **IssuingSessionExpirationMinutes**: expiração da sessão de emissão em minutos. Padrão: `16`.
* **ValidationSignatureSessionExpirationMinutes**: expiração da sessão de assinatura de validação em minutos. Padrão: `15`.
* **ConfirmationSignatureSessionExpirationMinutes**: expiração da sessão de assinatura de confirmação em minutos. Padrão: `15`.
* **PrettyIssueUrl**: URL de emissão amigável. Será usada como URL de emissão em vez do padrão se nenhum outro método (URL de emissão da autoridade) estiver definido. Padrão: `null`.
* **CloudIssueUrl**: URL de emissão em nuvem. Padrão: `null`.
* **PendencyReasons**: motivos de pendência do pedido separados por vírgulas. Deixe em branco para definir todos os motivos padrão. Padrão: `null`.
* **DeclineReasons**: motivos de recusa do pedido separados por vírgulas. Deixe em branco para definir todos os motivos padrão. Padrão: `null`.
* **RevocationReasons**: motivos de revogação do pedido separados por vírgulas. Deixe em branco para definir todos os motivos padrão. Padrão: `null`.
* **FaceValidationProvider**: provedor de validação facial. Padrão: `None`.
* **PublicSearchEnabled**: busca pública de certificado habilitada. Padrão: `false`.
* **ConfirmationRequirementMode**: modo de requisito de confirmação. `Always`, `Never` ou `OnlyIfRequired` (como quando o Agente de Registro exige confirmação). Padrão: `Always`.
* **IssueBeforeApprovalEnabled**: defina como `true` para permitir que pedidos sejam emitidos antes da aprovação com validade futura do certificado. Padrão: `false`.
* **CustomNumbersEnabled**: por padrão a aplicação gera automaticamente números de pedido. Defina como `true` para permitir a criação de números de pedido personalizados. Padrão: `false`.
* **SaleNumberEnabled**: número de venda habilitado. Padrão: `true`.
* **SaleNumberRequired**: número de venda obrigatório. Padrão: `false`.
* **BiometricCollectionType**: tipo de coleta biométrica. Padrão: `Photo`.
* **DeliveryMethodDescriptionForIssueKey1**: mensagem exibida com a chave de emissão 1 no formulário de autenticação do titular. Padrão: `received at RA or videoconference` ou `received via SMS` (se `Flavour` `CaboVerde`).
* **DeliveryMethodDescriptionForIssueKey2**: mensagem exibida com a chave de emissão 2 no formulário de autenticação do titular. Padrão: `received by email or SMS`.
* **LivenessEnabled**: liveness habilitado na etapa de validação biométrica. Padrão: `false`.
* **PresentialLivenessType**: provedor de liveness em pedido presencial. Padrão: `FaceTec`.
* **VideoconferenceLivenessType**: provedor de liveness em pedido por videoconferência. Padrão: `FaceTec`.
* **LivenessTriesBeforeBypass**: tentativas antes de habilitar o bypass de liveness. Padrão: `1`.
* **BrazilIdentificationFieldMode**: modo dos campos de identificação Brasil. Padrão: `Required`.
* **EnableValidationReverseGeolocation**: habilita geolocalização reversa na validação. Padrão: `false`.
* **RequireConfirmationForPresentialIssuance**: define todos os pedidos presenciais como exigindo confirmação. Padrão: `false`.
* **EnableConfirmationUpdateDocuments**: habilita a atualização de documentos do titular na confirmação; se algum documento tiver sido alterado, um novo contrato será gerado para ser assinado pelo agente confirmador. Padrão: `false`.

* **SubjectAuth**: na seção **SubjectAuth**:

    > controla a autenticação do titular no formulário de autenticação do titular.

    * **MaxFailedAttempts**: máximo de tentativas falhas antes de bloquear o pedido. Padrão: `1`.
    * **InitialLockPeriodMinutes**: período inicial de bloqueio em minutos. Padrão: `1`.

### Configurações *CertificateRenewalAlert*

Consulte [Configurar alerta de renovação de certificado](configure-certificate-renewal-alert.md) para mais detalhes.

### Configurações *Maps*

Na seção **Maps**:

> Usado para obter a localização do local de serviço quando configurado.

* **AzureEndpointUrl**: URL do endpoint do Azure. Padrão: `https://atlas.microsoft.com/`.
* **AzureClientId**: ID do cliente Azure. Padrão: `null`.
* **AzurePrimaryKey**: chave primária do Azure. Padrão: `null`.

### Configurações *CertificateType*

Na seção **CertificateType**:

* **KeySizes**: tamanhos de chave permitidos separados por vírgulas. Padrão: `1024,2048,3072,4096`.

### Configurações *SealCertificate*

Na seção **SealCertificate**:

> Usado para assinatura de contratos e dossiês em pedidos pré-aprovados.

* **Certificate**: certificado em base 64. Padrão: `null`.
* **ProtectedKey**: chave protegida em base 64. Padrão: `null`.

### Configurações *Jitsi*

Na seção **Jitsi**:

* **Domain**: domínio. Padrão: `8x8.vc`.
* **Issuer**: emissor usado no campo `iss` do JWT. Padrão: `chat`.
* **AppId**: ID da aplicação. Padrão: `null`.
* **ApiKey**: chave de API. Padrão: `null`.
* **PrivateKeyPath**: caminho da chave privada. Padrão: `null`.
* **PrivateKeyContent**: conteúdo da chave privada. Padrão: `null`.
* **PrivateKeyType**: tipo da chave privada. Padrão: `PKCS1`.
* **IsSharedService**: por padrão a aplicação lança uma exceção se receber um payload e não encontrar um pedido relacionado. Se o mesmo Jitsi configurado for usado por outras aplicações e puder enviar webhooks para fins externos, defina como `true`. Padrão: `false`.

### Configurações *Serpro*

Na seção **Serpro**:

* **DatavalidMinSimilarity**: similaridade mínima para aceitar a validação facial. Padrão: `0.93`.
* **DatavalidMinConfirmationSimilarity**: similaridade mínima para aceitar a validação facial com aviso de confirmação. Padrão: `null`.

### Configurações *RfbQuery*

Na seção **RfbQuery**:

* **Enabled**: habilitado. Padrão: `null`.
* **Endpoint**: endpoint. Padrão: `https://www6.receita.fazenda.gov.br/`.
* **ServerCertificateThumbprint**: aceitar resposta de certificado de servidor fixado. Padrão: `null`.
* **DangerousAcceptAnyServerCertificate**: ignorar validação do certificado do servidor. Padrão: `false`.
* **PfxContent**: conteúdo do certificado. Padrão: `null`.
* **PfxPath**: caminho do certificado. Padrão: `null`.
* **PfxPassword**: senha do certificado. Padrão: `null`.

### Configurações *HolderFileTypes*

Na seção **HolderFileTypes**:

> O valor da chave será usado para salvar o valor no banco de dados e deve ter no máximo 15 caracteres.

* **`Chave`**: nome exibido.

### Configurações *BryPSBio*

Na seção **BryPSBio**:

* **Endpoint**: endpoint. Padrão: `null`.
* **Username**: nome de usuário. Padrão: `null`.
* **Password**: senha. Padrão: `null`.
* **TokenRenewAdvanceSeconds**: segundos de antecedência para renovação do token. Padrão: `5`.
* **TokenExpirationSeconds**: segundos de expiração do token. Padrão: `900` (15 minutos).
* **ServerCertificateThumbprint**: aceitar resposta de certificado de servidor fixado. Padrão: `null`.
* **DangerousAcceptAnyServerCertificate**: ignorar validação do certificado do servidor. Padrão: `false`.
* **FingerMaxQualityScore**: pontuação máxima de qualidade do dedo. Padrão: `3`.
* **HealthCheckEnabled**: health check habilitado. Padrão: `true`.
* **HealthCheckPath**: caminho do health check. Padrão: `api/profile-info`.

### Configurações *AscertiaAdss*

Na seção **AscertiaAdss**:

* **Endpoint**: endpoint. Padrão: `null`.
* **ClientId**: ID do cliente. Padrão: `null`.
* **ClientSecret**: segredo do cliente. Padrão: `null`.
* **ServerCertificateThumbprint**: aceitar resposta de certificado de servidor fixado. Padrão: `null`.
* **DangerousAcceptAnyServerCertificate**: ignorar validação do certificado do servidor. Padrão: `false`.

### Configurações *Sms*

Na seção **Sms**:

Consulte [Configurar envio de SMS](configure-sms.md) para mais detalhes.

### Configurações *Saf*

Na seção **Saf**:

* **Enabled**: habilitado. Padrão: `false`.
* **Endpoint**: endpoint. Padrão: `null`.
* **PfxContent**: conteúdo do certificado. Padrão: `null`.
* **PfxPath**: caminho do certificado. Padrão: `null`.
* **PfxPassword**: senha do certificado. Padrão: `null`.
* **BatchSyncSize**: tamanho do lote de sincronização. Padrão: `100`.
* **CacheTimeoutMinutes**: timeout do cache em minutos. Padrão: `1`.
* **ServerCertificateThumbprint**: aceitar resposta de certificado de servidor fixado. Padrão: `null`.
* **DangerousAcceptAnyServerCertificate**: ignorar validação do certificado do servidor. Padrão: `false`.
* **SendTimeoutMinutes**: timeout de envio em minutos. Padrão: `1`.

### Configurações *PkiBrazilDailyReport*

Na seção **PkiBrazilDailyReport**:

* **AutoGenerationCertificationAuthorityId**: ID da autoridade de certificação para geração automática do relatório diário. Padrão: `null`.
* **BatchSize**: tamanho do lote. Padrão: `50`.

### Configurações *GoogleMaps*

Na seção **GoogleMaps**:

> Usado para obter o código IBGE de validação quando `EnableValidationReverseGeolocation` está habilitado.

* **ApiKey**: chave de API. Padrão: `null`.

### Configurações *Amplia*

Na seção **Amplia**:

* **Disabled**: desabilitado. Padrão: `null`.
* **Endpoint**: endpoint. Padrão: `null`.
* **ApiKey**: chave de API. Padrão: `null`.
* **Timeout**: timeout. Padrão: `null`.
* **Culture**: cultura. Padrão: `null`.
* **DefaultSubscriptionId**: ID de assinatura padrão. Padrão: `null`.

### Configurações *Audit*

Na seção **Audit**:

* **Endpoint**: endpoint. Padrão: `null`.
* **ApiKey**: chave de API. Padrão: `null`.
* **TimeoutSeconds**: timeout em segundos. Padrão: `null`.
* **CultureName**: nome da cultura. Padrão: `null`.
* **DangerousAcceptAnyServerCertificate**: ignorar validação do certificado do servidor. Padrão: `false`.
* **ServerCertificateThumbprint**: aceitar resposta de certificado de servidor fixado. Padrão: `null`.

### Configurações *Acertpix*

Na seção **Acertpix**:

* **Endpoint**: endpoint. Padrão: `https://api.plataformaacertpix.com.br/`.
* **DocumentoscopiaPro**: na seção **DocumentoscopiaPro**:
    * **ClientId**: ID do cliente. Padrão: `null`.
    * **ClientSecret**: segredo do cliente. Padrão: `null`.
* **DocumentoscopiaScore**: na seção **DocumentoscopiaScore**:
    * **ClientId**: ID do cliente. Padrão: `null`.
    * **ClientSecret**: segredo do cliente. Padrão: `null`.
* **Facematch**: na seção **Facematch**:
    * **ClientId**: ID do cliente. Padrão: `null`.
    * **ClientSecret**: segredo do cliente. Padrão: `null`.
    * **MinSimilarityThreshold**: limiar mínimo de similaridade. Padrão: `95`
* **DocumentoscopiaLite**: na seção **DocumentoscopiaLite**:
    * **ClientId**: ID do cliente. Padrão: `null`.
    * **ClientSecret**: segredo do cliente. Padrão: `null`.
* **WebhookUrl**: URL para receber webhooks. Padrão: `null`.
* **WebhookApiKey**: chave de API de webhook. Padrão: `null`.
* **DangerousAcceptAnyServerCertificate**: ignorar validação do certificado do servidor. Padrão: `false`.
* **ServerCertificateThumbprint**: aceitar resposta de certificado de servidor fixado. Padrão: `null`.

### Configurações *VideoIdentification*

Na seção **VideoIdentification**:

* **Enabled**: habilitado. Padrão: `false`.

### Configurações *IronPdf*

Na seção **IronPdf**:

* **LicenseKey**: chave de licença. Padrão: `false`.

### Configurações *VideoconferenceCache*

Na seção **VideoconferenceCache**:

* **CacheRecordSlidingExpirationMinutes**: expiração deslizante do registro de cache em minutos. Padrão: `5`.

### Configurações *BryBioService*

Na seção **BryBioService**:

* **AgentBiometricsEnabled**: habilita autenticação biométrica do agente de registro. Padrão: `false`.
* **AgentBiometricsEndpoint**: endpoint a ser usado na autenticação biométrica. Padrão: `null`.

### Configurações *Otp*

Na seção **Otp**:

* **VideoIdentification**: na seção **VideoIdentification**:
    * **Length**: comprimento do OTP. Padrão: `6`.
    * **ResendTimeoutSeconds**: timeout de reenvio do OTP em segundos. Padrão: `60`.
    * **ValidityMinutes**: validade do OTP em minutos. Padrão: `60`.
    * **DeliveryMethods**: métodos de entrega do OTP separados por vírgulas. A ordem configurada será a ordem exibida no formulário OTP. Valores possíveis: `Email` ou `Sms`. Padrão: `null`.
* **Videoconference**: na seção **Videoconference**:
    * **Length**: comprimento do OTP. Padrão: `6`.
    * **ResendTimeoutSeconds**: timeout de reenvio do OTP em segundos. Padrão: `60`.
    * **ValidityMinutes**: validade do OTP em minutos. Padrão: `60`.
    * **DeliveryMethods**: métodos de entrega do OTP separados por vírgulas. A ordem configurada será a ordem exibida no formulário OTP. Valores possíveis: `Email` ou `Sms`. Padrão: `null`.

### Configurações *Geolocation*

Na seção **Geolocation**:

* **EnableLowAccuracyRetry**: habilita nova tentativa após falha por baixa precisão. Padrão: `true`.
* **MaximumAgeSeconds**: idade máxima em segundos. Padrão: `60`.
* **TimeoutSeconds**: timeout em segundos. Padrão: `20`.

### Configurações *PublicContact*

Na seção **PublicContact**:

* **Email**: configura o endereço de e-mail que será usado nas telas públicas e nos e-mails enviados pelo sistema. Padrão: `null`.
* **WhatsappPhone**: configura o telefone WhatsApp que será usado nas telas públicas e nos e-mails enviados pelo sistema. Padrão: `null`.
* **Phone**: configura o telefone que será usado nas telas públicas e nos e-mails enviados pelo sistema. Padrão: `null`.
