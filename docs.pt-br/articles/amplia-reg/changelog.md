# Histórico de versões do Amplia Reg

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
