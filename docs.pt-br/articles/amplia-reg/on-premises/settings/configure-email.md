# Configuração de envio de emails - Amplia Reg

Para habilitar o envio de e-mail, preencha a seção **Email** do arquivo de configuração:

* **Enabled**: defina como `True`
* **ServerHost**: nome do host do servidor SMTP
* **EnableSsl**: por padrão, a comunicação SMTP é realizada com SSL. Para desabilitar o SSL, defina esta configuração como `false`
* **ServerPort**: por padrão, a comunicação SMTP é realizada pela porta 587. Defina esta configuração para usar uma porta diferente
* **Username** e **Password**: se o servidor SMTP exigir autenticação, defina estas configurações
* **SenderAddress**: endereço de e-mail a ser usado como remetente (campo *from*)
* **SenderName**: nome a ser usado como nome do remetente (opcional)

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[Email]
Enabled=True
ServerHost=smtp.patorum.com
Username=SOMEUSER
Password=SOMEPASS
SenderAddress=no-reply@patorum.com
SenderName=Patorum Inc
```

Exemplo (variáveis de ambiente):

```bash
Email__Enabled=True
Email__ServerHost=smtp.patorum.com
Email__Username=SOMEUSER
Email__Password=SOMEPASS
Email__SenderAddress=no-reply@patorum.com
Email__SenderName=Patorum Inc
```

## Veja também

* [Amplia Reg on-premises](index.md)
