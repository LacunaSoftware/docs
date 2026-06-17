# Configuração de notificações de renovação - Amplia Reg

Para habilitar o envio de e-mails de renovação de certificado, preencha a seção **CertificateRenewalAlert** do arquivo de configuração:

* **Enabled**: defina como `True` para habilitar o envio de e-mails de renovação de certificado.
* **EmailScheduleDays**: lista separada por vírgulas de dias restantes antes de cada certificado expirar para enviar uma notificação de renovação. Padrão: `30,15,5`. Use valores negativos para notificar usuários após o vencimento do certificado
* **DefaultUrl**: URL padrão de renovação de certificado, com protocolo. Usada para substituição nos templates de e-mail padrão se nenhuma URL de renovação de certificado estiver definida nas autoridades de registro ou certificação do pedido. Se estiver usando os templates padrão, preencha este valor a menos que você tenha URLs de renovação configuradas por autoridade.

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[CertificateRenewalAlert]
Enabled=True
DefaultUrl=https://lacunasoftware.com
EmailScheduleDays=30,15,-5
```

Exemplo (variáveis de ambiente):

```sh
CertificateRenewalAlert__Enabled=True
CertificateRenewalAlert__DefaultUrl=https://lacunasoftware.com
CertificateRenewalAlert__EmailScheduleDays=30,15,-5
```

É importante observar que o valor da configuração **EmailScheduleDays** é apenas uma meta. Se ela será atingida ou não depende de diversos fatores. Mais notavelmente, se por algum motivo o job recorrente de notificações deixar de ser executado por vários dias consecutivos (por exemplo, se você definir `General:ProcessBackgroundJobs` como `False`), quando ele finalmente executar, as seguintes situações podem ocorrer:

* Múltiplas notificações podem estar pendentes de envio para o mesmo certificado
* Notificações podem estar pendentes de envio para certificados que expiraram há tanto tempo que a notificação não seria mais útil

Existem duas configurações que funcionam como salvaguardas contra essas situações:

* **MinNotificationPeriodHours**: período mínimo em horas entre notificações enviadas para o mesmo certificado. Padrão: `24`.
* **MaxExpirationDays**: máximo de dias após o vencimento do certificado para enviar notificações. Padrão: `90`.

## Personalizando assuntos de e-mail

O sistema determina automaticamente um assunto adequado para cada e-mail de aviso de renovação com base no fato de o certificado já ter expirado ou não, e quando. Existem seis assuntos possíveis:

* *Seu certificado expirou hoje*
* *Seu certificado expirou ontem*
* *Seu certificado expirou há N dias*
* *Seu certificado expira hoje*
* *Seu certificado expira amanhã*
* *Seu certificado expira em N dias*

> [!NOTE]
> O idioma dos assuntos também varia de acordo com a configuração `General:DefaultCulture`

Para personalizar os assuntos em um ou mais desses casos, defina as seguintes configurações na seção **CertificateRenewalAlert**:

* **ExpiredTodaySubject**
* **ExpiredYesterdaySubject**
* **ExpiredSubject**
* **ExpiresTodaySubject**
* **ExpiresTommorowSubject**
* **ExpiresSubject**

Nos casos específicos de **ExpiredSubject** e **ExpiresSubject**, use o placeholder `{0}` para o número de dias.

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[CertificateRenewalAlert]
...
ExpiresSubject=Faltam {0} dias para renovar seu certificado!
```

Exemplo (variáveis de ambiente):

```sh
CertificateRenewalAlert__ExpiresSubject=Faltam {0} dias para renovar seu certificado!
```

## Personalizando os templates de e-mail

Crie o template HTML do e-mail e armazene-o codificado em UTF-8 dentro da pasta `assets` do Blob Storage configurado com um dos seguintes nomes:

* `CertificateRenewalNearExpirationTemplate.html` para e-mails enviados quando o certificado está próximo do vencimento
* `CertificateRenewalExpiredTemplate.html` para e-mails enviados quando o certificado já expirou

Os templates podem usar qualquer uma das seguintes tags no formato `{{TagName}}`, que serão substituídas conforme a tabela abaixo:

Nome da tag                    | Descrição
------------------------------ | -----------
HolderFirstName                | Primeiro nome do titular do certificado, adequado para uma saudação inicial. No caso de certificados organizacionais, contém o primeiro nome do responsável, não o nome da empresa
SubjectName                    | Nome do titular do certificado
ExpirationDate                 | Data de vencimento do certificado
ExpirationTime                 | Horário de vencimento do certificado
CertificateRenewalLinkUrl      | URL do link de renovação (para uso no atributo `href`)
CertificateRenewalLinkText     | Texto do link de renovação (para uso como texto de um elemento `<a>`, contém a URL de renovação sem o protocolo)
SubjectIdentifierLabel         | Rótulo do identificador do titular
SubjectIdentifier              | Identificador do titular do certificado
CertificateType                | Tipo de certificado
OrderNumber                    | Número do pedido
ValidityStartDate              | Data de início da validade do certificado
ValidityStartTime              | Horário de início da validade do certificado
UnsubscribeLinkUrl             | Link para cancelar o recebimento de e-mails de renovação

As seguintes tags podem ser usadas para compor templates dinâmicos, que variam de acordo com o tema e os recursos da aplicação:

Nome da tag            | Descrição
---------------------- | -----------
ThemeColor             | Cor primária do tema da aplicação em hex (sem '#')
AccentColor            | Cor de destaque do tema da aplicação em hex (sem '#')
LogoUrl                | URL do logotipo da aplicação

Informações de contato adicionais:

Nome da tag            | Descrição
---------------------- | -----------
SupportEmail           | E-mail de contato configurado na aplicação
SupportWhatsappPhone   | Telefone WhatsApp configurado na aplicação
SupportPhone           | Telefone configurado na aplicação

Exemplo:

```html
<!DOCTYPE html>
<html>
<body>
    <div>
        <h1>Renove seu certificado</h1>
    </div>
    <div>
        <h2>Olá, {{HolderFirstName}}</h2>
    </div>
    <div>
        <span>Seu certificado expirará em <b>{{ExpirationDate}}</b> às <b>{{ExpirationTime}}</b></span>
    </div>
    <div>
        <span>Convidamos você a renovar seu certificado em <a target="_blank"
                href="{{CertificateRenewalLink}}">{{CertificateRenewalLinkText}}</a></span>
    </div>
    <div>
        <h2>Dados do certificado</h2>
        <div style="background-color: #{{AccentColor}}">
            <p>Titular: {{SubjectName}}</p>
            <p>{{SubjectIdentifierLabel}}: {{SubjectIdentifier}}</p>
            <p>Tipo: {{CertificateType}}</p>
            <p>Pedido: {{OrderNumber}}</p>
            <p>Início da validade: {{OperationStartDate}}</p>
            <p>Fim da validade: {{ExpirationDate}}</p>
        </div>
    </div>
</body>
</html>
```

## Configurações avançadas

As seguintes configurações na seção **CertificateRenewalAlert** podem ser usadas para controlar ainda mais o envio de e-mails de renovação de certificado:

* **NotificationBatchSize**: controla quantos pedidos serão buscados do banco de dados para processamento por vez. Padrão: `100`

Por padrão, as notificações devidas são agendadas para envio diário às 10h no fuso horário configurado em `General:DefaultTimeZone`.
Para personalizar isso, preencha na seção **JobSchedules**:

* **CertificateRenewalAlert**: expressão cron desejada. Padrão: `0 10 * * *` (todos os dias às 10:00)
* **CertificateRenewalAlertTimeZone**: fuso horário desejado para a expressão cron. Padrão: fuso horário do sistema.

> [!TIP]
> Se precisar de ajuda para definir uma expressão cron, visite [crontab guru](https://crontab.guru/)

## Veja também

* [Configurar envio de e-mail](configure-email.md)
* [test-certificate-renewal-alert](../tool/test-certificate-renewal-alert.md)
