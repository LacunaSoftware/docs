# Histórico de versões do Amplia

<a name="v3-10-0" />
### 3.10.0 (2021-02-08)

Novas funcionalidades:

* [AMP-195] - Remoção (opcional) de chaves no Azure Key Store

Melhorias:

* [AMP-196] - Permitir remover chaves de CAs revogadas

Correções de bugs:

* [AMP-198] - Durante a revogação de certificado de CA, a CA é removida ao invés de ser desativada
* [AMP-197] - Erro nas mensagens no dialog de confirmação de ativação de CA

Atualiza modelo do banco de dados: não


<a name="v3-9-6" />
### 3.9.6 (2020-11-26)

Melhorias:

* [AMP-184] - Adicionar configuração para esconder informações de "powered by"
* [AMP-187] - Permitir que a API de criação de pedido para usuário seja chamada para um usuário existente sem preencher o campo `subject`

Correções de bugs:

* [AMP-183] - Erro ao cadastrar pedido porque o email não está normalizado
* [AMP-188] - Dependendo do tamanho da tela, não é possível marcar a checkbox na assinatura do termo
* [AMP-189] - Erros em templates do tipo `EcuadorBce`
* [AMP-190] - Após remover uma chave que era de uma CA, erro ao listar CA Certificates
* [AMP-191] - Data de nascimento é pré-preenchida de maneira incorreta na criação de pedido para usuário

Atualiza modelo do banco de dados: não


<a name="v3-9-5" />
### 3.9.5 (2020-10-20)

Correção de bug:

* [AMP-182] - Dependendo do relógio da máquina do usuário, o processo de emissão imediatamente acusa estar expirado

Atualiza modelo do banco de dados: não


<a name="v3-9-4" />
### 3.9.4 (2020-10-08)

Correção de bug:

* [AMP-186] - Erros recorrentes na emissão de LCR

Atualiza modelo do banco de dados: não


<a name="v3-9-3" />
### 3.9.3 (2020-09-30)

Correção de bug:

* [AMP-185] - Erro no envio de SMS com provedor TotalVoice

Atualiza modelo do banco de dados: não


<a name="v3-9-2" />
### 3.9.2 (2020-09-03)

Melhorias:

* [AMP-181] - Adicionados novos temas
  * *Metallic seaweed & Emerald* (`mse`)
  * *Oxford blue & Green* (`obg`)
  * *Castleton green & Orange* (`cgo`)
  * *Viridian green & Yellow* (`vgy`)

Correções de bugs:

* [AMP-179] - QR Code de emissão não funciona quando o `QRCodeGatewayUrl` não está configurado
* [AMP-180] - Página de chaves de aplicação não abre

Atualiza modelo do banco de dados: não


<a name="v3-9-1" />
### 3.9.1 (2020-08-05)

* Correção de bug: [AMP-178] - Tela fica em branco após login no Internet Explorer

Atualiza modelo do banco de dados: não


<a name="v3-9-0" />
### 3.9.0 (2020-08-04)

Novas funcionalidades:

* [AMP-154] - Suporte a emissão de certificados conforme norma do Banco Central do Equador

Melhorias:

* [AMP-168] - Melhorar mecanismo de emissão de LCRs de modo a otimizar casos com centenas ou milhares de ACs
* [AMP-161] - Atualizar Angular para versão 9

Atualiza modelo do banco de dados: **sim**


<a name="v3-8-4" />
### 3.8.4 (2020-07-22)

* [AMP-177] - Adicionar tema *Dark cerulean & Green* (`dcg`)

Atualiza modelo do banco de dados: não


<a name="v3-8-3" />
### 3.8.3 (2020-07-21)

* [AMP-173] - Não gerar preemptivamente o arquivo na API de obter link para download do termo de titularidade
* Correção de bug: [AMP-174] - Tela de emissão fica em "loading" indefinidamente

Atualiza modelo do banco de dados: não


<a name="v3-8-2" />
### 3.8.2 (2020-07-10)

* Correções de bugs
  * [AMP-175] - Logs de aplicação de nível *Information* estão sendo escritos para o log de sistema por padrão no Linux e em Docker
  * [AMP-176] - Nome do arquivo do termo de titularidade assinado não está internacionalizado

Atualiza modelo do banco de dados: não


<a name="v3-8-1" />
### 3.8.1 (2020-06-24)

* Correção de bug: Ao aceitar a oferta para emitir o certificado no celular, o QR Code não aparece

Atualiza modelo do banco de dados: não


<a name="v3-8-0" />
### 3.8.0 (2020-06-24)

* Implementado *soft delete* de pedidos de certificado
* Adicionada API para atualizar pedidos de certificado
* Melhorada experiência ao acessar pelo PC a página de emissão de um pedido de certificado que só pode ser emitido no celular
* Correção de bug: Sistema está permitindo remoção de pedido com certificado já emitido

Atualiza modelo do banco de dados: **sim**


<a name="v3-7-5" />
### 3.7.5 (2020-06-23)

* Otimizado armazenamento de histórico de execuções de rotinas em background
* Adicionado argumento `--heavy` ao comando [update-db](on-premises/tool/update-db.md)

Atualiza modelo do banco de dados: não


<a name="v3-7-4" />
### 3.7.4 (2020-06-19)

* Correções de bugs
  * Provider de logs para o event log está causando erros em Azure App Service
  * Um excesso de rotinas de emissão de LCR "encavaladas" poderia exaurir as conexões com o banco de dados disponíveis

Atualiza modelo do banco de dados: não


<a name="v3-7-3" />
### 3.7.3 (2020-06-05)

* Adicionado tema *Green & Dark coral* (`gdc`)
* Correção de bug
  * Campo `SmsEnabled` da API de *client config* é preenchido de maneira errada em algumas situações

Atualiza modelo do banco de dados: não


<a name="v3-7-2" />
### 3.7.2 (2020-06-03)

* Remover acentos de mensagens de SMS

Atualiza modelo do banco de dados: não


<a name="v3-7-1" />
### 3.7.1 (2020-05-21)

* Melhorados *labels* de telefone e "pedido para usuário (HSM em nuvem)"

Atualiza modelo do banco de dados: não


<a name="v3-7-0" />
### 3.7.0 (2020-05-06)

* Adicionado suporte a proteção de chaves com PIN em HSMs Dinamo
* Adicionado filtro por `keyMedia` na API para obter pedidos de certificado pendentes para um usuário
* Adicionados temas *eva*, *dir* e *cam*

Atualiza modelo do banco de dados: não


<a name="v3-6-0" />
### 3.6.0 (2020-05-01)

* Adicionada integração com HSMs Dinamo via comunicação proprietária

Atualiza modelo do banco de dados: não


<a name="v3-5-0" />
### 3.5.0 (2020-04-14)

* Sistema migrado para ASP.NET Core 3.1 (versão LTS, suportada até dez/2022)

Veja [Atualizando o Amplia da versão 3.0-3.4 para 3.5](on-premises/update-35.md)

Atualiza modelo do banco de dados: não


<a name="v3-4-0" />
### 3.4.0 (2020-03-27)

* Adicionada possibilidade de assinar digitalmente o Termo de Titularidade contendo a chave pública do certificado durante o processo de emissão
* Adicionada data de nascimento ao formulário de criação de pedido ICP-Brasil
* Adicionado comando [gen-enc-key](on-premises/tool/gen-enc-key.md)
* Configuração `General.QRCodeGatewayUrl` passa a ser opcional
* Correções de bugs
  * A logo não deve ser clicável na página de emissão de certificado
  * Erro ao tentar editar template de certificado de atributo
  * Texto inicial da tela de emissão de certificado não muda ao alterar o idioma
  * QR Code de emissão não está sendo exibido ao clicar no botão *QR Code de emissão* nos detalhes do pedido

Atualiza modelo do banco de dados: **sim**


<a name="v3-3-0" />
### 3.3.0 (2019-03-17)

* Adicionada possibilidade de configuração da extensão *certification policies* nos modelos de certificado
* Adicionado novo papel: *Agente de Registro* (pode apenas criar pedidos de certificado e revogar certificados)
* Suporte completo a temas (exceto personalização da página inicial)
* Adicionada possibilidade de ocultar botões de criação de pedido básico e associado a usuário
* Correções de bugs
  * Em certas circunstâncias certificados podem ser emitidos com validade de 0 dias
  * Erro ao criar pedido de certificado com usuário associado sem template
  * Erro "You cannot specify the root subscription" ao entrar no sys admin
  * Erro na logo do convite

Atualiza modelo do banco de dados: **sim**


<a name="v3-2-0" />
### 3.2.0 (2019-03-10)

* Dashboard internacionalizado (português e inglês)
* Adicionado suporte a armazenamento de chaves de usuários finais protegidas por PIN ("HSM cloud")
* Adicionado suporte à criação de pedidos de certificado associados a contas de usuários
* Nome da AC passa a ser sugerido a partir do nome da chave
* Campo unidade organizacional (OU) não precisa mais ser informado durante a emissão de certificado de AC e criação de AC raiz
* Adicionado suporte parcial a temas (por ora apenas os emails são afetados)
* Adicionado comando [test-email](on-premises/tool/test-email.md)
* Correções de bugs
  * Campo *validade* era exibido durante a criação de um pedido de certificado mesmo quando o formato selecionado não permite validade diferenciada
  * Erros de inicialização não eram acusados no dashboard

Atualiza modelo do banco de dados: **sim**


<a name="v3-1-0" />
### 3.1.0 (2019-02-22)

* Integração com servidor de OpenID Connect passa a ser opcional
* Adicionado [utilitário de linha de comando](on-premises/tool/index.md) com:
  * Comando [update-db](on-premises/tool/update-db.md) para atualizar manualmente o modelo do banco de dados
  * Comando [hash-root-pass](on-premises/tool/hash-root-pass.md) para calcular o hash de uma senha de *root*
* Conta padrão agora é criada na primeira execução do sistema
* Corrigido bug que fazia com que configurações feitas no arquivo de configuração JSON tivessem precedência sobre variáveis de ambiente (que deveriam ter precedência máxima)

Atualiza modelo do banco de dados: não


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
