# Diagnosticando problemas na inicialização (Azure App Services)

Ao iniciar sua [instância *on premises*](../../index.md) do [Rest Pki Core](../../../index.md) hospedada no [Azure App Services](../index.md), é possível que ocorra
um dos seguintes erros:

* *HTTP Error 500.30 - ANCM In-Process Start Failure*
* *HTTP Error 502.5 - ANCM Out-Of-Process Startup Failure*

Em ambos casos, siga os passos abaixo para habilitar os logs de inicialização do sistema.

## Habilitando logs de inicializaçãoa

Acesse os arquivos do App Service por FTP, navegue até a pasta */site/wwwroot* e copie o arquivo *web.config* para o seu computador.

Em seguida, edite o arquivo alterando o elemento `aspNetCore`, setando o valor do atributo `stdoutLogEnabled` para `true`.

Por exemplo, suponha que o elemento `aspNetCore` está inicialmente conforme abaixo:

```xml
<aspNetCore processPath="dotnet" arguments=".\Lacuna.RestPki.Site.dll" stdoutLogEnabled="false" stdoutLogFile=".\logs\stdout" hostingModel="inprocess" />
```

Após alterar o atributo `stdoutLogEnabled` para `true`, o elemento ficaria da seguinte maneira:

```xml
<aspNetCore processPath="dotnet" arguments=".\Lacuna.RestPki.Site.dll" stdoutLogEnabled="true" stdoutLogFile=".\logs\stdout" hostingModel="inprocess" />
```

Além disso, confirme que o atributo `stdoutLogFile` está com o valor `.\logs\stdout`, conforme acima.

Copie o arquivo *web.config* de volta para a pasta */site/wwwroot* do App Service via FTP, substituindo o arquivo antigo.

Aguarde alguns segundos e tente acessar o site novamente, em seguida recarregue os arquivos do App Service no seu acesso por FTP. Deve aparecer uma nova pasta chamada
*logs*. Entre na nova pasta e inspecione os arquivos. Eles devem revelar a causa raiz do problema.

> [!WARNING]
> Lembre-se de alterar o atributo `stdoutLogEnabled` de volta para `false` após concluir o diagnóstico complete, já que um grande volume de logs podem ser gerados,
> potencialmente afetando o desempenho do sistema.

## See also

* [Resolução de problemas do Rest PKI Core](index.md)
