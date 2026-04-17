# Cadastro biométrico

Realiza o registro biométrico do usuário no sistema. A imagem da face é processada e armazenada de forma criptografada para ser utilizada futuramente em operações de autenticação ou identificação. Variações disponíveis:

Dentro do controller criado no exemplo passado, podemos criar um endpoint que implementa o método `StartEnrollmentSessionAsync` passando como parâmetro `StartBioEnrollmentSessionRequest` e `Guid` (podendo ser nullable).

```cs
    [HttpPost("enrollment")]
    public async Task<StartBioSessionResponse> StartEnrollmentSessionAsync([FromBody] StartBioEnrollmentSessionRequest request, Guid? subscriptionId) {
        return await restBioService.StartEnrollmentSessionAsync(request, subscriptionId);
    }
```

> [!info]
> Você deve informar ou o `ReturnUrl` (para redirecionamento) ou o `TrustedOrigin` (para widget)
> [Veja a diferença entre ReturnUrl e TrustedOrigin](widget.md)

| **Parâmetro**                          | **Obrigatório?** | **Tipo** | **Descrição**                                                                                                                                                   |
| -------------------------------------- | ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ReturnUrl**                          | Condicional*     | String   | URL para redirecionar o usuário após a biometria (obrigatório se não usar Widget).                                                                              |
| **TrustedOrigin**                      | Condicional*     | String   | URL do seu site onde o Widget está incorporado (obrigatório para uso do Widget).                                                                                |
| **PlatformPreference**                 | Sim              | Enum     | Define o comportamento do dispositivo: NoPreference (0), Web (1), MobileRecommended (2) ou MobileRequired (3)                                                   |
| **SubjectIdentifier**                  | Não              | String   | Um nome ou ID para identificar o usuário da sessão.                                                                                                             |
| **DangerousOverrideIfAlreadyEnrolled** | Não              | Bool     | Define se o sistema permite o sobrescrita de um cadastro                                                                                                        |
| **CaptureIdentificationDocument**      | Não              | Bool     | Define se, além da face, o usuário deve fotografar um documento de identidade.                                                                                  |
| **FaceCaptureProvider**                | Não              | Enum     | Define o provedor de biometria: `FaceTec` (1) ou`FortFace` (2).                                                                                                 |


### Exemplo de retorno da requisição:

Ao fazer a requisição para `StartEnrollmentSessionAsync` obtemos a seguinte resposta

```json
{
    "sessionType": 2,
    "sessionId": "b56fcf81-b95b-4936-bf88-019d9b804f9e",
    "sessionUrl": "https://192.168.1.200:44325/en/bio/session?t=CfDJ8J6QqqI0LThOrbfBM7VZj07US4jOH-jH-5KmcDY9TwzATufIxqqqNjHeBQVJp7TB23ZLPJx8lulFCdtzrA8rLvsBCg4BZ7zJMNQCse0SWNLXWZuAq7GcYmKWz6eByEGWjBgpfO_V-R6JkF8zPDNizuM&m=dgy"
}
```

### Consultando o status

Você pode consultar o estado atual de uma sessão a qualquer momento utilizando o seu sessionId. Isso é útil para monitorar se o usuário já iniciou ou expirou a sessão antes mesmo de ela ser concluída.

> [!TIP]
> Utilize o `GetEnrollmentSessionStatusAsync` para acompanhar o progresso de uma sessão ativa através do seu SessionId

```cs
[HttpGet("enrollment/{id}")]
public async Task<BioEnrollmentSessionStatusModel> GetEnrollmentSessionStatusAsync(Guid id) {
    return await restBioService.GetEnrollmentSessionStatusAsync(id);
}
```

### Exemplo de retorno da requisição:

```Json
{
    "subjectIdentifier": "usuario-01",
    "subjectId": null,
    "livenessStatus": {
        "provider": 1,
        "success": true,
        "attemptCount": 1
    },
    "idCaptureStatus": null,
    "failure": 6,
    "sessionId": "b56fcf81-b95b-4936-bf88-019d9b804f9e",
    "success": false,
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



| **Enum**                          | **Number** | **Descrição**                                      |
| --------------------------------- | ---------- | -------------------------------------------------- |
| FaceNotFoundWithSufficientQuality | 1          | A imagem capturada não está com uma boa qualidade  |
| FaceLiveness2dFailed              | 2          | A sessão liveness2d falhou                         |
| FaceCaptureFailed                 | 3          | Falha ao realizar a captura da imagem do rosto     |
| DocumentCaptureFailed             | 4          | Falha ao realizar a captura da imagem do documento |
| FaceIdentityVerificationFailed    | 5          | A idenitificação facial falhou                     |
| DuplicatesFound                   | 6          | Usuário já cadastrado                              |
| AttemptsLimitReached              | 7          | A sessáo já atingiu o limite de tentativas         |
| SessionAborted                    | 8          | A sessão foi cancelada                             |


### Finalizando a sessão

Este método é o ponto final. O ticket pode ser usado apenas uma vez.

> [!TIP]
> Utilize o Complete apenas ao final do processo, enviando o Ticket recebido para validar o resultado e encerrar a sessão.


```cs
    [HttpGet("enrollment/completion")]
    public async Task<BioEnrollmentSessionStatusModel> CompleteEnrollmentSessionAsync(CompleteBioSessionRequest request) {
        return await restBioService.CompleteEnrollmentSessionAsync(request.Ticket);
    }
```

O resultado da requisição para esse endpoint é exatamente igual ao [exemplo de retorno da requisição GetLivenessSessionStatusAsync](#exemplo-de-retorno-da-requisição-1)
