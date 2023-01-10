# Histórico de versões do Amplia Reg

<a name="v1-4-0" />
## 1.4.0 (2023-01-04)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-222 Criação de pedido pré aprovado

ARNG-269 Flavour `CaboVerde`

ARNG-270 Formato\(s\) de certificado de Cabo Verde

ARNG-271 Formato de certificado SSL/TLS

ARNG-279 Tema `djp` \(*deep jungle princeton*\)

ARNG-281 Emissão de certificado por CSR

ARNG-293 Adicionar comando `init-data` para auxiliar na instalação do sistema

### Melhorias

ARNG-232 Revisar permissionamento e adicionar perfil de auditor

ARNG-282 Atualizar ASP.NET Core para versão 6.0

ARNG-254 Tornar opcional configuração de Azure Maps

ARNG-255 Remover configuração de Google Maps Embed

ARNG-274 Alterar "Distrito Capital" para apenas "Capital" nos endereços PY

ARNG-277 Verificação da adequação do certificado do agente para assinatura e busca automática por certificado adequado

ARNG-278 Configuração no CertificateType do tamanho da chave

ARNG-287 Adicionar suporte a provedor criptográfico IDGo 800

ARNG-288 Melhorar forma de configurar CA de dispositivos

ARNG-292 Colocar versão do sistema visível nas telas

### Correções de bugs

ARNG-248 Controle de ordenação da lista de pedidos na home do ACI não deveria aparecer pois não faz nada

ARNG-260 Campos alfanuméricos em certificados PY não estão admitindo letra `Ñ`

ARNG-280 Signout automático por inatividade é interrompido por confirmações de descarte de mudanças

ARNG-285 Ao voltar ao passo de documentos após tirar a foto, acontece um erro

ARNG-286 Crop parece estar cropando mais do que deveria

ARNG-289 Coluna no banco de dados não utilizada `Subscription.LegalRepresentantId1`

ARNG-290 Configuração `Order:CloudIssueUrl` deveria ser opcional



<a name="v1-3-0" />
## 1.3.0 (2022-11-11)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-240 Consulta pública de certificados

### Melhorias

ARNG-245 Captura da geolocalização do agente no momento da captura da biometria

ARNG-249 Adicionar cláusulas ao agreement da Code100

ARNG-259 Incluir cláusula com URL de revogação no agreement da Code100

ARNG-261 Adicionar opção de capturar documentos a partir da webcam

ARNG-262 Geração e assinatura da solicitação de revogação quando esta é feita por um usuário do sistema \(e não pelo titular\)

ARNG-264 Mover linha com campos de empresa para baixo da linha com campos de contato \(PY\)



<a name="v1-2-0" />
## 1.2.0 (2022-10-14)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-230 Timeout de sessão por inatividade

### Melhorias

ARNG-244 Refatorar tipos de certificado

ARNG-242 Filtros adicionais na busca de pedidos

ARNG-219 Permitir ao ACI escolher um pedido para fazer conferência a partir de uma lista

### Correções de bugs

ARNG-241 Busca por pedidos não permite digitar letras no campo de identificador \(que agora é alfanumérico para pedidos PY\)

ARNG-231 Campos se sobrepõem na tela de verificação



<a name="v1-1-2" />
## 1.1.2 (2022-09-26)

Atualiza modelo do banco de dados: não

### Melhorias

ARNG-228 Envio de SMS com provedor Tigo


<a name="v1-1-1" />
## 1.1.1 (2022-09-26)

Atualiza modelo do banco de dados: não

### Melhorias

ARNG-229 Apresentar mensagem amigável quando o certificado do agente não for encontrado



<a name="v1-1-0" />
## 1.1.0 (2022-09-19)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-217 Reaproveitamento de dados de pedidos antigos

ARNG-210 Geração de documentos personalizada para Code100

ARNG-224 Envio de SMS com Amazon SNS

ARNG-227 Provedor de envio de SMS "EmailDump"

### Melhorias

ARNG-223 Ocultar seleção de tipo de emissão na criação de pedido enquanto não há videoconferência

ARNG-220 Pré-selecionar token caso só haja um conectado

ARNG-213 Revisar motivos de pendência, recusa e revogação

ARNG-211 Melhorar inicialização dos tipos de certificados paraguaios

ARNG-209 Exibir informação de tamanho máximo por arquivo no upload de documentos

ARNG-200 Permitir agentes de validação revogarem certificados

ARNG-186 Refatoração do registro de eventos

ARNG-225 Registrando events no log da aplicação

### Correções de bugs

ARNG-216 Erro ao tentar modificar um campo como data de nascimento com valor inválido

ARNG-215 O uso de uma imagem de identificação muito grande faz com que a tela se sobreponha aos botões

ARNG-207 Input de número do pedido para iniciar validação não aceita número de pedido formatado

ARNG-202 Checkbox de iniciar validação está aparecendo na parte de gestão



<a name="v1-0-2" />
## 1.0.2 (2022-08-17)

Atualiza modelo do banco de dados: não

### Correções de bugs

ARNG-206 Certificados BR não são emitidos conforme normas da RFB

ARNG-160 Dados do título de eleitor não devem ser obrigatórios para certificados BR



<a name="v1-0-1" />
## 1.0.1 (2022-08-16)

Atualiza modelo do banco de dados: não

### Correções de bugs

ARNG-205 Tela de detalhes do pedido não está permitindo abrir documentos

ARNG-204 Erro na geração de documentos para certificados Brasileiros sem CNPJ



<a name="v1-0-0" />
## 1.0.0 (2022-08-15)

Atualiza modelo do banco de dados: **sim**

### Novas funcionalidades

ARNG-199 Novos tipos de certificados paraguaios

ARNG-181 Revogação de certificado pelo titular

ARNG-180 Revogação de certificado pelo agente

ARNG-173 Permitir criar um pedido e já iniciar a validação

ARNG-118 Verificação de equipamento/certificado

ARNG-126 Gerenciamento de equipamentos

### Melhorias

ARNG-203 Aceitar números de documento alfanumérico para certificados PY

ARNG-193 Refatorar emissão de modo a só emitir o certificado após a assinatura do termo pelo titular

ARNG-192 Melhorar termo de titularidade

ARNG-188 Tornar emissão de certificado com data futura opcional, feita após envio para fila

ARNG-184 Ajustes à tela de busca de pedidos

ARNG-183 Ajustes à tela de detalhes de pedidos

ARNG-179 Armazenar informações acerca do token utilizado para emissão

ARNG-177 Remover campos de endereço do pedido de certificado paraguaio

ARNG-175 Melhorar exibição dos documentos na conferência

ARNG-159 Assinatura do termo de titularidade e dossiê pelo AVP

### Correções de bugs

ARNG-194 Série de número de pedido não é levada em conta no cálculo do DV



<a name="v1-0-0-rc12" />
## 1.0.0 RC12 (2022-07-05)

Primeira versão disponível publicamente
