# Histórico de versões do Amplia

<a name="vnext" />
<a name="v4-21-0" />
## 4.21.0 (próxima versão)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

AMP-386 Implementar encriptação e decriptação AES no key store Kryptus

### Melhorias

AMP-387 Permitir inclusão de dados de CEI INSS e número PIS/PASEP em certificados ICP-Brasil

### Correções de bugs

AMP-388 Erro "Cannot issue certificate with a start date prior to the CA certificate validity period" ao emitir certificado com AC recém-criada

AMP-389 API de geração de chaves no processo de emissão de *managed certificate* resulta em erro caso o nome do titular contenha vírgulas



<a name="v4-20-0" />
## 4.20.0 (2026-01-14)

Idêntica a: 4.20.0 RC 1 (2026-01-07)

Atualiza modelo do banco de dados: **sim**

### Melhorias

AMP-384 Melhorias no key store PKCS #11 relevantes para ambientes com alta concorrência e melhorias na API de cálculo de IDN



<a name="v4-19-0" />
## 4.19.0 (2026-01-07)

Idêntica a: 4.19.0 RC 2 (2025-11-17)

Atualiza modelo do banco de dados: não

### Correções de bugs

AMP-355 Certificados podem ser emitidos com início da validade anterior à do emissor



<a name="v4-18-0" />
## 4.18.0 (2025-11-12)

Atualiza modelo do banco de dados: não

### Melhorias

AMP-378 Tratar key store partitions bloqueadas antes da hora



<a name="v4-17-1" />
## 4.17.1 (2025-11-05)

Atualiza modelo do banco de dados: não

### Melhorias

AMP-377 Comando `check-key-store-partitions-lock` para verificar estado de bloqueio das partições



<a name="v4-17-0" />
## 4.17.0 (2025-11-05)

Idêntica a: 4.17.0 RC 4 (2025-09-29)

Atualiza modelo do banco de dados: **sim**

### Melhorias

AMP-243 Apagar chaves de processos incompletos de emissão de *managed certificate*

AMP-376 Adicionar número do pedido na confirmação de remoção das partições



<a name="v4-16-0" />
## 4.16.0 (2025-09-19)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

AMP-374 Comando `repair-blobs` para corrigir blobs corrompidos



<a name="v4-15-1" />
## 4.15.1 (2025-09-08)

Idêntica a: 4.15.1 RC 4 (2025-09-03)

Atualiza modelo do banco de dados: não

### Correções de bugs

AMP-373 Erros no comando `check-blobs`



<a name="v4-15-0" />
## 4.15.0 (2025-09-01)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

AMP-328 Tela de criação de pedido de Carteira de Identificação Estudantil \(CIE\)

AMP-372 Comando `check-blobs` para verificar integridade dos blobs



<a name="v4-14-0" />
## 4.14.0 (2025-08-12)

Idêntica a: 4.14.0 RC 2 (2025-08-12)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

AMP-365 Assinatura pendente após emissão de Managed Certificate

### Melhorias

AMP-366 Alterações ao certificado SSL/TLS para adequação às regras do CA/B Forum

AMP-369 Configuração da validação de telefones

### Correções de bugs

AMP-368 Telefones com prefixo `+1 (305)` são recusados como não sendo de celular



<a name="v4-13-0" />
## 4.13.0 (2025-07-23)

Idêntica a: 4.13.0 RC 4 (2025-05-30)

Atualiza modelo do banco de dados: não

### Melhorias

AMP-363 Permitir envio de código de verificação por WhatsApp

AMP-364 Tornar validação de telefones mais flexível

AMP-367 Suporte \(experimental\) a integração com Prometheus



<a name="v4-12-0" />
## 4.12.0 (2025-07-23)

Idêntica a: 4.12.0 RC 2 (2025-02-03)

Atualiza modelo do banco de dados: não

### Melhorias

AMP-325 Melhorar e uniformizar formulários de Distinguished Name

AMP-360 Adequações para o certificado de sello electronico do certificado PY



<a name="v4-11-0" />
## 4.11.0 (2025-01-22)

Idêntica a: 4.11.0 RC 2 (2024-11-06)

Atualiza modelo do banco de dados: não

### Melhorias

AMP-359 Criar url argument `absoluteUrl` na API de obter link do termo assinado

AMP-361 Melhorias à integração com provedores de envio de SMS



<a name="v4-10-0" />
## 4.10.0 (2024-10-24)

Idêntica a: 4.10.0 RC 4 (2024-09-13)

Atualiza modelo do banco de dados: não

### Melhorias

AMP-318 Permitir criação de pedido de certificado de PJ por tela

AMP-356 Ajustes nos campos Unique Identifier e Organization Identifier de certificados CV



<a name="v4-9-0" />
## 4.9.0 (2024-08-13)

Idêntica a: 4.9.0 RC 11 (2024-05-10)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

AMP-340 Health check com verificação de disponibilidade uma chave

AMP-342 Auto-verificação de LCRs

AMP-347 Imagem de Docker com driver PKCS #11 Kryptus

AMP-352 Key store clusters

### Melhorias

AMP-335 Atualizar framework SPA para 2.8

AMP-345 Permitir cadastro de cadeias em ACs independentemente do *CertificateChainType*

AMP-346 Evoluir client lib para permitir download do certificado da AC e da cadeia de certificação

### Correções de bugs

AMP-237 Erro relacionado a fuso horário na geração de termo de titularidade em Linux

AMP-343 Erros ao utilizar key store PKCS #11 em paralelo

AMP-351 Erro "Could not place a lock on the resource 'hangfire:lock:recurring-job:CleanupUsedOtps'" ao iniciar o sistema usando PostgreSQL



<a name="v4-8-1" />
## 4.8.1 (2024-04-30)

Atualiza modelo do banco de dados: não

### Correções de bugs

AMP-350 Erro "Cannot write DateTime with Kind=UTC..." ao criar pedido de certificado para usuário usando PostgreSQL



<a name="v4-8-0" />
## 4.8.0 (2024-02-27)

Idêntica a: 4.8.0 RC 5 (2024-02-27)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

AMP-332 API para cálculo de IDN (protocolo brasileiro de provimento de serviços biométricos)

AMP-333 Suporte a chaves AES (apenas em keystores PKCS #11 e database)

### Melhorias

AMP-245 Melhorar tratamento da validade de sessões de uso de managed certificates

AMP-337 Permitir configuração do label do token em key stores tipo PKCS #11

### Correções de bugs

AMP-341 Integer overflow ao setar um `CertificateManagement:OperationSessionTimeout` alto \(25+ dias\)



<a name="v4-7-0" />
## 4.7.0 (2023-12-20)

Idêntica a: 4.7.0 RC 2 (2023-11-01)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

AMP-334 Nova API para emissão de certificado em software que retorna chave em múltiplos formatos

### Melhorias

AMP-331 Melhorar integração com Amplia Reg para casos de certificados organizacionais



<a name="v4-6-1" />
## 4.6.1 (2023-09-06)

Atualiza modelo do banco de dados: não

### Melhorias

AMP-326 Melhorias na integração com HSMs Dinamo

### Correções de bugs

AMP-322 Caracteres proibidos pela ICP-Brasil não são automaticamente removidos de certificados BR

AMP-324 Erro *JsonReaderException: Bad JSON escape sequence*



<a name="v4-6-0" />
## 4.6.0 (2023-08-30)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

AMP-315 Habilitar acesso via SSH na imagem de Docker

AMP-320 API para decriptar com chave

AMP-321 Importação de chave PKCS #8 \(por ora suportado apenas em keystore em banco de dados\)

### Melhorias

AMP-327 Suporte a variável de ambiente STANDBY \(para instalação em Azure App Service\)



<a name="v4-5-4" />
## 4.5.4 (2023-08-04)

Atualiza modelo do banco de dados: não

### Melhorias

AMP-311 Atualizar pacote de envio de SMS para permitir configurar um `MessagingServiceSid` para provedor Twilio



<a name="v4-5-3" />
## 4.5.3 (2023-08-04)

Atualiza modelo do banco de dados: não†

*† Esta atualização não introduz novas mudanças ao banco de dados mas muda, sim, a forma como alterações antigas são aplicadas*

### Correções de bugs

AMP-319 Algumas migrations passadas não podem ser aplicadas em SQL Server pré-2017 devido ao uso do `TRIM()`



<a name="v4-5-2" />
## 4.5.2 (2023-07-05)

Atualiza modelo do banco de dados: não

### Correções de bugs

AMP-310 Consulta de horário OTP não está sendo repassada a key stores Dinamo (introduzido na [v4.4.0](#4-4-0))



<a name="v4-5-1" />
## 4.5.1 (2023-06-29)

Atualiza modelo do banco de dados: não

### Correções de bugs

AMP-309 Campos com string vazia no SubjectName causam erro na emissão do certificado \(certificados SSL e Custom\)



<a name="v4-5-0" />
## 4.5.0 (2023-06-14)

Atualiza modelo do banco de dados: não

### Melhorias

AMP-306 Campo `ExtendedKeyUsageCritical` em certificados personalizados



<a name="v4-4-0" />
## 4.4.0 (2023-06-02)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

AMP-279 Listagem e detalhes de managed certificates

AMP-295 Suporte a múltiplas políticas nos modelos de certificado

AMP-299 Configuração de servidores NTP com sincronização periódica e monitoramento do offset

### Melhorias

AMP-253 Configuração de AC para emitir certificados com link no AIA para arquivo .p7b ao invés de .cer

AMP-303 Configuração de modelo de certificado de AC

AMP-304 Permitir especificar o algoritmo de hash a ser utilizado para emitir o certificado no momento da criação do pedido

AMP-305 Adicionar traduções para o metadado de número do RG vindo do PMCert



<a name="v4-3-0" />
## 4.3.0 (2023-05-19)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

AMP-293 Criar botão nos detalhes do pedido para emitir com uma CSR

AMP-294 Incluir campo CustomCertificateParameters.IncludeSubjectKeyId

AMP-297 Permitir personalização da página inicial

AMP-301 Suporte a configuração de webhook para notificação quanto um certificado é emitido

### Melhorias

AMP-296 Suporte a armazenamento de blobs em banco de dados



<a name="v4-2-0" />
## 4.2.0 (2023-05-19)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

AMP-290 Criar comando para propagar CA Certs

### Melhorias

AMP-278 Melhorar tratamento de erro ao tentar copiar ID de CA/Template

AMP-292 Pemitir forçar algoritmo de assinatura de certificados por AC

### Correções de bugs

AMP-291 APIs de emissão de certificado em nuvem não permitem que o Amplia fique em rede privada



<a name="v4-1-0" />
## 4.1.0 (2023-03-02)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

AMP-283 Emissão de certificado sem CSR, retornando arquivo PFX / PKCS #12

### Melhorias

AMP-273 Adicionado suporte a PostgreSQL

AMP-281 Permitir blob storage em "S3 clones"

AMP-284 Campos RetentionPeriodYears e LegislationCountries no certificado SSL

AMP-285 Aceitar IPv4 e IPv6 no `DnsNames` do certificado SSL

AMP-287 Refatorar como certificados de fatura eletrônica são emitidos (CV)

AMP-288 Codificar cédula de identidade no campo Unique Identifier para certificados de assinatura digital de CV



<a name="v4-0-4" />
## 4.0.4 (2023-02-03)

Atualiza modelo do banco de dados: não

### Correções de bugs

AMP-286 Extensão ExtendedKeyUsage em certificados PY não está marcada como crítica



<a name="v4-0-3" />
## 4.0.3 (2023-01-09)

Atualiza modelo do banco de dados: não

### Correções de bugs

AMP-280 Erro ao gerar QR Code para emissão em Docker



<a name="v4-0-2" />
## 4.0.2 (2023-01-09)

Atualiza modelo do banco de dados: não

### Melhorias:

AMP-277 Mostrar ID nos detalhes da CA e do template



<a name="v4-0-1" />
## 4.0.1 (2022-12-30)

Atualiza modelo do banco de dados: não

### Melhorias

AMP-276 Melhorar integração com HSM Dinamo



<a name="v4-0-0" />
## 4.0.0 (2022-12-27)

**Veja [Atualizando o Amplia da versão 3.x para 4.0](on-premises/update-40.md)**

Atualiza modelo do banco de dados: **sim** (veja [aviso](on-premises/update-40.md))

### Novas funcionalidades

AMP-220 Novas APIs para suportar o [Lacuna PSC](../psc/index.md)

AMP-268 Certificados de Cabo Verde

AMP-252 Novos perfis de certificado do Paraguay

AMP-249 Integração proprietária com [HSM Kryptus](on-premises/key-stores/kryptus.md)

AMP-271 Criar configuração de domínios de OCSP

### Melhorias

AMP-272 Atualizar ASP.NET Core para versão 6.0

AMP-258 Suporte a arquivo de configuração .conf/.ini

AMP-261 Criar índices faltando sobre pedidos e certificados

AMP-265 Campo SerialNumber na emissão de CSR personalizada

AMP-267 Criação de pedido com número de série pré-determinado

AMP-270 Suporte a múltiplas políticas de certificação

AMP-274 Gerar GUIDs "semi sequenciais" para melhorar desempenho do banco de dados

AMP-275 Criar configuração própria para domínios de OCSP

### Correções de bugs

AMP-269 Última CRL não é encontrada caso o nome da AC tenha letras em caixa alta



<a name="v3-15-2" />
## 3.15.2 (2022-10-10)

Melhorias:

* [AMP-262] - Melhorar desempenho da emissão de LCRs em situações com muitas ACs (1000+)

Correções de bugs:

* [AMP-263] - Comunicação com Azure Key Vault não reutiliza conexões

Atualiza modelo do banco de dados: não



<a name="v3-15-1" />
## 3.15.1 (2022-09-23)

Melhorias:

* [AMP-254] - Otimizar gerenciamento de filas de jobs
* [AMP-255] - Otimizar rotas de acesso a CRLs e CA Issuers
* [AMP-257] - Provedor de envio de SMS "EmailDump"

Atualiza modelo do banco de dados: não



<a name="v3-15-0" />
## 3.15.0 (2022-06-13)

Novas funcionalidades:

* [AMP-239] - Certificado de Relações Trabalhistas (lei 14063/2020)

Melhorias:

* [AMP-240] - Opções nas APIs de certificado ICP-Brasil para normalizar o *Common Name* (CN=) e adicionar o sufixo com CPF/CNPJ

Atualiza modelo do banco de dados: não



<a name="v3-14-0" />
## 3.14.0 (2022-04-29)

Novas funcionalidades:

* [AMP-232] - Certificado PKI Paraguay
* [AMP-112] - Implementar criação "genérica" de pedidos
* [AMP-218] - Integração via PKCS #11 com HSM Kryptus
* [AMP-233] - Permitir localização de chaves em key stores PKCS #11 pelo label
* [AMP-226] - Interface para geração de CSR com especificação de Subject Name
* [AMP-227] - Interface para registro de chave existente
* [AMP-225] / [AMP-216] - Permitir criar certificados pendentes \(com data de validade futura\)
* [AMP-228] - Propagação de LCRs e certificados de AC

Melhorias:

* [AMP-229] - Exibir datas de início e fim da validade nos detalhes do certificado
* [AMP-231] - Localização \(l10n\) para Espanhol \(en\)

Atualiza modelo do banco de dados: **sim**


<a name="v3-13-2" />
## 3.13.2 (2021-12-16)

Correções de bugs:

* [AMP-224] - Chaves armazenadas em banco de dados não funcionam após migração entre servidores

Updates database model: no


<a name="v3-13-1" />
## 3.13.1 (2021-12-05)

Novas funcionalidades:

* [AMP-207] - Adicionado suporte a Key Store com Google KMS
* [AMP-222] - Adicionado suporte a Key Store com Amazon KMS
* [AMP-208] - Adicionado suporte a OCSP
* [AMP-210] - Adicionado template de certificado Latinus (AC corporativa do Equador)

Melhorias:

* [AMP-223] - Adicionado margem segura de tempo no início de validade dos certificados de entidade final

Atualiza modelo do banco de dados: não


<a name="v3-12-0" />
## 3.12.0 (2021-04-27)

Novas funcionalidades:

* [AMP-206] - Adicionado suporte a AWS S3 para armazenamento de arquivos

Atualiza modelo do banco de dados: **sim**


<a name="v3-11-0" />
## 3.11.0 (2021-03-25)

Melhorias:

* [AMP-204] - Configuração `Amplia__IssueProcedureConfirmationEnabled` para desabilitar verificação de telefone celular na emissão
* [AMP-205] - Link de emissão direto para idioma correspondente à chamada de API

Atualiza modelo do banco de dados: não


<a name="v3-10-2" />
## 3.10.2 (2021-03-21)

Melhorias:

* [AMP-201] - Adicionado suporte a provedores de SMS Zenvia e SmsEmpresa

Correções de bugs:

* [AMP-203] - Erro ao gerar QR Code de emissão de certificado

Atualiza modelo do banco de dados: não


<a name="v3-10-1" />
## 3.10.1 (2021-03-15)

Correções de bugs:

* [AMP-200] - Erro ao emitir certificado de usuário-final em dispositivo criptográfico

Atualiza modelo do banco de dados: não


<a name="v3-10-0" />
## 3.10.0 (2021-02-08)

Novas funcionalidades:

* [AMP-195] - Remoção (opcional) de chaves no Azure Key Store

Melhorias:

* [AMP-196] - Permitir remover chaves de CAs revogadas

Correções de bugs:

* [AMP-198] - Durante a revogação de certificado de CA, a CA é removida ao invés de ser desativada
* [AMP-197] - Erro nas mensagens no dialog de confirmação de ativação de CA

Atualiza modelo do banco de dados: não


<a name="v3-9-6" />
## 3.9.6 (2020-11-26)

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
## 3.9.5 (2020-10-20)

Correção de bug:

* [AMP-182] - Dependendo do relógio da máquina do usuário, o processo de emissão imediatamente acusa estar expirado

Atualiza modelo do banco de dados: não


<a name="v3-9-4" />
## 3.9.4 (2020-10-08)

Correção de bug:

* [AMP-186] - Erros recorrentes na emissão de LCR

Atualiza modelo do banco de dados: não


<a name="v3-9-3" />
## 3.9.3 (2020-09-30)

Correção de bug:

* [AMP-185] - Erro no envio de SMS com provedor TotalVoice

Atualiza modelo do banco de dados: não


<a name="v3-9-2" />
## 3.9.2 (2020-09-03)

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
## 3.9.1 (2020-08-05)

* Correção de bug: [AMP-178] - Tela fica em branco após login no Internet Explorer

Atualiza modelo do banco de dados: não


<a name="v3-9-0" />
## 3.9.0 (2020-08-04)

Novas funcionalidades:

* [AMP-154] - Suporte a emissão de certificados conforme norma do Banco Central do Equador

Melhorias:

* [AMP-168] - Melhorar mecanismo de emissão de LCRs de modo a otimizar casos com centenas ou milhares de ACs
* [AMP-161] - Atualizar Angular para versão 9

Atualiza modelo do banco de dados: **sim**


<a name="v3-8-4" />
## 3.8.4 (2020-07-22)

* [AMP-177] - Adicionar tema *Dark cerulean & Green* (`dcg`)

Atualiza modelo do banco de dados: não


<a name="v3-8-3" />
## 3.8.3 (2020-07-21)

* [AMP-173] - Não gerar preemptivamente o arquivo na API de obter link para download do termo de titularidade
* Correção de bug: [AMP-174] - Tela de emissão fica em "loading" indefinidamente

Atualiza modelo do banco de dados: não


<a name="v3-8-2" />
## 3.8.2 (2020-07-10)

* Correções de bugs
  * [AMP-175] - Logs de aplicação de nível *Information* estão sendo escritos para o log de sistema por padrão no Linux e em Docker
  * [AMP-176] - Nome do arquivo do termo de titularidade assinado não está internacionalizado

Atualiza modelo do banco de dados: não


<a name="v3-8-1" />
## 3.8.1 (2020-06-24)

* Correção de bug: Ao aceitar a oferta para emitir o certificado no celular, o QR Code não aparece

Atualiza modelo do banco de dados: não


<a name="v3-8-0" />
## 3.8.0 (2020-06-24)

* Implementado *soft delete* de pedidos de certificado
* Adicionada API para atualizar pedidos de certificado
* Melhorada experiência ao acessar pelo PC a página de emissão de um pedido de certificado que só pode ser emitido no celular
* Correção de bug: Sistema está permitindo remoção de pedido com certificado já emitido

Atualiza modelo do banco de dados: **sim**


<a name="v3-7-5" />
## 3.7.5 (2020-06-23)

* Otimizado armazenamento de histórico de execuções de rotinas em background
* Adicionado argumento `--heavy` ao comando [update-db](on-premises/tool/update-db.md)

Atualiza modelo do banco de dados: não


<a name="v3-7-4" />
## 3.7.4 (2020-06-19)

* Correções de bugs
  * Provider de logs para o event log está causando erros em Azure App Service
  * Um excesso de rotinas de emissão de LCR "encavaladas" poderia exaurir as conexões com o banco de dados disponíveis

Atualiza modelo do banco de dados: não


<a name="v3-7-3" />
## 3.7.3 (2020-06-05)

* Adicionado tema *Green & Dark coral* (`gdc`)
* Correção de bug
  * Campo `SmsEnabled` da API de *client config* é preenchido de maneira errada em algumas situações

Atualiza modelo do banco de dados: não


<a name="v3-7-2" />
## 3.7.2 (2020-06-03)

* Remover acentos de mensagens de SMS

Atualiza modelo do banco de dados: não


<a name="v3-7-1" />
## 3.7.1 (2020-05-21)

* Melhorados *labels* de telefone e "pedido para usuário (HSM em nuvem)"

Atualiza modelo do banco de dados: não


<a name="v3-7-0" />
## 3.7.0 (2020-05-06)

* Adicionado suporte a proteção de chaves com PIN em HSMs Dinamo
* Adicionado filtro por `keyMedia` na API para obter pedidos de certificado pendentes para um usuário
* Adicionados temas *eva*, *dir* e *cam*

Atualiza modelo do banco de dados: não


<a name="v3-6-0" />
## 3.6.0 (2020-05-01)

* Adicionada integração com HSMs Dinamo via comunicação proprietária

Atualiza modelo do banco de dados: não


<a name="v3-5-0" />
## 3.5.0 (2020-04-14)

* Sistema migrado para ASP.NET Core 3.1 (versão LTS, suportada até dez/2022)

Veja [Atualizando o Amplia da versão 3.0-3.4 para 3.5](on-premises/update-35.md)

Atualiza modelo do banco de dados: não


<a name="v3-4-0" />
## 3.4.0 (2020-03-27)

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
## 3.3.0 (2019-03-17)

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
## 3.2.0 (2019-03-10)

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
## 3.1.0 (2019-02-22)

* Integração com servidor de OpenID Connect passa a ser opcional
* Adicionado [utilitário de linha de comando](on-premises/tool/index.md) com:
  * Comando [update-db](on-premises/tool/update-db.md) para atualizar manualmente o modelo do banco de dados
  * Comando [hash-root-pass](on-premises/tool/hash-root-pass.md) para calcular o hash de uma senha de *root*
* Conta padrão agora é criada na primeira execução do sistema
* Corrigido bug que fazia com que configurações feitas no arquivo de configuração JSON tivessem precedência sobre variáveis de ambiente (que deveriam ter precedência máxima)

Atualiza modelo do banco de dados: não


<a name="v3-0-0" />
## 3.0.0 (2019-02-06)

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
## 2.16.1 (2019-12-12)

* Adicionada opção de configurar um *alias* para o tipo de entidade em templates de certificado do tipo *PrivateID*

Atualiza modelo do banco de dados: não


<a name="v2-16-0" />
## 2.16.0 (2019-12-10)

* Adicionado certificado de atributo tipo *PrivateID* (para carteiras de identidade de entidades de classe)

Atualiza modelo do banco de dados: não


<a name="v2-15-2" />
## 2.15.2 (2019-12-04)

* Alterado modelo de configuração para Linux para logar para a pasta */var/log/amplia*

Atualiza modelo do banco de dados: não


<a name="v2-15-1" />
## 2.15.1 (2019-09-12)

* Melhorias ao certificado de chave pública tipo *Cnb* (funcionalidade específica para um cliente)

Atualiza modelo do banco de dados: não


<a name="v2-15-0" />
## 2.15.0 (2019-08-10)

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
## 2.14.1 (2019-06-13)

* Correções de bugs
  * Pesquisa textual nos certificados e pedidos não estava funcionando com termos parciais
  * Corrigido erro ao tentar revogar certificado de atributo

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

<a name="v2-14-0" />
## 2.14.0 (2019-06-11)

* Interface para ver e desbloquear pedidos bloqueados
* Tela de criação do pedido adaptada para solicitar CA, Template e telefone celular
* Edição de pedidos desabilitada temporariamente

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

<a name="v2-13-0" />
## 2.13.0 (2019-05-09)

* Adicionada possiblidade de configurar e-mails enviados pelo sistema (tema e imagens)
* Criada API para envio de SMS com link para emissão
* Adicionado campo `KeyMediaConstraints` no `OrderModel`

Atualiza modelo do banco de dados: não

Mudanças de configuração:

* `General:Theme` (opcional)
  * Valores válidos: vazio (padrão) ou `Teal`

<a name="v2-12-1" />
## 2.12.1 (2019-04-18)

* PKI SDK atualizado para versão [2.4.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-4-0)
* Correções de bugs
  * Certificados SSL não permitem uso de wildcard
  * "Encavalamento" de jobs de emissão de LCR quando a emissão fica impossibilitada por muito tempo

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

<a name="v2-12-0" />
## 2.12.0 (2019-03-21)

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
## 2.11.1 (2019-02-26)

* Adicionada validação de endereço de e-mail na criação de pedidos de certificados tipo ICP-Brasil (`PkiBrazil`)
* PKI SDK atualizado para versão [2.3.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-3-0) (RTM)

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

<a name="v2-11-0" />
## 2.11.0 (2019-02-15)

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
## 2.10.3 (2019-01-21)

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
## 2.10.2 (2019-01-17)

* ASP.NET Core atualizado para 2.2
* Novo arquivo de configuração para hospedagem em IIS (appsettings.iis.json)
* Correção na codificação do cargo no certificado tipo 6

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

<a name="v2-10-1" />
## 2.10.1 (2019-01-14)

* Corrigido bug que causava erro na emissão de certificado quando o Web PKI não estava instalado

Atualiza modelo do banco de dados: não

Mudanças de configuração: nenhuma

<a name="v2-10-0" />
## 2.10.0 (2019-01-10)

* Primeira versão disponível para instalação *on-premises*
