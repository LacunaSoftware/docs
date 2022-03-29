# Histórico de versões - Rest PKI Core

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
