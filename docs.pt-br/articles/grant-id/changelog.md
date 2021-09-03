# Histórico de versões do GrantID

> [!NOTE]
> Este histórico por ora contém informações apenas sobre as atualizações mais recentes ao sistema. Estamos
> trabalhando para documentar as versões mais antigas.

<a name="v3-26-0" />
### 3.26.0 (2021-09-01)

* Novas funcionalidades
  * [LI-361] Permitir personalizar HTML dos emails enviados
  * [LI-359] Login com certificados em nuvem

* Correções de bugs
  * [LI-360] Opção de desabilitar cadastro continuar permitindo cadastro com certificado digital

Atualiza modelo do banco de dados: não

<a name="v3-25-1" />
### 3.25.1 (2021-07-01)

* Melhorias
  * [LI-358] Suportar tipos alternativos de autenticação com AWS S3
  * [LI-356] Atualizar Sink do New Relic para melhorar registro de exceções

Atualiza modelo do banco de dados: não

<a name="v3-25-0" />
### 3.25.0 (2021-02-03)

* Melhorias
  * [LI-355] - Atualizar Serilog/Sinks e Blob Storage
  * [LI-354] - Suporte a ADFS com SAML
  * [LI-353] - Corrigir comportamento do link de voltar ao site

> [!WARNING]
> À partir desta versão, o certificado para emissão de tokens deve ter a flag de uso `Key Encipherment` ou não ter restrições de Key Usage.

Atualiza modelo do banco de dados: sim

<a name="v3-24-0" />
### 3.24.0 (2020-12-29)

* Novas funcionalidades
  * [LI-350] - Adicionar política de senha nas telas que definem senha
  * [LI-351] - Alterar mensagem de CPF já encontrado no sistema

Atualiza modelo do banco de dados: não

<a name="v3-23-1" />
### 3.23.1 (2020-12-29)

* Correções de bugs
  * [LI-348] - Eventos de login com certificado digital não estão sendo registrados

Atualiza modelo do banco de dados: não

<a name="v3-23-0" />
### 3.23.0 (2020-08-20)

* Novas funcionalidades
  * [LI-341] - Adicionar configuração para possibilitar assinatura com certificados com revocation status unknown
  * [LI-347] - Enviar email com servidor SMTP personalizado por subscription (app setting)

* Melhorias
  * [LI-344] - Atualizar PKI SDK para permitir certificados security data

Atualiza modelo do banco de dados: não

<a name="v3-22-0" />
### 3.22.0 (2020-06-29)

* Melhorias
  * [LI-339] - Permitir configurar pais padrão para os formulários de telefone

Atualiza modelo do banco de dados: sim


<a name="v3-21-0" />
### 3.21.0 (2020-06-08)

* Correções de bugs
  * [LI-330] - Update de Username de usuário não está acontecendo
  * [LI-331] - Erro não tratado no reenvio de email de recuperação de senha

* Melhorias
  * [LI-293] - Permitir remover informações na tela de usuários como email e telefone
  * [LI-327] - Login com certificado com Identificador (CPF) não único na subscription
  * [LI-329] - Adicionar Traduções para Espanhol
  * [LI-332] - Permitir configuração de white-list de domínios que poderão acessar via iframe
  * [LI-334] - Tela para alterar email antes da confirmação
  * [LI-335] - Tela para alterar telefone antes da confirmação
  * [LI-337] - Adicionar cadastro de logins com identificadores de outros países

Atualiza modelo do banco de dados: sim
