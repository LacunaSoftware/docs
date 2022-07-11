# Histórico de versões do GrantID

> [!NOTE]
> Este histórico por ora contém informações apenas sobre as atualizações mais recentes ao sistema. Estamos
> trabalhando para documentar as versões mais antigas.

<a name="v3-30-1" />
### 3.30.1 (2022-07-11)

* Novas funcionalidades
  * [LI-377] Adicionar claim com thumbprint do certificado ao fazer login com certificado digital

Atualiza modelo do banco de dados: não

<a name="v3-30-0" />
### 3.30.0 (2022-07-07)

* Melhorias
  * [LI-375] Atualizar lista de provedores de SMS compatíveis
  * [LI-374] Melhorias no uso de refresh tokens

* Correções de bugs
  * [LI-376] Link inválido caso seja utilizado redirecionador de links em página de definição de senha

Atualiza modelo do banco de dados: não

<a name="v3-29-0" />
### 3.29.0 (2022-06-06)

* Novas funcionalidades
  * [LI-372] Adicionar APIs para validação de Email por código
  * [LI-371] Login com certificado digital utilizando Serial number do Common Name

* Melhorias
  * [LI-373] Permitir busca exata por informações do usuário

Atualiza modelo do banco de dados: não

<a name="v3-28-0" />
### 3.28.0 (2022-05-06)

* Melhorias
  * [LI-370] Corrigir textos de telas
  * [LI-369] Permitir definir CNPJ na tela de acesso com certificado em nuvem
  * [LI-366] Atualizações no Import Command
  * [LI-363] Usar a cultura da thread atual para preencher o header AcceptLanguage das chamadas da client lib

Atualiza modelo do banco de dados: não

<a name="v3-27-1" />
### 3.27.1 (2021-09-12)

* Melhorias
  * [LI-365] Melhorar uso do certificado em nuvem no mobile

Atualiza modelo do banco de dados: não

<a name="v3-27-0" />
### 3.27.0 (2021-09-12)

* Novas funcionalidades
  * [LI-362] Permitir controlar duração da autenticação

* Melhorias
  * [LI-364] Correções no conteúdo dos emails

Atualiza modelo do banco de dados: não

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
