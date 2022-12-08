# Histórico de versões do Signer

> [!NOTE]
> Este histórico por ora contém informações apenas sobre as atualizações mais recentes ao sistema. Estamos
> trabalhando para documentar as versões mais antigas.

<a name="v1-51-0" />
### 1.51.0 (2022-12-08)

* Novas funcionalidades
  * [SIG-978] Criar tema yale blue yellow

* Melhorias
  * [SIG-999] Permitir administrador da pasta criar subpastas
  * [SIG-1006] Otimizar geração de relatórios da organização

* Correções de bugs
  * [SIG-1005] Não é possível preencher dados de um PDF form pela API de criação de documento se não for definido um tipo para o documento
  * [SIG-1002] Integração com HSM não funciona no linux
  * [SIG-1009] Erro ao cancelar lote de assinatura

Atualiza modelo do banco de dados: não

<a name="v1-50-0" />
### 1.50.0 (2022-11-16)

* Novas funcionalidades
  * [SIG-445] Adicionar tags ao documento para consulta
  * [SIG-1001] Integração com Google Tag Manager

* Melhorias
  * [SIG-988] Configuração para esconder cards de Participantes e Ordem das Ações na tela de detalhes de documento para usuários sem permissão de Admin ou Gerente.
  * [SIG-992] Webhook para criação de documento

* Correções de bugs
  * [SIG-964] Erro ao enviar arquivo com nome grande demais
  * [SIG-1002] Assinatura em lote de todos documentos não funciona com HSM

Atualiza modelo do banco de dados: sim

<a name="v1-49-2" />
### 1.49.2 (2022-11-01)

* Melhorias
  * [SIG-998] Adicionar configuração para carregamento de menu por meio de iframe

* Correções de bugs
  * [SIG-995] Erro ao assinar um documento que o fluxo foi alterado

Atualiza modelo do banco de dados: não

<a name="v1-49-1" />
### 1.49.1 (2022-11-01)

* Melhorias
  * [SIG-982] Permitir importação de documentos concluídos entre instâncias

* Correções de bugs
  * [SIG-965] Não está sendo possivel adicionar usuario em pasta

Atualiza modelo do banco de dados: não

<a name="v1-49-0" />
### 1.49.0 (2022-10-18)

* Melhorias
  * [SIG-975] Não exibir botão para fazer login abaixo do ícone após assinar um documento se opção de esconder links na área pública estiver habilitada
  * [SIG-969] Permitir que se um usuário de regra de assinatura recusar o documento os demais signatário ainda possam assinar
  * [SIG-944] Otimizar uso de memória

* Correções de bugs
  * [SIG-991] Rate limiting da iugu ao tentar criar faturas na virada do mês
  * [SIG-989] Múltiplas notificações enviadas para participante de organização que desabilitou envio de lembretes periódicos
  * [SIG-970] Opção "Voltar para tela inicial" da tela de acesso restrito não respeita tela inicial personalizada

Atualiza modelo do banco de dados: sim

<a name="v1-48-1" />
### 1.48.1 (2022-09-15)

* Melhorias
  * [SIG-967] Criar configuração para não fazer discovery de certificado em nuvem

* Correções de bugs
  * [SIG-968] Busca na tela de usuários retorna múltiplas opções se tiver número no filtro

Atualiza modelo do banco de dados: não

<a name="v1-48-0" />
### 1.48.0 (2022-09-06)

* Novas funcionalidades
  * [SIG-938] Envio automático de lembretes de assinatura para documentos pendentes

* Melhorias
  * [SIG-515] Permitir acessar tela de detalhes do documento ao clicar em evento relacionado a ele
  * [SIG-65] Melhorar tratamento de erros da assinatura em lote

* Correções de bugs
  * [SIG-963] Resultado de validação não é definido ao validar arquivos XML
  * [SIG-956] Opção Versão para impressão escrita errada no download em lote de documentos
  * [SIG-923] Webhook de recusa não é enviado em regra de assinatura
  * [SIG-811] Mensagem de erro ao tentar criar documento com fluxo composto apenas de observadores

Atualiza modelo do banco de dados: sim

<a name="v1-47-0" />
### 1.47.0 (2022-08-18)

* Novas funcionalidades
  * [SIG-915] Configuração para nome do remetente do email vir de acordo com a organização
  * [SIG-832] Integração com GOV BR para assinatura

* Melhorias
  * [SIG-953] Configuração para definir o tempo para enviar o email de boas vindas
  * [SIG-941] Ao compartilhar link para assinar eletronicamente não exigir login
  * [SIG-931] Permitir política AD-RC em assinatura no XML completo
  * [SIG-758] Configuração para mascarar email

* Correções de bugs
  * [SIG-952] Assinar documento PDF com opção forceCadesSignature exibe tarja azul
  * [SIG-951] Erro ao gerar versão para impressão de documento PDF CADeS

Atualiza modelo do banco de dados: sim

<a name="v1-46-1" />
### 1.46.1 (2022-08-01)

* Correções de bugs
  * [SIG-946] Erro ao assinar com certificado em nuvem.

Atualiza modelo do banco de dados: não

<a name="v1-46-0" />
### 1.46.0 (2022-07-29)

* Novas funcionalidades
  * [SIG-943] Criação e validação de documentos de saúde (prescrição, atestado etc)
  * [SIG-939] Configuração para não permitir assinar digitalmente se assinatura eletrônica for habilitada para um assinante
  * [SIG-932] Exibir número de ações e participantes que já concluiram ações na tela de assinatura
  * [SIG-738] Adicionar aprovadores no Manifesto de assinaturas

* Melhorias
  * [SIG-928] Adicionar novas colunas ao relatório de documentos da organização
  * [SIG-914] Configuração para habilitar a visualização do campo Título como padrão
  * [SIG-913] Inserir opões de tamanho de página maiores na listagem de documentos
  * [SIG-779] Adicionar o criador do documento no relatório de transações de uma fatura

* Correções de bugs
  * [SIG-942] Está sendo possível colocar múltiplas marcas de assinatura para um mesmo documento
  * [SIG-940] Assinatura não é posicionada corretamente ao carregar fluxo de documento existente
  * [SIG-935] Erro ao editar fluxo de documento que possui observadores por API

Atualiza modelo do banco de dados: não

<a name="v1-45-0" />
### 1.45.0 (2022-06-30)

* Novas funcionalidades
  * [SIG-904] Permitir especificar que assinatura só pode ser realizada com certificado PF
  * [SIG-726] Permitir excluir certificados na tela de certificados pessoais

* Melhorias
  * [SIG-933] Atualizar Swagger
  * [SIG-920] Inserir informação de assinatura com certificado digital ICP-Brasil no Manifesto
  * [SIG-905] Adicionar evento de edição de plano padrão da instância
  * [SIG-885] Melhorar exibição de dados da assinatura de carimbadora

* Correções de bugs
  * [SIG-924] Botão de visualizar documentos não aparece na notificação de documentos concluídos
  * [SIG-907] Chamadas repetidas ao assinar documento
  * [SIG-818] Adicionar loading ao solicitar reenvio de notificação
  * [SIG-817] Erro ao exibir informações de signatários sem CPF

Atualiza modelo do banco de dados: sim

<a name="v1-44-1" />
### 1.44.1 (2022-06-15)

* Melhorias
  * [SIG-917] Melhorias na assinatura embutida
  * [SIG-912] Melhorar desempenho da consulta de usuários com GrantID
  * [SIG-875] Criar tema chartreuse traditional violet

* Correções de bugs
  * [SIG-925] Erro ao carregar swagger no Linux
  * [SIG-922] Assinatura embutida sem preview com rubrica pré-cadastrada exibe erro de rubrica não cadastrada
  * [SIG-918] Erro ao gerar Manifesto
  * [SIG-908] Erro ao baixar versão para impressão

Atualiza modelo do banco de dados: não

<a name="v1-44-0" />
### 1.44.0 (2022-06-03)

* Novas funcionalidades
  * [SIG-898] Adequar o sistema para inserção de chat com script personalizado
  * [SIG-875] Criar tema vivid sky blue

* Melhorias
  * [SIG-902] Adicionar um “tooltip” sobre a data na tela de Documentos

* Correções de bugs
  * [SIG-906] Erro ao buscar rubrica de signatário de regra de assinatura na assinatura externa
  * [SIG-888] Alterar o tipo de assinatura na ordem das ações de acordo com a assinatura realizada
  * [SIG-812] Não é possível mudar página do documento no iPhone

Atualiza modelo do banco de dados: não

<a name="v1-43-3" />
### 1.43.3 (2022-05-19)

* Correções de bugs
  * [SIG-896] Usuário redirecionado para página de login após assinatura embutida
  * [SIG-895] Contagem incorreta de documentos na tela de detalhes da organização
  * [SIG-892] Instância sem representação visual exibe configuração de Rubrica na criação de documentos

* Melhorias
  * [SIG-899] Permitir província especial para usuários estrangeiros na cedula de identidade e RUC do equador

Atualiza modelo do banco de dados: não

<a name="v1-43-2" />
### 1.43.2 (2022-05-09)

* Correções de bugs
  * [SIG-893] Assinaturas ADRA e ADRC inválidas por conta de LCR com formatação errada publicada pelo ITI

Atualiza modelo do banco de dados: não

<a name="v1-43-1" />
### 1.43.1 (2022-05-04)

* Novas funcionalidades
  * [SIG-887] Permitir forçar política de assinatura de PDFs para padrão ICP Brasil

* Melhorias
  * [SIG-882] Não normalizar PDF se ele for PDF/A

* Correções de bugs
  * [SIG-886] Não é possível baixar versão para impressão de documento

Atualiza modelo do banco de dados: não

<a name="v1-43-0" />
### 1.43.0 (2022-04-29)

* Novas funcionalidades
  * [SIG-619] Permitir importação de documentos assinados em outros sistemas
  * [SIG-138] Assinatura com rubrica na Assinatura normal e na Assinatura rápida
  * [SIG-793] Permitir rubricar página em posição diferente das demais
  * [SIG-783] Permitir definir modo de rubrica (desabilitada, opcional ou obrigatória) por participante

* Melhorias
  * [SIG-883] Nova forma de configurar carimbadora com Basic Authentication
  * [SIG-877] Configuração para habilitar o "Pendente para mim" como padrão para todos os usuários
  * [SIG-874] Possibilitar editar tipo de imagem de rubrica pré-posicionada
  * [SIG-871] Configuração para definir número máximo de de Organizações e Pastas na filtragem de documentos
  * [SIG-863] Adicionar rubrica padrão com iniciais do nome do usuário
  * [SIG-857] Atualizar PKI SDK
  * [SIG-850] Diminuir impacto da validação de documentos com muitas assinaturas
  * [SIG-846] Mockar chamadas à iugu nos testes

* Correções de bugs
  * [SIG-878] Pagina em branco no manifesto de assinatura de documentos que não são PDF

Atualiza modelo do banco de dados: sim

> [!WARNING]
> Antes de atualizar para esta versão, garanta que sua licença suporta versões do PKI SDK lançadas após 2022-04-29.

<a name="v1-42-0" />
### 1.42.0 (2022-04-11)

* Novas funcionalidades
  * [SIG-859] Definir título do signatário na Assinatura Única

* Melhorias
  * [SIG-845] Especificar o tipo de assinatura na ordem das ações

* Correções de bugs
  * [SIG-864] Link de validação de documento com caracteres adicionais
  * [SIG-844] Documento cancelado aparece como pendente na listagem de pastas

Atualiza modelo do banco de dados: não

<a name="v1-41-0" />
### 1.41.0 (2022-03-20)

* Melhorias
  * [SIG-835] Melhorias nas restrições de uploads
  * [SIG-787] Permitir configuração de replyto automático para o criador do documento
  * [SIG-509] Permitir definir que os primeiros sete dias de um plano será de trial (gratuito)

* Correções de bugs
  * [SIG-851] Não é possível enviar documento com aplicação Sys Admin
  * [SIG-849] Assinatura eletrônica consta como digital na Etiqueta de Assinatura
  * [SIG-847] Não é possível baixar documentos do envelope se Manifesto simplificado estiver habilitado

Atualiza modelo do banco de dados: sim

<a name="v1-40-0" />
### 1.40.0 (2022-03-20)

* Melhorias
  * [SIG-308] Melhorar caso de uso de usuário que precisa assinar documento duas (ou mais) vezes com papéis diferentes na mesma etapa

* Correções de bugs
  * [SIG-829] Arquivo PDF/A perde a atribuição após assinatura

Atualiza modelo do banco de dados: não

<a name="v1-39-1" />
### 1.39.1 (2022-03-20)

* Melhorias
  * [SIG-822] Adicionar tema eminence-cornflower-blue
  * [SIG-821] Adicionar campo "disable pending notifications" a API de nova versão de documento

Atualiza modelo do banco de dados: não

<a name="v1-39-0" />
### 1.39.0 (2021-12-13)

* Novas funcionalidades
  * [SIG-722] Permitir definir posicionamento das marcas da versão para impressão por organização
  * [SIG-730] Permitir definir configurações do email por organização

* Melhorias
  * [SIG-729] Opção para deixar o "Notificar participantes" da assinatura em lote desmarcado por padrão
  * [SIG-800] Melhorar nome do arquivo P7S assinado
  * [SIG-802] Adicionar tema electric purple indigo
  * [SIG-804] Alterar texto dos botões de notificações de assinatura/aprovação para "Ver documento"
  * [SIG-810] Adicionar informações de exigências de certificado no flow action model

* Correções de bugs
  * [SIG-794] Corrigir informações no relatório da fatura da organização  
  * [SIG-807] Botão de criar documentos continua aparecendo após desativar permissão de criação de documentos por padrão
  * [SIG-808] Corrigir validação da cédula de identidade do Ecuador

Atualiza modelo do banco de dados: sim

<a name="v1-38-0" />
### 1.38.0 (2021-11-11)

* Novas funcionalidades
  * [SIG-723] Permitir solicitar acesso aos administradores no sistema fechado
  * [SIG-665] Limite mensal por tipo de transação

* Melhorias
  * [SIG-452] Exibir CPF e permitir pesquisar por ele na consulta de Usuários

* Correções de bugs
  * [SIG-796] Erro ao exibir página de assinatura se as Marcas tiverem largura/altura 0
  * [SIG-792] SMS Genérico está enviando content-type errado
  * [SIG-791] Não é possível alterar método de pagamento padrão na Administração do sistema
  * [SIG-781] Assinatura com diversos documentos falha no primeiro documento na Assinatura Única

Atualiza modelo do banco de dados: não

<a name="v1-37-0" />
### 1.37.0 (2021-10-21)

* Novas funcionalidades
  * [SIG-774] Permitir configurar métodos de pagamento disponíveis na integração com a iugu
  * [SIG-773] Adicionar o nome do documento no assunto do email de notificação
  * [SIG-772] Exibir signatários pendentes na listagem de documentos
  * [SIG-229] Redimensionar representação visual da assinatura ao posicionar

* Melhorias
  * [SIG-784] Permitir fazer upload do arquivo ao invés de digitalizar no Scanner
  * [SIG-764] Permitir personalizar assuntos de emails por instância
  * [SIG-759] Aba "Recusados" para documento

* Correções de bugs
  * [SIG-778] Erro ao salvar dados de faturamento se o CEP é incompleto
  * [SIG-761] PDF que foi assinado e protegido com senha não exibe mensagem adequada no momento da assinatura

Atualiza modelo do banco de dados: não

<a name="v1-36-0" />
### 1.36.0 (2021-10-06)

* Novas funcionalidades
  * [SIG-769] Rota para redirecionar para o cadastro
  * [SIG-751] Configuração para anexar o documento original no e-mail de assinatura pendente
  * [SIG-641] Permitir subir nova versão de um documento

* Melhorias
  * [SIG-777] Correções no conteúdo dos emails
  * [SIG-776] Criar tema blue venetian red
  * [SIG-762] Adicionar suporte ao Provedor de SMS Genérico
  * [SIG-757] Adicionar saudação e melhorias nos emails
  * [SIG-450] Refatoração dos temas aproveitados do SPA pelo signer

* Correções de bugs
  * [SIG-775] Opção de download da versão assinada está aparecendo na validação de documentos cancelados
  * [SIG-768] Marca na lateral direita da versão para impressão não aparece em documentos horizontais
  * [SIG-767] Inclusão indevida do mixin lacuna-spa
  * [SIG-763] Documento com assinatura eletronica de timestamp e certificado auto assinado não exibe todas assinaturas no manifesto
  * [SIG-741] Tipo de assinatura eletrônica selfie não aparece corretamente na edição de fluxo
  * [SIG-469] Corrigir fluxo de invite

Atualiza modelo do banco de dados: não

<a name="v1-35-0" />
### 1.35.0 (2021-09-15)

* Novas funcionalidades
  * [SIG-752] Permitir definir por instância qual o versão do documento é enviada na notificação de conclusão
  * [SIG-576] Seletor de pastas que permita navegar na hierarquia de subpastas

* Melhorias
  * [SIG-745] Adicionar informação do tipo de assinatura (eletronica ou digital) nos relatórios de documentos
  * [SIG-699] Configuração para mascarar CPFs
  * [SIG-687] Assinatura de documento com requisitos de certificado

* Correções de bugs
  * [SIG-753] Posicionamento de assinatura não está funcionando na geração de documentos
  * [SIG-749] Instância com versão para impressão desabilitada está enviando-a na conclusão do documento
  * [SIG-733] Criador de documento da organização não consegue editar fluxo e excluir documentos que criou

Atualiza modelo do banco de dados: sim

<a name="v1-34-0" />
### 1.34.0 (2021-08-20)

* Novas funcionalidades
  * [SIG-740] Adicionar configuração que permita notificar ações pendentes nas assinaturas em lote
  * [SIG-737] Criar tema space cadet yellow
  * [SIG-181] Permitir configurar imagem de assinatura padrão - assinatura digital e eletronica

* Melhorias
  * [SIG-719] Permitir reduzir ações que podem ser tomadas na área pública
  * [SIG-689] Tratar cabeçalhos repetidos na geração de documentos
  * [SIG-662] Assinatura com certificado em nuvem não exibe erros de falha de validação do certificado na assinatura única

* Correções de bugs
  * [SIG-742] Versão para impressão mostra marca d'água de documento expirado quando documento está concluído
  * [SIG-734] Orientação incorreta da selfie ao tirar pelo iPhone
  * [SIG-725] Erro ao tentar apagar fluxo do documento após o envio de SMS ou Pix
  * [SIG-706] Organização não é desbloqueada após o pagamento de faturas pendentes

Atualiza modelo do banco de dados: não

<a name="v1-33-1" />
### 1.33.1 (2021-07-30)

* Melhorias
  * [SIG-736] Atualizar biblioteca de gerenciamento de blobs do Azure

* Correções de bugs
  * [SIG-735] Erro ao assinar PDF eletronicamente

Atualiza modelo do banco de dados: não

<a name="v1-33-0" />
### 1.33.0 (2021-07-22)

* Novas funcionalidades
  * [SIG-418] Exibir Histórico de alterações nos detalhes do documento
  * [SIG-422] Submissão de Envelopes (assinatura/aprovação em lote externa)
  * [SIG-480] Envio de lembretes em lote na tela de documentos
  * [SIG-524] Relatório de documento por pasta
  * [SIG-596] Criação de Fluxos de Documento
  * [SIG-618] Recusa e Cancelamento de documentos
  * [SIG-686] Adicionar informações do e-cnpj na representação visual da assinatura
  * [SIG-696] Busca avançada de documentos
  * [SIG-697] Prazo para assinatura de documentos
  * [SIG-713] Personalização dos templates de email por instância

* Melhorias
  * [SIG-633] Simplificação do ticket de assinatura para ter URLs menores
  * [SIG-703] Permitir esconder nome do provider do certificado em nuvem
  * [SIG-712] Adicionar tema international orange apricot
  * [SIG-720] Permitir alterar data de expiração de um documento
  * [SIG-724] Adicionar tema generic viridian blue

* Correções de bugs
  * [SIG-701] Tirar Selfie não funciona no iOS

Atualiza modelo do banco de dados: sim

<a name="v1-32-0" />
### 1.32.0 (2021-06-25)

* Novas funcionalidades
  * [SIG-670] Assinatura eletrônica com PIX
  * [SIG-631] Assinatura eletrônica com biometria facial validada pelo SERPRO
  * [SIG-538] Recusar assinatura de um documento

* Melhorias
  * [SIG-653] Assinatura embutida sem pré-visualização do documento

* Correções de bugs
  * [SIG-690] Erro ao assinar documento excluído caso a opção de permitir validação de documentos excluídos esteja habilitada

Atualiza modelo do banco de dados: sim

<a name="v1-31-1" />
### 1.31.1 (2021-06-08)

* Correções de bugs
  * [SIG-691] Botão de compartilhar link de aprovação deve levar à área privada

Atualiza modelo do banco de dados: não

<a name="v1-31-0" />
### 1.31.0 (2021-06-08)

* Novas funcionalidades
  * [SIG-688] Criar temas international orange green e onyx carrot orange
  * [SIG-664] Relatório de todos documentos da instância por mês
  * [SIG-655] Permitir gerar link para assinatura do documento

* Melhorias
  * [SIG-685] Suportar tipos alternativos de autenticação com AWS S3
  * [SIG-656] Suportar validação de assinaturas com algoritmos obsoletos
  * [SIG-650] Permitir visualizar arquivos não PDF ao assinar documentos
  * [SIG-648] Melhorar tratamento de erros de PDF com senhas
  * [SIG-628] Adicionar observação que anexos não são assinados
  * [SIG-560] Suportar arquivos com mais de 100 assinaturas

* Correções de bugs
  * [SIG-649] Não exibir opção para posicionamento de assinatura para documentos não PDF

Atualiza modelo do banco de dados: não

<a name="v1-30-0" />
### 1.30.0 (2021-05-25)

* Melhorias
  * [SIG-659] Tentar obter carimbo automaticamente após falha ao contatar a carimbadora
  * [SIG-646] Adicionar HTML dinâmico da home page como confiável
  * [SIG-629] Assinatura de lotes documentos sem precisar selecioná-los página por página

* Correções de bugs
  * [SIG-661] Notificação de conclusão não está sendo enviada na assinatura única
  * [SIG-658] Emails a serem notificados na conclusão não são enviados quando os documentos são assinados em lote
  * [SIG-657] Na geração de documentos vários email são enviados aos participantes
  * [SIG-654] Erro ao editar posicionamento do texto da marca de assinatura caso a imagem já tenha sido enviada
  * [SIG-645] Exibição de signatários é diferente se o arquivo não é PDF

Atualiza modelo do banco de dados: sim

<a name="v1-29-0" />
### 1.29.0 (2021-04-27)

* Novas funcionalidades
  * [SIG-638] Integração para realização de videoconferências com Zoom
  * [SIG-624] Envio de documentos ao final do fluxo
  * [SIG-543] CSV com um fluxo para geração de documentos em lote

* Melhorias
  * [SIG-460] Exibir assinaturas pendentes no manifesto de assinaturas

* Correções de bugs
  * [SIG-643] Opção de configuração de Rubrica não é exibida se autenticação não estiver visível
  * [SIG-642] Extensões equivocadas adicionadas no download em lote de documentos

Atualiza modelo do banco de dados: sim

<a name="v1-28-0" />
### 1.28.0 (2021-04-06)

* Novas funcionalidades
  * [SIG-555] Tornar escolha da posição de assinatura obrigatória
  * [SIG-476] Remoção de Consentimento

* Melhorias
  * [SIG-634] Permitir autenticação com carimbadora por basic authentication
  * [SIG-621] Convidar usuários apenas após assinatura do documento
  * [SIG-613] Permitir usuário informar número de celular para assinatura eletronica com SMS
  * [SIG-578] Adicionar novos provedores de SMS

* Correções de bugs
  * [SIG-635] Webhook de invoice não inclui informação de Owner
  * [SIG-630] Botão de editar fluxo aparece mesmo para fluxos concluídos
  * [SIG-470] Erro ao assinar com representação visual personalizada com arquivo .webp

Atualiza modelo do banco de dados: sim

<a name="v1-27-0" />
### 1.27.0 (2021-03-25)

* Novas funcionalidades
  * [SIG-614] Geração de nota fiscal de serviço (NFS-e)
  * [SIG-549] Integração com Gateway de Pagamento iugu:
    * [SIG-588] Criar página de checkout para pagamento
    * [SIG-593] Opção para permitir o usuário ver e alterar seu método de pagamento padrão
    * [SIG-592] Enviar emails aos clientes referentes às faturas
    * [SIG-590] Apresentação das informações de pagamento na tela da fatura

* Melhorias
  * [SIG-625] Adicionar nova API para integração com a SECURITI
  * [SIG-620] Corrigir testes que estão falhando em desenvolvimento
  * [SIG-606] Adicionar configuração para remover botão ver documentos em notificações de mais de um documento

* Correções de bugs
  * [SIG-626] Corrigir horário exibido na versão para impressão
  * [SIG-617] Detecção incorreta de habilitação do Scanner

Atualiza modelo do banco de dados: sim

<a name="v1-26-1" />
### 1.26.1 (2021-02-18)

* Correções de bugs
  * [SIG-616] Nome do arquivo é obrigatório ao fazer upload por API
  * [SIG-615] Erro ao enviar documento para usuário com email que é parte de outros emails
  * [SIG-609] Corrigir tradução do recurso common.search (i18n)

Atualiza modelo do banco de dados: não

<a name="v1-26-0" />
### 1.26.0 (2021-02-11)

* Melhorias
  * [SIG-605] Atualizar Sink do New Relic para melhorar registro de exceções
  * [SIG-604] Atualizar Lacuna SPA

Atualiza modelo do banco de dados: não

<a name="v1-25-0" />
### 1.25.0 (2021-02-03)

* Melhorias
  * [SIG-602] - Melhoria no Suporte a AWS S3

Atualiza modelo do banco de dados: sim

<a name="v1-24-3" />
### 1.24.3 (2021-01-28)

* Melhorias
  * [SIG-599] - Não enviar email de convite se o documento for criado desativando as notificações

* Correções de bugs
  * [SIG-601] - Não é possível usar regras de assinatura e anexos privados

Atualiza modelo do banco de dados: não

<a name="v1-24-2" />
### 1.24.2 (2021-01-18)

* Correções de bugs
  * [SIG-598] - Erro ao visualizar tela de criação de documento sem estar em nenhuma organização no modo Fechado

Atualiza modelo do banco de dados: não

<a name="v1-24-1" />
### 1.24.1 (2021-01-15)

* Correções de bugs
  * [SIG-597] - Tematização incorreta da mensagem de posicionamento de assinatura

Atualiza modelo do banco de dados: não

<a name="v1-24-0" />
### 1.24.0 (2021-01-14)

* Novas funcionalidades
  * [SIG-463] - Exibir assinatura eletrônica como primeira opção
  * [SIG-594] - Validação de assinatura eletrônica CAdES e XAdES

* Melhorias
  * [SIG-441] - Permitir definir qual página deve ser exibida ao carregar PDF com Widget de assinatura
  * [SIG-474] - Adicionar consentimentos em tela para LGPD
  * [SIG-496] - Melhorar tratamento de PDFs com senha na assinatura rápida
  * [SIG-566] - Email de conclusão de fluxo deveria redirecionar para a área pública
  * [SIG-584] - Simplificar tela de assinatura externa

* Correções de bugs
  * [SIG-568] - Instrução de posicionamento continua aparecendo após assinatura
  * [SIG-595] - Erro ao excluir aprovador no final do fluxo

Atualiza modelo do banco de dados: sim

<a name="v1-23-0" />
### 1.23.0 (2021-01-07)

* Novas funcionalidades
  * [SIG-430] - Assinatura eletronica com Selfie
  * [SIG-554] - Permitir adicionar anexos a documentos

* Melhorias
  * [SIG-408] - Permitir posicionar assinatura na edição de fluxo
  * [SIG-583] - Atualizar PKI SDK para corrigir posicionamento de textos

* Correções de bugs
  * [SIG-582] - Corrigir validação de RUC (Ecuador)

Atualiza modelo do banco de dados: sim

<a name="v1-22-0" />
### 1.22.0 (2020-12-17)

* Novas funcionalidades
  * [SIG-144] - Exibir evidências de assinatura eletronica
  * [SIG-551] - Adicionar campo para observações do documento
  * [SIG-541] - Permitir definir mensagem a ser adicionada nos emails de assinatura/aprovação pendente

* Melhorias
  * [SIG-330] - Permitir definir posição de assinatura de múltiplos arquivos
  * [SIG-390] - Exibir todas assinaturas no pré-posicionamento de assinaturas
  * [SIG-425] - Validar Hash do Arquivo Scanner no Validador
  * [SIG-426] - Marca lateral no documento scanneado
  * [SIG-531] - Melhorar tratamento de erro na assinatura de HSM
  * [SIG-545] - API para validar assinaturas por ID do documento e incluir evidências da assinatura eletrônica
  * [SIG-550] - Aumentar número de pastas recuperadas na tela de criação de documento
  * [SIG-559] - Atualizar Lacuna PKI para permitir certificados da ANF (Equador)
  * [SIG-570] - Corrigir internacionalização do email de boas vindas e termos de uso
  * [SIG-571] - Permitir configurar moeda a ser utilizada no sistema
  * [SIG-572] - Permitir definir tipos de arquivo aceitáveis na criação de documentos

Atualiza modelo do banco de dados: sim

<a name="v1-21-0" />
### 1.21.0 (2020-12-03)

* Novas funcionalidades
  * [SIG-217] - Remover obrigatoriedade de CPF

Atualiza modelo do banco de dados: sim

<a name="v1-20-0" />
### 1.20.0 (2020-11-27)

* Novas funcionalidades
  * [SIG-477] - Integração com Securiti para automatização de solicitações da LGPD
  * [SIG-486] - Cobrança por Carimbo de tempo e SMS

* Melhorias
  * [SIG-508] - Permitir desabilitar troca de email no momento da submissão do documento
  * [SIG-553] - Inserir Titulo do Signatário no Manifesto Simplificado
  * [SIG-563] - Permitir criar organizações via integração
  * [SIG-565] - Desabilitar indexação da página de validação de documentos

Atualiza modelo do banco de dados: não

<a name="v1-19-0" />
### 1.19.0 (2020-11-18)

* Melhorias
  * [SIG-468] - Permitir criação de Subpastas
  * [SIG-544] - Identificar assinaturas eletronicas no manifesto e na validação por código
  * [SIG-548] - Direcionar usuário para tela de cobrança caso tenha sido verificado que as informações de faturamento não foram preenchidas
  * [SIG-557] - Trocar nome do botão inicial de aprovação para revisar

* Correções de bugs
  * [SIG-546] - Documento aparece como assinado caso outro participante tenha recusado
  * [SIG-547] - Erro na assinatura de arquivo XLSX
  * [SIG-558] - Não normalizar PDFs caso ele tenha vindo do Scanner ou possua assinaturas

Atualiza modelo do banco de dados: sim

<a name="v1-18-0" />
### 1.18.0 (2020-11-05)

* Novas funcionalidades
  * [SIG-483] - Bloqueio de uso enquanto informações de faturamento não estiverem preenchidas
  * [SIG-513] - Desabilitar posicionamento automático de representação visual
  * [SIG-519] - Webhook após conclusão de etapa

* Melhorias
  * [SIG-528] - Permitir validação de documento mesmo excluído

Atualiza modelo do banco de dados: não

<a name="v1-17-0" />
### 1.17.0 (2020-10-28)

* Melhorias
  * [SIG-437] - Permitir editar fluxo mesmo com Manifesto Simplificado habilitado
  * [SIG-506] - Adicionar logo na marca lateral (validation stamp)
  * [SIG-517] - Alterações no manifesto e manifesto simplificado

Atualiza modelo do banco de dados: não

<a name="v1-16-1" />
### 1.16.1 (2020-10-23)

* Melhorias
  * [SIG-534] - Criar perfil de administração de faturamento

Atualiza modelo do banco de dados: não

<a name="v1-16-0" />
### 1.16.0 (2020-10-22)

* Melhorias
  * [SIG-484] - Envio dos dados de faturamento no Webhook de fechamento de fatura
  * [SIG-485] - Atualização de status de fatura por API
  * [SIG-525] - Melhorar mensagem de erro quando upload não é encontrado

* Correções de bugs
  * [SIG-511] - Botão de digitalização fica sobre o botão de excluir documento na tela de criação de documento
  * [SIG-526] - Erro na assinatura rápida de documentos não PDF

Atualiza modelo do banco de dados: não

<a name="v1-15-1" />
### 1.15.1 (2020-10-21)

* Correções de bugs
  * [SIG-529] - Tela de acesso restrito não aparece se os perfis básicos estiverem configurados

Atualiza modelo do banco de dados: não

<a name="v1-15-0" />
### 1.15.0 (2020-10-08)

* Novas funcionalidades
  * [SIG-520] - API para download direto das versões do documento
  * [SIG-521] - API simplificada de Upload
  * [SIG-522] - Configurar tamanho máximo de upload

* Melhorias
  * [SIG-471] - Alterar frase marca d'água da versão sem validade jurídica

Atualiza modelo do banco de dados: não

<a name="v1-14-0" />
### 1.14.0 (2020-09-30)

* Melhorias
  * [SIG-427] - Notificar criador do documento na conclusão

* Correções de bugs
  * [SIG-499] - Tela de validação apresenta email do cadastro ao invés de email validado na assinatura eletrônica
  * [SIG-505] - Ordem das etapas perdidas ao usar fluxo de outro documento
  * [SIG-512] - Erro na exibição de status de documento na administração de documentos

Atualiza modelo do banco de dados: não

<a name="v1-13-0" />
### 1.13.0 (2020-09-23)

* Melhorias
  * [SIG-366] - Permitir reprovar na ação de aprovação
  * [SIG-383] - Melhorar preview de certificados
  * [SIG-411] - Melhorar mensagem de erro quando o PDF tem senha e permitir assinatura de PDFs protegidos
  * [SIG-438] - Restricted autocomplete por padrão

* Correções de bugs
  * [SIG-442] - Não é possível validar arquivo XML
  * [SIG-457] - Botão de faturas aparece mesmo com módulo de cobrança desabilitado
  * [SIG-459] - Tratar caso em que o pageNumber da representação visual está em uma página que não existe no PDF
  * [SIG-479] - Título do signatário não está aparecendo na representação visual da assinatura eletrônica

Atualiza modelo do banco de dados: sim

<a name="v1-12-0" />
### 1.12.0 (2020-09-14)

* Novas funcionalidades
  * [SIG-462] - Adicionar perfis para habilitar/restringir criação de documentos e organizações
  * [SIG-464] - Permitir enviar telefone celular de participante ao submeter documento por API

* Melhorias
  * [SIG-373] - Gerar widget com Typescript
  * [SIG-465] - Certificado em nuvem na assinatura rápida

* Correções de bugs
  * [SIG-466] - Erro ao editar fluxo com ordem

Atualiza modelo do banco de dados: não

<a name="v1-11-0" />
### 1.11.0 (2020-09-02)

* Melhorias
  * [SIG-397] - Integração com Certificados em nuvem

Atualiza modelo do banco de dados: não

<a name="v1-10-4" />
### 1.10.4 (2020-08-31)

* Novas funcionalidades
  * [SIG-455] - Implementar tema persian-plum-sand

* Melhorias
  * [SIG-417] - Adicionar upload segmentado nos uploads de arquivos

Atualiza modelo do banco de dados: não

<a name="v1-10-3" />
### 1.10.3 (2020-08-26)

* Novas funcionalidades
  * [SIG-429] - Inserir texto indicativo para Baixar APP QRCode
  * [SIG-439] - Alterar frases do Manifesto e da versão sem validade jurídica

Atualiza modelo do banco de dados: não

<a name="v1-10-2" />
### 1.10.2 (2020-08-25)

* Novas funcionalidades
  * [SIG-449] - Criar tema viridian green yellow

* Correções de bugs
  * [SIG-447] - Erro ao enviar SMS com a TotalVoice
  * [SIG-448] - Timeout no processo de login

Atualiza modelo do banco de dados: não

<a name="v1-10-1" />
### 1.10.1 (2020-08-21)

* Novas funcionalidades
  * [SIG-435] - Criar tema oxford-blue-green
  * [SIG-436] - Criar tema castleton-green-orange

* Correções de bugs
  * [SIG-420] - Tela bloqueada após tentativa de assinatura com certificado A3 que não está conectado na máquina

Atualiza modelo do banco de dados: não

<a name="v1-10-0" />
### 1.10.0 (2020-08-19)

* Melhorias
  * [SIG-382] - Associar Aplicações a pastas
  * [SIG-384] - Linguagem padrão para o sistema
  * [SIG-389] - Ao adicionar um usuário em organização, verificar se o usuário já está cadastrado
  * [SIG-399] - Ajustar limite máximo de envio de documento por email
  * [SIG-400] - Carregar tela de assinatura rápida com upload já realizado
  * [SIG-404] - Adicionar manifesto simplificado juntamente com Validation Stamp
  * [SIG-409] - Melhorar mensagem de erro quando o email já está sendo utilizado em outra conta
  * [SIG-412] - Suporte a solicitações de exames na geração de documentos

* Correções de bugs
  * [SIG-407] - Validation Stamp não aparece em documento com tamanho menor que A4
  * [SIG-416] - Erro ao submeter arquivo que não é PDF com o Validation Stamp habilitado

Atualiza modelo do banco de dados: sim

<a name="v1-9-1" />
### 1.9.1 (2020-07-23)

* Correções de bugs
  * [SIG-396] - String não traduzida nas configurações de pasta
  * [SIG-410] - Scroll desnecessário na home page

Atualiza modelo do banco de dados: não

<a name="v1-9-0" />
### 1.9.0 (2020-07-23)

* Novas funcionalidades
  * [SIG-378] - Procedimento para recuperação de documentos excluídos

* Melhorias
  * [SIG-338] - Melhorar descrição de informações sobre assinatura eletrônica
  * [SIG-394] - Mostrar os participantes das etapas do fluxo em ordem alfabética
  * [SIG-395] - Reposicionar powered by do footer

* Correções de bugs
  * [SIG-403] - Assinatura eletronica está adicionando representação visual mesmo com representação visual desabilitada

Atualiza modelo do banco de dados: não

<a name="v1-8-0" />
### 1.8.0 (2020-07-16)

* Novas funcionalidades
  * [SIG-364] - Tipos de documentos para receitas médicas

* Melhorias
  * [SIG-337] - Trocar nome do botão assinatura rápida
  * [SIG-362] - Criar lista de contato pessoal (Adequação LGPD)
  * [SIG-365] - Assinatura eletronica com carimbo de tempo

* Correções de bugs
  * [SIG-385] - Verificar se o título dos signatários está funcionando quando o fluxo possui regras de assinatura
  * [SIG-391] - Não é possível adicionar observadores na edição do fluxo
  * [SIG-392] - Corrigir título da página de termos de uso

Atualiza modelo do banco de dados: sim

<a name="v1-7-0" />
### 1.7.0 (2020-07-02)

* Correções de bugs
  * [SIG-370] - Parâmetro ticket sendo exibido na documentação da API de upload
  * [SIG-379] - Corrigir criação de organizações sem CNPJ
  * [SIG-380] - Corrigir criação de escrituras

* Melhorias
  * [SIG-316] - Assinatura em lote com certificados em HSM
  * [SIG-317] - Adequação para Ecuador
  * [SIG-361] - Permitir configurar tipos de documentos permitidos/exibidos
  * [SIG-376] - Permitir listar documentos a partir de API Key

Atualiza modelo do banco de dados: não

<a name="v1-6-2" />
### 1.6.2 (2020-06-25)

* Correções de bugs
  * [SIG-377] - Erro ao abrir detalhes de documento com observador que não está no fluxo

Atualiza modelo do banco de dados: não

<a name="v1-6-1" />
### 1.6.1 (2020-06-24)

* Melhorias
  * [SIG-374] - Adicionar tema metallic-seaweed-emerald (MSE)

Atualiza modelo do banco de dados: não

<a name="v1-6-0" />
### 1.6.0 (2020-06-24)

* Novas funcionalidades
  * [SIG-349] - Carregar tela de criação de documento com upload já realizado
  * [SIG-360] - Integração com página de Assinatura (Assinatura embutida)

* Melhorias
  * [SIG-227] - Simplificar exemplos no Swagger
  * [SIG-320] - Melhorar tratamento das marcas de assinatura para documentos com muitos assinantes
  * [SIG-327] - Alterar para o singular mensagem de upload de validação
  * [SIG-334] - Adicionar documentação das APIs de validação de documento no Swagger
  * [SIG-335] - Integração com MoviDesk e JivoChat
  * [SIG-339] - Permitir configurar padrão da opção assinaturas ao mesmo tempo

* Correções de bugs
  * [SIG-307] - Corrigir testes no DevOps
  * [SIG-352] - Erro ao consultar eventos de um usuário
  * [SIG-356] - Erro ao submeter documento se assinatura eletronica estiver desabilitada e isAllowedByDefault for true
  * [SIG-357] - Timeout ao buscar documento com muitos participantes
  * [SIG-358] - Faltando traduções no email de fluxo editado
  * [SIG-359] - Assinatura eletronica em lote está exigindo Web PKI instalado

Atualiza modelo do banco de dados: sim

<a name="v1-5-0" />
### 1.5.0 (2020-06-15)

* Novas funcionalidades
  * [SIG-331] - Enviar email para todos participantes do fluxo após a conclusão do documento
  * [SIG-343] - Assinatura eletronica em lote
  * [SIG-344] - Permitir configurar se a assinatura eletronica aparece marcada por padrão

* Melhorias
  * [SIG-311] - Obrigatoriedade de enviar informação de geolocalização
  * [SIG-318] - Permitir que o participante tenha acesso ao documento após assinar/aprovar na área externa
  * [SIG-326] - Testes automatizados de documento escaneado pelo Scanner
  * [SIG-332] - Adicionar nome da aplicação nas propriedades do PDF
  * [SIG-341] - Esconder versão para impressão

* Correções de bugs
  * [SIG-347] - Corrigir traduções na página de validação de documentos

Atualiza modelo do banco de dados: sim

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

