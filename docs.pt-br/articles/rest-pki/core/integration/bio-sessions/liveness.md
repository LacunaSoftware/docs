# Prova de vida (Liveness) - Rest PKI Core

- Verifica se há uma pessoa real presente do outro lado da tela, detectando tentativas de fraude com fotos, vídeos ou máscaras.
- Não realiza a identificação (quem é a pessoa), apenas atesta a presença de um ser humano vivo.
- A foto capturada pelo usuário pode ser recuperada no final da sessão.

## Criação da sessão

Para criar uma sessão de liveness, pode-se utilizar o método `StartLivenessSessionAsync` das ClientLibs, passando como parâmetro `StartLivenessSessionRequest`.

Esse método realiza uma requisição `POST` para a rota `/api/bio/sessions/liveness` [(Swagger)](https://restpkicore.lacunasoftware.com/swagger/index.html#operations-BioSessions-post_api_bio_sessions_liveness).

### Parâmetros (`StartLivenessSessionRequest`)
| **Parâmetro**                     | **Obrigatório?** | **Tipo** | **Descrição** |
| --------------------------------- | ---------------- | -------- | ------------- |
| **ReturnUrl**                     | Condicional*     | String   | URL para redirecionar o usuário após a biometria. [(veja mais detalhes)](index.md#fluxo-de-redirecionamento-returnurl)
| **TrustedOrigin**                 | Condicional*     | String   | URL do seu site onde o Widget está incorporado. [(veja mais detalhes)](index.md#fluxo-incorporado-widgettrustedorigin)
| **PlatformPreference**            | Não              | Enum     | Define a preferência de plataforma e configuração do QRCode. [(veja mais detalhes)](index.md#parâmetros-gerais)
| **SubjectIdentifier**             | Não              | String   | Identificador externo do usuário. [(veja mais detalhes)](index.md#identificador-dos-usuários-subjectidentifier)
| **FaceCaptureProvider**           | Não              | Enum     | Define o provedor de biometria. [(veja mais detalhes)](index.md#parâmetros-das-sessões-com-captura-facial)
| **CaptureIdentificationDocument** | Não              | Bool     | Se habilitado, o usuário deverá capturar um documento de identidade logo após a prova de vida.

> [!tip]
> *Você deve informar pelo menos um dos dois parâmetros: [Veja a diferença entre ReturnUrl e TrustedOrigin](index.md#fluxos-de-frontend)
> - `ReturnUrl` (para redirecionamento) 
> - `TrustedOrigin` (para widget)

> Os parâmetros não obrigatórios podem ser deixados em branco (`null`) e serão automaticamente preenchidos pelos padrões do sistema.

### Exemplo de resposta da requisição:

```json
{
  "sessionType": "Liveness",
  "sessionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "sessionUrl": "string"
}
```
### Integração do Frontend
Uma vez que o seu backend obteve a `sessionUrl` da API, você deve encaminhá-la para o seu frontend. A partir daí, o fluxo segue de acordo com a sua escolha de interface:

- **Fluxo Incorporado (Widget)**: Sua aplicação passa a URL para o componente Javascript inicializar a captura dentro da sua página.

- **Fluxo de Redirecionamento**: Sua aplicação direciona o usuário para o link recebido, onde a captura ocorrerá.

> [!TIP]
> Em caso de dúvidas sobre a implementação de cada modelo, consulte nossa documentação de [Fluxos de FrontEnd](index.md#fluxos-de-frontend).

---
## Completando a sessão

Para concluir uma sessão de liveness, pode-se utilizar o método `CompleteLivenessSessionAsync` das ClientLibs, passando como parâmetro `CompleteBioSessionRequest`.

Esse método realiza uma requisição `POST` para a rota `/api/bio/sessions/liveness/completion` [(Swagger)](https://restpkicore.lacunasoftware.com/swagger/index.html#operations-BioSessions-post_api_bio_sessions_liveness).

Este método é o ponto final. O ticket pode ser usado apenas uma vez.

> [!TIP]
> Utilize o Complete apenas ao final do processo, enviando o Ticket recebido para validar o resultado e encerrar a sessão.

### Exemplo de resposta da requisição:

```JSON
{
  "faceLivenessStatus": {
    "provider": "FaceTecLiveness3d",
    "success": true,
    "attemptCount": 0
  },
  "idCaptureStatus": {
    "success": true,
    "matchedFace": true,
    "matchedFaceLevel": 0
  },
  "sessionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "success": true,
  "resultDataAvailable": true
}
```

#### Detalhes dos campos:

* **faceLivenessStatus**:
    * **provider**: Provedor do serviço de biometria.
    * **success**: Informa se a prova de vida foi realizada com sucesso.
    * **attemptCount**: Número de tentativas realizadas pelo usuário.
* **idCaptureStatus**:
    * **success**: Informa se a captura do documento foi bem-sucedida.
    * **matchedFace**: Indica se houve correspondência entre o rosto da pessoa e a foto no documento.
    * **matchedFaceLevel**: Nível de similaridade entre o rosto e o documento (score).
* **sessionId**: Identificador único da sessão.
* **success**: Resultado geral da sessão.
* **resultDataAvailable**: Se true, indica que os dados já foram processados.

---

## Consultando o status da sessão

Você pode consultar o estado atual de uma sessão a qualquer momento utilizando o seu `sessionId`. Isso é útil para monitorar se o usuário já iniciou ou expirou a sessão antes mesmo de ela ser concluída.

> [!TIP]
> Utilize o `GetLivenessSessionStatusAsync` para acompanhar o progresso de uma sessão ativa através do seu SessionId

O resultado da requisição para esse endpoint é exatamente igual ao [exemplo de retorno da requisição CompleteLivenessSessionAsync](#exemplo-de-resposta-da-requisição-1).