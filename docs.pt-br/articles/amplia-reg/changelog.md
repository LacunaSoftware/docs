# Histórico de versões do Amplia Reg

<a name="vnext" />

<a name="v3-1-0" />
## 3.1.0 (próxima versão)

Atualiza modelo do banco de dados: **sim**

Versão mínima do Amplia: 4.12.0 RC 1

## Melhorias

ARNG-461 Adequações para o certificado de sello electronico do certificado PY



<a name="v3-0-0" />
## 3.0.0 (2025-01-22)

**Veja [Atualizando o Amplia Reg da versão 2.x para 3.0](on-premises/update-30.md)**

Atualiza modelo do banco de dados: **sim**

Versão pré-release equivalente: 2.9.0 RC 1 (2025-01-10)

### Melhorias

ARNG-449 Melhorias à videoconferência

ARNG-450 Melhorias ao passo de coleta biométrica

ARNG-455 Melhorar entrega da chave 1

ARNG-458 Dividir o passo de coleta biométrica e consulta à lista negativa na videoconferência

ARNG-443 Atualizar ASP.NET Core para versão 8.0

ARNG-454 Integração com provedor de SMS Eyou

### Correções de bugs

ARNG-434 Problema com componente de pdf preview

ARNG-447 Após clicar no botão de iniciar validação a videoconferência não é iniciada

ARNG-448 Corrigir variações incorretas do termo "videoconferência"

ARNG-453 Texto do botão "Assinar documentos e enviar para fila de conferência" é inadequado para pedidos que não vão para a fila



<a name="v2-8-0" />
## 2.8.0 (2025-01-22)

Atualiza modelo do banco de dados: **sim**

Versão pré-release equivalente: 2.8.0 RC 7 (2024-10-11) <!-- na verdade seria RC 8 -->

### Novas funcionalidades

ARNG-438 Campo "Annotation" em pedidos BR

### Melhorias

ARNG-437 Método na client library para consultar detalhes do pedido

ARNG-439 Acesso via SSH em Azure App Services

ARNG-463 Melhorias à integração com provedores de envio de SMS

ARNG-464 Configuração de descrição do método de envio das chaves 1 e 2

ARNG-465 Exibir confirmação durante emissão de certificados não-exportáveis

### Correções de bugs

ARNG-435 Erro 400 ao salvar agente de validação

ARNG-466 Usuários e aplicações não possuem permissão de leitura sobre os pedidos que criam



<a name="v2-7-0" />
## 2.7.0 (2024-09-28)

Atualiza modelo do banco de dados: **sim**

Versão pré-release equivalente: 2.7.0 RC 1 (2024-08-13)

### Novas funcionalidades

ARNG-431 Campo IsFaturaEletronica no tipo de certificado de CV



<a name="v2-6-0" />
## 2.6.0 (2024-08-13)

Atualiza modelo do banco de dados: **sim**

Versão pré-release equivalente: 2.6.0 RC 15 (2024-07-08)

### Novas funcionalidades

ARNG-291 Criar função para "baixar documentação completa" do pedido

ARNG-331 Integração com PSBio

ARNG-391 Criar conceito de "meus pedidos" para agentes de conferência

ARNG-399 Health check com verificação do Amplia

ARNG-400 Exportação do histórico do pedido em PDF \("trilha de auditoria"\)

ARNG-401 Lista Negativa \("Sistema anti-fraude" / SAF\)

ARNG-409 Emissão com chave no Ascertia ADSS Server

ARNG-413 Adicionar security headers

ARNG-420 Frontend para emissão com chave no Ascertia ADSS Server

ARNG-425 Webhook por aplicação para notificação de mudança de status de pedidos

### Melhorias

ARNG-1 Integração com Gestao AR

ARNG-395 Criar as ilustrações que compõem a tela inicial da videoconferência

ARNG-396 Adicionar campos à exportação da listagem de pedidos para CSV

ARNG-397 Permitir inclusão de campos Locality e StateName no certificado BR

ARNG-402 Revisão de permissões / bloqueios de comportamentos ilegais

ARNG-404 Exigir justificativa para retirar marca de suspeito de um pedido

ARNG-405 Exigir conferência caso ConfirmationRequirementModes seja OnlyIfRequired e ocorra Enroll no PSBio  

ARNG-407 Melhorias à lista negativa

ARNG-410 Atualizar Angular para a versão 17

ARNG-414 Melhorias à trilha de auditoria

### Correções de bugs

ARNG-398 Uso em paralelo do blob storage causando erro ao enviar mais de um arquivo na documentação do pedido

ARNG-406 Erro na espera pelo PSBio quando o usuário é apenas agente

ARNG-408 Testes de email unsubscribe estão falhando

ARNG-417 Tela de detalhes de pedido está alertando problema pra qualquer pedido que não seja BraziOrder



<a name="v2-5-3" />
## 2.5.3 (2024-06-17)

Atualiza modelo do banco de dados: não

### Correções de bugs

ARNG-423 Números de telefones celular paraguaios com prefixo "09x7" não são aceitos



<a name="v2-5-2" />
## 2.5.2 (2024-06-17)

Atualiza modelo do banco de dados: não

### Correções de bugs

ARNG-423 Números de telefones celular paraguaios com prefixo "09x7" não são aceitos (somente completamente corrigido na versão [2.5.3](#v2-5-3))



<a name="v2-5-1" />
## 2.5.1 (2024-02-21)

Atualiza modelo do banco de dados: não

### Correções de bugs

ARNG-430 Erro relacionado a data/timezone na criação de agente de validação quando usando banco de dados PostgreSQL



<a name="v2-5-0" />
## 2.5.0 (2024-01-25)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-226 Envio automático de lembrete de renovação

ARNG-317 Possibilidade de exportar para CSV as consultas de pedidos



<a name="v2-4-1" />
## 2.4.1 (2023-10-30)

Atualiza modelo do banco de dados: **sim**

### Melhorias

ARNG-384 Aumentar tamanho máximo do DNOrganization em tipos de certificado BR para 200 caracteres

### Correções de bugs

ARNG-382 Erro ao salvar tipo de certificado sem documentos

ARNG-383 Listagens de pedidos na home do AVP não filtram pela AR selecionada

ARNG-385 Não é possível filtrar pedidos por RUC \(PY\) 

ARNG-386 Documentos como CI e foto aparecem duas vezes na tela de detalhes do pedido



<a name="v2-4-0" />
## 2.4.0 (2023-10-23)

Idêntica a: 2.4.0 RC 2 (2023-10-23)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-294 Mecanismo para desvincular o agente de validação de um pedido

ARNG-329 Permitir informar número da venda na criação por API \(definido externamente\)

ARNG-357 Tipos de documento personalizados

### Melhorias

ARNG-332 Permitir reaproveitar documentação no pré-preenchimento de pedido

ARNG-372 Enviar documento de solicitação de revogação como anexo do email de notificação de revogação

ARNG-376 API v2 de preparo para emissão de certificado (`POST /api/orders/v2/issue`)

### Correções de bugs

ARNG-373 Documentos de tipo CaboVerdeTechnicalManagerDesignation são salvos como CaboVerdeLegalRepresentantDesignation

ARNG-375 Botões para revogar pedido e reenviar notificação de emissão não estão aparecendo na tela de detalhe de pedido

ARNG-377 Documento de revogação consta o AVP do pedido mesmo que outro agente realize a revogação



<a name="v2-3-1" />
## 2.3.1 (2023-10-23)

Atualiza modelo do banco de dados: não

### Correções de bugs

ARNG-381 Erro *System.ArgumentNullException: Path cannot be null. (Parameter 'path')* (introduzido na [v2.3.0](#v2-3-0))



<a name="v2-3-0" />
## 2.3.0 (2023-10-20)

Idêntica a: 2.3.0 RC 3 (2023-09-22)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-201 Certificado de pessoa jurídica brasileiro

ARNG-258 Integração com API de consulta prévia RFB

ARNG-330 Integração com API de consulta de CNPJ do SERPRO

ARNG-352 Pedidos sem conferência

### Melhorias

ARNG-266 Melhorar tela inicial do agente de validação

ARNG-347 Adicionar suporte a sincronização com servidores NTP

ARNG-355 Definição tardia da natureza jurídica \(Holder Type\)

ARNG-356 Validação da foto também na validação presencial (configurável)

ARNG-365 Exibir seletor de naturezas jurídicas na ordem em que aparecem no tipo de certificado

ARNG-366 Melhorias ao BrazilCertificateType para adicionar campos O= e OU= requeridos pela RFB

### Correções de bugs

ARNG-148 Camera continua ativa após sair da tela de captura

ARNG-344 Erro na emissão pelo agente antes da aprovação

ARNG-345 Seletor de tipo de emissão duplica "Video conferência" quando muda entre 2 tipos que possuem video conferencia ativa

ARNG-353 Tipo de certificado não informa se permite ou não video conferencia na tela de detalhes

ARNG-359 Erro na criação de tipo de certificado BR

ARNG-364 Erro ao criar natureza jurídica

ARNG-370 Campo C= de certificados brasileiros está saindo com valor errado



<a name="v2-2-0" />
## 2.2.0 (2023-08-08)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-362 Emissão por videoconferência

### Melhorias

ARNG-342 Permitir configuração de tipo de certificado para emitir certificado em software (A1) não-exportável



<a name="v2-1-0" />
## 2.1.0 (2023-07-26)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-341 Auto-assinatura de documentos na criação de pedido pré-aprovado



<a name="v2-0-3" />
## 2.0.3 (2023-07-11)

Atualiza modelo do banco de dados: não

### Correções de bugs

ARNG-340 Vídeos anexados à documentação do pedido causam erro na geração do dossiê (introduzido na [v2.0.2](#v2-0-2))



<a name="v2-0-2" />
## 2.0.2 (2023-07-11)

Atualiza modelo do banco de dados: não

### Melhorias

ARNG-338 Criar tipo de documento VideoConferenceRecording



<a name="v2-0-1" />
## 2.0.1 (2023-06-07)

Atualiza modelo do banco de dados: não

### Melhorias

ARNG-335 Remover todas as ocorrências do termo "protocolo", substituindo por "número do pedido"

### Correções de bugs

ARNG-336 Emails não estão respeitando tema `djp`



<a name="v2-0-0" />
## 2.0.0 (2023-06-02)

> [!WARNING]
> **Breaking change**: para permitir números de pedido definidos externamente, o campo `OrderSummary.Number` tornou-se `string`
> (era `long`) e passou a ter o número de pedido *formatado*. Essa alteração só deve lhe afetar caso você chame as APIs do Amplia Reg programaticamente.

Atualiza modelo do banco de dados: **sim**

Versão mínima do Amplia: 4.4.0

Versão mínima do PSC: 1.1.2

### Novas funcionalidades

ARNG-334 Permitir personalização do algoritmo de hash no tipo de certificado

### Melhorias

ARNG-321 Permitir números de pedido definidos externamente

ARNG-322 Termo de titularidade SISP

ARNG-323 Substituir na l10n de português o termo "protocolo" por "pedido" quando este for usado como sinônimo de "pedido" e não de "número do pedido"

ARNG-324 Melhorias para a campanha Code 100

ARNG-326 Alterar labels da tela de emissão no flavour CaboVerde

ARNG-327 Revisar gerações de documento da SISP

### Correções de bugs

ARNG-325 Corrigir preenchimento dos campos Nome (do titular) e Nome da organização nos certificados CV

ARNG-333 Colunas `NormalizedOrganizationIdentifier` e `NormalizedOrganizationName` estão sendo preenchidas incorretamente, afetando a busca de pedidos



<a name="v1-8-0" />
## 1.8.0 (2023-04-06)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

ARNG-306 Integração com gateway SMS da SISP

### Melhorias

ARNG-313 Melhorias ao gerenciamento de tipos de titular

ARNG-319 Novos tipos de HolderFileTypes para CaboVerde

### Correções de bugs

ARNG-308 Usuários de AR não conseguem operar as buscas após clicar no botão "Limpar"

ARNG-318 Auto complete de campanha para de funcionar depois do auto preenchimento



<a name="v1-7-0" />
## 1.7.0 (2023-03-06)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-257 Campo de cliente/campanha no pedido

ARNG-316 Relatório acumulado de certificados por tipo



<a name="v1-6-0" />
## 1.6.0 (2023-03-02)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-172 Gerenciamento de tipos de certificados

ARNG-250 Gerenciamento de tipos de titular

### Melhorias

ARNG-283 Adicionado suporte a PostgreSQL

ARNG-303 Adaptações ao certificado SSL para suportar perfil de Autenticação Web de Cabo Verde

ARNG-312 Campo CustomTypeDenominator no CaboVerdeCertificateType

### Correções de bugs

ARNG-310 Query paginada sobre agentes de registro está sem ordenação



<a name="v1-5-0" />
## 1.5.0 (2023-02-07)

Atualiza modelo do banco de dados: **sim**

### Melhorias

ARNG-263 Adicionar ao termo o número de série do certificado e informação de modelo e número de série do dispositivo

ARNG-307 Permitir que aplicações com perfil de AR Eletrônica realizem emissão de certificado sem CAPTCHA

ARNG-309 Substituir termo "suscriptor" por "titular" na localização ES



<a name="v1-4-1" />
## 1.4.1 (2023-01-11)

Atualiza modelo do banco de dados: não

### Correções de bugs

ARNG-299 Amplia tem sua permissão negada ao realizar chamadas do procedimento de emissão de certificados em nuvem



<a name="v1-4-0" />
## 1.4.0 (2023-01-09)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-222 Criação de pedido pré aprovado

ARNG-269 Flavour `CaboVerde`

ARNG-270 Formato\(s\) de certificado de Cabo Verde

ARNG-271 Formato de certificado SSL/TLS

ARNG-279 Tema `djp` \(*deep jungle princeton*\)

ARNG-281 Emissão de certificado por CSR

ARNG-293 Adicionar comando `init-data` para auxiliar na instalação do sistema

### Melhorias

ARNG-232 Revisar permissionamento e adicionar perfil de auditor

ARNG-282 Atualizar ASP.NET Core para versão 6.0

ARNG-254 Tornar opcional configuração de Azure Maps

ARNG-255 Remover configuração de Google Maps Embed

ARNG-274 Alterar "Distrito Capital" para apenas "Capital" nos endereços PY

ARNG-277 Verificação da adequação do certificado do agente para assinatura e busca automática por certificado adequado

ARNG-278 Configuração no CertificateType do tamanho da chave

ARNG-287 Adicionar suporte a provedor criptográfico IDGo 800

ARNG-288 Melhorar forma de configurar CA de dispositivos

ARNG-292 Colocar versão do sistema visível nas telas

### Correções de bugs

ARNG-248 Controle de ordenação da lista de pedidos na home do ACI não deveria aparecer pois não faz nada

ARNG-260 Campos alfanuméricos em certificados PY não estão admitindo letra `Ñ`

ARNG-280 Signout automático por inatividade é interrompido por confirmações de descarte de mudanças

ARNG-285 Ao voltar ao passo de documentos após tirar a foto, acontece um erro

ARNG-286 Crop parece estar cropando mais do que deveria

ARNG-289 Coluna no banco de dados não utilizada `Subscription.LegalRepresentantId1`

ARNG-290 Configuração `Order:CloudIssueUrl` deveria ser opcional



<a name="v1-3-0" />
## 1.3.0 (2022-11-11)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-240 Consulta pública de certificados

### Melhorias

ARNG-245 Captura da geolocalização do agente no momento da captura da biometria

ARNG-249 Adicionar cláusulas ao agreement da Code100

ARNG-259 Incluir cláusula com URL de revogação no agreement da Code100

ARNG-261 Adicionar opção de capturar documentos a partir da webcam

ARNG-262 Geração e assinatura da solicitação de revogação quando esta é feita por um usuário do sistema \(e não pelo titular\)

ARNG-264 Mover linha com campos de empresa para baixo da linha com campos de contato \(PY\)



<a name="v1-2-0" />
## 1.2.0 (2022-10-14)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-230 Timeout de sessão por inatividade

### Melhorias

ARNG-244 Refatorar tipos de certificado

ARNG-242 Filtros adicionais na busca de pedidos

ARNG-219 Permitir ao ACI escolher um pedido para fazer conferência a partir de uma lista

### Correções de bugs

ARNG-241 Busca por pedidos não permite digitar letras no campo de identificador \(que agora é alfanumérico para pedidos PY\)

ARNG-231 Campos se sobrepõem na tela de verificação



<a name="v1-1-2" />
## 1.1.2 (2022-09-26)

Atualiza modelo do banco de dados: não

### Melhorias

ARNG-228 Envio de SMS com provedor Tigo


<a name="v1-1-1" />
## 1.1.1 (2022-09-26)

Atualiza modelo do banco de dados: não

### Melhorias

ARNG-229 Apresentar mensagem amigável quando o certificado do agente não for encontrado



<a name="v1-1-0" />
## 1.1.0 (2022-09-19)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-217 Reaproveitamento de dados de pedidos antigos

ARNG-210 Geração de documentos personalizada para Code100

ARNG-224 Envio de SMS com Amazon SNS

ARNG-227 Provedor de envio de SMS "EmailDump"

### Melhorias

ARNG-223 Ocultar seleção de tipo de emissão na criação de pedido enquanto não há videoconferência

ARNG-220 Pré-selecionar token caso só haja um conectado

ARNG-213 Revisar motivos de pendência, recusa e revogação

ARNG-211 Melhorar inicialização dos tipos de certificados paraguaios

ARNG-209 Exibir informação de tamanho máximo por arquivo no upload de documentos

ARNG-200 Permitir agentes de validação revogarem certificados

ARNG-186 Refatoração do registro de eventos

ARNG-225 Registrando events no log da aplicação

### Correções de bugs

ARNG-216 Erro ao tentar modificar um campo como data de nascimento com valor inválido

ARNG-215 O uso de uma imagem de identificação muito grande faz com que a tela se sobreponha aos botões

ARNG-207 Input de número do pedido para iniciar validação não aceita número de pedido formatado

ARNG-202 Checkbox de iniciar validação está aparecendo na parte de gestão



<a name="v1-0-2" />
## 1.0.2 (2022-08-17)

Atualiza modelo do banco de dados: não

### Correções de bugs

ARNG-206 Certificados BR não são emitidos conforme normas da RFB

ARNG-160 Dados do título de eleitor não devem ser obrigatórios para certificados BR



<a name="v1-0-1" />
## 1.0.1 (2022-08-16)

Atualiza modelo do banco de dados: não

### Correções de bugs

ARNG-205 Tela de detalhes do pedido não está permitindo abrir documentos

ARNG-204 Erro na geração de documentos para certificados Brasileiros sem CNPJ



<a name="v1-0-0" />
## 1.0.0 (2022-08-15)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-199 Novos tipos de certificados paraguaios

ARNG-181 Revogação de certificado pelo titular

ARNG-180 Revogação de certificado pelo agente

ARNG-173 Permitir criar um pedido e já iniciar a validação

ARNG-118 Verificação de equipamento/certificado

ARNG-126 Gerenciamento de equipamentos

### Melhorias

ARNG-203 Aceitar números de documento alfanumérico para certificados PY

ARNG-193 Refatorar emissão de modo a só emitir o certificado após a assinatura do termo pelo titular

ARNG-192 Melhorar termo de titularidade

ARNG-188 Tornar emissão de certificado com data futura opcional, feita após envio para fila

ARNG-184 Ajustes à tela de busca de pedidos

ARNG-183 Ajustes à tela de detalhes de pedidos

ARNG-179 Armazenar informações acerca do token utilizado para emissão

ARNG-177 Remover campos de endereço do pedido de certificado paraguaio

ARNG-175 Melhorar exibição dos documentos na conferência

ARNG-159 Assinatura do termo de titularidade e dossiê pelo AVP

### Correções de bugs

ARNG-194 Série de número de pedido não é levada em conta no cálculo do DV



<a name="v1-0-0-rc12" />
## 1.0.0 RC12 (2022-07-05)

Primeira versão disponível publicamente
