# Configuração de reCAPTCHA - Amplia Reg

O [Amplia Reg](../index.md) utiliza o [Google reCAPTCHA](https://developers.google.com/recaptcha) para proteger a API contra abusos, garantindo que as requisições
foram originadas por um operador humano e não por um bot automatizado.

> [!NOTE]
> Habilitar o reCAPTCHA é essencial em ambientes de produção para proteger a API contra abusos

## Criar um projeto reCAPTCHA

1. Autentique-se no [console de administração do Google reCAPTCHA](https://www.google.com/recaptcha/admin)
1. No formulário *Registrar um novo site*, preencha:
   * Um **rótulo** de sua escolha, por exemplo `Meu Amplia Reg`
   * Selecione **reCAPTCHA v2**, em seguida **Invisible reCAPTCHA badge**
   * Digite o **domínio** da sua instância do Amplia Reg, por exemplo `ampliareg.suaempresa.com.br`
   * Aceite os termos de serviço
1. Clique em **Enviar**
1. Copie a **chave do site** e a **chave secreta**

## Configurando o Amplia Reg

Com ambas as chaves em mãos, edite o arquivo de configuração do Amplia Reg e preencha a seção **Recaptcha**, configurações **SiteKey** e **SecretKey**.

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[Recaptcha]
SiteKey=6LdfItkZAAAAAIxxxxxxxxxxxxxxxxxxxxxxxxxx
SecretKey=6LdfItkZAAAAALxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Exemplo (variáveis de ambiente):

```sh
Recaptcha__SiteKey=6LdfItkZAAAAAIxxxxxxxxxxxxxxxxxxxxxxxxxx
Recaptcha__SecretKey=6LdfItkZAAAAALxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Veja também

* [Amplia Reg on-premises](index.md)
