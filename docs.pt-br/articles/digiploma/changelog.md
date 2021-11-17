# Histórico de versões do Digiploma

> [!NOTE]
> Este histórico por ora contém informações apenas sobre as atualizações mais recentes ao sistema. Estamos
> trabalhando para documentar as versões mais antigas.

<a name="v1-10-0" />
### 1.10.0 (2021-11-11)

* Melhorias
  * [AUT-114] Anulação definitiva de diplomas

Atualiza modelo do banco de dados: não

<a name="v1-9-2" />
### 1.9.2 (2021-11-05)

* Correções de bugs
  * [AUT-118] Chave NacionalidadeGenero faz flexão de gênero apenas se a nacionalidade informada no diploma estiver no masculino
  * [AUT-117] Mensagens de erro de RG, Outro documento de identificação, naturalidade e Situação ENADE não exibem o caminho correto
  * [AUT-116] Termo responsabilidade não deveria ser obrigatório
  * [AUT-115] Erro ao gerar diploma sem livro registro
  * [AUT-113] Correções das chaves para geração de RVDD

Atualiza modelo do banco de dados: não

<a name="v1-9-1" />
### 1.9.1 (2021-10-21)

* Correções de bugs
  * [AUT-112] Recredenciamento está como obrigatório na IES Emissora

Atualiza modelo do banco de dados: não

<a name="v1-9-0" />
### 1.9.0 (2021-10-20)

* Novas funcionalidades
  * [AUT-111] Novos condicionais e flexões de gênero

* Correções de bugs
  * [AUT-110] Erro ao enviar diploma com enums sem acento
  * [AUT-109] Erro ao gerar diploma sem Autorizacao, Reconhecimento e Renovação
  * [AUT-108] Dados do reconhecimento estão sendo exibidos como sendo da renovação de reconhecimento

Atualiza modelo do banco de dados: não

<a name="v1-8-0" />
### 1.8.0 (2021-10-13)

* Novas funcionalidades
  * [AUT-106] Adicionar upload de novo arquivo no modelo para impressão em papel timbrado

Atualiza modelo do banco de dados: sim

<a name="v1-7-0" />
### 1.7.0 (2021-10-01)

* Novas funcionalidades
  * [AUT-103] Adicionar filtro por status e data na listagem de diplomas

* Melhorias
  * [AUT-104] Adicionar nova chave para fazer flexão de gênero do titulo conferido ao estudante
  * [AUT-100] Aceitar flow id na API de criação de diplomas

* Correções de bugs
  * [AUT-105] Tela de validação apresenta erros caso o diploma não esteja válido

Atualiza modelo do banco de dados: não

<a name="v1-6-0" />
### 1.6.0 (2021-09-17)

* Novas funcionalidades
  * [AUT-95] Download em lote dos documentos de Diploma
  * [AUT-26] Captcha de proteção para consulta pública

* Melhorias
  * [AUT-93] Assinatura de diploma com requisitos de certificados

Atualiza modelo do banco de dados: não
