# BrazilTrustServices
O pacote nuget `Lacuna.Pki.BrazilTrustServices` abstrai a lógica necessária para acessar o certificado digital.

## Credenciais
Para utilizar os provedores nas suas aplicações é necessário um ClientID e ClientSecret que são obtidos ao realizar o cadastro da sua aplicação no prestador.

Caso não possua estas credenciais, temos uma [página em que é possível realizar este cadastro](https://demos.lacunasoftware.com/tsp-app-registration) (disponível apenas para BirdID, SafeID e VIDaaS).

## Configuração
Alguns serviços já vem pré-configurados no pacote - BirdId (Vault ID), ViDaaS (VALID), NeoId (Serpro), RemoteId (Certisign) e SafeId (Safeweb).

No caso desses serviços, o processo de configuração se dá como mostrado no código abaixo.
```C#
var options = new TrustServicesOptions();

options.Services.Add(new TrustServiceConfig(){
    Service = TrustServiceName.NomeDoServiçoPreconfigurado,
    ClientId = "<Client ID>",
    ClientSecret = "<Client Secret>",
});

var manager = TrustServicesManagerFactory.Create(options);
```

Já no caso de serviços personalizados, além do `Service`, `ClientId` e `ClientSecret`, o `TrustServiceConfig` necessita também do `Endpoint` utilizado para acessar o serviço.

Fora esses campos obrigatórios,`TrustServiceConfig` também permite a personalização de outras informações como:
 - Provider: nome do provedor do serviço sendo configurado (opcional)
 - BadgeUrl: imagem utilizada para diferencial visualmente o serviço (opcional)
 - ProtocolVariant: protocolo utilizado no tratamento de erros. Essa configuração é recomendada para ambientes de homologação. (opicional)

O código abaixo mostra como realizar a configuração de um serviço personalizado.
```C#
var options = new TrustServicesOptions();

options.Services.Add(new TrustServiceConfig(){
    Service = "<Nome do Serviço>",
    ClientId = "<Client ID>",
    ClientSecret = "<Client Secret>",
    Endpoint = "<Endpoint do serviço>",
    Provider = "<Nome do provedor do serviço>",
    BadgeUrl = "<URL da logo do serviço>",
    ProtocolVariant = "<Nome de um dos serviços pré-configurados>",
});

var manager = TrustServicesManagerFactory.Create(options);
```

O `manager`, produto final da configuração, implementa a interface `ITrustServicesManager`. Essa interface define os métodos necessários para obter os certificados digitais em nuvem a serem utilizados nas assinaturas.

## Tipos de sessão
Para acessar os certificados é necessário iniciar uma sessão no serviço informando que tipo de autorização você busca, para que o usuário autorize.

Os tipos de sessão disponíveis são:

- SingleSignature: permite apenas uma requisição para assinatura de apenas um hash;

- MultiSignature: permite apenas uma requisição para assinatura de múltiplos hashes;

- SignatureSession: permite várias requisições para várias assinaturas dentro do prazo de validade ou até a revogação pela aplicação ou pelo usuário;

- AuthenticationSession: não permite a realização de assinaturas, apenas a autenticação do titular.

## Fluxos de autorização
O acesso aos certificados digitais em nuvem podem seguir dois fluxos: OAuth e PWD.

### Fluxo PWD
No fluxo PWD, o usuário fornece um código que é enviado para o serviço para autorizar a assinatura. Esse fluxo é composto de dois passos:
1.	Discover: A aplicação buscará em todos os provedores configurados por aqueles que possuem certificado do usuário (identificado pelo CPF ou CNPJ do usuário).
    ```C#
    var manager = TrustServicesManagerFactory.Create(options);
    // Retirar a pontuação do CPF ou CNPJ.
    var plainCpf = Regex.Replace(cpf, "/[.-]/", "");

    // Descobre os serviços que contêm certificado vinculado
    // ao CPF fornecido. No caso de busca por CNPJ, utilize 
    // DiscoverByCnpjAsync.
    var services = await manager.DiscoverByCpfAsync(plainCpf);
    ```
2.	Authorize: O usuário escolhe qual serviço deseja utilizar e o código de autorização que será enviado para o serviço escolhido autorizar. Se autorizado será retornado o certificado digital.
    ```C#
    var manager = TrustServicesManagerFactory.Create(options);
    // Retirar a pontuação do CPF ou CNPJ.
    var plainCpf = Regex.Replace(cpf, "/[.-]/", "");

    // Autoriza a assinatura no servidor utilizando o código
    // fornecido pelo usuário.
    var passwordAuthorizeResult = await manager.PasswordAuthorizeAsync(
        service, // serviço escolhido pelo usuário
        plainCpf, // CPF do usuário
        password, // código de autorização fornecido
        TrustServiceSessionTypes.SignatureSession);

    // Obtém o certificado digital
    var certificatesWithKey = await passwordAuthorizeResult.GetCertificatesWithKeyAsync();
    ```

### Fluxo OAuth
No fluxo OAuth, o usuário é redirecionado para fora da sua aplicação e depois de autorizar a assinatura é redirecionado de volta. Esse fluxo é composto de três passos:
1.	Discover: A aplicação buscará em todos os serviços configurados por aqueles que possuem certificado do usuário (identificado pelo CPF ou CNPJ do usuário).
    ```C#
    var manager = TrustServicesManagerFactory.Create(options);
    // Retirar a pontuação do CPF ou CNPJ.
    var plainCpf = Regex.Replace(cpf, "/[.-]/", "");
    // Descobre os serviços que contêm certificado vinculado
    // ao CPF fornecido e já inicia o processo de autorização.
    // No caso de busca por CNPJ, utilize 
    // DiscoverByCnpjAndStartAuthAsync.
    var services = await manager.DiscoverByCpfAndStartAuthAsync(
        plainCpf,
        RedirectUrl, // URL de redirecionamento de volta para sua aplicação para retornar após a autorização.
        TrustServiceSessionTypes.SignatureSession,
        fileToSign); // customState - string contendo qualquer informação que deseje recuperar no último passo.
    ```

2.	Redirect: Além da lista de provedores que contém aquele CPF ou CNPJ, também será fornecido um URL de redirecionamento para este usuário, onde será feito o processo de autorização do uso do certificado no ambiente do provedor escolhido. O usuário será redirecionado de volta para a aplicação.

3.	Complete: No redirecionamento de volta, serão fornecidos dois parâmetros na URL (query parameters: `'code'` e `'state'`). Com estes dois valores é possível recuperar o certificado para então completar a assinatura.
    ```C#
    var manager = TrustServicesManagerFactory.Create(options);
    // Completa autorização
    var completeAuthResult = await manager.CompleteAuthAsync(code, state);

    // Recupera a informação enviada durante o passo de discover
    var fileToSign = completeAuthResult.CustomState;
    // Obtém o certificado digital
    var certificatesWithKey = await completeAuthResult.GetCertificatesWithKeyAsync();
    ```
