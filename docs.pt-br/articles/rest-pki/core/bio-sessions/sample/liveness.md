## Prova de vida

Verifica se há uma pessoa real presente do outro lado da tela, detectando tentativas de fraude com fotos, vídeos ou máscaras. Não realiza a identificação (quem é a pessoa), apenas atesta a presença de um ser humano vivo

Dentro do controller criado no exemplo passado, podemos criar um endpoint que implementa o método `StartLivenessSessionAsync` passando como parâmetro `StartLivenessSessionRequest` e `Guid` (podendo ser nullable).

```cs
[HttpPost("liveness")]
public async Task<StartBioSessionResponse> StartLivenessSessionAsync([FromBody] StartLivenessSessionRequest request, [FromQuery] Guid? subscriptionId) {
	return await restBioService.StartLivenessSessionAsync(request, subscriptionId);
}
```

> [!info]
> Você deve informar ou o `ReturnUrl` (para redirecionamento) ou o `TrustedOrigin` (para widget)
> [Veja a diferença entre ReturnUrl e TrustedOrigin](widget.md)

<!-- // TODO 598 - Nomear essa tabela com "possiveis entradas" -->

| **Parâmetro**                     | **Obrigatório?** | **Tipo** | **Descrição**                                                                                                                                                        |
| --------------------------------- | ---------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ReturnUrl**                     | Condicional*     | String   | URL para redirecionar o usuário após a biometria (obrigatório se não usar Widget).                                                                                   |
| **TrustedOrigin**                 | Condicional*     | String   | URL do seu site onde o Widget está incorporado (obrigatório para uso do Widget).                                                                                     |
| **PlatformPreference**            | Sim              | Enum     | Define o comportamento do dispositivo: NoPreference (0), Web (1), MobileRecommended (2) ou MobileRequired (3)                                                        |
| **SubjectIdentifier**             | Não              | String   | Um nome ou ID para identificar o usuário da sessão.                                                                                                                  |
| **CaptureIdentificationDocument** | Não              | Bool     | Define se, além da face, o usuário deve fotografar um documento de identidade.                                                                                       |
| **FaceCaptureProvider**           | Não              | Enum     | Define o provedor de biometria: `FaceTec` (1) ou`FortFace` (2).                                                                                                      |


### Exemplo de retorno da requisição:

Ao fazer a requisição para `StartLivenessSessionAsync` obtemos a seguinte resposta

```json
{
    "sessionType": 1,
    "sessionId": "c26d02ad-ad6a-4c4f-888d-019d97a2f5b3",
    "sessionUrl": "https://localhost/en/bio/session?t=CfDJ8J6....V2NgLel0&m=dgy"
}
```

---

### Consultando o status

Você pode consultar o estado atual de uma sessão a qualquer momento utilizando o seu sessionId. Isso é útil para monitorar se o usuário já iniciou ou expirou a sessão antes mesmo de ela ser concluída.

> [!TIP]
> Utilize o `GetLivenessSessionStatusAsync` para acompanhar o progresso de uma sessão ativa através do seu SessionId

```C#
[HttpGet("liveness/{sessionId}")]
public async Task<LivenessSessionStatusModel> GetStatus(Guid sessionId) {
    return await restBioService.GetLivenessSessionStatusAsync(sessionId);
}
```

### Exemplo de retorno da requisição:

```JSON
{
    "faceLivenessStatus": {
        "provider": 2,
        "success": false,
        "attemptCount": 0
    },
    "idCaptureStatus": {
        "success": false,
        "matchedFace": false,
        "matchedFaceLevel": null
    },
    "sessionId": "c26d02ad-ad6a-4c4f-888d-019d97a2f5b3",
    "success": null,
    "resultDataAvailable": false
}
```

#### Detalhes dos campos:

* **faceLivenessStatus**:
    * **provider**: Provedor do serviço de biometria. 1 (FaceTec3D), 2 (FortFace), 3 (FaceTec2D).
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

### Finalizando a sessão

Este método é o ponto final. O ticket pode ser usado apenas uma vez.

> [!TIP]
> Utilize o Complete apenas ao final do processo, enviando o Ticket recebido para validar o resultado e encerrar a sessão.

```cs
    [HttpGet("liveness/completion")]
    public async Task<LivenessSessionStatusModel> CompleteLivenessSessionAsync(CompleteBioSessionRequest request) {
        return await restBioService.CompleteLivenessSessionAsync(request.Ticket);
    }
```
O resultado da requisição para esse endpoint é exatamente igual ao [exemplo de retorno da requisição GetLivenessSessionStatusAsync](#exemplo-de-retorno-da-requisição-1)

