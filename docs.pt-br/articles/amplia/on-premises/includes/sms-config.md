### Envio de SMS

Se os usuários emitirem certificados (procedimento de emissão pela Web ou móvel), será necessária uma confirmação por SMS para confirmar a identidade do usuário durante o procedimento
de emissão do certificado. Mensagens SMS podem ser enviadas usando *provedores* diferentes

A seção **SMS** configura o envio de SMS. A configuração **Type** define qual provedor deve ser usado e as configurações restantes dependem do provedor escolhido:

* [Twilio](https://www.twilio.com/)
  * **Type**: definir esta configuração para `Twilio` para enviar mensagens SMS usando o Twilio
  * **MessageFrom**: o número de telefone do remetente fornecido por Twilio (ex.: `+55125550000`)
  * **AccountSid**: a conta SID, fornecida pelo Twilio
  * **AuthToken**: o token de autenticação, fornecido pelo Twilio
* [TotalVoice](https://totalvoice.com.br/)
  * **Type**: definir esta configuração para `TotalVoice` para enviar mensagens SMS usando o TotalVoice
  * **AccessToken**: o token de acesso, fornecido pelo TotalVoice
