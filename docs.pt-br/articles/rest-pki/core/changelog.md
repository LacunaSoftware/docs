# Histórico de versões - Rest PKI Core

<a name="vnext" />
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
