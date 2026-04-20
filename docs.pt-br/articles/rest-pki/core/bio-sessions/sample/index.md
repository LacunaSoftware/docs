# Exemplos de Sessão biométrica - Rest PKI Core

Antes de explorar os casos de uso, é necessário configurar a biblioteca do Rest PKI Core em sua aplicação. Os exemplos abaixo utilizam **.NET 10** (ou superior).

## 1. Configuração do ambiente

No seu arquivo `appsettings.json`, adicione as credenciais obtidas no painel do Rest PKI Core:

```json
{
  ...,
  "RestPki": {
    "Endpoint": "SEU_ENDPOINT_AQUI",
    "ApiKey": "SUA_CHAVE_DE_API_AQUI"
  }
}
```

No arquivo Program.cs, registre o serviço antes da chamada de builder.Build():

``` C#
// Registra o cliente do Rest PKI Core utilizando a seção do appsettings
builder.Services.AddRestPki().Configure(builder.Configuration.GetSection("RestPki")); 

var app = builder.Build();
```

## 2. Injeção de Dependência
Para utilizar as funcionalidades de biometria em seus Controllers, injete a interface IRestBioService via construtor.

> [!Note]
> A interface IRestBioService é a responsável especificamente por todas as operações de sessões biométricas (Liveness, Cadastro, Autenticação, etc).


```C#
using Lacuna.RestPki.Client;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/sessions")]
public class MyController : ControllerBase {

    private readonly IRestBioService _restBioService;
    
    public MyController(IRestBioService restBioService) {
        _restBioService = restBioService;
    }
    
    // Os métodos de exemplo serão implementados aqui...
}
```

Casos de Uso Disponíveis

Com a configuração concluída, siga para o guia de implementação da funcionalidade desejada:

<!-- TODO-598 ESCREVER SOBRE PERMISSÕES DE ROTA! (Diferença entre permissão e autorização) -->

[Prova de vida](Liveness)
[Cadastro Biométrico](enrollment.md)
[Autenticação Facial]()