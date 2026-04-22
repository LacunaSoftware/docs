# Cadastro biométrico (Enrollment)  - Rest PKI Core

- Realiza o registro biométrico do usuário no sistema. 
- A imagem da face é processada e armazenada de forma criptografada para ser utilizada futuramente em operações de autenticação ou identificação.

## Criação da sessão
Para criar uma sessão de Enrollment, pode-se utilizar o método `StartEnrollmentSessionAsync` das ClientLibs, passando como parâmetro `StartBioEnrollmentSessionRequest`.

Esse método realiza uma requisição `POST` para a rota `/api/bio/sessions/enrollment` [(Swagger)](https://restpkicore.lacunasoftware.com/swagger/index.html).

### Parâmetros (`StartEnrollmentSessionAsync`)
| **Parâmetro**                          | **Obrigatório?** | **Tipo** | **Descrição**   |
| -------------------------------------- | ---------------- | -------- | --------------- |
| **ReturnUrl**                          | Condicional*     | String   | URL para redirecionar o usuário após a biometria. [(veja mais detalhes)](index.md#fluxo-de-redirecionamento-returnurl)
| **TrustedOrigin**                      | Condicional*     | String   |  URL do seu site onde o Widget está incorporado. [(veja mais detalhes)](index.md#fluxo-incorporado-widgettrustedorigin)
| **PlatformPreference**                 | Não              | Enum     | Define a preferência de plataforma e configuração do QRCode. [(veja mais detalhes)](index.md#parâmetros-gerais)
| **SubjectIdentifier**                  | Não              | String   | Identificador externo do usuário. [(veja mais detalhes)](index.md#identificador-dos-usuários-subjectidentifier)
| **FaceCaptureProvider**                | Não              | Enum     | Define o provedor de biometria. [(veja mais detalhes)](index.md#parâmetros-das-sessões-com-captura-facial)
| **CaptureIdentificationDocument**      | Não              | Bool     | Se habilitado, o usuário deverá capturar um documento de identidade logo após a prova de vida.
| **DangerousOverrideIfAlreadyEnrolled** | Não              | Bool     | Define se o sistema permite o sobrescrita de um cadastro.

> [!tip]
> *Você deve informar pelo menos um dos dois parâmetros: [Veja a diferença entre ReturnUrl e TrustedOrigin](index.md#fluxos-de-frontend)
> - `ReturnUrl` (para redirecionamento) 
> - `TrustedOrigin` (para widget)

### Exemplo de resposta da requisição:

Ao fazer a requisição para `StartEnrollmentSessionAsync` obtemos a seguinte resposta

```json
{
  "sessionType": "Enrollment",
  "sessionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "sessionUrl": "string"
}
```

> TODO: resumo do que o usuário deve fazer com o sessionUrl e colocar um link para o fluxo de integração.

---
## Completando a sessão

Para concluir uma sessão de liveness, pode-se utilizar o método `CompleteEnrollmentSessionAsync` das ClientLibs, passando como parâmetro `CompleteBioSessionRequest`.

Este método é o ponto final. O ticket pode ser usado apenas uma vez.

> [!TIP]
> Utilize o Complete apenas ao final do processo, enviando o Ticket recebido para validar o resultado e encerrar a sessão.

### Exemplo de resposta da requisição:

```Json
{
  "subjectIdentifier": "string",
  "subjectId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "livenessStatus": {
    "provider": "FaceTecLiveness3d",
    "success": true,
    "attemptCount": 0
  },
  "idCaptureStatus": {
    "success": true,
    "matchedFace": true,
    "matchedFaceLevel": 0
  },
  "failure": "FaceNotFoundWithSufficientQuality",
  "sessionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "success": true,
  "resultDataAvailable": true
}
```

> [!TIP]
> Repare que nesse exemplo o subjectId veio pois o cadastro não foi concluido, o código da failure nos que esse usuário já está cadastrado.

#### Detalhes dos campos:

* **subjectIdentifier**: Um nome ou ID para identificar o usuário da sessão.
* **subjectId**: ID do cadastro.
* **livenessStatus**: 
    * **provider**: Provedor do serviço de biometria. 1 (FaceTec3D), 2 (FortFace), 3 (FaceTec2D).
    * **success**: Informa se a prova de vida foi realizada com sucesso.
    * **attemptCount**: Número de tentativas realizadas pelo usuário.
* **idCaptureStatus**:
    * **success**: Informa se a captura do documento foi bem-sucedida.
    * **matchedFace**: Indica se houve correspondência entre o rosto da pessoa e a foto no documento.
    * **matchedFaceLevel**: Nível de similaridade entre o rosto e o documento.
* **failure**: Informa se houve alguma falha ao realizar a sessão, consulte a lista de falhas.
* **sucess**: Informa se a sessão de cadastro foi bem-sucedida.
* **resultDataAvailable**: Indica se é possivel consultar a imagem capturada na sessão.


##### Failures

| **Enum**                          | **Descrição**                                      |
| --------------------------------- | -------------------------------------------------- |
| FaceNotFoundWithSufficientQuality | O sistema não conseguiu detectar um rosto com nitidez suficiente. Isso ocorre geralmente por má iluminação, desfoque (blur) ou uma câmera com qualidade inferior.
| FaceLiveness2dFailed              | A análise de prova de vida 2D detectou que a face apresentada não é real.
| FaceCaptureFailed                 | Ocorreu um erro técnico ou interrupção durante o processo de captura da imagem, impedindo o processamento.
| DocumentCaptureFailed             | Não foi possível capturar ou processar a imagem do documento de identidade.
| FaceIdentityVerificationFailed    | A verificação falhou ao comparar a face capturada (o usuário não é quem diz ser).
| DuplicatesFound                   | Durante um cadastro, o sistema identificou que esta biometria já pertence a outro usuário registrado na base.
| AttemptsLimitReached              | O usuário excedeu o número máximo de tentativas permitidas para realizar a biometria na mesma sessão.
| SessionAborted                    | A sessão foi encerrada de maneira prematura pelo usuário ou pelo sistema antes da conclusão do processo.


## Consultando o status

Você pode consultar o estado atual de uma sessão a qualquer momento utilizando o seu `sessionId`. Isso é útil para monitorar se o usuário já iniciou ou expirou a sessão antes mesmo de ela ser concluída.

> [!TIP]
> Utilize o `GetEnrollmentSessionStatusAsync` para acompanhar o progresso de uma sessão ativa através do seu SessionId

O resultado da requisição para esse endpoint é exatamente igual ao [exemplo de retorno da requisição CompleteEnrollmentSessionAsync](#exemplo-de-resposta-da-requisição-1)
