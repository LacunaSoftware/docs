# Histórico de versões - Rest PKI Core

<!--
<a name="vnext" />
-->

<a name="v2.2.2" />
## 2.2.2 (2024-05-04)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-261 Erro NullReferenceException ao solicitar carimbo via TSP



<a name="v2.2.1" />
## 2.2.1 (2024-05-01)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-260 URLs relativas de upload em chamadas à API ainda não são aceitas em Linux/Docker



<a name="v2.2.0" />
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

RPNG-250 Exceções transformadas em ApiException não são logadas corretamente

RPNG-252 Filtro por data não funcionando na tela de "Detalhes do provedor de carimbo de tempo"

RPNG-253 Pedido de carimbo de tempo não registra duração em caso de erro no provedor

RPNG-254 Consulta a chamadas de provedor de carimbo de tempo não utiliza o índice adequado


<a name="v2.1.3" />
## 2.1.3 (2024-04-10)

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-240 Usar timestamp tier padrão no caso de uma política com carimbo ser usada em conjunto com um contexto de segurança personalizado sem tier de timestamp definido



<a name="v2.1.2" />
## 2.1.2 (2024-03-14)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-231 Inconformidades nos códigos de retorno declarados no Swagger



<a name="v2.1.1" />
## 2.1.1 (2024-01-24)

Atualiza modelo do banco de dados: não

### Novas funcionalidades

RPNG-234 Criar rota `/api/system/manifest`

### Melhorias

RPNG-228 Adicionar configuração para logar requisições HTTP

### Correções de bugs

RPNG-208 Propriedade `signatureResult.getFile().url` retorna uma URL absoluta (era relativa no Rest PKI clássico)



<a name="v2.1.0" />
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



<a name="v2.0.2" />
## 2.0.2 (2023-11-09)

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-220 Ignorar erros de comunicação com o Amplia caso `AttributeCertificateInclusion` seja `Recommended`



<a name="v2.0.1" />
## 2.0.1 (2023-11-08)

Atualiza modelo do banco de dados: não

### Correções de bugs

RPNG-217 Erro "CryptographicException: The payload was invalid" ao consultar sessões de assinatura antigas



<a name="v2.0.0" />
## 2.0.0 (2023-10-30)

Atualiza modelo do banco de dados: **sim**

### Melhorias

RPNG-178 Permitir definição opcional de timestamp tier no contexto de segurança

RPNG-204 Anonimização de dados na tela de validação

RPNG-207 Melhorias ao gerenciamento de provimento de carimbos de tempo

RPNG-246 Filtro por data de início e fim na lista de chamadas ao provedor de carimbo de tempo

RPNG-212 Alterar texto da marca de validação da ONR

### Correções de bugs

RPNG-198 API de validação de assinaturas não respeita configuração `General:DefaultTimeZone`



<a name="v1-13-1" />
## 1.13.1 (2023-10-17)

Atualiza modelo do banco de dados: não

### Melhorias

RPNG-212 Alterar texto da marca de validação da ONR



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

### Alterações para clientes específicos

RPNG-130 Flavour ONR



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
