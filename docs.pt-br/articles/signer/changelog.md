# Histórico de versões do Signer

> [!NOTE]
> Este histórico por ora contém informações apenas sobre as atualizações mais recentes ao sistema. Estamos
> trabalhando para documentar as versões mais antigas.

<a name="v1-4-1" />
### 1.4.1 (2020-06-08)

* Correções de bugs
  * [SIG-313] - Internacionalização errada (en) no email de aprovar e assinar

Atualiza modelo do banco de dados: não

<a name="v1-4-0" />
### 1.4.0 (2020-06-08)

* Novas funcionalidades
  * [SIG-216] - Permitir configuração de instância dos detalhes da Versão para impressão

* Melhorias
  * [SIG-249] - Internacionalizar notificações
  * [SIG-285] - Remover digitalização rápida e alterar comportamento da digitalização
  * [SIG-294] - Enviar email para configurar senha ao cadastrar novos usuários
  * [SIG-312] - Adicionada configuração para definir se o texto da representação visual deve começar no meio do retângulo
  * [SIG-314] - Melhorar configuração de integração com Scanner
  * [SIG-323] - Ativar download em lote
  * [SIG-329] - Adicionar mais eventos

* Correções de bugs
  * [SIG-313] - Status de documento na listagem de pastas está "Pendente" quando está concluído

Atualiza modelo do banco de dados: sim


<a name="v1-3-2" />
### 1.3.2 (2020-05-15)

* Correções de bugs
  * [SIG-310] - Exceções lançadas ao logar caracteres especiais gerados pelo PKI SDK

Atualiza modelo do banco de dados: não


<a name="v1-3-1" />
### 1.3.1 (2020-05-05)

* Correções de bugs
  * [SIG-309] - Esconder opção de download em lote até atualização do Web PKI

Atualiza modelo do banco de dados: não

<a name="v1-3-0" />
### 1.3.0 (2020-05-05)

* Novas funcionalidades
  * [SIG-178] - Download em lote
  * [SIG-187] - Permitir selecionar Padrão de assinatura Cades ou Pades na submissão por API
  * [SIG-190] - Permitir administradores visualizaram documentos de usuários/organizações
  * [SIG-287] - Permitir que aplicações possam pegar link para ação externa

* Melhorias
  * [SIG-161] - Permitir alterar dados do usuário na administração
  * [SIG-193] - Adicionar links para PDF de documentação do usuário
  * [SIG-262] - Melhorias na funcionalidade de Autenticação
  * [SIG-293] - Permitir assinar o termo de adesão com assinatura eletronica
  * [SIG-297] - Adicionar listagem de documentos na administração
  * [SIG-301] - Ajustes de responsividade e remoção de scrolls quando loader é exibido
  * [SIG-302] - Validar Assinaturas PDF feitas no Adobe
  * [SIG-305] - Tratar erro PinValidationFailed do Amplia


* Correções de bugs
  * [SIG-304] - Pedidos de certificado que não podem ser emitidos em Cloud deveriam ser ignorados
  * [SIG-306] - Corrigir envio de notificações por email quando o SMS estiver desabilitado

Atualiza modelo do banco de dados: **sim**


<a name="v1-2-0" />
### 1.2.0 (2020-04-29)

* Novas funcionalidades
  * [SIG-284] - Permitir subir um arquivo para ser validado na tela de validação do documento
  * [SIG-296] - Configurar margens da marcação lateral na versão para impressão


* Melhorias
  * [SIG-225] - Melhorar desempenho da Assinatura em Lote


* Correções de bugs
  * [SIG-292] - Uniformizar exibição do nome e apelido de subscriptions entre os componentes da SPA e Signer
  * [SIG-295] - Corrigir assinatura XAdES sem parâmetros
  * [SIG-298] - Erro ao tentar obter o fuso de Brasília no Linux

Atualiza modelo do banco de dados: **sim**

