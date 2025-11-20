# Histórico de versões - Rest PKI Core

<!--<a name="vnext" />-->
<a name="v3-6-1" />
## 3.6.1 (2025-11-20)

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-320 Carregamento de dados de sessões FaceTec legadas

<a name="v3-6-0" />
## 3.6.0 (2025-11-20)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-387 Adicionar tags para transações

RPNG-445 Dashboard - Adicionar sessões de datavalid nos detalhes da sessão de biometria

RPNG-460 Adicionar ferramentas para extração de fotos das sessões de liveness FaceTec

### Melhorias

RPNG-446 Dashboard - Adicionar campos faltantes de FaceTecSession

<a name="v3-5-2" />
## 3.5.2 (2025-11-20)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-457 Problemas com configuração de provedor de identidade externa da Subscription

<a name="v3-5-0" />
## 3.5.0 (2025-11-17)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-336, RPNG-397 Ferramentas para importação de dados FaceTec

RPNG-392 Dashboard de Biometria - Tela de detalhamento da sessão de biometria

RPNG-395 Dashboard de Biometria - Filtros na listagem de sessões

RPNG-427 Carimbo de tempo para vídeo identificação

<!-- RPNG-432 Adicionar suporte a OpenTelemetry -->

### Melhorias

RPNG-157 Adicionar campo para inserir Api-Key no swagger

RPNG-274 Melhorar tratamento de PDFs protegidos por senha

RPNG-390 Logar eventos de frontend dos SDKs FortFace e FaceTec

RPNG-406 Refatoração de PolicyWrappers com base no PKI Express

RPNG-423 Ativar descrição de campos no Swagger

RPNG-429 Persistência de informaçõe sadicionais das sessões FaceTec no banco de dados

RPNG-431, RPNG-436 Vídeo Identificação - Melhoria no PDF de result report

RPNG-444 Opção de gerar result-data para sessões biométricas de cadastro e autenticação

### Correções de bugs

RPNG-357 Não existe mensagem de erro amigável quando outro app está usando a câmera (FortFace)

RPNG-409 Problemas na customização de cores FaceTec IdScan

<a name="v3-4-0" />
## 3.4.0 (2025-10-28)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-351, RPNG-352, RPNG-359, RPNG-353, RPNG-364, RPNG-391, RPNG-407, RPNG-422, RPNG-426 Adicionar sessão de vídeo identificação

RPNG-360 Permitir customização estática da Home Page (por instância)

RPNG-379 Implementar gerenciamento de configurações de PDF e Contexto de Segurança por Subscription

RPNG-381 Adicionar API para renotarização de diplomas

RPNG-393 Dashboard de Biometria - Adicionar tela de listagem de cadastros

### Melhorias

RPNG-151 Adicionar traduções para espanhol

RPNG-414 Atualização de bibliotecas de assinatura

### Correções de bugs

RPNG-285 Ajustes de permissões

RPNG-388 Erro de constraint duplicada ao salvar certificados

<a name="v3-3-0" />
## 3.3.0 (2025-10-16)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-184 Cadastro de ACs (Autoiridades Certificadoras) intermediárias

RPNG-324 Registro de thumbprint de chave pública das sessões FaceTec

RPNG-346 Sessões biométricas de cadastro e autenticação por foto

RPNG-358 Sessão de correspondência entre documento de identificação com face

RPNG-374 Verificação de identidade facial com provedores externos (FortFace/Datavalid)

RPNG-377 Sessões biométricas de cadastro e autenticação utilizando captura de face com prova de vida FortFace

RPNG-383, RPNG-382 Adicionar tela de configurações de biometria da subscription

RPNG-385 Tela de listagem resumida de sessões biométricas com visualização de imagens

RPNG-404 Adicionar configuração para aceitar imagens de baixa resolução na API de autenticação facial

### Melhorias

RPNG-312, RPNG-314, RPNG-372, RPNG-375, RPNG-384, RPNG-343 Melhorias na modelagem de entidades relacionadas a biometria

RPNG-371 Melhorar layout das demonstrações de sessões biométricas

RPNG-373 Melhorar layout das sessões biométricas em dispositivos móveis

RPNG-399 Adicionar resources do FaceTec browser SDK v9.7.83

### Correções de bugs

RPNG-376 Inconsistência na configuração do limite de tentativas de liveness nas sessões biométricas com FaceTec

<!-- RPNG-378 Correção interna de comando de migração SQL -->

<a name="v3-2-1" />
## 3.2.1 (2025-08-27)

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-367 Atualizar certificados da cadeia de testes v3

### Correções de bugs

RPNG-365 Garantir build com última imagem do AspNet

<a name="v3-2-0" />
## 3.2.0 (2025-08-22)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-319 QR Code para sessões de biometria

RPNG-329 Detecção de oclusão de face nas sessões de prova de via via FortFace

### Melhorias

RPNG-325 Aplicar de temas nas sessões de biometria

RPNG-331 Atribuir sessões biométricas implicitas para chamadas de API FaceTec

RPNG-332 Recortar imagem do resultado da prova de vida via FortFace

RPNG-354 Adicionar resources do FaceTec browser SDK v9.7.75

### Correções de bugs

RPNG-355 Erro `BadRequest` ao tentar utilizar AWS S3 em alguns cenários



<a name="v3-1-1" />
## 3.1.1 (2025-07-24)

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-340 Adicionar resources do FaceTec browser SDK v9.7.72

### Correções de bugs

RPNG-341 Imagem para ARM64 não está escutando na porta 80 após atualização para .NET 8



<a name="v3-1-0" />
## 3.1.0 (2025-07-24)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-297 Sessões de biometria



<a name="v3-0-1" />
## 3.0.1 (2025-06-25)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

RPNG-316 Comando/Job para realizar teste de integridade de documentos

### Melhorias

RPNG-284 Adicionar resources do FaceTec browser SDK v9.7.63 e v9.7.66

### Correções de bugs

RPNG-315 Erro `BlobNotFoundException` em certos blobs da pasta `signedfiles`



<a name="v3-0-0" />
## 3.0.0 (2025-06-16)

> [!WARNING]
> Veja [Atualizando o Rest PKI Core da versão 2.x para 3.0](on-premises/update-30.md)

Atualiza modelo do banco de dados: **sim**

### Melhorias

RPNG-275 Atualizado ASP.NET Core para versão 8.0

RPNG-292 Resolver vulnerabilidades conhecidas (para mais informações veja a [Verificação de vulnerabilidade 25.04](https://docs.lacunasoftware.com/en-us/articles/rest-pki/core/on-premises/vulnerabilities#c2504))

RPNG-295 Sinalizar para mecanismos de busca que páginas de validação de documentos não devem ser indexadas

RPNG-299 Melhorar exibição do carimbo de tempo na tela de validação

RPNG-301 Criar imagem "distroless" com superfície de ataque reduzida

### Correções de bugs

RPNG-293 Marcas do tipo QRCode causam erro 500 na API de adicionar marcas se executando em Linux

RPNG-296 Detalhes da validação do certificado na página de validação de documentos ficam em inglês mesmo selecionando português



<a name="v2-5-0" />
## 2.5.0 (2025-04-11)

Idêntica a: 2.5.0 RC 7 (2025-04-11)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-276 APIs para realização de prova de vida (*liveness*) com FaceTec

RPNG-279 APIs para realização de digitalização de documento de identificação (*Id Scan*) com FaceTec

RPNG-280 Demonstração de prova de vida com FaceTec

### Melhorias

RPNG-287 Suporte a uso de schemas de banco de dados personalizados

RPNG-289 Suporte a plataforma ARM64 em Docker

### Correções de bugs

RPNG-288 Erro *An error has occurred while processing your authentication \(blank email address\). Please try again.*

### Alterações para variantes específicas

RPNG-286 Marcas de validação específicas para caso paisagem \(variante *onr*\)



<a name="v2-4-5" />
## 2.4.5 (2025-12-03)

Atualiza modelo do banco de dados: não

### Bug

RPNG-277 Coluna `DateCompleted` não é preenchida quando uma sessão de assinatura é completada



<a name="v2-4-4" />
## 2.4.4 (2024-10-02)

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-271 Melhorar desempenho de chamadas simples repetidas muitas vezes por clientes



<a name="v2-4-3" />
## 2.4.3 (2024-09-25)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-291 Problemas de retrocompatibilidade na API de adicionar marcas a PDFs



<a name="v2-4-2" />
## 2.4.2 (2024-07-26)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-269 Erro 500 ao realizar assinar de PDF com política `PkiBrazil.AdrTempo`



<a name="v2-4-1" />
## 2.4.1 (2024-07-25)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-290 Erro de compatibilidade com SQL Server 2012 \(uso de função `TRIM()`\)



<a name="v2-4-0" />
## 2.4.0 (2024-07-25)

Idêntica a: 2.4.0 RC 1 (2024-06-15)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

RPNG-262 Configuração `Oidc:AuthorityBackchannelUrl` para situações em que o GrantID tem uma URL específica para comunicação de backend para backend

### Melhorias

RPNG-265 Melhorar especificação da assinatura a ser executada com a chave privada do assinante nas APIs

RPNG-266 Políticas para validar assinaturas feitas no Gov.BR

### Alterações para variantes específicas

RPNG-264 Metadados do documento não aparecem na página de validação \(variante *onr*\)



<a name="v2-3-0" />
## 2.3.0 (2024-06-06)

Idêntica a: 2.3.0 RC 1 (2024-05-17)

Atualiza modelo do banco de dados: **sim**

### Alterações para variantes específicas

RPNG-259 CNS e Cartório por subscription \(variante *onr*\)



<a name="v2-2-2" />
## 2.2.2 (2024-05-04)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-261 Erro NullReferenceException ao solicitar carimbo via TSP



<a name="v2-2-1" />
## 2.2.1 (2024-05-01)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-260 URLs relativas de upload em chamadas à API ainda não são aceitas em Linux/Docker



<a name="v2-2-0" />
## 2.2.0 (2024-04-30)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-241 Registro de transações de API

RPNG-225 API para adicionar carimbo em arquivos PDF

RPNG-214 Configurações por subscription de cultura, fuso horário e formato de data/hora (usadas na representação visual de assinaturas PDF)

### Melhorias

RPNG-236 Alternância (*round-robin*) de provedores de carimbo com definição opcional de prioridades

<!--
RPNG-238 Permitir visualização e edição de metadados das aplicações
-->

RPNG-239 Atualizar Angular para versão 17

RPNG-248 Aceitar URLs relativas de upload em chamadas à API

RPNG-255 Exibir na home page da subscription eventos, solicitações de carimbo de tempo e transações

RPNG-256 Melhorar e separar em item de menu específico as demonstrações de uso das APIs

RPNG-257 Apagar mensagens antigas de TSP apenas caso explicitamente configurado

### Correções de bugs

RPNG-235 Sistema não está tentando obter carimbo de tempo novamente em caso de erro

RPNG-237 Job para completar assinatura CMS está dando erro

RPNG-245 Parâmetros inválidos de representação visual estão gerando resposta 500 ao invés de 422

RPNG-247 URLs inválidas no `ResourceContentOrReference.Url` causam erro 500

RPNG-250 Exceções transformadas em ApiException não são logadas corretamente

RPNG-252 Filtro por data não funcionando na tela de "Detalhes do provedor de carimbo de tempo"

RPNG-253 Pedido de carimbo de tempo não registra duração em caso de erro no provedor

RPNG-254 Consulta a chamadas de provedor de carimbo de tempo não utiliza o índice adequado


<a name="v2-1-3" />
## 2.1.3 (2024-04-10)

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-240 Usar timestamp tier padrão no caso de uma política com carimbo ser usada em conjunto com um contexto de segurança personalizado sem tier de timestamp definido



<a name="v2-1-2" />
## 2.1.2 (2024-03-14)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-231 Inconformidades nos códigos de retorno declarados no Swagger



<a name="v2-1-1" />
## 2.1.1 (2024-01-24)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

RPNG-234 Criar rota `/api/system/manifest`

### Melhorias

RPNG-228 Adicionar configuração para logar requisições HTTP

### Correções de bugs

RPNG-208 Propriedade `signatureResult.getFile().url` retorna uma URL absoluta (era relativa no Rest PKI clássico)



<a name="v2-1-0" />
## 2.1.0 (2024-01-15)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

RPNG-215 Configuração de proxy

### Melhorias

RPNG-216 Adicionar suporte a modo Standby para instalação em Azure App Service

RPNG-219 Exibir informações de certificado de atributo agregado às assinaturas

RPNG-224 Revisar swagger

### Correções de bugs

RPNG-222 Erro ao salvar contexto de segurança referenciando plano de carimbo de tempo

RPNG-226 Informações necessárias à finalização da assinatura são perdidas em caso de erro na finalização

RPNG-227 Erro "NotSupportedException" nas APIs de start Cades V1 e V2

RPNG-232 Aplicação está exigindo claim de CPF desnecessariamente



<a name="v2-0-2" />
## 2.0.2 (2023-11-09)

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-220 Ignorar erros de comunicação com o Amplia caso `AttributeCertificateInclusion` seja `Recommended`



<a name="v2-0-1" />
## 2.0.1 (2023-11-08)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-217 Erro "CryptographicException: The payload was invalid" ao consultar sessões de assinatura antigas



<a name="v2-0-0" />
## 2.0.0 (2023-10-30)

Atualiza modelo do banco de dados: **sim**

### Melhorias

RPNG-178 Permitir definição opcional de timestamp tier no contexto de segurança

RPNG-204 Anonimização de dados na tela de validação

RPNG-207 Melhorias ao gerenciamento de provimento de carimbos de tempo

RPNG-246 Filtro por data de início e fim na lista de chamadas ao provedor de carimbo de tempo

### Correções de bugs

RPNG-198 API de validação de assinaturas não respeita configuração `General:DefaultTimeZone`



<a name="v1-13-1" />
## 1.13.1 (2023-10-17)

Atualiza modelo do banco de dados: não

### Alterações para variantes específicas

RPNG-212 Alterar texto da marca de validação \(variante *onr*\)



<a name="v2.0.0-rc16" />
## 2.0.0 RC 16 (2023-09-12)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-160 Adicionar suporte às APIs de assinatura CADES antigas

RPNG-182 Histórico de timestamp tiers e providers

RPNG-206 Habilitar acesso via SSH na imagem de Docker

### Correções de bugs

RPNG-185 Arquivos de certificado não são aceitos no upload de raízes do gerenciamento de contexto de segurança

RPNG-200 Propriedade MessageDigest dos assinantes PDF/CMS não é preenchida em situações em que apenas o algoritmo é conhecido

RPNG-201 APIs de exploração de assinatura estão ignorando o parâmetro `SignaturePolicyId`

RPNG-209 Multipart upload não está funcionando



<a name="v2.0.0-rc08" />
## 2.0.0 RC 8 (2023-06-30)

> [!WARNING]
> Antes de atualizar para esta versão, garanta que sua licença do PKI SDK suporta versões lançadas até 2023-06-27.

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-192 Criar configuração para retornar exceções nas respostas de erro quando a API tiver sido chamada por uma aplicação

### Correções de bugs

RPNG-191 Respostas 422 não preenchem propriedade Detail

RPNG-193 PDFs assinados com padrão antigo \(não-PAdES\) causam erro nas APIs de abertura de assinatura

RPNG-194 PDFs protegidos por senha causam erro 500 \(deveriam causar 422 com código ProtectedPdfError\)

RPNG-195 PDFs corrompidos causam erro 500 \(deveriam causar 422 com código InvalidPdf\)

RPNG-196 Erro "Wrong last certificate on Pades signature"



<a name="v2.0.0-rc07" />
## 2.0.0 RC 7 (2023-05-30)

> [!WARNING]
> Antes de atualizar para esta versão, garanta que sua licença do PKI SDK suporta versões lançadas até 2022-10-19.

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-155 Adicionar suporte às APIs de autenticação antigas

RPNG-159 Adicionar suporte às APIs de assinatura de PDF antigas

RPNG-161 Adicionar suporte às APIs de assinatura de XML antigas

RPNG-162 Adicionar suporte às APIs de PdfMarking antigas

RPNG-177 Adicionar suporte a políticas de assinatura

RPNG-179 Agregar certificado de atributo automaticamente a assinaturas

RPNG-183 Adicionar suporte à API de validação de certificados legada

### Correções de bugs

RPNG-180 Assinatura com certificado em nuvem parou de funcionar após atualização para SPA 2.6 \(v1.13.0\)

RPNG-190 Erro "cannot access a closed file" usando blob storage tipo AwsS3



<a name="v1-13-0" />
## 1.13.0 (2023-03-14)

Atualiza modelo do banco de dados: **sim**

### Melhorias

RPNG-153 Adicionar representação visual à API de assinatura

RPNG-172 Permitir blob storage em "S3 clones"

RPNG-169 Completar atualização para SPA 2.6



<a name="v1-12-2" />
## 1.12.2 (2023-02-28)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-173 API de obter detalhes de um documento pelo ID não está permitindo acesso inter-contas em instâncias on-premises



<a name="v1-12-1" />
## 1.12.1 (2023-01-05)

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-164 Melhorar configuração em Linux



<a name="v1-12-0" />
## 1.12.0 (2022-12-13)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-158 Adicionado suporte a PostgreSQL

### Melhorias

RPNG-156 Atualizado ASP.NET Core para versão 6.0

### Correções de bugs

RPNG-152 Não é possível adicionar raízes confiáveis na tela de criação do contexto de segurança



<a name="v1-11-0" />
## 1.11.0 (2022-11-14)

Atualiza modelo do banco de dados: **sim**

### Melhorias

RPNG-154 Criar configuração de margens esquerda e superior na marcação de PDF



<a name="v1-10-2" />
## 1.10.2 (2022-05-03)

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-149 Permitir forçar política de assinatura de PDFs para padrão ICP Brasil



<a name="v1-10-1" />
## 1.10.1 (2022-04-23)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-148 Erro ao utilizar contexto de segurança personalizado



<a name="v1-10-0" />
## 1.10.0 (2022-04-23)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-2 API para autenticação com certificado digital

### Melhorias

RPNG-146 Parametrização de PDF marks

RPNG-147 Permitir configurar se PDFs serão marcados



<a name="v1-9-0" />
## 1.9.0 (2022-03-29)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

RPNG-41 API para validação de documentos fornecendo o arquivo

RPNG-141 Gerenciamento de contextos de segurança da interface web



<a name="v1-8-0" />
## 1.8.0 (2022-02-25)

Atualiza modelo do banco de dados: **sim**

### Melhorias

RPNG-10 [Requisitos de certificados](integration/signature-sessions/certificate-requirements.md) em sessões de assinatura



<a name="v1-7-0" />
## 1.7.0 (2022-01-25)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-135 Assinatura CAdES detached

RPNG-44 Interface para acompanhar chamadas \(em especial falhas\) ao webhook e à API de validação de arquivos

### Melhorias

RPNG-51 Interface de configuração do tema e *assets* personalizáveis da conta

### Correções de bugs

RPNG-144 Imagens da sessão de assinatura ficam quebradas na volta do login com provedor de certificado em nuvem



<a name="v1-6-0" />
## 1.6.0 (2021-12-08)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

RPNG-129 Suporte a certificados em nuvem na sessão de assinatura

### Melhorias

RPNG-139 Melhorar informações fornecidas sobre o certificado do assinante no `SignatureSessionModel`



<a name="v1-5-1" />
## 1.5.1 (2021-11-23)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-140 Erro ao tentar usar root password authentication



<a name="v1-5-0" />
## 1.5.0 (2021-09-30)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

RPNG-132 Suporte a assinatura CAdES/CMS

RPNG-93 Sessão de assinatura com documentos pré-definidos

### Melhorias

RPNG-138 Exibir preview dos documentos sem marcas de validação

RPNG-136 Aplicar marcas em PDFs mesmo que a assinatura seja CAdES

RPNG-128 Melhorar uso dos theme-assets para permitir logos com diferentes proporções

RPNG-120 Tratar exceção de PDF inválido/corrompido

### Correções de bugs

RPNG-119 Padrões de nomes aceitos estão vindo do subscription cache

### Alterações para variantes específicas

RPNG-130 Adicionada variante *onr*



<a name="v1-4-2" />
## 1.4.2 (2021-08-24)

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-126 Permitir configuração da quantidade de background workers

### Correções de bugs

RPNG-125 Erro no upload segmentado



<a name="v1-4-1" />
## 1.4.1 (2021-08-24)

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-122 Melhorar texto de validação

RPNG-85 Ajustes solicitados ao input de chave de documento

### Correções de bugs

RPNG-124 Erros sob alta demanda

RPNG-123 Retries de processamentos de assinaturas falham após certo tempo transcorrido



<a name="v1-4-0" />
## 1.4.0 (2021-08-11)

* Primeira versão disponível publicamente
