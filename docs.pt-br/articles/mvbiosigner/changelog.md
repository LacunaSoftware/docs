# Changelog MV Bio Signer

### 0.12.5 (2025-10-06)

- Melhoria de logs no processo de finalização e validação da captura biométrica.

### 0.12.4 (2025-08-12)

- Melhoria na exibição de dados de usuários. CPFs aparecem mascarados nas views dos agentes.
- Melhoria no build do Docker.

### 0.12.3 (2025-03-20)

- Adiciona configurações de tempo de *timeout* da captura biométrica.
- Adiciona configurações de número de capturas e framerate para validação.

### 0.12.2 (2024-12-11)

- \[MVBIOS-16\] Adiciona API PSC de assinatura de documentos.
- Melhoria da validação biométrica com múltiplas capturas.
- Altera assinatura padrão de documento para PAdES-BES sem LTV.

### 0.10.5 (2024-08-19)

- \[MVBIOS-13\] Adiciona APIs de PSC.
- \[MVBIOS-15\] Passa a usar GUID incremental para Ids das entidades.

### 0.9.1 (2024-06-21)

- \[MVBIOS-12\] Retorna campo SubjectName customizado (este campo é inserido no rodapé do PDF gerado pelo sistema da MV).

### 0.8.7 (2024-05-27)

- Adiciona dados do conselho do usuário via query quando não presente no certificado digital.

### 0.8.6 (2024-05-27)

- Remove abordagem de tail hashing dos documentos.

### 0.8.4 (2024-05-08)

- Adiciona configuração para habilitar/desabilitar job de documentos cancelados.
- Melhoria nos logs de query no banco de dados externo.


### 0.8.3 (2024-05-06)

- Adiciona no `appsettings` configuração e template da query no banco de dados externo para obter informações do usuário assinante.
- Melhoria na API de informação do login de usuário.


### 0.8.2 (2023-03-28)

- Adiciona informação sobre proteção de senha nos detalhes do usuário

### 0.8.1 (2023-03-28)

#### New Feature

MVBIOS-9 Tela para mudança de senha do usuário

MVBIOS-10 Sistema fazer a guardar senha protegida

#### Improvement

MVBIOS-11 Revogar usuário com biometria (ainda sem certificado emitido ou associado)


### 0.7.0 (2023-02-15)

#### New Feature

MVBIOS-6 Portal de consulta de documentos

#### Improvement

MVBIOS-4 Desacoplar Amplia

MVBIOS-5 Desacoplar Versçao para impressão assinada

MVBIOS-7 Build do App Desktop Agente com multi vendors

MVBIOS-8 Configuração de política de assinatura sem LCRs


### 0.5.13 (2023-05-23)

- Adiciona suporte a PSC ICP-Brasil
MVBIOS-3 Ativação e Obrigatoriedade de PSC por empresa


### 0.4.9 (2023-03-05)

MVBIOS-1 Comparação case-insensitive do MachineName


### 0.4.8 (2023-01-08)

- Adiciona "alias" para nome da instituição inserido nos documentos
- Adiciona erro de "timeout" quando não há ação do agente


### 0.4.7 (2022-12-22)

- Update package Lacuna.Pki.Dinamo


### 0.4.6 (2022-11-27)

- Melhoria no cache de certificados
- Melhoria de logs


### 0.4.5 (2022-11-11)

- Adiciona no texto do rodapé o nome fantasia da instituição
- Correção do certificado revogado ficar em *cache*


### 0.4.3 (2022-10-19)

- Adiciona novo campo `SignatureType` no retorno da API de validação de assinatura (exigido pela nova versão do Cart.Digital)
- Adiciona cache estático da cadeia de certificado de HML
- Melhoria no tratamento de erros do serviço de documentos e storage
- Melhoria no detalhamento de erros ao definir UF e conselho do profissional (Foi detectado muitos erros nos logs de profissionais tentando assinar sem ter conselho cadastrado na UF da instituição atual)
- Melhoria na geração da versão para impressão (PDF com rodapé de assiantura). Na versão anterior a criação do documento com rodapé não estava como obrigatória, a assinatura poderia ser concluída com sucesso mesmo havendo erro na geração do rodapé, pois a assinatura que é retornada ao Cart.Digital é CAdES, a versão com rodapé é gerada em um segundo momento e não é retornada para o Cart.Digital


### 0.4.2 (2022-10-18)

- Melhoria na inicialização das licenças da biblioteca de biometria
- Correção do retorno de sucesso da API de validação de assinatura


### 0.4.1 (2022-09-28)

- Correção do erro de "PIN incorreto" para o HSM virtual. Afeta somente **ambiente de homologação**


### 0.4.0 (2022-09-23)

- Melhoria no retorno de erros da API de assinatura chamada pelo Cart.Digital
- Melhoria nas APIs de login de sessão
- Melhoria na inicialização do serviço de biometria


### 0.3.4 (2022-08-29)

Primeira versão em Produção