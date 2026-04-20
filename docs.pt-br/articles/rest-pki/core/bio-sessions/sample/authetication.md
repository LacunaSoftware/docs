# Autenticação - Rest PKI Core

Compara o rosto capturado em tempo real com uma biometria previamente cadastrada, confirmando se o usuário é realmente quem afirma ser.

Dentro do controller criado no exemplo passado, podemos criar um endpoint que implementa o método `StartAuthenticationSessionAsync` passando como parâmetro `StartBioAuthenticationSessionRequest` e `Guid` (podendo ser nullable).

```cs
    [Route("authentication")]
    public async Task<StartBioSessionResponse> StartAuthenticationSessionAsync([FromBody]StartBioAuthenticationSessionRequest request, Guid? subscriptionId)
    {
        return await restBioService.StartAuthenticationSessionAsync(request, subscriptionId);
    }
```

> [!info]
> Você deve informar ou o `ReturnUrl` (para redirecionamento) ou o `TrustedOrigin` (para widget)
> [Veja a diferença entre ReturnUrl e TrustedOrigin](widget.md)


| **Parâmetro**                          | **Obrigatório?** | **Tipo** | **Descrição**                                                                                                 |
| -------------------------------------- | ---------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| **ReturnUrl**                          | Condicional*     | String   | URL para redirecionar o usuário após a biometria (obrigatório se não usar Widget).                            |
| **TrustedOrigin**                      | Condicional*     | String   | URL do seu site onde o Widget está incorporado (obrigatório para uso do Widget).                              |
| **PlatformPreference**                 | Sim              | Enum     | Define o comportamento do dispositivo: NoPreference (0), Web (1), MobileRecommended (2) ou MobileRequired (3) |
| **Subject**                            | sim              | Object   | Objeto de referência do usuário                                                                               |
| **Subject.Identifier**                 | sim              | String   | Um nome ou ID para identificar o usuário da sessão.                                                           |
| **Subject.Id**                         | Não              | Guid     | Id do cadastro                                                                                                |
| **FaceCaptureProvider**                | Não              | Enum     | Define o provedor de biometria: `FaceTec` (1) ou`FortFace` (2).                                               |



