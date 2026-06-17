# Configurando de redirecionamento para HTTPS - Amplia Reg

Se você possui um certificado SSL válido para a sua [instância on-premises](index.md) do [Amplia Reg](../index.md)
e habilitou o SSL, pode ser que você queira redirecionar os usuários que acessarem a sua instância via HTTP para o endpoint HTTPS.

Para habilitar o redirecionamento HTTPS, altere a seção **Bindings** do arquivo de configuração:

* **HttpsMode**: defina como `RedirectPages`
* **SslPort**: se o seu endpoint HTTPS não estiver na porta 443, defina a porta aqui

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[Bindings]
HttpsMode=RedirectPages
SslPort=8443
```

Exemplo (variáveis de ambiente):

```bash
Bindings__HttpsMode=RedirectPages
Bindings__SslPort=8443
```

## Veja também

* [Amplia Reg on-premises](index.md)
