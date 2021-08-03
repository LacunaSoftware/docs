# Histórico de versões do Rest PKI

<a name="v1-26-7" />
### 1.26.7 (2021-08-02)

Atualização do modelo do banco de dados: Não

- Adicionar verificação de presença de LTV no PadesSignerInfo
- Adicionar aplicação de limitador em operação de marcas de PDF
- Atualização PKI SDK para [2.8.10](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-8-10)

<a name="v1-26-6" />
### 1.26.6 (2021-07-16)

Atualização do modelo do banco de dados: Não

- Atualização PKI SDK para [2.8.9](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-8-9)

<a name="v1-26-4" />
### 1.26.4 (2021-07-04)

Atualização do modelo do banco de dados: Não

- Adicionar opção de alinhamento vertical nos elementos de texto da funcionalidade PDF marks
- Adicioanr suporte a identidades de mais países (Argentina, Equador, Paraguai e Peru) na tag de representação visual PAdES [`{{national_id}}`](./pades-tags)
- Adicioanr suporte a tag de dados de CPF e RG mascarados na representação visual PAdES: [`{{br_cpf_masked}} e {{br_rg_numero_masked}}`](./pades-tags)

<a name="v1-26-3" />
### 1.26.3 (2021-05-17)

Atualização do modelo do banco de dados: Não

- Atualização PKI SDK para [2.8.7](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-8-7)
- Melhora o tratamento de erros relacionados a PDFs protegidos por senha para retornar o código de status 422 em vez de 500

<a name="v1-26-2" />
### 1.26.2 (2021-03-31)

Atualização do modelo do banco de dados: Não

- Atualização PKI SDK para [2.8.4](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-8-4)

<a name="v1-26-1" />
### 1.26.1 (2021-03-22)

Atualização do modelo do banco de dados: Não

- Melhorar políticas permissivas para validação
- Corrigir exceção não tratada na abertura de uma assinatura PAdES sem o valor do digest
- Atualização PKI SDK para 2.8.1

<a name="v1-26-0" />
### 1.26.0 (2021-03-11)

Atualização do modelo do banco de dados: Não

- Adicionar API para abertura e validação de um certificado

<a name="v1-25-3" />
### 1.25.3 (2021-02-10)

Atualização do modelo do banco de dados: Não

- Disabilitar tasks de atualização e limites de número de transações em instâncias on-premises

<a name="v1-25-2" />
### 1.25.2 (2021-02-09)

Atualização do modelo do banco de dados: Não

- Alongar cronograma de execução da task de atualização de número de transações para cada 4 horas

<a name="v1-25-1" />
### 1.25.1 (2020-12-15)

Atualização do modelo do banco de dados: Não

- Adicionar política "CmsPermissive" para validação de assinaturas CAdES

<a name="v1-25-0" />
### 1.25.0 (2020-12-06)

Atualização do modelo do banco de dados: Não

- Adicionar campo "Reason" em assinaturas PAdES

<a name="v1-24-3" />
### 1.24.3 (2020-09-22)

Atualização do modelo do banco de dados: Não

- Melhora página inicial

<a name="v1-24-1" />
### 1.24.1 (2020-09-16)

Atualização do modelo do banco de dados: Não

- Melhorar política de validação "Adobe Reader" para lidar com o erro "forbidden signed attribute is present"
- Atualização PKI SDK para [2.7.8](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-7-8)

<a name="v1-24-0" />
### 1.24.0 (2020-07-09)

Atualização do modelo do banco de dados: Não

- Adicionar campo "CertificationLevel" em assinaturas PAdES

<a name="v1-23-0" />
### 1.23.0 (2020-06-19)

Atualização do modelo do banco de dados: Não

- Corrigir exceção que ocorre ao abrir uma assinatura PAdES com o campo "SignaturePolicy" sem a URI
- Adicionar campo "CustomSignatureFieldName" em assinaturas PAdES
- Atualização PKI SDK para [2.7.2](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-7-2)

<a name="v1-22-1" />
### 1.22.1 (2020-04-22)

Atualização do modelo do banco de dados: Não

- Melhorar tratamento do erro quando o usuário fornece um token inválido


<a name="v1-22-0" />
### 1.22.0 (2020-02-28)

Atualização do modelo do banco de dados: Não

- Adicionar política de assinatura PAdES sem LTV
- Adicionar opção "PreserveSignaturesVisualRepresentation" na adição de marcas de PDF
- Adicionar opção "TrustUncertifiedSigningTime" na validação de assinaturas PAdES e CAdES
- Adicionar política de validação para assinaturas feitas no Adobe Reader
- Adicionar configuração para limitar a quantidade (*throttling*) de requisições feitas à API 

<a name="v1-21-1" />
### 1.21.1 (2020-02-21)

Atualização do modelo do banco de dados: Não

- Atualização PKI SDK para [2.5.5](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-5-5)

<a name="v1-21-0" />
### 1.21.0 (2020-01-10)

Atualização do modelo do banco de dados: Não

- Adicionar uma política de assinatura CAdES ICP-Brasil sem LCRs

<a name="v1-20-2" />
### 1.20.2 (2019-07-21)

Atualização do modelo do banco de dados: Não

- Corrija o problema de alto uso da CPU que ocorreu em determinadas condições
- Melhore a programação do carimbo de data e hora para tentar solicitantes marcados como indisponíveis (com menos prioridade)
- Adicionar configurações `ProcessBackgrounJobs` e `WatchTimestampRequesters`
- Atualização PKI SDK para [2.5.2](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-5-2)


<a name="v1-20-1" />
### 1.20.1 (2019-07-04)

Atualização do modelo do banco de dados: Não

- Adicionar direções de posicionamento automático do PAdES (`LeftToRight`/`RightToLeft` e `TopDown`/`BottomUp`)
- Adiconar suporte para integração Lapp (*Lapp* é um Provedor de Artefato para PKI, usado como um proxy CRL)
- Atualização PKI SDK para [2.5.1](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-5-1)


<a name="v1-20-0" />
### 1.20.0

*Nenhuma mudança (version ignorada)*


<a name="v1-19-1" />
### 1.19.1 (2019-07-03)

Atualização do modelo do banco de dados: Não

- Melhora os trabalhos de manutenção


<a name="v1-19-0" />
### 1.19.0 (2019-03-15)

Atualização do modelo do banco de dados: Não

- Integração refatorada com B-Stamper
- Atualização PKI SDK para [2.2.8](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-2-8)


<a name="v1-18-5" />
### 1.18.5 (2019-01-03)

Atualização do modelo do banco de dados: Não

- Melhorias de desempenho no faturamento (não afeta as instalações locais)


<a name="v1-18-4" />
### 1.18.4 (2018-12-11)

Atualização do modelo do banco de dados: Não

- Melhora as validações nas assinaturas PAdES e CAdES que exploram APIs para retornar o código de status 422 em vez de 500
- Atualização PKI SDK para [2.2.3](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-2-3)


<a name="v1-18-3" />
### 1.18.3 (2018-10-23)

Atualização do modelo do banco de dados: Não

- Adiciona suporte para assinatura padrão XML *Certificación de Origen Digital* (COD),
  da *Asociación Latinoamericana de Integración* (ALADI). Para maiores informações, veja o padrão em [Espanhol](http://www.aladi.org/nsfweb/Documentos/2327Rev2.pdf) ou em
  [Português](http://www.mdic.gov.br/images/REPOSITORIO/secex/deint/coreo/2014_09_19_-_Brasaladi_761_-_Documento_ALADI_SEC__di_2327__Rev_2_al_port_.pdf)
- Atualização PKI SDK para [2.2.2](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-2-2), corrigindo erros na rotação das marcas PDF


<a name="v1-18-2" />
### 1.18.2 (2018-09-26)

Atualização do modelo do banco de dados: Não

- Correção de bugs que impediram o carregamento correto da cadeia de certificados em determinados cenários:
  - Nas assinaturas do CAdES, sempre que o último link (para a CA raiz) não podia ser construído automaticamente
  - Em todas assinaturas XML


<a name="v1-18-1" />
### 1.18.1 (2018-09-11)

Atualização do modelo do banco de dados: Não

- Melhora instrumentação Insights de Aplicação
  - Adicionado suporte para especificar a chave da API do AI, além da chave da instrumentação


<a name="v1-18-0" />
### 1.18.0 (2018-08-13)

Atualização do modelo do banco de dados: **Sim**

- Adicionado suporte para configurar um ID da política TSA em solicitações de carimbo de data e hora de saída
- Atualização PKI SDK para [2.1.3](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-1-3)


<a name="v1-17-5" />
### 1.17.5 (2018-08-01)

Atualização do modelo do banco de dados: Não

- Correção de bug metadados Swagger
- Melhoria de usuários API


<a name="v1-17-4" />
### 1.17.4 (2018-07-11)

Atualização do modelo do banco de dados: Não

- Corrigido o erro que afeta as operações executadas com contextos de segurança que incluem o PKI Italy
- Melhorar a API da fatura


<a name="v1-17-3" />
### 1.17.3 (2018-05-24)

Atualização do modelo do banco de dados: Não

- Adicionar link para a [política de privacidade](privacy-policy.md) na tela inicial ([GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) conformidade)

<a name="v1-17-2" />
### 1.17.2 (2018-05-15)

Atualização do modelo do banco de dados: Não

- Atualização Lacuna PKI SDK para 1.20.16, portanto:
  - Corrigido erro de preenchimento da cadeia de certificados no PAdES


<a name="v1-17-1" />
### 1.17.1 (2018-05-09)

Atualização do modelo do banco de dados: Não

- Atualização Lacuna PKI SDK para 1.20.15, portanto:
  - Melhoria na tolerância para certificados mal formados (corrigindo problemas devido a recentes certificados mal formados do SERPRO)
  - Atualização intermediação ICP-Brasil CAs

<a name="v1-17-0" />
### 1.17.0 (2018-03-29)

Atualização do modelo do banco de dados: Não

- Melhoria no dashboard
- Melhorias gerais no faturamento


<a name="v1-16-0" />
### 1.16.0 (2017-12-12)

Atualização do modelo do banco de dados: **Sim**

- Adicionado suporte para ignorar erros de validação de certificado devido a status de revogação desconhecido
- Adicionado suporte para ativar o Lacuna Test PKI em instâncias locais
- Adicionado configuração da chave B-Stamper API
- Melhorar a instrumentação de solicitações de TSP
- Correção do bug que causava falha nas assinaturas se o servidor `catest.lacunasoftware.com` estivesse inacessível
- Correção de pequenos bugs na API de faturas


<a name="v1-15-2" />
### 1.15.2 (2017-11-20)

Atualização do modelo do banco de dados: Não

- Adicionado informações de B-Stamp na resposta de APIs de assinatura aberta
- Melhore a geração do pacote de auditoria para retornar o link de download em vez do conteúdo
- Correção de bug no B-Stamping de assinaturas enviadas para as APIs de assinatura aberta
- Correção da validação de assinaturas com B-Stamped
- Correção de bug na atualização do modelo de banco de dados
- Atualização Lacuna PKI SDK para 1.20.5


<a name="v1-15-1" />
### 1.15.1 (2017-11-16)

Atualização do modelo do banco de dados: Não

- Correção do erro de validação do modelo que poderia causar uma resposta 400 (BadRequest) na API de marcas de PDF

**Problemas conhecidos:**

- Uma exceção pode ser lançada durante a atualização do modelo de banco de dados (corrigida em 1.15.2)


<a name="v1-15-0" />
### 1.15.0 (2017-11-14)

Atualização do modelo do banco de dados: **Sim**

- Adicionado integração B-Stamper
- Adicionado
- Melhoria nas validações na API de assinaturas do PAdES para retornar os códigos de status 400/422 em vez de 500
- Melhoria na instrumentação do Application Insights
    - Adicionar campo UserId
    - Correção de bug que fazia com que 422 respostas fossem registradas sem o campo ErrorCode
- Corrigido o erro de front-end que sugeria que os usuários pudessem atualizar seu próprio CustomerId

**Problemas conhecidos:**

- Uma exceção pode ser lançada durante a atualização do modelo de banco de dados (corrigida em 1.15.2)


<a name="v1-14-4" />
### 1.14.4 (2017-09-29)

Atualização do modelo do banco de dados: Não

- Adicionada opção para exportar relatório de cobrança para CSV
- Melhorar a validação de URLs de arquivos externos transmitidos para a API
- Melhorar a instrumentação
    - Registrando campos de erro da API no Application Insights
    - Aumentar a verbosidade do nível de log "Debug"
    - Adicionado eventos para ajudar a diagnosticar problemas na integração com a PKI da Web
- Correção de bug que poderia causar várias tarefas em segundo plano para permanecer na fila
- Correção de bug que causava uma NullReferenceException (manipulada) durante a inicialização do sistema
- Correção de bug na aplicação do limite de transações
- Atualize o Lacuna PKI SDK para 1.19.4


<a name="v1-14-3" />
### 1.14.3 (2017-09-17)

Atualização do modelo do banco de dados: **Sim**

- Corrigir compatibilidade com o PostgreSQL (as versões 1.14.x anteriores não eram compatíveis)
- Melhorar o gerenciamento do solicitante de carimbo de data e hora
- Melhorar validações na API de marcas PDF
- Reduza arquivos não usados em instalações locais
- Correção do bug que fazia com que os solicitantes de carimbo de data e hora fossem marcados como indisponíveis durante a atualização do banco de dados
- Correção do bug que fazia com que os certificados CA sem um campo CN (nome comum) fossem exibidos incorretamente
- Correção de bug no carregamento da página de limites do usuário


<a name="v1-14-2" />
### 1.14.2 (2017-09-12)

Atualização do modelo do banco de dados: Não

- Correção de bug que fazia com que solicitações bem-sucedidas de TSP fossem registradas como falhas no Azure Application Insigh

**Problemas conhecidos:**

- A versão não pode ser instalada no PostgreSQL (corrigida na 1.14.3)


<a name="v1-14-1" />
### 1.14.1 (2017-09-11)

Atualização do modelo do banco de dados: Não

- ~~Correção de bug que fazia com que solicitações bem-sucedidas de TSP fossem registradas como falhas no Azure Application Insigh~~ (realmente corrigido apenas em 1.14.2)

**Problemas conhecidos:**

- A versão não pode ser instalada no PostgreSQL (corrigida na 1.14.3)


<a name="v1-14-0" />
### 1.14.0 (2017-09-09)

Atualização do modelo do banco de dados: **Sim**

- Adicionado limites de transação (em todo o sistema ou por usuário)
- Adicionado suporte para administradores para bloquear usuários
- Melhoria do fallback e a recuperação do solicitante de carimbo de data e hora
- Adicionado várias validações de API para retornar os códigos de status 400 e 422 em vez de 500
- Adicionado suporte para administradores para gerenciar ACs intermediárias personalizadas dos usuários
- Adicionado a opção "Windows Server" nas PKIs padrão adicionais dos contextos de segurança personalizados
- Adicionado um aviso no painel se a licença do PKI SDK estiver próxima do vencimento
- Melhorias no relatório de cobrança
    - Correção de bug nos botões de paginação
    - Adicionado coluna com marcas de PDF
    - Adicionar linha de totais
- Melhorias na instrumentação
    - As operações que diferem apenas por parâmetro na rota agora são unificadas nas informações do aplicativo
    - As solicitações de TSP com falha agora são registradas como informações do aplicativo
    - Os parâmetros de confiança da API (contexto de segurança e política de assinatura) agora estão registrados nos eventos
    - Adicionar rastreamento de lib do cliente
- Correção de bug que fazia com que configurações sensíveis fossem gravadas no log do sistema
- Correção de bug que impedia a exclusão de solicitantes de carimbo de data e hora
- Corrija o nome da tag PAdES `{{br_oab_numero}}` (o antigo `{{br_oab_numbero}}` ainda é suportado)

**Problemas conhecidos:**

- A versão não pode ser instalada no PostgreSQL (corrigida na 1.14.3)


<a name="v1-13-3" />
### 1.13.3 (2017-09-07)

Atualização do modelo do banco de dados: Não

- Atualize o Lacuna PKI SDK para 1.19.3 para corrigir erros na verificação do status de revogação
- Resultados completos da validação agora incluídos no evento de autenticação de certificado concluída
- Logs aprimorados para ajudar no diagnóstico de erros de parametrização de confiança


<a name="v1-13-2" />
### 1.13.2 (2017-08-28)

Atualização do modelo do banco de dados: Não

- Pequenas alterações na API de cobrança


<a name="v1-13-0" />
### 1.13.0 (2017-07-03)

Atualização do modelo do banco de dados: Não

- Adicionado uma nova API para adicionar marcas aos PDFs
- Adicionado suporte aos administradores para gerenciar os contextos de segurança personalizados dos usuários
- Melhore as telas de transações e eventos


<a name="v1-12-8" />
### 1.12.8 (2017-06-27)

Atualização do modelo do banco de dados: Não

- Correção de bug que fazia com que ACs intermediárias fossem ignoradas em APIs de assinatura abertas / validadas


<a name="v1-12-7" />
### 1.12.7 (2017-06-05)

Atualização do modelo do banco de dados: **Sim**

- Correção de bug que causava conflitos de banco de dados em cenários de alta carga
- Correção de bug que causava erros em timestampers criados recentemente


<a name="v1-12-6" />
### 1.12.6 (2017-06-01)

Atualização do modelo do banco de dados: Não

- Criação das configurações do aplicativo TimeToCompleteSignatures e TimeToCompleteAuthentications


<a name="v1-12-5" />
### 1.12.5 (2017-05-11)

Atualização do modelo do banco de dados: Não

- Adicionado a configuração opcional do aplicativo DefaultTimestampTimeout para personalizar o tempo limite padrão ao solicitar registros de data e hora
- Melhore os logs de desempenho
- Atualize o Lacuna PKI SDK para 1.16.7 para melhorar os logs de download


<a name="v1-12-4" />
### 1.12.4 (2017-05-05)

Atualização do modelo do banco de dados: Não

- Correção de bug que fazia com que privilégios de execução sobre a pasta do site fossem solicitados no aplicativo


<a name="v1-12-3" />
### 1.12.3 (2017-05-04)

Atualização do modelo do banco de dados: Não

- Correção de bug na configuração da configuração "Is on premises"
- Correção de bug na dica de configuração "Cryptographic keys"
- Correção de bug na API de assinaturas XML de abertura/validação


<a name="v1-12-2" />
### 1.12.2 (2017-04-26)

Atualização do modelo do banco de dados: Não

- Correção de bug na autentificação do certificado com Web PKI


<a name="v1-12-1" />
### 1.12.1 (2017-04-26)

Atualização do modelo do banco de dados: Não

- Correção de um erro na inicialização do aplicativo que poderia causar o processamento duplo de trabalhos em segundo plano


<a name="v1-12-0" />
### 1.12.0 (2017-04-25)

Atualização do modelo do banco de dados: **Sim**

- Adicionado suporte para emissão de registros de data e hora por meio da API REST
- Adicionado uma nova API para abrir/validar assinaturas XML
- Adicionado instrumentação opcional com o Application Insights
- Adicionado a configuração opcional do aplicativo "AutoUpdateDatabase" para controlar se o aplicativo tentará atualizar automaticamente o banco de dados
- Adicionado a configuração opcional do aplicativo "AllowInsecureMaintenance" para permitir acesso remoto às páginas de manutenção por HTTP
- Correção de vários problemas que ocorrem ao executar várias instâncias do aplicativo (cenários de alta disponibilidade)
- ~~Correção de problemas de simultaneidade do banco de dados que ocorrem em situações de alta carga~~ (realmente corrigido apenas na 1.12.7)
- Correção do bug que ocorreu quando a licença do Lacuna PKI SDK foi alterada
- Atualização do Lacuna PKI SDK para 1.16.6


<a name="v1-11-4" />
### 1.11.4 (2017-03-16)

Atualização do modelo do banco de dados: Não

- Atualização do Lacuna PKI SDK para 1.16.5, assim:
    - ACs intermediárias do ICP-Brasil atualizadas
    - Alterações na inspeção de assinatura do CAdES para lidar com registros de data e hora codificados incorretamente


<a name="v1-11-3" />
### 1.11.3 (2017-02-13)

Atualização do modelo do banco de dados: Não

- Alteração da política XML "Nota Fiscal Eletrônica (NF-e)" para excluir os IDs dos elementos de assinatura
- Atualização o Lacuna PKI SDK para 1.16.2


<a name="v1-11-2" />
### 1.11.2 (2017-01-20)

Atualização do modelo do banco de dados: Não

- Correção de bug na página de manutenção do banco de dados


<a name="v1-11-1" />
### 1.11.1 (2017-01-17)

Atualização do modelo do banco de dados: Não

- Correção de bug nas rotas de upload e download


<a name="v1-11-0" />
### 1.11.0 (2017-01-17)

Atualização do modelo do banco de dados: **Sim**

- Adicionado suporte para upload de arquivos com várias partes
- Adicionado suporte para assinar arquivos enviados anteriormente, arquivos de assinaturas anteriores e arquivos remotos
- Adicionado suporte para baixar o arquivo assinado em uma solicitação HTTP separada ("link para download")
- Adicionado suporte para novas tags de representação visual do PAdES (consulte [tags PAdES](pades-tags.md))
- Adicionado suporte para decodificar todos os campos nos nomes X.509
- Adicionado a política do CAdES "Assinatura eletrônica básica (CAdES-BES) com horário de assinatura e sem CRLs"
- Correção de bug que impedia que as CAs intermediárias do sistema entrassem em vigor
- Correção de bug que redefinia o serviço de armazenamento para local sempre que o aplicativo era reiniciado
- Atualização do Lacuna PKI SDK para 1.16.0, assim:
    - Melhora dos campos do ICP-Brasil. Os campos também retornam nulos se tiverem valor de preenchimento padrão
    - Melhora da assinatura do Pades para carregar e validar assinaturas PDF adbe.pkcs7.sh1
    - Melhora downloads internos
    - Correção do estado TSL UnderSupervision como um estado válido
    - Correção do atraso de carregamento do armazenamento de certificados devido à tentativa de carregamento da cadeia de certificados
    - Correçaõ da codificação de carimbo de data e hora do arquivo CAdES
    - Correção da linha vazia da representação visual do PAdES
    - Correçaõ do posicionamento incorreto das marcas de PDF e da representação visual do PAdES em alguns PDFs rotacionados
    - Correção da exceção em alguns campos do ICP-Brasil decodificar
    - Correção de bug que ocorre em algumas assinaturas de PDF
    - Correção da ordem de atributo das referências de revogação completas do CAdES
    - Atualização do uri e o root do TSL italiano


<a name="v1-10-1" />
### 1.10.1 (2016-10-01)

Atualização do modelo do banco de dados: Não

- Adicionado políticas PAdES padrão "Básico com certificados ICP-Brasil" e "PAdES-T com certificados ICP-Brasil"


<a name="v1-10-0" />
### 1.10.0 (2016-09-27)

Atualização do modelo do banco de dados: **Sim**

- Adicionado suporte para executar assinaturas desanexadas do CAdES sem fazer upload do arquivo de dados
- Melhorar o gerenciamento de usuários


<a name="v1-9-1" />
### 1.9.1 (2016-09-22)

Atualização do modelo do banco de dados: Não

- Correção de um erro que impedia o uso das tags {{signerEmail}} e {{issuerCommonName}} na representação visual do PAdES


<a name="v1-9-0" />
### 1.9.0 (2016-08-25)

Atualização do modelo do banco de dados: **Sim**

- Adicionado suporte para marcas de PDF
- Adicionado suporte para obter o arquivo encapsulado ao abrir uma assinatura CAdES
- Melhorar o relatório de cobrança


<a name="v1-8-2" />
### 1.8.2 (2016-07-19)

Atualização do modelo do banco de dados: Não

- Correção de bug nas assinaturas do CAdES com registro de data e hora


<a name="v1-8-1" />
### 1.8.1 (2016-07-11)

Atualização do modelo do banco de dados: Não

- Correção de bug que afeta algumas assinaturas de PDFs grandes
- Atualização do Lacuna PKI SDK para 1.13.1


<a name="v1-8-0" />
### 1.8.0 (2016-07-05)

Atualização do modelo do banco de dados: Não

- Adicionado uma nova API para abrir/validar assinaturas CAdES e PAdES
- Adicionado suporte às novas políticas de assinatura do ICP-Brasil PAdES AD-RB e AD-RT
- Adicionado relatório de histórico de transações
- Adicionado suporte para as tags {{signerEmail}} e {{issuerCommonName}} na representação visual do PAdES
- Adicionado a propriedade BinaryThumbprintSHA256 a CertificateModel
- Adicionado suporte para criar usuários sem senha (útil para usuários de aplicativos)
- Adicionado um aviso ao status do sistema ao alterar o armazenamento quando já houver blobs armazenados
- Aumento do tamanho máximo da solicitação de API para 100 MB
- Correção de bug que impedia a co-assinatura do CAdES
- Correção do erro de autorização na rota de download dos certificados raiz confiáveis dos contextos de segurança
- Atualização o Lacuna PKI SDK para 1.13.0


<a name="v1-7-2" />
### 1.7.2 (2016-06-10)

Atualização do modelo do banco de dados: Não

- Adicionado detecção de dados incorretos transmitidos por aplicativos clientes:
    - PDFs inválidos / corrompidos
    - Parâmetros de representação visual inválidos do PAdES
- Correção de bug na remoção do contexto de segurança
- Correção de bug que deixa registros ClientSideSignature não utilizados deixados no banco de dados
- Correção de bug que impedia os usuários administradores de visualizarem detalhes dos eventos de outros usuários
- Atualização do Lacuna PKI SDK para 1.12.2 (sem correções)


<a name="v1-7-1" />
### 1.7.1 (2016-06-03)

Atualização do modelo do banco de dados: Não

- Correção de bug no download do certificado raiz confiável de um contexto de segurança


<a name="v1-7-0" />
### 1.7.0 (2016-06-03)


Atualização do modelo do banco de dados: **Sim**

- Adicionado suporte para registro de data e hora
- Adicionado suporte para contextos de segurança em todo o sistema
- Adicionado suporte para políticas de assinatura personalizadas em todo o sistema
- Adicionado suporte para opções adicionais de armazenamento para arquivos temporários criptografados (o armazenamento no sistema de arquivos local ainda é suportado):
- Armazenamento de Blobs do Microsoft Azure
- Amazon S3
- Adicionado suporte para administradores para gerar tokens de acesso para outros usuários
- Adicionado suporte aos administradores para visualizar os eventos de outros usuários ("histórico")
- Adicionado suporte aos campos de certificado ICP-Brasil "RG" e "OAB"
- Atualização do Lacuna PKI SDK para 1.12.1, assim:
    - Adicionado suporte para certificados com alternativa rara SHA-1 com algoritmo de assinatura RSA OID (1.3.14.3.2.29)


<a name="v1-6-4" />
### 1.6.4 (2016-05-05)

Atualização do modelo do banco de dados: **Sim**

- Armazenar arquivos criptografados temporários no diretório temporário local em vez de armazenar em colunas binárias no banco de dados
    - Essa alteração foi feita devido a problemas de desempenho. A próxima versão adicionará suporte para outras opções de armazenamento.


<a name="v1-6-3" />
### 1.6.3 (2016-05-02)

Atualização do modelo do banco de dados: **Sim**

- Adicione suporte para personalização de cultura, formato e fuso horário do horário de assinatura na representação visual do PAdES
- Atualize o Lacuna PKI SDK para 1.12.0, assim:
    - Correção de um erro na codificação da estrutura ASN.1 AlgorithmIdentifier, que fazia com que o campo "parameters" fosse omitido de ser preenchido com o valor NULL
    - Não está mais usando a biblioteca licenciada iTextSharp AGPL
    - Correção de bug na validação do status de revogação de certificado que causava um estouro de pilha em cenários raros de validação do OCSP
    - Correção de bug na decodificação da CRL quando o ReasonCode está presente
    - Melhorar mensagens para validação do status de revogação de certificado
    - Corrigir problema que afeta a validação de assinaturas XML com declarações de namespace no elemento Signature
    - Corrigir problema que afeta o posicionamento das representações visuais do PAdES em cenários específicos de vários assinantes
    - Adicionada a raiz confiável do ICP-Brasil "v5"


<a name="v1-6-2" />
### 1.6.2 (2016-04-18)

Atualização do modelo do banco de dados: Não

- Adicionado suporte à representação visual do PAdES para especificar um contêiner dentro do retângulo de assinatura no qual colocar o texto


<a name="v1-6-1" />
### 1.6.1 (2016-02-22)

Atualização do modelo do banco de dados: Não

- Correção de bug que causa delay no acesso do banco de dados quando está executando no Microsoft Azure


<a name="v1-6-0" />
### 1.6.0 (2016-01-21)

Atualização do modelo do banco de dados: **Sim**

- Adicionado suporte para assinaturas XML (XmlDSig/XAdES)
- Atualização do Lacuna PKI SDK para 1.9.0, assim:
    - Melhoria na validação dos certificados para checar a extensão PathLenConstraint


<a name="v1-5-1" />
### 1.5.1 (2015-11-24)

Atualização do modelo do banco de dados: Não

- Somente mudanças estéticas


<a name="v1-5-0" />
### 1.5.0 (2015-11-23)

Atualização do modelo do banco de dados: **Sim**

- Adicionado suporte para assinaturas do CAdES
- Adicionado registro de transação (para faturamento futuro)
- Adicionado suporte para licenças Lacuna PKI SDK com uso restrito ao REST PKI
- Melhora na remoção de processos de assinatura expirados
- Atualização do Lacuna PKI SDK para 1.8.0, assim:
    - Modificação do comportamento de decodificação dos campos de certificado do ICP-Brasil para decodificar campos, independentemente de o certificado parece ser um certificado ICP-Brasil ou não
    - Modificação do comportamento de decodificação do campo de certificado CompanyName ICP-Brasil para retornar o nome da empresa quando o certificado for um certificado de empresa ICP-Brasil (PJ) (anteriormente a propriedade trabalhava apenas para certificados de aplicação ICP-Brasil)
    - Adicionado suporte para o campo CPF do ICP-Brasil no campo "OU" do nome do sujeito com espaço após os dois pontos ("OU = CPF: xxxxxxxxxxx")


<a name="v1-4-3" />
### 1.4.3 (2015-11-06)

Atualização do modelo do banco de dados: Não

- Somente mudanças estéticas


<a name="v1-4-2" />
### 1.4.2 (2015-11-06)

Atualização do modelo do banco de dados: Não

- Somente mudanças estéticas


<a name="v1-4-1" />
### 1.4.1 (2015-10-21)

Atualização do modelo do banco de dados: Não

- Somente mudanças estéticas


<a name="v1-4-0" />
### 1.4.0 (2015-10-21)

Atualização do modelo do banco de dados: Não

- Adicionado suporte à representação visual do PAdES para alinhamento horizontal de texto à direita
- Definição da cultura do site como pt-BR (afeta a representação visual do PAdES)
- Correção do bug nas assinaturas PAdES


<a name="v1-3-1" />
### 1.3.1 (2015-10-14)

Atualização do modelo do banco de dados: Não

- Melhora no registro em arquivo para impedir o crescimento indefinido de arquivos
- Adicionado informações sobre a licença Lacuna PKI SDK na tela de status do sistema
- Correção um pequeno problema no javascript quando o Google Analytics não estiver sendo usado
- Correção um problema menor na caixa de diálogo de teste de log
- Atualização do Lacuna PKI SDK para 1.6.0, assim:
    - Correção o erro no log que fazia com que o argumento "source" tivesse um valor incorreto


<a name="v1-3-0" />
### 1.3.0 (2015-10-13)

- Primeira versão divulgada publicamente
- Principais recursos desta versão:
    - Autenticação de certificado
    - Assinaturas PAdES
    