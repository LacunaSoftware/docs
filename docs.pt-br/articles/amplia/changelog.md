# Histórico de versões do Amplia

<a name="v2-14-0" />
### 2.14.0 (2019-06-11)

* Interface para ver e desbloquear pedidos bloqueados
* Tela de criação do pedido adaptada para solicitar CA, Template e telefone celular
* Edição de pedidos desabilitada temporariamente

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

<a name="v2-13-0" />
### 2.13.0 (2019-05-09)

* Adicionada possiblidade de configurar e-mails enviados pelo sistema (tema e imagens)
* Criada API para envio de SMS com link para emissão
* Adicionado campo `KeyMediaConstraints` no `OrderModel`

Atualiza modelo do banco de dados: não

Mudanças de configuração:

* `General:Theme` (opcional)
  * Valores válidos: vazio (padrão) ou `Teal`

<a name="v2-12-1" />
### 2.12.1 (2019-04-18)

* PKI SDK atualizado para versão [2.4.0](../pki-sdk/changelog.md#v2-4-0)
* Correções de bugs
  * Certificados SSL não permitem uso de wildcard
  * "Encavalamento" de jobs de emissão de LCR quando a emissão fica impossibilitada por muito tempo

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

<a name="v2-12-0" />
### 2.12.0 (2019-03-21)

* Emissão de certificado em celular

Atualiza modelo do banco de dados: não

Mudanças de configuração
* `General:SmsContextInfo` (opcional)
  * Permite configurar uma string a ser utilizada como informação de "contexto" nos SMSs enviados pelo sistema, por exemplo: "Link para emissão do seu certificado *na plataforma X*: ..." (nesse exemplo, o valor da configuração seria `na plataforma X`)
* Configurações opcionais para uso de aplicativo mobile personalizado (padrão todas configurações vazias)
  * `PkiSuite:MobileAppName`
  * `PkiSuite:MobileAppCodeSuffix`
  * `PkiSuite:MobileIOSStoreUri`
  * `PkiSuite:MobileAndroidStoreUri`

<a name="v2-11-1" />
### 2.11.1 (2019-02-26)

* Adicionada validação de endereço de e-mail na criação de pedidos de certificados tipo ICP-Brasil (`PkiBrazil`)
* PKI SDK atualizado para versão [2.3.0](../pki-sdk/changelog.md#v2-3-0) (RTM)

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

<a name="v2-11-0" />
### 2.11.0 (2019-02-15)

* Adicionado suporte a certificados para blockchain [IBM Hyperledger](https://www.ibm.com/blockchain/hyperledger)
* Adicionado suporte a curvas elípticas (ECC)
  * Emissão de certificados com chave ECC
  * Armazenamento de chaves ECC em Azure Key Vault -- curvas suportadas:
    * P-256 (secp256r1)
    * P-256K (secp256k1)
    * P-384 (secp384r1)
    * P-521 (secp521r1)
* PKI SDK atualizado para versão [2.3.0](../pki-sdk/changelog.md#v2-3-0) (beta 3)

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

<a name="v2-10-3" />
### 2.10.3 (2019-01-21)

* Melhorias à configuração de envio de SMS
* PKI SDK atualizado para versão [2.2.6](../pki-sdk/changelog.md#v2-2-6)

Atualiza modelo do banco de dados: não

Mudanças de configuração
* `SMS:Type` (opcional)
  * Configura o provedor de envio de SMS.
  * Valores válidos: vazio (padrão) ou `Twilio` (futuramente será adicionado suporte a outros provedores)
  * Caso a configuração seja omitida, é assumido o valor `Twilio` (para *backward compatibility*)
* Novas configurações do Twilio: pode-se especificar `SMS:AccountSid` e `SMS:AuthToken` ao invés de especificar `SMS:TwilioBasicCredential`
  * A antiga configuração `SMS:TwilioBasicCredential` ainda é suportada para fins de *backward compatibility*

<a name="v2-10-2" />
### 2.10.2 (2019-01-17)

* ASP.NET Core atualizado para 2.2
* Novo arquivo de configuração para hospedagem em IIS (appsettings.iis.json)
* Correção na codificação do cargo no certificado tipo 6

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

<a name="v2-10-1" />
### 2.10.1 (2019-01-14)

* Corrigido bug que causava erro na emissão de certificado quando o Web PKI não estava instalado

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

<a name="v2-10-0" />
### 2.10.0 (2019-01-10)

* Primeira versão disponível para instalação *on-premises*
