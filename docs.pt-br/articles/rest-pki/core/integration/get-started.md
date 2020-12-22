# Primeiros passos para integração - Rest PKI Core

Nesse artigo, você dará os primeiros passos para integrar a sua aplicação com o [Rest PKI Core](../index.md).


## Parâmetros

Para começar, você precisará dos seguintes parâmetros:

* **Endpoint**: endereço da instância do Rest PKI Core que será utilizada
* **Chave de API**: chave de autenticação com a API

Solicite ao nosso [suporte ao desenvolvedor](mailto:suporte@lacunasoftware.com) seus parâmetros.


## Chamando a API

Embora o Rest PKI Core ofereça APIs REST que podem ser facilmente consumidas, elas normalmente não são utilizadas
diretamente. Ao invés disso, oferecemos bibliotecas para consumir os serviços do Rest PKI Core (*client libs*) em diversas
linguagens de programação e diversos projetos de exemplos que demonstram o uso dessas bibliotecas, de modo que os
programadores não precisem se preocupar com os detalhes envolvidos no consumo de APIs e possam codificar diretamente
em sua linguagem preferida.

Escolha uma das linguagens de programação abaixo:

* [.NET](#dotnet)
* [PHP](#php)
* [Java](#java)

Caso sua aplicação utilize outra linguagem de programação, [chame as APIs diretamente](#rest).


<a name="dotnet" />

### Chamando a API em .NET

Comece adicionando o pacote de Nuget [Lacuna.RestPkiCore.Client](https://www.nuget.org/packages/Lacuna.RestPkiCore.Client/), disponível para:

* .NET Standard 2.0+ (para uso em .NET Core 2, .NET Core 3 ou .NET 5 ou ainda em plataformas como Xamarim, UWP etc)
* .NET Framework 4.5+

#### Aplicações em ASP.NET Core

Em seguida, se a sua aplicação for em ASP.NET Core, adicione o seguinte ao método `ConfigureServices()` da classe *Startup.cs* do seu projeto:

```cs
public void ConfigureServices(IServiceCollection services) {
	...
	services.AddRestPki()
		.Configure(Configuration.GetSection("RestPki"));
}
```

No arquivo de configuração *appsettings.json*, adicione a seção `RestPki`:

```json
	...
	"RestPki": {
		"Endpoint": "...",
		"ApiKey": "..."
	},
	...
```

Nas partes da aplicação que precisarem fazer chamadas à API do serviço, peça via *dependency injection* uma instância de `IScannerService`:

```cs
using Lacuna.RestPki.Client;

public MyController : ApiController {

	private readonly IRestPkiService restPkiService;

	public MyController(IRestPkiService restPkiService) {
		this.restPkiService = restPkiService;
	}

	...
}
```

#### Aplicações em .NET convencional

Caso a sua aplicação não seja em ASP.NET Core, utilize os parâmetros de **endpoint** e **API key** para solicitar uma implementação da interface
`IRestPkiService` à classe estática `RestPkiServiceFactory`:

```cs
using Lacuna.RestPki.Client;

public MyController : ApiController {

	private readonly IRestPkiService restPkiService;

	public MyController() {
		this.restPkiService = RestPkiServiceFactory.GetService(new RestPkiOptions() {
			Endpoint = ConfigurationManager.AppSettings["RestPkiEndpoint"],
			ApiKey = ConfigurationManager.AppSettings["RestPkiApiKey"],
		});
	}

	...
}
```

No exemplo acima, o endpoint e API Key ficariam na seção `appSettings` do arquivo *web.config* (entradas `RestPkiEndpoint` e `RestPkiApiKey` respectivamente).
Entretanto, essa correspondência é apenas um exemplo. Os parâmetros podem ficar onde você preferir, por exemplo no banco de dados ou um arquivo de configuração JSON.

#### Exceções

As seguintes exceções podem ocorrer nas chamdas aos métodos do `IRestPkiService`:

* `RestPkiException`: erro de API (geralmente um mal uso da API que pode ser sanado adequando os parâmetros da requisição). A propriedade `Code` contém o código
  de erro da API. Veja os [códigos de erro](error-codes.md).
* `RestErrorException`: erro na chamada HTTP. A propriedade `StatusCode` contém o código HTTP retornado. Veja os [códigos de resposta HTTP](#http-status-codes).

<a name="php" />

### Chamando a API em PHP

Em breve estará disponível o pacote para PHP **lacuna/restpkicore-client** (previsão: 18/01/2021)


<a name="java" />

### Chamando a API em Java

Em breve estará disponível o pacote para Java **com.lacunasoftware.restpki:restpkicore-client** (previsão: 01/02/2021)


<a name="rest" />

### Chamando a API diretamente

As APIs do Rest PKI Core são RESTful recebendo e retornando mensagens JSON, sendo de fácil uso em qualquer linguagem de programação moderna.

O parâmetro **endpoint** mencionado acima deve ser prefixado a todas as URLs relativas mencionadas nessa seção.

Já a **chave de API** deve ser passado no header `X-Api-Key` de cada requisição:

```plaintext
X-Api-Key: yourapp|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

<a name="http-status-codes">

#### Códigos de resposta HTTP

A API responde com os seguintes códigos HTTP:

Código                          | Descrição
------------------------------- | ---------
**200 (OK)**                    | Requisição processada com sucesso. A resposta é diferente para cada API, refira-se a documentação da API específica para saber o formato da resposta
**400 (Bad Request)**           | Erro de sintaxe na requisição. Por exemplo, um campo obrigatório não foi informado
**401 (Unauthorized)**          | A chave de API não foi fornecida ou está inválida
**403 (Forbidden)**             | A chave de API passada é válida, porém a aplicação não possui permissões suficientes para realizar a operação solicitada
**422 (Unprocessable Entity)**  | Erro de API. O corpo da reposta é um `ErrorModel`, descrito abaixo
**500 (Internal Server Error)** | Um erro inesperado aconteceu. O campo `exceptionCode` (string) informado no corpo da resposta pode ajudar no diagnóstico do problema

#### ErrorModel

Quando a API retorna o código de resposta 422 (Unprocessable Entity), significa que um erro de API ocorreu (geralmente um mal uso da API que pode ser sanado
adequando os parâmetros da requisição). Nesse caso, o corpo da resposta é um `ErrorModel` contendo:

Campo     | Tipo     | Descrição
--------- | -------- | ---------
`code`    | `string` | Contém o código de erro (veja os [códigos de erro](error-codes.md))
`message` | `string` | Descrição do erro (mais adequada para ser logada, e não para ser exibida para o usuário, pois não é internacionalizada)

Podemos ver abaixo um exemplo de `ErrorModel`:

```json
{
	"code": "SignatureSessionNotFound",
	"message": "Signature session not found: 00000000-0000-0000-0000-000000000000"
}
```

#### Cultura / internacionalização (i18n)

O request header `Accept-Language` é observado pela API do Rest PKI Core, influenciando o comportamento da API. Os seguintes códigos de cultura são suportados:

* `pt-BR` (ou apenas `pt`)
* `en-US` (ou apenas `en`)

> [!NOTE]
> Mensagens de erro não são afetadas por esse header e, portanto, não devem ser exibidas para o usuário, mas sim registradas no log de sistema
