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


#### Diagrama

![img](../../../../../../images\rest-pki\core\biometric-session-integration-return-url.png)

##### 1. Preparação (Backend) 
Tudo começa quando o seu usuário clica para iniciar a biometria no seu site.

- `startLiveness()`: O seu Frontend avisa o seu Backend que uma sessão precisa ser iniciada.

- `StartLivenessSessionAsync`: O Backend da sua aplicação faz uma requisição para a API do RestPkiCore. 

- `sessionUrl`: O RestPkiCore retorna uma URL única da sessão. Seu backend repassa essa URL para o seu frontend.

##### 2. Ação do Usuário (Frontend + RedirectUrl)
Agora é o momento em que a câmera é aberta e o usuário interage.

- `redirect to sessionUrl`: O seu Frontend redireciona para a página de sessão de biometria, a página assume o controle abre a câmera, orienta o usuário e captura a face/documento.

- `RedirectUrl + completeTicket`: Assim que o usuário termina, a janela fecha a câmera e carrega a janela com o `redirectUrl + ticket` através de query params. 

##### 3. Validação e Resultado (Backend)
Agora o seu sistema precisa conferir se o usuário passou no teste.

- `CompleteLiveness(completeTicket)`: O seu Frontend envia o Ticket para o seu próprio Backend.

- `CompleteLivenessSession(completeTicket)`: O seu Backend envia esse ticket para o RestPkiCore.

- `LivenessSessionStatus`: O RestPkiCore responde ao seu Backend com o veredito (Sucesso, Falha e os dados capturados).

- `Success/Fail`: Finalmente, o seu Backend responde ao seu Frontend confirmando se a operação foi aprovada, permitindo que o usuário siga no seu fluxo (ex: liberar um pagamento ou login).


### Fluxo Incorporado (Widget/TrustedOrigin)

Neste modelo, o usuário permanece durante todo o tempo dentro da página da sua aplicação, pois a tela de captura é renderizada dentro do seu próprio site através da utilização do nosso Widget.
Para utilizá-lo, você deve passar o parâmetro **`TrustedOrigin`** na criação da sessão.

> [!info]
> O `TrustedOrigin` deve ser a URL base do seu site (ex: `https://meusite.com`). Isso funciona como uma proteção do ambiente JavaScript, garantindo que o widget só funcione no seu domínio.

- **Quando usar:** Se você quer manter o usuário dentro do seu ambiente para uma experiência mais fluida.
- **Vantagens:** O fluxo é integrado, não é necessário redirecionar o usuário nem processar parâmetros de retorno (_Query String_).
- **O que acontece após o fim:** O usuário permanece na tela da sua aplicação, o resultado da sessão (`completeTicket`) vem na própria chamada do componente.

#### Diagrama

![img](../../../../../../images/rest-pki/core/biometric-session-integration-widget.png)

##### 1. Preparação (Backend) 
Tudo começa quando o seu usuário clica para iniciar a biometria no seu site.
- `startLiveness()`: O seu Frontend avisa o seu Backend que uma sessão precisa ser iniciada.
- `StartLivenessSessionAsync`: O Backend da sua aplicação faz uma requisição para a API da Lacuna (RestPkiCore). 
- `sessionUrl`: A Lacuna retorna uma URL única da sessão. Seu backend repassa essa URL para o seu frontend.

##### 2. Ação do Usuário (Frontend + Widget)
Agora é o momento em que a câmera é aberta e o usuário interage.

- `performBioSession(sessionUrl)`: O seu Frontend "alimenta" o Widget da Lacuna com a URL recebida. O Widget assume o controle, abre a câmera, orienta o usuário e captura a face/documento.

- `completeTicket`: Assim que o usuário termina, o Widget fecha a câmera e devolve para o seu Frontend um "Ticket". 

##### 3. Validação e Resultado (Backend)
Agora o seu sistema precisa conferir se o usuário passou no teste.

- `CompleteLiveness(completeTicket)`: O seu Frontend envia o Ticket para o seu próprio Backend.

- `CompleteLivenessSession(completeTicket)`: O seu Backend envia esse ticket para a Lacuna.

- `LivenessSessionStatus`: A Lacuna responde ao seu Backend com o veredito (Sucesso, Falha e os dados capturados).

- `Success/Fail`: Finalmente, o seu Backend responde ao seu Frontend confirmando se a operação foi aprovada, permitindo que o usuário siga no seu fluxo (ex: liberar um pagamento ou login).


#### Instalação e Configuração do Widget

Para integrar a captura biométrica ao seu frontend, você pode utilizar o Rest PKI Widget. Existem duas formas de adicioná-lo ao seu projeto: via **CDN** (direto no HTML) ou via **NPM** (para projetos que utilizam frameworks como React, Angular ou Vue).

##### 1. Via CDN

Esta é a forma mais rápida de começar. Basta adicionar a tag  `script` no `head` do seu arquivo HTML. Você pode encontrar todas as versões disponíveis no [repositório de libs da lacuna](https://cdn.lacunasoftware.com/libs/restpki/).

```html
<!DOCTYPE html>
<head>
    <script 
        type="text/javascript" 
        src="https://cdn.lacunasoftware.com/libs/restpki/lacuna-restpki-widget-1.3.1.min.js"
        integrity="sha256-PziIkD0H3D/3KAcwE/u7u8MTbd6k62IlI9mmqzkc9r0="
        crossorigin="anonymous">
    </script>
</head>
</html>
```

##### 2. Via NPM


Se você utiliza frameworks como React, Angular ou Vue, instale o pacote via terminal para garantir o controle de versões e tipagens, pode ser [encontrada no respositorio](https://www.npmjs.com/package/lacuna-restpki-widget):

```shell
npm i lacuna-restpki-widget
```

Você pode verificar no arquivo `package.json` se a dependencia foi instalada

```json
{
    ...
    "dependencies": {
        "lacuna-restpki-widget": "x.y.z",
    },
    ...
}
```

Após a instalação, você pode importar o widget no seu componente ou arquivo JavaScript:

```js
import { RestPkiWidget } from 'lacuna-restpki-widget';
```

---

## Configuração do Backend

> TODO: explicação resumida sobre chave de API, 

Utilização das bibliotecas (ClientLibs):
* [C#/.NET](client-libs/dotnet.md)

Se você precisar de um exemplo em uma linguagem que não foi listada, por favor entre em contato conosco em [suporte@lacunasoftware.com](mailto:suporte@lacunasoftware.com) ou CLN 110 - A - Sala 203, Brasília-DF, Brasil. Telefone: +55 61 3030-5700.

## Parametros das sessões de biometria

Ao iniciar uma sessão, você deve configurar os parâmetros que definem como o usuário irá interagir com o sistema e quais regras de segurança serão aplicadas.

### Parâmetros gerais
- **TrustedOrigin:** Parâmetro obrigatório para o fluxo Incorporado. Deve ser a URL do domínio onde o widget será carregado (ex: https://meu-site.com.br). Isso impede que sua sessão seja roubada e executada em sites maliciosos.

- **ReturnUrl:** Parâmetro obrigatório para o Fluxo de Redirecionamento. É a URL para onde o usuário será enviado após concluir a biometria. O resultado (ticket) será anexado a esta URL via Query String.
- **PlatformPreference:** Define a preferência de plataforma e configuração do QRCode.
    - **NoPreference**: O sistema permite realizar a sessão tanto pelo computador quanto por um dispositivo móvel ao utlizar um QR Code.
    - **PreferMobile**: O sistema permite iniciar a sessão pelo computador, mas recomenda que seja realizado por meio de um dispositivo móvel exibindo um QR code para realizar a sessão.
    - **RequireMobile**: Bloqueia o uso em desktops, exigindo um dispositivo móvel.

### Identificador dos usuários (`SubjectIdentifier`)
O SubjectIdentifier é um campo que vincula a sessão de biometria a um usuário específico no seu banco de dados.

> [!tip]
> Utilize identificadores únicos e constantes, como CPF (apenas números), CNPJ, E-mail ou o UUID do seu sistema.


### Parâmetros das sessões com captura facial
- **FaceCaptureProvider:** Define qual tecnologia de captura será utilizada na sessão de biometria.
    - Atualmente o único provedor utilizado pelo sistema é o `FaceTecLiveness3d` 

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
