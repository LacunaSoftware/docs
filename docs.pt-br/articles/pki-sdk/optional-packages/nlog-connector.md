# NLog Connector

O pacote opcional [Lacuna PKI Entity NLog Connector](https://www.nuget.org/packages/Lacuna.Pki.NLogConnector/)
possibilita enviar logs gerados pelo SDK para a biblioteca [NLog](http://nlog-project.org/).

Para isso, basta incluir a seguinte chamada no código de inicialização do seu site ou aplicação:

```cs
Lacuna.Pki.NLogConnector.NLogLogger.Configure();
```

A partir de então, todas as mensagens de log geradas pelo SDK serão repassadas ao NLog. A configuração do NLog,
entretanto, fica sob sua responsabilidade. O trecho abaixo mostra um exemplo de configuração do arquivo `web.config`
para enviar os logs para um arquivo no disco local:

```xml
<configuration>
  <configSections>
    <section name="nlog" type="NLog.Config.ConfigSectionHandler, NLog" />
  </configSections>
  <nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <targets async="true">
      <target name="pkiLog" xsi:type="File" fileName="C:\Logs\LacunaPKI.log" layout="${longdate} ${level}: ${message}" />
    </targets>
    <rules>
      <logger name="Lacuna.Pki.*" writeTo="pkiLog" />
    </rules>
  </nlog>
</configuration>
```

> [!NOTE]
> É muito importante especificar logs assíncronos (`async="true"` na tag `targets`), caso contrário a performance do
> SDK pode ser consideravelmente impactada.

As mensagens são enviadas ao NLog com diferentes *logger names*, de acordo com o método interno do SDK que gerou a
mensagem. Todos os *logger names* começam com `Lacuna.Pki.` (por isso o atributo `name="Lacuna.Pki.*"` na tag `logger`
no exemplo acima).

## Dependência do pacote NLog

Para maximizar a compatibilidade, o pacote Lacuna PKI NLog Connector depende de uma versão antiga do pacote NLog.
Entretanto, recomendamos fortemente que seja utilizado versão mais atual do pacote.

## Código-fonte

O código-fonte do pacote Lacuna PKI NLog Connector é aberto, ficando hospedado no
[BitBucket](https://bitbucket.org/Lacunas/pkinlogconnector). Caso queira customizá-lo, você pode fazer um fork do
projeto e utilizar a sua versão customizada ao invés do pacote opcional.

Dentro da [classe principal](https://bitbucket.org/Lacunas/pkinlogconnector/src/master/PkiNLogConnector/NLogLogger.cs), é possível personalizar operações para níveis de logs diferentes, além de fazer operações específicas quando a limpeza do log for realizada

```csharp
public void Log(LogLevels level, string message, string source) {

		var logger = loggers.GetOrAdd(source, s => LogManager.GetLogger(s));

		LogLevel logLevel;

		switch (level) {
			case LogLevels.Trace:
				logLevel = LogLevel.Trace;
				break;
			case LogLevels.Info:
				logLevel = LogLevel.Info;
				break;
			case LogLevels.Warning:
				logLevel = LogLevel.Warn;
				break;
			case LogLevels.Error:
				logLevel = LogLevel.Error;
				break;
			default:
				logLevel = LogLevel.Info;
				break;
		}
		
		logger.Log(logLevel, message);
	}		

		public void Flush() {
			NLog.LogManager.Flush();
		}
```