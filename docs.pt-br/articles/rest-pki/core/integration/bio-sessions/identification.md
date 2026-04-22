# Identificação facial (Identification)  - Rest PKI Core

 - Busca o rosto capturado em uma base de cadastros para descobrir a quem ele pertence.
 - Ao contrário da autenticação, não parte de um usuário conhecido
 
## Criação da sessão

Para criar uma sessão de liveness, pode-se utilizar o método `StartIdentificationSessionAsync` das ClientLibs, passando como parâmetro `StartBioIdentificationSessionRequest`.

Esse método realiza uma requisição `POST` para a rota `/api/bio/sessions/identification` [(Swagger)](https://restpkicore.lacunasoftware.com/swagger/index.html#operations-BioSessions-post_api_bio_sessions_liveness).


### Parâmetros (`BioIdentificationRequest`)
| **Parâmetro**                     | **Obrigatório?** | **Tipo** | **Descrição** |
| --------------------------------- | ---------------- | -------- | ------------- |
| **ReturnUrl**                     | Condicional*     | String   | URL para redirecionar o usuário após a biometria. [(veja mais detalhes)](index.md#fluxo-de-redirecionamento-returnurl)
| **TrustedOrigin**                 | Condicional*     | String   | URL do seu site onde o Widget está incorporado. [(veja mais detalhes)](index.md#fluxo-incorporado-widgettrustedorigin)
| **PlatformPreference**            | Não              | Enum     | Define a preferência de plataforma e configuração do QRCode. [(veja mais detalhes)](index.md#parâmetros-gerais)
| **FaceCaptureProvider**           | Não              | Enum     | Define o provedor de biometria. [(veja mais detalhes)](index.md#parâmetros-das-sessões-com-captura-facial)

> [!tip]
> *Você deve informar pelo menos um dos dois parâmetros: [Veja a diferença entre ReturnUrl e TrustedOrigin](index.md#fluxos-de-frontend)
> - `ReturnUrl` (para redirecionamento) 
> - `TrustedOrigin` (para widget)

> Os parâmetros não obrigatórios podem ser deixados em branco (`null`) e serão automaticamente preenchidos pelos padrões do sistema.

### Exemplo de resposta da requisição:

```json
{
  "sessionType": "Identification",
  "sessionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "sessionUrl": "string"
}
```

> TODO: resumo do que o usuário deve fazer com o sessionUrl e colocar um link para o fluxo de integração.

---

## Completando a sessão

Para concluir uma sessão de identificação, pode-se utilizar o método `CompleteIdentificationSessionAsync` das ClientLibs, passando como parâmetro, passando como parâmetro `CompleteBioSessionRequest`.

Este método é o ponto final. O ticket pode ser usado apenas uma vez.

> [!TIP]
> Utilize o Complete apenas ao final do processo, enviando o Ticket recebido para validar o resultado e encerrar a sessão.

### Exemplo de resposta da requisição:

```JSON
{
  "identifiedSubjectId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "identifiedSubjectIdentifier": "string",
  "failure": "CaptureFailed",
  "sessionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "success": true,
  "resultDataAvailable": true
}
```

#### Detalhes dos campos:

* **identifiedSubjectId**: 
* **identifiedSubjectIdentifier**: 
* **failure**: Informa se houve alguma falha ao realizar a sessão, consulte a lista de falhas.
* **sessionId**: ID da sessão do RestPKICore.
* **success**: Informa se a sessão de cadastro foi bem-sucedida.
* **resultDataAvailable**: Indica se é possivel consultar a imagem capturada na sessão.

#### Failures

| **Enum**                          | **Descrição**                                      |
| --------------------------------- | -------------------------------------------------- |
| CaptureFailed                     | A captura da imagem não pôde ser finalizada. Geralmente ocorre por interrupção do usuário.
| LivenessFailed                    | O usuário não passou no teste de Prova de Vida. O número de tentativas excedeu o excedeu o limite.
| NoMatch                           | Não corresponde à biometria de referência cadastrada para aquele usuário.
| BadImage                          | A imagem capturada não possui qualidade suficiente para processamento. Pode ser causada por baixa iluminação ou desfoque (blur).

## Consultando o status

Você pode consultar o estado atual de uma sessão a qualquer momento utilizando o seu `sessionId`. Isso é útil para monitorar se o usuário já iniciou ou expirou a sessão antes mesmo de ela ser concluída.

> [!TIP]
> Utilize o `GetIdentificationSessionStatusAsync` para acompanhar o progresso de uma sessão ativa através do seu SessionId

O resultado da requisição para esse endpoint é exatamente igual ao [exemplo de retorno da requisição CompleteIdentificationSessionAsync](#exemplo-de-resposta-da-requisição-1)
