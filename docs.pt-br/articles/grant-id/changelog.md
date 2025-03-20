# Histórico de versões do GrantID

<a name="v4-11-0" />
### 4.11.0 (2025-03-19)

* Novas funcionalidades
  * [LI-420] Permitir habilitar Recaptcha por subscription
  * [LI-426] Adicionar configuração para desabilitar logins com certificado A1

* Melhorias
  * [LI-422] Configuração para esconder número de tentativas de login
  * [LI-427] Corrigir comportamento de configuração de OTP
  * [LI-428] Adicionar endpoint de métricas do prometheus
  * [LI-429] Evitar usos de Task.Run() no IdentityService
  * [LI-431] Criação de subscription apenas pelo administrador da instância
  * [LI-432] Forçar bloqueio por tentativas no segundo fator de autenticação
  * [LI-433] Remover tela de Contato e Preços
  * [LI-434] Adicionar perfil de Gerente de Usuários

Atualiza modelo do banco de dados: sim

> [!WARNING]
> Se você utiliza login com certificado digital, antes de atualizar para esta versão, garanta que sua licença suporta versões do PKI SDK lançadas até 2025-03-19.

<a name="v4-10-0" />
### 4.10.0 (2024-11-04)

* Novas funcionalidades
  * [LI-424] Adicionar Claims com informações do emissor do certificado utilizado para login
  * [LI-425] Registrar dados do certificado que foi utilizado para fazer login

* Correções de bugs
  * [LI-423] Corrigir versão do componente de telefone na edição de perfil do AuthServer

Atualiza modelo do banco de dados: não

<a name="v4-9-0" />
### 4.9.0 (2024-06-25)

* Novas funcionalidades
  * [LI-419] Permitir bloquear login com usuário e senha
  * [LI-417] Adicionar configuração bloqueio de domínios de e-mails temporários 

* Melhorias
  * [LI-367] Permitir filtrar por usuários sem filtrar por Application
  * [LI-418] Permitir definir nível mínimo exigido pela autenticação com Gov BR

* Correções de bugs
  * [LI-319] Alguns eventos são registrados com IP do Auth Server
  * [LI-342] Erro na tela de consultas de usuários de subscription quando muitas aplicações estão selecionadas

Atualiza modelo do banco de dados: sim

<a name="v4-8-0" />
### 4.8.0 (2024-05-03)

* Melhorias
  * [LI-414] Aumentar segurança de parâmetros contra HTML Injection
  * [LI-415] Permitir configurar o lockout para login no console
  * [LI-416] Aumentar limite de max URL e max query string

Atualiza modelo do banco de dados: não

<a name="v4-7-0" />
### 4.7.0 (2024-04-18)

* Melhorias
  * [LI-410] Atualizar bibliotecas javascript
  * [LI-412] Adicionar opções de restrição de certificados digitais
  * [LI-413] Permitir desabilitar o uso do ProviderUser para provedores de identidade externos

Atualiza modelo do banco de dados: não

<a name="v4-6-0" />
### 4.6.0 (2023-11-06)

* Novas funcionalidades
  * [LI-401] Integração com Gov BR

* Melhorias
  * [LI-403] Adicionar opção para desabilitar a necessidade de envio de client secret com Code Flow + PKCE
  * [LI-404] Atualizar biblioteca de validação de telefone
  * [LI-405] Melhorar filtragem de certificados
  * [LI-406] Melhorar validação de nomes
  * [LI-407] Atualizar lista de caracteres válidos para username
  * [LI-408] Adicionar validação de cédula de identidad do Paraguai
  * [LI-409] Proteção contra HTML injection no envio de e-mails

Atualiza modelo do banco de dados: não

<a name="v4-5-0" />
### 4.5.0 (2023-05-25)

* Novas funcionalidades
  * [LI-399] API para exclusão de usuários

* Melhorias
  * [LI-400] Permitir que o telefone não seja alterado no login com SAML

Atualiza modelo do banco de dados: não

<a name="v4-4-0" />
### 4.4.0 (2023-05-16)

* Melhorias
  * [LI-398] Adicionar suporte a novos provedores de SMS (Amazon e Tigo)

Atualiza modelo do banco de dados: não

<a name="v4-3-0" />
### 4.3.0 (2023-04-25)

* Novas funcionalidades
  * [LI-392] Login com LDAP
  * [LI-394] Identificar quando usuário digita domínio do endereço de e-mail errado e sugerir correção
  * [LI-396] Adicionar suporte a armazenamento de blobs em banco de dados

* Melhorias
  * [LI-397] Criar configuração que permita uso de protection keys armazenadas em filesystem porém sem geração automática

Atualiza modelo do banco de dados: sim

<a name="v4-2-2" />
### 4.2.2 (2023-02-14)

* Melhorias
  * [LI-389] Permitir configuração do *signing certificate* diretamente por conteúdo do PFX (útil em Docker)

* Correções de bugs
  * [LI-390] Personalização da porta do identity service em ambiente Docker causa problemas de comunicação entre os componentes

Atualiza modelo do banco de dados: não

<a name="v4-2-1" />
### 4.2.1 (2023-02-07)

* Melhorias
  * [LI-391] Adicionar exemplo de configuração de PostgreSQL ao modelo de arquivo de configuração do Identity Service

Atualiza modelo do banco de dados: não

<a name="v4-2-0" />
### 4.2.0 (2023-01-26)

* Melhorias
  * [LI-388] Suporte a PostgreSQL

Atualiza modelo do banco de dados: sim

<a name="v4-1-0" />
### 4.1.0 (2022-12-28)

* Melhorias
  * [LI-387] Adicionada configuração para exibir apenas certificados tendo o *key usage* `DigitalSignature`

Atualiza modelo do banco de dados: não

<a name="v4-0-3" />
### 4.0.3 (2022-12-07)

* Melhorias
  * [LI-377] Suporte a .NET 6

Atualiza modelo do banco de dados: sim

> [!WARNING]
> Requer uma licença atualizada do PKI SDK.

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
