# Configuração de envio de SMS - Amplia Reg

Algumas operações do [Amplia Reg](../index.md) exigem o envio de mensagens SMS. As mensagens SMS podem ser enviadas usando diferentes *provedores*.

A seção **SMS** do arquivo de configuração configura o envio de SMS. A configuração **Type** define qual provedor deve ser usado, e as demais configurações dependem do provedor escolhido:

* [Twilio](https://www.twilio.com/)
  * **Type**: defina como `Twilio` para enviar SMS usando Twilio
  * **MessageFrom**: o número de telefone do remetente fornecido pela Twilio (ex.: `+12125550000`)
  * **AccountSid**: o SID da conta, fornecido pela Twilio
  * **AuthToken**: o token de autenticação, fornecido pela Twilio
* [TotalVoice](https://totalvoice.com.br/)
  * **Type**: defina como `TotalVoice` para enviar SMS usando TotalVoice
  * **AccessToken**: o token de acesso, fornecido pela TotalVoice (ex.: `0123456789abcdef0123456789abcdef`)
* [Zenvia](https://www.zenvia.com/)
  * **Type**: defina como `Zenvia` para enviar SMS usando Zenvia
  * **Account**: o nome da sua conta (ex.: `patorum.sms`)
  * **Password**: a senha da API
  * **Endpoint** (opcional): URL base alternativa da API (deixe em branco se não souber)
* [SmsEmpresa](https://www.smsempresa.com.br/)
  * **Type**: defina como `SmsEmpresa` para enviar SMS usando SmsEmpresa
  * **ChaveKey**: a *Chave Key* fornecida em *Configuração* &gt; *Minha Conta*
* Simulador (apenas para fins de depuração)
  * **Type**: defina como `Simulator` para simular o envio de SMS (as mensagens que seriam enviadas são apenas registradas no log)

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[SMS]
Enabled=True
Type=Twilio
MessageFrom=+12125550000
AccountSid=YOURACCOUNTSID
AuthToken=YOURTOKEN
```

Exemplo (variáveis de ambiente):

```bash
SMS__Enabled=True
SMS__Type=Twilio
SMS__MessageFrom=+12125550000
SMS__AccountSid=YOURACCOUNTSID
SMS__AuthToken=YOURTOKEN
```

## Veja também

* [Amplia Reg on-premises](index.md)
