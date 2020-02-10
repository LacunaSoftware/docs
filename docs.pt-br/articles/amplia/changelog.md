# Histórico de versões do Amplia

<a name="v3-0-0" />
### 3.0.0 (2019-02-06)

* Dashboard completamente refatorado
* Adicionado suporte à realização de operações no dashboard que antes só podiam ser feitas via API:
  * Gerenciamento de templates de certificados
  * Criação de ACs para emissão de certificados de atributo
* Adicionado [suporte a Docker](on-premises/docker/index.md)
* Alterado comportamento em Linux para logar para o *systemd journal* ([clique aqui para mais detalhes](on-premises/linux/troubleshoot/check-logs.md))
* Melhoria ao formato dos certificados de chave pública de usuários finais, adicionando extensão *AuthorityKeyIdentifier*

Atualiza modelo do banco de dados: **sim**

Mudanças de configuração: veja [Atualizando o Amplia da versão 2.16 para 3.0](on-premises/update-30.md)


<a name="v2-16-1" />
### 2.16.1 (2019-12-12)

* Adicionada opção de configurar um *alias* para o tipo de entidade em templates de certificado do tipo *PrivateID*

Atualiza modelo do banco de dados: não


<a name="v2-16-0" />
### 2.16.0 (2019-12-10)

* Adicionado certificado de atributo tipo *PrivateID* (para carteiras de identidade de entidades de classe)

Atualiza modelo do banco de dados: não


<a name="v2-15-2" />
### 2.15.2 (2019-12-04)

* Alterado modelo de configuração para Linux para logar para a pasta */var/log/amplia*

Atualiza modelo do banco de dados: não


<a name="v2-15-1" />
### 2.15.1 (2019-09-12)

* Melhorias ao certificado de chave pública tipo *Cnb* (funcionalidade específica para um cliente)

Atualiza modelo do banco de dados: não


<a name="v2-15-0" />
### 2.15.0 (2019-08-10)

* Adicionado suporte a [instalação em Linux](on-premises/linux/index.md)
* Adicionado suporte a armazenamento de chaves de AC no banco de dados
* Adicionado suporte a armazenamento de arquivos no sistema de arquivos local
* Adicionado suporte ao provedor de SMS [TotalVoice](https://www.totalvoice.com.br/)
* Adicionada informação de tipo de certificado (A1/A3) em certificados ICP-Brasil
* Melhorias à página de criação de pedido de certificado
* Melhoria de escalabilidade: chaves de *data protection* agora são armazenadas no banco de dados
* Melhoria de segurança: chaves de *data protection* podem ser cifradas (obrigatório para utilizar armazenamento de chaves de AC em banco de dados)
* Correções de bugs
  * Corrigida condição de corrida que permitida que dois certificados fossem emitidos para um mesmo pedido
  * Corrigido erro de validação que permitia que um pedido fosse criado sem especificar data de validade com um template sem validade padrão

Atualiza modelo do banco de dados: **sim**

Mudanças de configuração:
* `General:EncryptionKey`: opcional (para *backward compatibility*), mas altamente recomendado ser preenchido com uma chave gerada aleatoriamente
  (veja instruções para geração da chave em [Windows](on-premises/windows/install.md#encryption-key-generation) ou em [Linux](on-premises/linux/install-ubuntu.md#encryption-key-generation))

<!-- TODO: add link to EncryptionKey generation instructions -->


<a name="v2-14-1" />
### 2.14.1 (2019-06-13)

* Correções de bugs
  * Pesquisa textual nos certificados e pedidos não estava funcionando com termos parciais
  * Corrigido erro ao tentar revogar certificado de atributo

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

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

* PKI SDK atualizado para versão [2.4.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-4-0)
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
* PKI SDK atualizado para versão [2.3.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-3-0) (RTM)

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
* PKI SDK atualizado para versão [2.3.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-3-0) (beta 3)

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

<a name="v2-10-3" />
### 2.10.3 (2019-01-21)

* Melhorias à configuração de envio de SMS
* PKI SDK atualizado para versão [2.2.6](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-2-6)

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
