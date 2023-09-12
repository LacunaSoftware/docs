# Primeiros passos para integração - Amplia Reg

Nesse artigo, você dará os primeiros passos para integrar a sua aplicação com o [Amplia Reg](../index.md).


## Parâmetros

Para começar, você precisará dos seguintes parâmetros:

* **Endpoint**: endereço da instância do Amplia Reg a ser utilizada
* **Chave de API**: chave de autenticação com a API

Se estiver utilizando o Amplia Reg como um serviço (SaaS), solicite seus parâmetros ao nosso [suporte ao desenvolvedor](mailto:suporte@lacunasoftware.com).

Caso esteja utilizando uma [instância própria](../on-premises/index.md), o *endpoint* é o próprio endereço do painel de controle do Amplia Reg, por exemplo
`https://ampliareg.suaempresa.com.br/`. Crie você mesmo uma chave de API seguindo os passos abaixo:

1. Autentique-se no painel de controle da sua instância
1. No menu lateral, clique em **Aplicações**, em seguida em **Adicionar**
1. Preencha um **nome** para a aplicação
1. Marque o papel `Operador` (este papel é suficiente para realizar a maioria das operações tipicamente realizadas por API)
1. Clique em **Criar**
1. Na página de detalhes da aplicação, clique em **Chaves**, em seguida em **Adicionar**
1. Preencha uma descrição qualquer para a chave e escolha uma expiração (recomenda-se escolher **Nunca expira**) e clique em **Criar**
1. **Tome nota da chave de API exibida** pois não será possível recuperá-la mais tarde


## Chamando a API

Embora o Amplia Reg ofereça APIs REST que podem ser facilmente chamadas, elas normalmente não são utilizadas
diretamente. Ao invés disso, oferecemos bibliotecas para consumir os serviços do Amplia Reg (*client libs*) em diferentes
linguagens de programação e também projetos de exemplos que demonstram o uso dessas bibliotecas, de modo que os
programadores não precisem se preocupar com os detalhes envolvidos no consumo de APIs e possam codificar diretamente
em sua linguagem preferida.

Escolha uma das linguagens de programação abaixo:

* [.NET](#dotnet)

Caso sua aplicação utilize outra linguagem de programação, [chame as APIs diretamente](#rest).


<a name="dotnet" />

### Chamando a API em .NET

Comece adicionando o pacote de Nuget [Lacuna.AmpliaRegNg.Client](https://www.nuget.org/packages/Lacuna.AmpliaRegNg.Client/).

> [!NOTE]
> O *target* do pacote é .NET Standard 2.0, o que significa que ele é compatível com .NET Framework >= 4.6.1 e .NET Core >= 2.0.

#### Aplicações em ASP.NET Core

Se a sua aplicação for em ASP.NET Core, adicione o código abaixo ao método `ConfigureServices()` da classe *Startup.cs* do seu projeto:

```cs
public void ConfigureServices(IServiceCollection services) {
	...
	services.AddAmpliaReg().Configure(Configuration.GetSection("AmpliaReg"));
}
```

No arquivo de configuração *appsettings.json*, adicione a seção `AmpliaReg`:

```json
{
	...
	"AmpliaReg": {
		"Endpoint": "ENDPOINT_DA_SUA_INSTANCIA_AQUI",
		"ApiKey": "SUA_CHAVE_DE_API_AQUI"
	},
	...
}
```

Nas partes da aplicação que precisarem fazer chamadas à API do serviço, peça via *dependency injection* uma instância de `IAmpliaRegService`:

```cs
using Lacuna.AmpliaRegNg.Client;

public MyController : ApiController {

	private readonly IAmpliaRegService ampliaRegService;

	public MyController(IAmpliaRegService ampliaRegService) {
		this.ampliaRegService = ampliaRegService;
	}

	...
}
```

#### Aplicações em .NET convencional

Caso a sua aplicação não seja em ASP.NET Core, utilize os parâmetros de **endpoint** e **chave de API** para solicitar uma implementação da interface
`IAmpliaRegService` à classe estática `AmpliaRegServiceFactory`:

```cs
using Lacuna.AmpliaRegNg.Client;

public MyController : ApiController {

	private readonly IAmpliaRegService ampliaRegService;

	public MyController() {
		this.ampliaRegService = AmpliaRegServiceFactory.GetService(new AmpliaRegOptions() {
			Endpoint = ConfigurationManager.AppSettings["AmpliaRegEndpoint"],
			ApiKey = ConfigurationManager.AppSettings["AmpliaRegApiKey"],
		});
	}

	...
}
```

No exemplo acima, o endpoint e chave de API ficariam na seção `appSettings` do arquivo *web.config* (entradas `AmpliaRegEndpoint` e `AmpliaRegApiKey` respectivamente).
Entretanto, essa correspondência é apenas um exemplo. Os parâmetros podem ficar onde você preferir, por exemplo no banco de dados ou um arquivo de configuração JSON.

#### Cultura / internacionalização (i18n)

A cultura da thread atual (`Thread.CurrentThread.CurrentUICulture`) é usada para sinalizar nas chamadas ao Amplia Reg qual a cultura que a API deve observar.
Esse comportamento funciona bem caso a sua aplicação configure a cultura adequada na thread atual (`CurrentThread`).

Caso queira, você também pode alterar esse comportamento, sobrepondo a cultura da thread atual com uma cultura fixa.

Em ASP.NET Core, adicione a propriedade `CultureName` à seção de configuração do Amplia Reg no arquivo *appSettings.json*:

```json
{
	...
	"AmpliaReg": {
		...,
		"CultureName": "pt-BR"
	},
	...
}
```

Em .NET convencional, altere a propriedade `CultureName` do objeto `AmpliaRegOptions`:

```cs
this.ampliaRegService = AmpliaRegServiceFactory.GetService(new AmpliaRegOptions() {
	...,
	CultureName = "pt-BR",
});
```

#### Exceções

As seguintes exceções podem ser lançadas nas chamadas aos métodos do `IAmpliaRegService`:

* `AmpliaRegException`: erro de API (geralmente um mal uso da API que pode ser sanado adequando os parâmetros da requisição). A propriedade `Code` contém o código
  de erro da API. Veja os [códigos de erro](error-codes.md).
* `RestErrorException`: erro na chamada HTTP. A propriedade `StatusCode` contém o código HTTP retornado. Veja os [códigos de resposta HTTP](#http-status-codes).

<a name="rest" />

### Chamando a API diretamente

As APIs do Amplia Reg são RESTful recebendo e retornando mensagens JSON, sendo de fácil uso em qualquer linguagem de programação moderna. Caso
a sua aplicação não utilize nenhuma das linguagens de programação elencadas acima, opte por chamar as APIs do Amplia Reg diretamente.

Veja a [documentação da API](https://ar.lacunasoftware.com/swagger).

O parâmetro **endpoint** mencionado acima deve ser prefixado a todas as URLs relativas mencionadas nessa seção.

Já a **chave de API** deve ser passada no header `X-Api-Key` de cada requisição:

```plaintext
X-Api-Key: yourapp|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Caso por algum motivo, você também pode passar a chave de API no header `Authorization`, especificando o *scheme* como `ApiKey`:

```plaintext
Authorization: ApiKey yourapp|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

<a name="http-status-codes" />

#### Códigos de resposta HTTP

A API responde com os seguintes códigos HTTP:

Código                      | Descrição
--------------------------- | ---------
200 (OK)                    | Requisição processada normalmente. A resposta é diferente para cada chamada e pode ou não significar sucesso, consulte a [documentação da API](https://ar.lacunasoftware.com/swagger) para saber o formato da resposta.
400 (Bad Request)           | Erro de sintaxe na requisição. Por exemplo, um campo obrigatório não foi informado.
401 (Unauthorized)          | A chave de API não foi fornecida ou está inválida.
403 (Forbidden)             | A chave de API passada é válida, porém a aplicação não possui permissões suficientes para realizar a operação solicitada.
415 (Forbidden)             | Corpo da requisição vazio ou inválido.
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
	"code": "OrderNotFound",
	"message": "Order not found: 100123456"
}
```

#### Cultura / internacionalização (i18n)

O request header `Accept-Language` é observado pela API do Amplia Reg, influenciando o comportamento da API. Os seguintes códigos de cultura são suportados:

* `pt-BR` (ou apenas `pt`)
* `en-US` (ou apenas `en`)
* `es-ES` (ou apenas `es`)

> [!NOTE]
> Mensagens de erro não são afetadas por esse header e, portanto, não devem ser exibidas para o usuário, mas sim registradas no log de sistema
