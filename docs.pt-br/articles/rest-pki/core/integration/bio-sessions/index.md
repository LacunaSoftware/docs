# Sessões de biometria - Rest PKI Core

**Sessões de biometria** são uma funcionalidade do [Rest PKI Core](../../index.md) que permitem que seus usuários realizem operações biométricas, tais como prova de vida (Liveness), cadastro, autenticação e identificação facial, além de capturas de documentos de identidade.

## Fluxos de FrontEnd

O [Rest PKI Core](../../index.md) já fornece uma tela de captura biométrica, que poderá ser utilizada na sua aplicação por meio de um redirecionamento ou através da utilização do nosso Widget.

### Fluxo de Redirecionamento (ReturnUrl)

Neste modelo, sua aplicação "perde o foco". O usuário é enviado para uma URL do RestPkiCore para capturar a face.
Para uitilizá-lo, você deve passar o parâmetro **`ReturnUrl`** na criação da sessão.

- **Quando usar:** Se você quer uma implementação mais simples, e não existe problema em redirecionar o usuário para completar o fluxo.
- **Vantagens:** Implementação mais simples, não há necessidade de configurações avançadas como CSP (Content Security Policies).
- **O que acontece após o fim:** O usuário é redirecionado para a URL que você informou no `ReturnUrl`, trazendo na _Query String_ o `completeTicket` (necessário para você consultar o resultado depois).

> TODO: traduzir diagrama e adicionar imagem aqui

### Fluxo Incorporado (Widget/TrustedOrigin)

Neste modelo, o usuário permanece durante todo o tempo dentro da página da sua aplicação, pois a tela de captura é renderizada dentro do seu próprio site através da utilização do nosso Widget.
Para utilizá-lo, você deve passar o parâmetro **`TrustedOrigin`** na criação da sessão.

> O `TrustedOrigin` deve ser a URL base do seu site (ex: `https://meusite.com`). Isso funciona como uma proteção do ambiente JavaScript, garantindo que o widget só funcione no seu domínio.

- **Quando usar:** Se você quer manter o usuário dentro do seu ambiente para uma experiência mais fluida.
- **Vantagens:** O fluxo é integrado, não é necessário redirecionar o usuário nem processar parâmetros de retorno (_Query String_).
- **O que acontece após o fim:** O usuário permanece na tela da sua aplicação, o resultado da sessão (`completeTicket`) vem na própria chamada do componente.

> TODO: traduzir diagrama e colocar imagem aqui

> TODO: adicionar códigos de exemplo (CDN e npm)

## Configuração do Backend

> TODO: explicação resumida sobre chave de API, 

Utilização das bibliotecas (ClientLibs):
* [C#/.NET](client-libs/dotnet.md)

> TODO: Email de suporte para outras lingaugens ?

## Parametros das sessões de biometria

TODO: Loren inpsun....

### Parâmetros gerais
- **TrustedOrigin:** TODO
- **ReturnUrl:** TODO
- **PlatformPreference:** TODO

### Identificador dos usuários (`SubjectIdentifier`)

TODO
(citar que pode ter um padrão (CPF, CNPJ) e futuramente vamos criar uma página com instruções da tela de configuração de biometria)

### Parâmetros das sessões com captura facial
- **FaceCaptureProvider:** TODO

## Tipos de sessão

* [Prova de vida (`Liveness`)](liveness.md)
* [Cadastro biométrico (`Enrollment`)](enrollment.md)
* [Autenticação facial (`Authentication`)](authentication.md)
* [Identificação facial (`Identification`)](identification.md)
* [Captura de documento (`IdentificationDocumentCapture`)](id-capture.md)

## Veja também

* [Repositório de exemplos(GitHub)](https://github.com/LacunaSoftware/RestBioSamples)
* [Exemplo de backend (.NET)](https://github.com/LacunaSoftware/RestBioSamples/tree/main/backend/dotnet)
* [Exemplo de backend (Java)](https://github.com/LacunaSoftware/RestBioSamples/tree/main/backend/java)
* [Exemplo de frontend (Angular)](https://github.com/LacunaSoftware/RestBioSamples/tree/main/frontend/angular)
* [Exemplo de frontend (JS/HTML)](https://github.com/LacunaSoftware/RestBioSamples/tree/main/frontend/generic)
