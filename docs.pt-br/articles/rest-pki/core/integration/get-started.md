# Primeiros passos para integração - Rest PKI Core

Nesse artigo, você dará os primeiros passos para integrar a sua aplicação com o [Rest PKI Core](../index.md).


## Parâmetros

Para começar, você precisará dos seguintes parâmetros:

* **Endpoint**: endereço da instância do Rest PKI Core a ser utilizada
* **Chave de API**: chave de autenticação com a API

Solicite seus parâmetros ao nosso [suporte ao desenvolvedor](mailto:suporte@lacunasoftware.com).


## Chamando a API

Embora o Rest PKI Core ofereça APIs REST que podem ser facilmente chamadas, elas normalmente não são utilizadas
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

* .NET Standard 2.0+ (para uso em .NET Core 2, .NET Core 3 ou .NET 5 ou ainda em plataformas como UWP)
* .NET Framework 4.5+

#### Aplicações em ASP.NET Core

Se a sua aplicação for em ASP.NET Core, adicione o código abaixo ao método `ConfigureServices()` da classe *Startup.cs* do seu projeto:

```cs
public void ConfigureServices(IServiceCollection services) {
	...
	services.AddRestPki().Configure(Configuration.GetSection("RestPki"));
}
```

No arquivo de configuração *appsettings.json*, adicione a seção `RestPki`:

```json
{
	...
	"RestPki": {
		"Endpoint": "SEU_ENDPOINT_AQUI",
		"ApiKey": "SUA_CHAVE_DE_API_AQUI"
	},
	...
}
```

Nas partes da aplicação que precisarem fazer chamadas à API do serviço, peça via *dependency injection* uma instância de `IRestPkiService`:

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

Caso a sua aplicação não seja em ASP.NET Core, utilize os parâmetros de **endpoint** e **chave de API** para solicitar uma implementação da interface
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

No exemplo acima, o endpoint e chave de API ficariam na seção `appSettings` do arquivo *web.config* (entradas `RestPkiEndpoint` e `RestPkiApiKey` respectivamente).
Entretanto, essa correspondência é apenas um exemplo. Os parâmetros podem ficar onde você preferir, por exemplo no banco de dados ou um arquivo de configuração JSON.

#### Cultura / internacionalização (i18n)

A cultura da thread atual (`Thread.CurrentThread.CurrentUICulture`) é usada para sinalizar nas chamadas ao Rest PKI Core qual a cultura que a API deve observar.
Esse comportamento funciona bem caso a sua aplicação configure a cultura adequada na thread atual (`CurrentThread`).

Caso queira, você também pode alterar esse comportamento, sobrepondo a cultura da thread atual com uma cultura fixa.

Em ASP.NET Core, adicione a propriedade `CultureName` à seção de configuração do Rest PKI no arquivo *appSettings.json*:

```json
{
	...
	"RestPki": {
		...,
		"CultureName": "pt-BR"
	},
	...
}
```

Em .NET convencional, altere a propriedade `CultureName` do objeto `RestPkiOptions`:

```cs
this.restPkiService = RestPkiServiceFactory.GetService(new RestPkiOptions() {
	...,
	CultureName = "pt-BR",
});
```

#### Exceções

As seguintes exceções podem ser lançadas nas chamadas aos métodos do `IRestPkiService`:

* `RestPkiException`: erro de API (geralmente um mal uso da API que pode ser sanado adequando os parâmetros da requisição). A propriedade `Code` contém o código
  de erro da API. Veja os [códigos de erro](error-codes.md).
* `RestErrorException`: erro na chamada HTTP. A propriedade `StatusCode` contém o código HTTP retornado. Veja os [códigos de resposta HTTP](#http-status-codes).

<a name="php" />

### Chamando a API em PHP

Comece adicionando o pacote do Composer [lacuna/restpkicore-client](https://packagist.org/packages/lacuna/restpkicore-client), disponível para:

* PHP 5.5+ (incluindo 7.x)

Para adicionar no seu projeto, coloque isso no seu arquivo `composer.json`:

[!include[composer.json](../../../../../includes/rest-pki/core/get-started/composer.md)] 

Após isso, faça um `composer install` para download do pacote e e suas dependências (se você não tiver o Composer instalado, pegue [aqui](https://getcomposer.org/)).

O pacote é de código aberto, hospedado no [GitHub](https://github.com/LacunaSoftware/RestPkiNgPhpClient). Sinta-se à vontade para fazer o *fork* do repositório se precisar de alguma personalização.

Para obter uma implementação da interface `RestPkiServiceInterface` na sua aplicação, forneça uma instância da classe `RestPkiCoreClient`, tendo fornecido os parâmetros de **endpoint** e **chave de API** da classe `RestPkiOptions`, conforme código abaixo:

[!include[index.php](../../../../../includes/rest-pki/core/get-started/service-php.md)] 

#### Cultura / internacionalização (i18n)

Caso queira, você pode alterar a cultura que a API deve observar. Para isso, forneça o parâmetro `cultureName` à sua instância do `RestPkiOptions` passado na configuração do cliente `RestPkiCoreClient`:

[!include[index.php](../../../../../includes/rest-pki/core/get-started/culture-php.md)] 

#### Exemplos em PHP

Em nosso [repositório de exemplos](https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/php/plain/public), 
todas as pastas terminadas em `-rest-core` contém exemplos referentes ao pacote do Composer [lacuna/restpkicore-client](https://packagist.org/packages/lacuna/restpkicore-client).

<a name="java" />

### Chamando a API em Java

Comece adicionando o pacote do Bintray [restpki-core-client](https://bintray.com/beta/#/lacunasoftware/maven/restpki-core-client), disponível para Java 8+.

Para adicionar no seu projeto, coloque isso no seu arquivo `build.gradle` caso seu projeto utilize Gradle:

[!include[build.gradle](../../../../../includes/rest-pki/core/get-started/gradle.md)] 

Caso seu projeto utiliza Maven, coloque a seguinte dependencia no seu arquivo `pom.xml`:

[!include[pom.xml](../../../../../includes/rest-pki/core/get-started/maven.md)] 

O pacote é de código aberto, hospedado no [GitHub](https://github.com/LacunaSoftware/RestPkiNGJavaClient). Sinta-se à vontade para fazer o *fork* do repositório se precisar de alguma personalização.

Para obter uma implementação da interface `RestPkiService` na sua aplicação, forneça uma instância da classe `RestPkiOptions` com os parâmetros de **endpoint** e **chave de API** preenchidos para o método `getService()` da classe `RestPkiServiceFactory`, conforme código abaixo:

[!include[Main.java](../../../../../includes/rest-pki/core/get-started/service-java.md)] 

#### Cultura / internacionalização (i18n)

Caso queira, você pode alterar a cultura que a API deve observar. Para isso, forneça o parâmetro `culture` à sua instância do `RestPkiOptions` passado no método `getService()` do cliente `RestPkiServiceFactory`:

[!include[Main.java](../../../../../includes/rest-pki/core/get-started/culture-java.md)] 

#### Exemplos em Java

Em nosso [repositório de exemplos](https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/java/springmvc), 
todos arquivos terminados em `RestCoreController` contém exemplos referentes ao pacote Java [com.lacunasoftware.restpkicore:restpki-core-client](https://bintray.com/lacunasoftware/maven/restpki-core-client).

<a name="rest" />

### Chamando a API diretamente

As APIs do Rest PKI Core são RESTful recebendo e retornando mensagens JSON, sendo de fácil uso em qualquer linguagem de programação moderna. Caso
a sua aplicação não utilize nenhuma das linguagens de programação elencadas acima, opte por chamar as APIs do Rest PKI Core diretamente.

Veja a [documentação da API](https://core.pki.rest/swagger).

O parâmetro **endpoint** mencionado acima deve ser prefixado a todas as URLs relativas mencionadas nessa seção.

Já a **chave de API** deve ser passada no header `X-Api-Key` de cada requisição:

```plaintext
X-Api-Key: yourapp|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

<a name="http-status-codes" />

#### Códigos de resposta HTTP

A API responde com os seguintes códigos HTTP:

Código                      | Descrição
--------------------------- | ---------
200 (OK)                    | Requisição processada com sucesso. A resposta é diferente para cada API, consulte a [documentação da API](https://core.pki.rest/swagger) para saber o formato da resposta de cada chamada.
400 (Bad Request)           | Erro de sintaxe na requisição. Por exemplo, um campo obrigatório não foi informado.
401 (Unauthorized)          | A chave de API não foi fornecida ou está inválida.
403 (Forbidden)             | A chave de API passada é válida, porém a aplicação não possui permissões suficientes para realizar a operação solicitada.
422 (Unprocessable Entity)  | Erro de API (geralmente um mal uso da API que pode ser sanado adequando os parâmetros da requisição). O corpo da reposta é um `ErrorModel`, descrito abaixo.
500 (Internal Server Error) | Um erro inesperado aconteceu. O campo `exceptionCode` (string) informado no corpo da resposta pode ajudar no diagnóstico do problema.

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
