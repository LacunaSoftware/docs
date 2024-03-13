# Changelog MV Bio Signer

### 0.4.5 (2020-11-11)

- Adiciona no texto do rodapé o nome fantasia da instituição
- Correção do certificado revogado ficar em *cache*

Mudança no modelo do banco de dados: Não

### 0.4.3 (2020-10-19)

- Adiciona novo campo `SignatureType` no retorno da API de validação de assinatura (exigido pela nova versão do Cart.Digital)
- Adiciona cache estático da cadeia de certificado de HML
- Melhoria no tratamento de erros do serviço de documentos e storage
- Melhoria no detalhamento de erros ao definir UF e conselho do profissional (Foi detectado muitos erros nos logs de profissionais tentando assinar sem ter conselho cadastrado na UF da instituição atual)
- Melhoria na geração da versão para impressão (PDF com rodapé de assiantura). Na versão anterior a criação do documento com rodapé não estava como obrigatória, a assinatura poderia ser concluída com sucesso mesmo havendo erro na geração do rodapé, pois a assinatura que é retornada ao Cart.Digital é CAdES, a versão com rodapé é gerada em um segundo momento e não é retornada para o Cart.Digital

Mudança no modelo do banco de dados: Não

### 0.4.2 (2020-10-18)

- Melhoria na inicialização das licenças da biblioteca de biometria
- Correção do retorno de sucesso da API de validação de assinatura

Mudança no modelo do banco de dados: Não

### 0.4.1 (2020-09-28)

- Correção do erro de "PIN incorreto" para o HSM virtual. Afeta somente **ambiente de homologação**

Mudança no modelo do banco de dados: Não

### 0.4.0 (2020-09-23)

- Melhoria no retorno de erros da API de assinatura chamada pelo Cart.Digital
- Melhoria nas APIs de login de sessão
- Melhoria na inicialização do serviço de biometria

Mudança no modelo do banco de dados: Não

### 0.3.4 (2020-08-29)

Primeira versão em Produção